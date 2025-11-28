import { features, PRIMARY_COLOR, LIGHT_COLOR, BRAND_NAME } from "../data/content";
import React from "react";

export default function Features() {
    return (
        <section id="servicios" className="py-24 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                        La Fórmula <span className={`text-${PRIMARY_COLOR}`}>Dani Planis</span>
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Tres pilares fundamentales para tu transformación física y nutricional.
                    </p>
                </div>
                <div className="grid md:grid-cols-3 gap-12">
                    {features.map((feature, index) => {
                        const Icon = feature.icon; // Esto corrige el error de íconos
                        return (
                            <div key={index}
                                 className="text-center p-8 bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all border-t-4 border-blue-600">
                                <div
                                    className={`mx-auto w-16 h-16 bg-${LIGHT_COLOR} p-4 rounded-full flex items-center justify-center mb-6`}>
                                    <Icon className={`w-8 h-8 text-${PRIMARY_COLOR}`}/>
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                                <p className="text-gray-600">{feature.description}</p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>


    );
}