import { MessageCircle, Phone, Instagram, ArrowRight } from "lucide-react";
import { PRIMARY_COLOR, LIGHT_COLOR } from "../data/content";

// ↓↓↓ Importa tus imágenes aquí (ejemplo) ↓↓↓
import imgVertical1 from '../assets/comunidadDS/foto1.jpg';
import imgHorizontal1 from '../assets/comunidadDS/foto3.jpg';
import imgVertical2 from '../assets/comunidadDS/foto2.jpg';
import imgHorizontal2 from '../assets/comunidadDS/foto4.jpg';
// ... Agrega tantas imágenes como necesites ...

export default function Contact() {

    // Lista de imágenes a mostrar (Asegúrate de usar las variables importadas)
    const galleryImages = [
        { src: imgHorizontal1, alt: "Comunidad DS entrenamiento", layout: "horizontal" },
        { src: imgVertical1, alt: "Cliente DS transformacion", layout: "vertical" },
        { src: imgVertical2, alt: "Entrenador Dani Sandoval", layout: "vertical" },
        { src: imgHorizontal2, alt: "Familia DS fitness", layout: "horizontal" },

        // Puedes agregar más imágenes aquí
    ];

    return (
        <section id="contacto" className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid md:grid-cols-2 gap-12">
                    {/* Bloque Izquierdo de Contacto (sin cambios) */}
                    <div>
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                            ¿Listo para
                            <span className={`text-${PRIMARY_COLOR}`}> Transformarte?</span>
                        </h2>

                        <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                            Da el primer paso hoy. Agenda tu consulta y descubre cómo podemos ayudarte a alcanzar tus
                            objetivos.
                        </p>
                        <div className="space-y-6">
                            {/* ... Controles de Contacto (WhatsApp, Teléfono, Instagram) ... */}
                            <a href="https://wa.me/525648026879" target="_blank" rel="noopener noreferrer"
                               className="flex items-center space-x-4 p-6 bg-green-50 rounded-xl hover:bg-green-100 transition-colors group">
                                <div
                                    className="bg-green-500 p-4 rounded-full group-hover:scale-110 transition-transform">
                                    <MessageCircle className="w-6 h-6 text-white"/>
                                </div>
                                <div>
                                    <p className="font-bold text-gray-900">WhatsApp</p>
                                    <p className="text-gray-600">Respuesta inmediata</p>
                                </div>
                                <ArrowRight className="ml-auto text-green-600"/>
                            </a>
                            <a href="tel:+525648026879"
                               className="flex items-center space-x-4 p-6 bg-blue-50 rounded-xl hover:bg-blue-100 transition-colors group">
                                <div
                                    className="bg-blue-300 p-4 rounded-full group-hover:scale-110 transition-transform">
                                    <Phone className="w-6 h-6 text-black"/>
                                </div>
                                <div>
                                    <p className="font-bold text-gray-900">Teléfono</p>
                                    <p className="text-gray-600">Llama ahora</p>
                                </div>
                                <ArrowRight className={`ml-auto text-${PRIMARY_COLOR}`}/>
                            </a>
                            <a href="mailto:@danielsandovalok"
                               className="flex items-center space-x-4 p-6 bg-purple-50 rounded-xl hover:bg-purple-100 transition-colors group">
                                <div
                                    className="bg-gradient-to-r from-purple-600 to-pink-600 p-4 rounded-full hover:scale-110 transition-transform shadow-lg">
                                    <Instagram className="w-6 h-6 text-white"/>
                                </div>
                                <div>
                                    <p className="font-bold text-gray-900">Instagram</p>
                                    <p className="text-gray-600">@danielsandovalok</p>
                                </div>
                                <ArrowRight className="ml-auto text-purple-600"/>
                            </a>
                        </div>
                    </div>

                    {/* ↓↓↓ Bloque Derecho: Galería de Imágenes y Título Lllamativo ↓↓↓ */}
                    <div className="space-y-6">
                        <h3 className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight">
                            Que esperas para formar parte de la <span className={`text-${PRIMARY_COLOR}`}>familia DS</span>
                        </h3>

                        {/* Contenedor de la Galería (usando grid para la mampostería visual) */}
                        <div className="grid grid-cols-2 gap-4 auto-rows-fr">

                            {galleryImages.map((image, index) => (
                                <div
                                    key={index}
                                    // Ajusta la altura de la fila: Para imágenes verticales, ocupa 2 filas visuales
                                    className={image.layout === 'vertical' ? 'row-span-2' : 'row-span-1'}
                                >
                                    <img
                                        src={image.src}
                                        alt={image.alt}
                                        className="w-full h-full object-cover rounded-xl shadow-lg transition-all hover:scale-[1.02] duration-300"
                                        // Aplica una relación de aspecto para simular la forma
                                        style={image.layout === 'vertical' ? { aspectRatio: '3/4' } : { aspectRatio: '16/9' }}
                                    />
                                </div>
                            ))}

                        </div>
                    </div>
                    {/* ↑↑↑ FIN Bloque Derecho ↑↑↑ */}
                </div>
            </div>
        </section>

    );
}