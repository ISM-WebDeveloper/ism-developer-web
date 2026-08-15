/**
 * Pruebas de calibración · Guía Web ISM · Catálogo v2.3
 *
 * Garantizan que:
 * - objetivos comerciales no activen por sí solos módulos APP/INT;
 * - el cálculo utilice una sola HH base por actividad;
 * - tarifa y contingencia provengan del catálogo sincronizado;
 * - el factor global de ejecución permanezca en 100% provisional en la guía.
 */

import assert from "node:assert/strict";
import { buildTechnicalEstimate } from "../api/pre-cotizacion.js";

function item(id, label = id) {
    return { id, label };
}

function suggestion(id, decision = "accepted") {
    return { id, title: id, decision };
}

const cases = [
    {
        name: "Salud + agenda confirmada",
        payload: {
            project: {
                goals: [item("clientes")],
                presence: [item("whatsapp")],
                content: [item("services")],
                actions: [item("booking")]
            },
            recommendation: {
                suggestions: [suggestion("availability"), suggestion("professional-profile")]
            }
        },
        expectedModules: ["Sitio web", "Reservas / agenda"],
        forbiddenModules: ["Tienda / pedidos", "Automatización", "Integración externa"],
        maxBaseHours: 45
    },
    {
        name: "Comercio + tienda; reservas solo como objetivo",
        payload: {
            project: {
                goals: [item("clientes"), item("servicios"), item("reservas")],
                presence: [item("social"), item("whatsapp")],
                content: [item("faq"), item("gallery"), item("about"), item("services")],
                actions: [item("whatsapp"), item("quote"), item("shop")]
            },
            recommendation: {
                suggestions: [suggestion("availability")]
            }
        },
        expectedModules: ["Sitio web", "Tienda / pedidos"],
        forbiddenModules: ["Reservas / agenda", "Automatización", "Integración externa"],
        maxBaseHours: 60
    },
    {
        name: "Digitalización sin automatización confirmada",
        payload: {
            project: {
                goals: [
                    item("clientes"), item("reservas"), item("consultas"),
                    item("servicios"), item("portafolio"), item("ventas"), item("procesos")
                ],
                presence: [item("whatsapp"), item("social")],
                content: [item("services"), item("gallery"), item("prices")],
                actions: [item("whatsapp"), item("quote"), item("shop")]
            },
            recommendation: {
                suggestions: [
                    suggestion("availability"),
                    suggestion("delivery-info"),
                    suggestion("local-presence")
                ]
            }
        },
        expectedModules: ["Sitio web", "Tienda / pedidos"],
        forbiddenModules: ["Reservas / agenda", "Automatización", "Integración externa"],
        maxBaseHours: 60
    }
];

for (const testCase of cases) {
    const estimate = buildTechnicalEstimate(testCase.payload);

    testCase.expectedModules.forEach((module) => {
        assert.ok(estimate.modules.includes(module), `${testCase.name}: falta módulo ${module}`);
    });

    testCase.forbiddenModules.forEach((module) => {
        assert.ok(!estimate.modules.includes(module), `${testCase.name}: módulo indebido ${module}`);
    });

    assert.ok(estimate.baseHours > 0, `${testCase.name}: HH base inválidas`);
    assert.ok(
        estimate.baseHours <= testCase.maxBaseHours,
        `${testCase.name}: HH base excesivas (${estimate.baseHours} > ${testCase.maxBaseHours})`
    );
    assert.equal(estimate.executionFactor, 1, `${testCase.name}: factor global de la guía debe ser 100%`);
    assert.equal(estimate.hourlyRateUF, 0.7, `${testCase.name}: tarifa distinta de 0,7 UF/HH`);
    assert.equal(estimate.contingencyRate, 0.2, `${testCase.name}: contingencia distinta de 20%`);
    assert.equal(
        estimate.adjustedHours,
        estimate.baseHours,
        `${testCase.name}: con factor 100% las HH ajustadas deben igualar las HH base`
    );
    assert.ok(
        estimate.finalReferenceUF > estimate.technicalValueUF,
        `${testCase.name}: la contingencia final no fue aplicada`
    );

    console.log(`✓ ${testCase.name}`);
    console.log(`  Módulos: ${estimate.modules.join(", ")}`);
    console.log(`  Actividades: ${estimate.activityCount}`);
    console.log(`  HH base: ${estimate.baseHours.toFixed(2)}`);
    console.log(`  Referencia final: ${estimate.finalReferenceUF.toFixed(2)} UF`);
}
