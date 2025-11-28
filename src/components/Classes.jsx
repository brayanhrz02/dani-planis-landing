import { TrendingUp, Clock, Users, MapPin, ArrowRight } from "lucide-react";
import React from "react";

export default function Classes() {
    return (
        <section id="clases" className={`py-24 bg-gradient-to-br from-blue-600 to-blue-800 text-white`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <div
                            className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
                            <TrendingUp className="w-5 h-5"/>
                            <span className="font-semibold text-sm">CLASES GRUPALES</span>
                        </div>

                        <h2 className="text-4xl md:text-5xl font-bold mb-6">
                            Entrena en
                            <br/>
                            <span className="text-blue-200">Sport Fitness</span>
                        </h2>

                        <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                            Únete a nuestras clases funcionales de alta intensidad. Cada sesión está diseñada para
                            maximizar resultados en grupos reducidos con atención personalizada.
                        </p>

                        <div className="space-y-6 mb-8">
                            <div className="flex items-start space-x-4 bg-white/10 backdrop-blur-sm p-4 rounded-xl">
                                <div className="bg-blue-500 p-3 rounded-lg">
                                    <Clock className="w-6 h-6"/>
                                </div>
                                <div>
                                    <p className="font-bold text-lg mb-1">Horarios Flexibles</p>
                                    <p className="text-blue-100">Plaza 11: Lun-Vie: 8:30am-9:00am </p>
                                    <p className="text-blue-100">Fundadores: Lun, Mie y Vie: 7:30pm-8:15pm y 8:15pm-9:00pm</p>
                                </div>
                            </div>

                            <div className="flex items-start space-x-4 bg-white/10 backdrop-blur-sm p-4 rounded-xl">
                                <div className="bg-blue-500 p-3 rounded-lg">
                                    <Users className="w-6 h-6"/>
                                </div>
                                <div>
                                    <p className="font-bold text-lg mb-1">Grupos </p>
                                    <p className="text-blue-100">Asesorados y socios sport fitness</p>
                                </div>
                            </div>

                            <div className="flex items-start space-x-4 bg-white/10 backdrop-blur-sm p-4 rounded-xl">
                                <div className="bg-blue-500 p-3 rounded-lg">
                                    <MapPin className="w-6 h-6"/>
                                </div>
                                <div>
                                    <p className="font-bold text-lg mb-1">Instalaciones Premium</p>
                                    <p className="text-blue-100">Av 11 Plaza 11, Centro, 94500 Córdoba, Ver.</p>
                                    <p className="text-blue-100">Plaza Fundadores, Av 1 2620-int 54, Centro, 94560 Córdoba, Ver.</p>
                                </div>
                            </div>

                        </div>


                        <a href="https://www.instagram.com/danielsandovalok/reels/"
                           className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-4 rounded-xl font-bold transition-all shadow-lg inline-flex items-center">
                            Ve mis clases y Rutinas en mi Instagram
                            <ArrowRight className="ml-2 w-5 h-5"/>
                        </a>
                    </div>

                    <div className="relative">
                        <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-4">
                                <img
                                    src="https://sportfitnessgym.com/wp-content/uploads/2025/03/WhatsApp-Image-2025-03-11-at-10.55.14-PM-6-scaled.jpeg"
                                    alt="Clase funcional en Sport Fitness"
                                    className="rounded-2xl shadow-2xl"
                                />
                                <img
                                    src="https://sportfitnessgym.com/wp-content/uploads/2025/03/WhatsApp-Image-2025-03-11-at-10.55.16-PM-2-1536x1024.jpeg"
                                    alt="Entrenamiento grupal"
                                    className="rounded-2xl shadow-2xl"
                                />
                            </div>
                            <div className="space-y-4 mt-8">
                                <img
                                    src="https://sportfitnessgym.com/wp-content/uploads/2025/03/WhatsApp-Image-2025-03-11-at-10.55.16-PM-5-1536x1024.jpeg"
                                    alt="Gimnasio Sport Fitness"
                                    className="rounded-2xl shadow-2xl"
                                />
                                <img
                                    src="https://sportfitnessgym.com/wp-content/uploads/2025/03/WhatsApp-Image-2025-03-11-at-10.55.13-PM-3-scaled.jpeg"
                                    alt="Grupo de personas entrenando"
                                    className="rounded-2xl shadow-2xl"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    );
}