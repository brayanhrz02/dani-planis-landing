import { Check, Award, Calendar, X, Play } from "lucide-react";
import { PRIMARY_COLOR, LIGHT_COLOR } from "../data/content";
import React, { useState, useRef, useEffect } from "react";

// Importa tu video aquí
import VideoHistoria from "../assets/HistoriaDS.mp4"; // Ajusta el nombre del archivo

export default function About() {
    const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
    const videoRef = useRef(null);

    // Pausar video al cerrar modal
    useEffect(() => {
        if (!isVideoModalOpen && videoRef.current) {
            videoRef.current.pause();
            videoRef.current.currentTime = 0;
        }
    }, [isVideoModalOpen]);

    // Cerrar modal con tecla ESC
    useEffect(() => {
        const handleEscape = (e) => {
            if (e.key === 'Escape' && isVideoModalOpen) {
                setIsVideoModalOpen(false);
            }
        };

        window.addEventListener('keydown', handleEscape);
        return () => window.removeEventListener('keydown', handleEscape);
    }, [isVideoModalOpen]);

    // Prevenir scroll del body cuando el modal está abierto
    useEffect(() => {
        if (isVideoModalOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isVideoModalOpen]);

    return (
        <>
            <section id="sobremi" className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div className="relative">
                            <img
                                src="https://scontent.cdninstagram.com/v/t51.75761-15/496040513_18478826686068136_2028631517275209842_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=109&ig_cache_key=MzYyNzA1MzgzMzEwOTY1NjQ5OA%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjE0NDB4MTQ0MC5zZHIuQzMifQ%3D%3D&_nc_ohc=6YrWqpYLN3oQ7kNvwHeRmdm&_nc_oc=AdlTpZeQhU8efwajItxRfURVM-_crKylL6ert2n1IF0XgNDBKS1gPTfJTGL0Bn0x2JM&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.cdninstagram.com&_nc_gid=RqL9cW3IJRrmqZC50Ncg6Q&oh=00_Afj0l2O9JOme8eQS4YcQj117db5uyrm4DseokIvuSMGG6g&oe=6929633C"
                                alt="Dani Planis, entrenador personal"
                                className="rounded-2xl shadow-2xl w-full h-auto object-cover max-h-[700px]"
                            />
                            <div className="absolute -bottom-6 -right-6 bg-gradient-to-r from-blue-900 to-blue-600 text-white p-6 rounded-2xl shadow-2xl">
                                <div className="text-4xl font-bold mb-2">A pleno</div>
                                <div className="text-sm">transformando vidas</div>
                            </div>
                        </div>

                        <div>
                            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                                Conoce a
                                <span className={`text-${PRIMARY_COLOR}`}> DANIEL SANDOVAL FARALLE</span>
                            </h2>

                            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                                Capacitaciones en: Personal Trainer, Entrenamiento Funcional y HIIT,
                                Nutrición deportiva, Periodización y planificación de Natación, Evaluaciones
                                físicas y deportivas, Métodos y medios de recuperación en el deporte, Planificación
                                en deporte de conjunto, Levantamiento Olímpico y Crossfit
                            </p>
                            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                                Pasatiempos: entrenar, pasar tiempo con familia y amigos, instruirme para seguir
                                creciendo como profesional, viaje y conocer/vivir nuevas experiencias
                            </p>

                            <div className="space-y-4 mb-8">
                                <div className="flex items-center space-x-3">
                                    <Check className={`w-6 h-6 text-${PRIMARY_COLOR}`}/>
                                    <span className="text-gray-700">Profesor de Educación Física (IESA/ARGENTINA)</span>
                                </div>
                                <div className="flex items-center space-x-3">
                                    <Check className={`w-6 h-6 text-${PRIMARY_COLOR}`}/>
                                    <span className="text-gray-700">Licenciado en Entrenamiento Deportivo y Alto rendimiento (UFASTA/ARGENTINA)</span>
                                </div>
                                <div className="flex items-center space-x-3">
                                    <Check className={`w-6 h-6 text-${PRIMARY_COLOR}`}/>
                                    <span className="text-gray-700">Especialidades deportivas en: futbol, voleibol, beisbol, tenis, natación, básquet y rugby</span>
                                </div>
                            </div>

                            {/* Botón que abre el modal de video */}
                            <button
                                onClick={() => setIsVideoModalOpen(true)}
                                className="bg-blue-600 hover:bg-blue-800 text-white px-8 py-4 rounded-xl font-bold transition-all inline-flex items-center shadow-lg hover:scale-105 group"
                            >
                                <Play className="mr-2 w-5 h-5 group-hover:scale-110 transition-transform" />
                                Conoce Mi Historia
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Modal de Video */}
            {isVideoModalOpen && (
                <div
                    className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fadeIn"
                    onClick={() => setIsVideoModalOpen(false)}
                >
                    <div
                        className="relative w-full max-w-xl animate-scaleIn"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Botón de cerrar */}
                        <button
                            onClick={() => setIsVideoModalOpen(false)}
                            className="absolute -top-12 right-0 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white p-3 rounded-full transition-all hover:scale-110 z-10"
                            aria-label="Cerrar video"
                        >
                            <X className="w-6 h-6" />
                        </button>

                        {/* Título del video */}
                        <div className="absolute -top-12 left-0 text-white">
                            <h3 className="text-2xl font-bold mb-1">Mi Historia</h3>
                            <p className="text-sm text-gray-300">Daniel Sandoval Faralle</p>
                        </div>

                        {/* Contenedor del video */}
                        <div className="bg-black rounded-2xl overflow-hidden shadow-2xl">
                            <video
                                ref={videoRef}
                                className="w-full h-auto"
                                controls
                                autoPlay
                                controlsList="nodownload"
                            >
                                <source src={VideoHistoria} type="video/mp4" />
                                Tu navegador no soporta la reproducción de videos.
                            </video>
                        </div>

                        {/* Información adicional debajo del video */}
                        <div className="mt-4 text-center text-gray-300 text-sm">
                            <p>Presiona <kbd className="px-2 py-1 bg-white/10 rounded">ESC</kbd> o haz click fuera del video para cerrar</p>
                        </div>
                    </div>
                </div>
            )}

            {/* CSS para animaciones */}
            <style>{`
                @keyframes fadeIn {
                    from { opacity: 0; }
                    to { opacity: 1; }
                }
                
                @keyframes scaleIn {
                    from { 
                        opacity: 0;
                        transform: scale(0.9);
                    }
                    to { 
                        opacity: 1;
                        transform: scale(1);
                    }
                }
                
                .animate-fadeIn {
                    animation: fadeIn 0.3s ease-out;
                }
                
                .animate-scaleIn {
                    animation: scaleIn 0.3s ease-out;
                }

                /* Estilo para el kbd */
                kbd {
                    font-family: monospace;
                    font-weight: 600;
                }
            `}</style>
        </>
    );
}