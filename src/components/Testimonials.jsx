// src/components/Testimonials.jsx
import { useState, useEffect } from "react";
import { Star, Quote, MessageCircle, Send, X, Plus } from "lucide-react";
import { testimonials as staticTestimonials, PRIMARY_COLOR } from "../data/content";

import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc, query, orderBy, getDocs, serverTimestamp } from 'firebase/firestore';

// 🔴 IMPORTANTE: Reemplaza estos valores con los de tu Firebase Console
// Ve a: Firebase Console → Project Settings → Your apps → Web app
const firebaseConfig = {
    apiKey: "AIzaSyB75URNN0gZDFQ0uw0qmdTCJvkcJ11ABjI",
    authDomain: "dani-planis.firebaseapp.com",
    projectId: "dani-planis",
    storageBucket: "dani-planis.firebasestorage.app",
    messagingSenderId: "1068558000996",
    appId: "1:1068558000996:web:b2a0c48fb534f29b345071"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default function Testimonials() {
    const [userTestimonials, setUserTestimonials] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        role: '',
        rating: 5,
        text: '',
        email: ''
    });

    // Cargar testimonios de Firebase al montar el componente
    useEffect(() => {
        loadTestimonials();
    }, []);

    const loadTestimonials = async () => {
        try {
            const q = query(collection(db, 'testimonials'), orderBy('createdAt', 'desc'));
            const querySnapshot = await getDocs(q);
            const testimonials = querySnapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            }));
            setUserTestimonials(testimonials);
            console.log('Testimonios cargados:', testimonials.length);
        } catch (error) {
            console.error("Error cargando testimonios:", error);
            console.error("Detalles del error:", error.message);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        console.log('🚀 Iniciando envío de testimonio...');
        console.log('📝 Datos del formulario:', formData);

        try {
            // Generar avatar automático con las iniciales
            const avatarUrl = `https://ui-avatars.com/api/?name=${encodeURIComponent(formData.name)}&background=3B82F6&color=fff&size=128&bold=true`;

            console.log('💾 Guardando en Firebase...');

            // Guardar en Firebase
            const docRef = await addDoc(collection(db, 'testimonials'), {
                name: formData.name,
                role: formData.role,
                rating: formData.rating,
                text: formData.text,
                image: avatarUrl,
                createdAt: serverTimestamp()
            });

            console.log('✅ Testimonio guardado con ID:', docRef.id);

            // Recargar testimonios desde Firebase
            await loadTestimonials();

            // Resetear formulario y cerrar modal
            setFormData({ name: '', role: '', rating: 5, text: '', email: '' });
            setShowModal(false);

            alert('¡Gracias por tu testimonio! Ya está visible en la página.');
        } catch (error) {
            console.error("❌ Error guardando testimonio:", error);
            console.error("Código de error:", error.code);
            console.error("Mensaje:", error.message);
            alert('Error al enviar el testimonio: ' + error.message + '\n\nVerifica la consola para más detalles.');
        }

        setLoading(false);
    };

    // Combinar testimonios destacados (fijos) + testimonios de usuarios (Firebase)
    const allTestimonials = [...staticTestimonials, ...userTestimonials];

    return (
        <section id="transformaciones" className="py-24 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                        Historias de <span className={`text-${PRIMARY_COLOR}`}>Éxito</span>
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
                        Lo que dicen nuestros clientes después de transformar su cuerpo y su vida.
                    </p>

                    {/* Botón para agregar testimonio */}
                    <button
                        onClick={() => setShowModal(true)}
                        className="inline-flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all shadow-lg transform hover:scale-105"
                    >
                        <Plus className="w-5 h-5" />
                        <span>Comparte tu Historia</span>
                    </button>
                </div>

                {/* Grid de Testimonios con Scroll Horizontal */}
                <div className="relative">
                    {/* Contenedor con scroll horizontal */}
                    <div className="overflow-x-auto scrollbar-hide pb-8">
                        <div className="flex space-x-6 px-4">
                            {allTestimonials.map((testimonial, index) => (
                                <div
                                    key={testimonial.id || index}
                                    className="flex-shrink-0 w-80 bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all relative border-t-4 border-blue-400 animate-fade-in"
                                >
                                    <Quote className="absolute top-6 right-6 w-12 h-12 text-blue-100" />

                                    <div className="flex items-center mb-6">
                                        <img
                                            src={testimonial.image}
                                            alt={testimonial.name}
                                            className="w-16 h-16 rounded-full object-cover mr-4 border-4 border-white shadow-md"
                                        />
                                        <div>
                                            <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                                            <p className={`text-sm text-${PRIMARY_COLOR} font-medium`}>
                                                {testimonial.role}
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex mb-4">
                                        {[...Array(testimonial.rating)].map((_, i) => (
                                            <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                                        ))}
                                    </div>

                                    <p className="text-gray-700 leading-relaxed italic">
                                        "{testimonial.text}"
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Indicador de scroll */}
                    <div className="text-center mt-4">
                        <p className="text-sm text-gray-500">
                            ← Desliza para ver más →
                        </p>
                    </div>
                </div>

                {/* Contador de testimonios */}
                <div className="text-center mt-12">
                    <p className="text-gray-600">
                        <span className="font-bold text-blue-600 text-2xl">{allTestimonials.length}</span> historias de éxito compartidas
                    </p>

                </div>
            </div>

            {/* Modal de Formulario */}
            {showModal && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4 animate-fade-in"
                    onClick={() => setShowModal(false)}
                >
                    <div
                        className="relative bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Header del Modal */}
                        <div className="sticky top-0 bg-gradient-to-r from-blue-600 to-blue-700 text-white p-6 rounded-t-2xl z-10">
                            <button
                                onClick={() => setShowModal(false)}
                                className="absolute top-4 right-4 bg-white/20 hover:bg-white/30 rounded-full p-2 transition-all"
                            >
                                <X className="w-6 h-6" />
                            </button>
                            <div className="flex items-center space-x-3">
                                <MessageCircle className="w-8 h-8" />
                                <div>
                                    <h3 className="text-2xl font-bold">Comparte tu Historia de Éxito</h3>
                                    <p className="text-blue-100 text-sm">Inspira a otros con tu transformación</p>
                                </div>
                            </div>
                        </div>

                        {/* Formulario */}
                        <form onSubmit={handleSubmit} className="p-8 space-y-6">
                            {/* Nombre */}
                            <div>
                                <label className="block text-gray-700 font-bold mb-2">
                                    Tu Nombre *
                                </label>
                                <input
                                    type="text"
                                    required
                                    value={formData.name}
                                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                                    placeholder="Ej: María García"
                                    className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-blue-600 focus:outline-none transition-colors"
                                />
                            </div>

                            {/* Objetivo */}
                            <div>
                                <label className="block text-gray-700 font-bold mb-2">
                                    Tu Objetivo *
                                </label>
                                <select
                                    required
                                    value={formData.role}
                                    onChange={(e) => setFormData({...formData, role: e.target.value})}
                                    className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-blue-600 focus:outline-none transition-colors"
                                >
                                    <option value="">Selecciona tu objetivo</option>
                                    <option value="Pérdida de Peso">Pérdida de Peso</option>
                                    <option value="Ganancia Muscular">Ganancia Muscular</option>
                                    <option value="Definición">Definición</option>
                                    <option value="Fitness General">Fitness General</option>
                                    <option value="Preparación Competencia">Preparación Competencia</option>
                                    <option value="Otro">Otro</option>
                                </select>
                            </div>

                            {/* Calificación */}
                            <div>
                                <label className="block text-gray-700 font-bold mb-3">
                                    Calificación *
                                </label>
                                <div className="flex space-x-2">
                                    {[1, 2, 3, 4, 5].map((star) => (
                                        <button
                                            key={star}
                                            type="button"
                                            onClick={() => setFormData({...formData, rating: star})}
                                            className="focus:outline-none transform hover:scale-110 transition-transform"
                                        >
                                            <Star
                                                className={`w-10 h-10 ${
                                                    star <= formData.rating
                                                        ? 'fill-yellow-400 text-yellow-400'
                                                        : 'text-gray-300'
                                                }`}
                                            />
                                        </button>
                                    ))}
                                </div>
                                <p className="text-sm text-gray-500 mt-2">
                                    Selecciona {formData.rating} estrella{formData.rating !== 1 ? 's' : ''}
                                </p>
                            </div>

                            {/* Testimonio */}
                            <div>
                                <label className="block text-gray-700 font-bold mb-2">
                                    Tu Testimonio *
                                </label>
                                <textarea
                                    required
                                    value={formData.text}
                                    onChange={(e) => setFormData({...formData, text: e.target.value})}
                                    placeholder="Comparte tu experiencia... ¿Cuánto tiempo te tomó? ¿Qué resultados obtuviste? ¿Qué fue lo que más te gustó?"
                                    rows="5"
                                    minLength="50"
                                    maxLength="500"
                                    className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-blue-600 focus:outline-none transition-colors resize-none"
                                />
                                <p className="text-sm text-gray-500 mt-2">
                                    {formData.text.length}/500 caracteres (mínimo 50)
                                </p>
                            </div>

                            {/* Información adicional */}
                            <div className="bg-blue-50 border-2 border-blue-200 rounded-xl p-4">
                                <h4 className="font-bold text-blue-900 mb-2 flex items-center">
                                    <MessageCircle className="w-5 h-5 mr-2" />
                                    Importante
                                </h4>
                                <ul className="text-sm text-blue-700 space-y-1">
                                    <li>✅ Tu testimonio aparecerá inmediatamente</li>
                                    <li>✅ Mantén un lenguaje respetuoso y constructivo</li>
                                    <li>✅ Comparte tu experiencia real y honesta</li>
                                </ul>
                            </div>

                            {/* Botón de envío */}
                            <button
                                type="submit"
                                disabled={loading || formData.text.length < 50}
                                className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed text-white px-8 py-4 rounded-xl font-bold text-lg transition-all shadow-lg flex items-center justify-center"
                            >
                                {loading ? (
                                    <>
                                        <div className="animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent mr-2"></div>
                                        Enviando...
                                    </>
                                ) : (
                                    <>
                                        <Send className="w-5 h-5 mr-2" />
                                        Publicar Testimonio
                                    </>
                                )}
                            </button>
                        </form>
                    </div>
                </div>
            )}

            <style>{`
                @keyframes fade-in {
                    from { opacity: 0; transform: translateY(20px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                .animate-fade-in {
                    animation: fade-in 0.5s ease-out;
                }
            `}</style>
        </section>
    );
}