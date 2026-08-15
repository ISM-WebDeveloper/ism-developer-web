/**
 * Pruebas de calibración · Guía Web ISM · P6
 *
 * Evitan regresiones como:
 * - activar BOOKING solo por marcar "Recibir reservas" como objetivo;
 * - activar INT solo por declarar interés en digitalizar un proceso;
 * - cargar perfiles APP completos dentro de una web.
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
        forbiddenModules: ["Tienda / pedidos", "Automatización", "Integración externa"]
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
        forbiddenModules: ["Reservas / agenda", "Automatización", "Integración externa"]
    },
    {
        name: "Stress comercial; digitalización sin automatización confirmada",
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
        forbiddenModules: ["Reservas / agenda", "Automatización", "Integración externa"]
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

    assert.ok(estimate.technicalHours.medium > 0, `${testCase.name}: HH estándar inválidas`);
    assert.ok(estimate.commercialHours.medium > estimate.technicalHours.medium, `${testCase.name}: contingencia no aplicada`);
    assert.equal(estimate.hourlyRateUF, 0.7, `${testCase.name}: tarifa fallback distinta de 0,7 UF/HH`);

    console.log(`✓ ${testCase.name}`);
    console.log(`  Módulos: ${estimate.modules.join(", ")}`);
    console.log(`  Actividades: ${estimate.activityCount}`);
    console.log(`  HH estándar: ${estimate.technicalHours.medium.toFixed(2)}`);
    console.log(`  UF estándar: ${estimate.investmentUF.medium.toFixed(2)}`);
}
