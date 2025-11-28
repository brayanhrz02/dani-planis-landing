import { Dumbbell, Instagram } from "lucide-react";
import { BRAND_NAME, PRIMARY_COLOR } from "../data/content";
import React from "react";

export default function Footer() {
    return (
        <footer className="bg-gray-900 text-gray-400 py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid md:grid-cols-4 gap-8 mb-8">
                    <div>
                        <div className="flex items-center space-x-2 mb-4">
                            <div className={`bg-${PRIMARY_COLOR} p-2 rounded-lg`}>
                                <Dumbbell className="w-5 h-5 text-white"/>
                            </div>
                            <span className="text-white font-bold text-xl">{BRAND_NAME}</span>
                        </div>
                        <p className="text-sm leading-relaxed">
                            Entrenador personal dedicado a transformar vidas a través del fitness y la
                            nutrición.
                        </p>
                    </div>
                    <div>
                        <h4 className="text-white font-bold mb-4">Servicios</h4>
                        <ul className="space-y-2 text-sm">
                            <li><a href="#servicios" className="hover:text-blue-400 transition-colors">Entrenamiento
                                Personal</a></li>
                            <li><a href="#servicios" className="hover:text-blue-400 transition-colors">Planes
                                Nutricionales</a></li>
                            <li><a href="#clases" className="hover:text-blue-400 transition-colors">Clases Grupales</a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-white font-bold mb-4">Empresa</h4>
                        <ul className="space-y-2 text-sm">
                            <li><a href="#sobremi" className="hover:text-blue-400 transition-colors">Sobre Dani</a></li>
                            <li><a href="#transformaciones"
                                   className="hover:text-blue-400 transition-colors">Testimonios</a></li>
                            <li><a href="#tienda" className="hover:text-blue-400 transition-colors">Tienda Oficial</a>
                            </li>
                            <li><a href="#contacto" className="hover:text-blue-400 transition-colors">Contacto</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-white font-bold mb-4">Síguenos</h4>
                        <div className="flex space-x-4">
                            <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                                <Instagram className="w-6 h-6"/>
                            </a>

                        </div>
                    </div>
                </div>
                <div
                    className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm">
                    <p>© 2024 {BRAND_NAME}. Todos los derechos reservados.</p>
                    <div className="flex space-x-6 mt-4 md:mt-0">
                        <a href="#" className="hover:text-blue-400 transition-colors">Privacidad</a>
                        <a href="#" className="hover:text-blue-400 transition-colors">Términos</a>
                    </div>
                </div>
            </div>
        </footer>

    );
}