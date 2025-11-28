// src/components/Hero.jsx - REELS DE INSTAGRAM CON REPRODUCCIÓN DIRECTA
import { useState, useEffect } from "react";
import { Calendar, Star, Zap, Play, X, ChevronDown, Instagram as InstagramIcon, ExternalLink } from "lucide-react";
import reel1Thumbnail from "../assets/miniatura1.png";
import reel2Thumbnail from "../assets/miniatura2.png";
import reel3Thumbnail from "../assets/miniatura4.png";


export default function Hero() {
    const [showReelModal, setShowReelModal] = useState(false);
    const [activeReel, setActiveReel] = useState(null);

    // URLs de tus Reels de Instagram
    // IMPORTANTE: Reemplaza estos IDs con tus Reels reales
    const instagramReels = [
        {
            id: "DHgwKGfxLZX", // ID del Reel (obténlo de la URL)
            url: "https://www.instagram.com/reel/DHgwKGfxLZX/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==", // URL del post
            thumbnail: reel1Thumbnail,
            title: "Team Personalizado",
            description: "Conocé algunos de los chicos del TEAM PERSONALIZADO.",
            likes: "",
            comments: ""
        },
        {
            id: "DG1kZZWx9DG",
            url: "https://www.instagram.com/reel/DG1kZZWx9DG/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
            thumbnail: reel2Thumbnail,
            title: "Clase Funcional",
            description: "Conocé cómo es un día de clase funcional conmigo",
            likes: "",
            comments: ""
        },
        {
            id: "DJb-P88xaMc",
            url: "https://www.instagram.com/reel/DJb-P88xaMc/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
            thumbnail: reel3Thumbnail,
            title: "Hoy se cumple un año",
            description: "desde que llegué a mi segunda casa, México",
            likes: "",
            comments: ""
        }
    ];

    // Cargar el script de Instagram embed
    useEffect(() => {
        // Verificar si el script ya existe
        if (!document.getElementById('instagram-embed-script')) {
            const script = document.createElement('script');
            script.id = 'instagram-embed-script';
            script.src = "//www.instagram.com/embed.js";
            script.async = true;
            document.body.appendChild(script);
        }
    }, []);

    // Procesar embeds cuando se abre el modal
    useEffect(() => {
        if (showReelModal && window.instgrm) {
            // Esperar un poco para que el DOM se actualice
            setTimeout(() => {
                window.instgrm.Embeds.process();
            }, 100);
        }
    }, [showReelModal]);

    const openReel = (reel) => {
        setActiveReel(reel);
        setShowReelModal(true);
    };

    const closeModal = () => {
        setShowReelModal(false);
        // Esperar a que la animación termine antes de limpiar
        setTimeout(() => {
            setActiveReel(null);
        }, 300);
    };

    return (
        <>
            <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 via-blue-950 to-black">
                {/* Contenido Principal */}
                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                    <div className="text-center max-w-5xl mx-auto">

                        {/* Título */}
                        <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold text-white mb-8 leading-tight">
                            Transforma Tu Vida,
                            <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-300 via-pink-300 to-blue-400">
                                A pleno
                            </span>
                        </h1>

                        {/* Descripción */}
                        <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
                            Entrenamiento personalizado con resultados garantizados.
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-300 via-pink-300 to-blue-400 font-semibold"> Mira mis Reels.</span>
                        </p>

                        {/* Grid de Reels */}
                        <div className="grid md:grid-cols-3 gap-6 mb-12">
                            {instagramReels.map((reel, index) => (
                                <div
                                    key={index}
                                    onClick={() => openReel(reel)}
                                    className="group relative cursor-pointer rounded-2xl overflow-hidden shadow-2xl transform hover:scale-105 transition-all bg-gray-900"
                                >
                                    <div className="aspect-[9/16] relative">
                                        {/* Thumbnail */}
                                        <img
                                            src={reel.thumbnail}
                                            alt={reel.title}
                                            className="w-full h-full object-cover"
                                        />

                                        {/* Overlay con gradiente */}
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent group-hover:from-blue-900/80 transition-all"></div>

                                        {/* Play Button */}
                                        <div className="absolute inset-0 flex items-center justify-center">
                                            <div className="relative">
                                                {/* Anillo pulsante */}
                                                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full animate-ping opacity-75"></div>
                                                <div className="relative bg-gradient-to-r from-purple-600 to-blue-600 group-hover:from-purple-700 group-hover:to-blue-700 rounded-full p-6 transform group-hover:scale-110 transition-all shadow-2xl">
                                                    <Play className="w-10 h-10 text-white fill-white ml-1" />
                                                </div>
                                            </div>
                                        </div>

                                        {/* Badge Instagram */}
                                        <div className="absolute top-4 right-4 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg px-3 py-1.5 flex items-center space-x-2 shadow-xl">
                                            <InstagramIcon className="w-4 h-4 text-white" />
                                            <span className="text-white text-xs font-bold">REEL</span>
                                        </div>

                                        {/* Info inferior */}
                                        <div className="absolute bottom-0 left-0 right-0 p-5 bg-gradient-to-t from-black/95 via-black/60 to-transparent">
                                            <h3 className="text-white font-bold text-lg mb-1">{reel.title}</h3>
                                            <p className="text-gray-300 text-sm mb-3">{reel.description}</p>
                                            <div className="flex items-center space-x-4 text-xs">
                                                <span className="flex items-center text-pink-400">
                                                    <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                                                        <path d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" />
                                                    </svg>
                                                    {reel.likes}
                                                </span>
                                                <span className="flex items-center text-gray-300">
                                                    <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                                                    </svg>
                                                    {reel.comments}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Botones de Acción */}
                        <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
                            <a
                                href="#contacto"
                                className="group bg-gradient-to-r from-purple-600 to-blue-600 hover:from-blue-700 hover:to-purple-700 text-white px-12 py-5 rounded-xl font-bold text-lg transition-all shadow-2xl inline-flex items-center justify-center transform hover:scale-105"
                            >
                                Agenda Tu Consulta
                                <Calendar className="ml-2 w-5 h-5 group-hover:rotate-12 transition-transform" />
                            </a>
                            <a
                                href="https://www.instagram.com/danielsandovalok"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="border-2 border-white/30 backdrop-blur-sm text-white hover:bg-gradient-to-r hover:from-purple-600/20 hover:to-pink-600/20 px-12 py-5 rounded-xl font-bold text-lg transition-all inline-flex items-center justify-center"
                            >
                                <InstagramIcon className="w-6 h-6 mr-2" />
                                @danielsandovalok
                            </a>
                        </div>

                        {/* Rating */}
                        <div className="flex flex-col items-center space-y-4">
                            <div className="flex items-center space-x-2">
                                <div className="flex">
                                    {[...Array(5)].map((_, i) => (
                                        <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                                    ))}
                                </div>
                                <span className="text-white font-semibold">5.0</span>
                            </div>
                            <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-400">
                                <span className="flex items-center">
                                    <span className="w-2 h-2 bg-green-400 rounded-full mr-2"></span>
                                    Garantía de Resultados
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Efectos de Fondo con tema Instagram */}
                <div className="absolute inset-0 opacity-20">
                    <div className="absolute inset-0" style={{
                        backgroundImage: 'radial-gradient(circle at 1px 1px, #A855F7 1px, transparent 0)',
                        backgroundSize: '40px 40px'
                    }}></div>
                </div>
                <div className="absolute top-1/4 -left-20 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl"></div>
                <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-pink-600/20 rounded-full blur-3xl"></div>

                {/* Indicador de Scroll */}
                <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
                    <ChevronDown className="w-8 h-8 text-white/60" />
                </div>
            </section>

            {/* Modal de Instagram Reel - CON REPRODUCCIÓN DIRECTA */}
            {showReelModal && activeReel && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-sm p-4 animate-fade-in"
                    onClick={closeModal}
                >
                    {/* Botón cerrar */}
                    <button
                        onClick={closeModal}
                        className="absolute top-4 right-4 bg-white/10 hover:bg-white/20 rounded-full p-3 transition-all z-10 group"
                    >
                        <X className="w-8 h-8 text-white group-hover:rotate-90 transition-transform" />
                    </button>

                    {/* Contenedor del Reel */}
                    <div
                        className="relative w-full max-w-md bg-black rounded-2xl overflow-hidden shadow-2xl"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Instagram Embed - Se reproduce directamente aquí */}
                        <div className="instagram-embed-container" style={{ minHeight: '600px' }}>
                            <blockquote
                                className="instagram-media"
                                data-instgrm-permalink={activeReel.url}
                                data-instgrm-version="14"
                                style={{
                                    background: '#000',
                                    border: 0,
                                    borderRadius: '3px',
                                    boxShadow: '0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15)',
                                    margin: '0',
                                    maxWidth: '540px',
                                    minWidth: '326px',
                                    padding: 0,
                                    width: 'calc(100% - 2px)'
                                }}
                            >
                                <div style={{ padding: '16px' }}>
                                    <div style={{
                                        display: 'flex',
                                        flexDirection: 'row',
                                        alignItems: 'center'
                                    }}>
                                        <div style={{
                                            backgroundColor: '#F4F4F4',
                                            borderRadius: '50%',
                                            flexGrow: 0,
                                            height: '40px',
                                            marginRight: '14px',
                                            width: '40px'
                                        }}></div>
                                        <div style={{
                                            display: 'flex',
                                            flexDirection: 'column',
                                            flexGrow: 1,
                                            justifyContent: 'center'
                                        }}>
                                            <div style={{
                                                backgroundColor: '#F4F4F4',
                                                borderRadius: '4px',
                                                flexGrow: 0,
                                                height: '14px',
                                                marginBottom: '6px',
                                                width: '100px'
                                            }}></div>
                                        </div>
                                    </div>
                                    <div style={{ padding: '19% 0' }}></div>
                                    <div style={{
                                        display: 'block',
                                        height: '50px',
                                        margin: '0 auto 12px',
                                        width: '50px'
                                    }}>
                                        <svg width="50px" height="50px" viewBox="0 0 60 60" version="1.1">
                                            <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                                                <g transform="translate(-511.000000, -20.000000)" fill="#fff">
                                                    <g>
                                                        <path d="M556.869,30.41 C554.814,30.41 553.148,32.076 553.148,34.131 C553.148,36.186 554.814,37.852 556.869,37.852 C558.924,37.852 560.59,36.186 560.59,34.131 C560.59,32.076 558.924,30.41 556.869,30.41 M541,60.657 C535.114,60.657 530.342,55.887 530.342,50 C530.342,44.114 535.114,39.342 541,39.342 C546.887,39.342 551.658,44.114 551.658,50 C551.658,55.887 546.887,60.657 541,60.657 M541,33.886 C532.1,33.886 524.886,41.1 524.886,50 C524.886,58.899 532.1,66.113 541,66.113 C549.9,66.113 557.115,58.899 557.115,50 C557.115,41.1 549.9,33.886 541,33.886 M565.378,62.101 C565.244,65.022 564.756,66.606 564.346,67.663 C563.803,69.06 563.154,70.057 562.106,71.106 C561.058,72.155 560.06,72.803 558.662,73.347 C557.607,73.757 556.021,74.244 553.102,74.378 C549.944,74.521 548.997,74.552 541,74.552 C533.003,74.552 532.056,74.521 528.898,74.378 C525.979,74.244 524.393,73.757 523.338,73.347 C521.94,72.803 520.942,72.155 519.894,71.106 C518.846,70.057 518.197,69.06 517.654,67.663 C517.244,66.606 516.755,65.022 516.623,62.101 C516.479,58.943 516.448,57.996 516.448,50 C516.448,42.003 516.479,41.056 516.623,37.899 C516.755,34.978 517.244,33.391 517.654,32.338 C518.197,30.938 518.846,29.942 519.894,28.894 C520.942,27.846 521.94,27.196 523.338,26.654 C524.393,26.244 525.979,25.756 528.898,25.623 C532.057,25.479 533.004,25.448 541,25.448 C548.997,25.448 549.943,25.479 553.102,25.623 C556.021,25.756 557.607,26.244 558.662,26.654 C560.06,27.196 561.058,27.846 562.106,28.894 C563.154,29.942 563.803,30.938 564.346,32.338 C564.756,33.391 565.244,34.978 565.378,37.899 C565.522,41.056 565.552,42.003 565.552,50 C565.552,57.996 565.522,58.943 565.378,62.101 M570.82,37.631 C570.674,34.438 570.167,32.258 569.425,30.349 C568.659,28.377 567.633,26.702 565.965,25.035 C564.297,23.368 562.623,22.342 560.652,21.575 C558.743,20.834 556.562,20.326 553.369,20.18 C550.169,20.033 549.148,20 541,20 C532.853,20 531.831,20.033 528.631,20.18 C525.438,20.326 523.257,20.834 521.349,21.575 C519.376,22.342 517.703,23.368 516.035,25.035 C514.368,26.702 513.342,28.377 512.574,30.349 C511.834,32.258 511.326,34.438 511.181,37.631 C511.035,40.831 511,41.851 511,50 C511,58.147 511.035,59.17 511.181,62.369 C511.326,65.562 511.834,67.743 512.574,69.651 C513.342,71.625 514.368,73.296 516.035,74.965 C517.703,76.634 519.376,77.658 521.349,78.425 C523.257,79.167 525.438,79.673 528.631,79.82 C531.831,79.965 532.853,80.001 541,80.001 C549.148,80.001 550.169,79.965 553.369,79.82 C556.562,79.673 558.743,79.167 560.652,78.425 C562.623,77.658 564.297,76.634 565.965,74.965 C567.633,73.296 568.659,71.625 569.425,69.651 C570.167,67.743 570.674,65.562 570.82,62.369 C570.966,59.17 571,58.147 571,50 C571,41.851 570.966,40.831 570.82,37.631"></path>
                                                    </g>
                                                </g>
                                            </g>
                                        </svg>
                                    </div>
                                    <div style={{ paddingTop: '8px' }}>
                                        <div style={{
                                            color: '#3897f0',
                                            fontFamily: 'Arial,sans-serif',
                                            fontSize: '14px',
                                            fontStyle: 'normal',
                                            fontWeight: 550,
                                            lineHeight: '18px'
                                        }}>
                                            Ver esta publicación en Instagram
                                        </div>
                                    </div>
                                </div>
                            </blockquote>
                        </div>

                        {/* Botón para abrir en Instagram (opcional) */}
                        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-10">
                            <a
                                href={activeReel.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-6 py-3 rounded-full font-bold text-sm transition-all shadow-xl inline-flex items-center space-x-2"
                            >
                                <InstagramIcon className="w-5 h-5" />
                                <span>Abrir en Instagram</span>
                                <ExternalLink className="w-4 h-4" />
                            </a>
                        </div>
                    </div>


                </div>
            )}

            <style>{`
                @keyframes fade-in {
                    from { opacity: 0; }
                    to { opacity: 1; }
                }
                .animate-fade-in {
                    animation: fade-in 0.3s ease-out;
                }
                
                /* Personalizar el embed de Instagram */
                .instagram-media {
                    min-width: 326px !important;
                    max-width: 540px !important;
                }
                
                /* Ocultar el indicador de carga cuando el embed está listo */
                .instagram-media-rendered ~ .absolute {
                    display: none;
                }
            `}</style>
        </>
    );
}