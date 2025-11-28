import { processSteps, PRIMARY_COLOR, LIGHT_COLOR } from "../data/content";
import React from "react";

export default function Process() {
    return (
        <section id="proceso" className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                        Tu Proceso <span className={`text-${PRIMARY_COLOR}`}>Paso a Paso</span>
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Diseñamos tu éxito garantizando que cada paso esté alineado con tus objetivos.
                    </p>
                </div>
                <div className="relative">
                    {/* Línea de conexión vertical (oculta en móvil) */}
                    <div
                        className={`hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-${LIGHT_COLOR}`}></div>

                    <div className="grid md:grid-cols-3 gap-12">
                        {processSteps.map((step, index) => (
                            <div key={index} className="relative group">
                                {/* Círculo del paso */}
                                <div
                                    className="md:absolute md:left-1/2 md:transform md:-translate-x-1/2 md:-top-4 w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-extrabold text-lg shadow-xl mb-4 md:mb-0">
                                    {step.step}
                                </div>

                                {/* Tarjeta de contenido */}
                                <div
                                    className={`bg-gray-50 p-8 rounded-2xl shadow-lg border-b-4 border-${PRIMARY_COLOR} hover:shadow-2xl transition-all`}>
                                    <h3 className="text-2xl font-bold text-gray-900 mb-3">{step.title}</h3>
                                    <p className="text-gray-700">{step.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>

    );
}