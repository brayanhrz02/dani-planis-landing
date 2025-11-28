import { Zap, Play } from "lucide-react";
import { PRIMARY_COLOR, BRAND_NAME } from "../data/content";
import React from "react";

export default function CTA() {
    return (
        <section className="py-20 bg-gradient-to-r from-blue-900 to-blue-600">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                    Juntos por tu mejor versión 💙
                </h2>
                <p className="text-xl text-blue-100 mb-8">
                    Únete a más personas que ya transformaron su vida con {BRAND_NAME}
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <a href="#contacto"
                       className="bg-white text-blue-600 hover:bg-blue-50 px-10 py-5 rounded-xl font-bold text-lg transition-all shadow-2xl inline-flex items-center justify-center">
                        Comenzar Ahora
                        <Zap className="ml-2 w-5 h-5"/>
                    </a>

                </div>
            </div>
        </section>

    );
}