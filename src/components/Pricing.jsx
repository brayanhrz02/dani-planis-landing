// src/components/Pricing.jsx
import { useState } from "react";
import { Check, X, ArrowRight, Sparkles, Tag, Plus } from "lucide-react";
import { promotion } from "../data/content";

export default function Pricing() {
    const plans = [
        {
            name: "Premium",
            icon: "🥇",
            description: "La experiencia completa con seguimiento integral",
            price: 1400,
            period: "MXN/mes",
            popular: true,
            features: [
                { text: "Asesoramiento presencial", included: true },
                { text: "Plan de entrenamiento personalizado", included: true },
                { text: "Plan alimenticio personalizado", included: true },
                { text: "Consulta nutricional + Chequeo antropométrico", included: true, highlight: true },
                { text: "Acceso a la app móvil exclusiva", included: true },
                { text: "Seguimiento constante vía WhatsApp", included: true }
            ]
        },
        {
            name: "Estándar",
            icon: "🥈",
            description: "Perfecto balance entre calidad y precio",
            price: 1200,
            period: "MXN/mes",
            popular: false,
            features: [
                { text: "Asesoramiento presencial", included: true },
                { text: "Plan de entrenamiento personalizado", included: true },
                { text: "Plan alimenticio online + Chequeo antropométrico", included: true },
                { text: "Consulta nutricional presencial", included: false },
                { text: "Acceso a la app móvil exclusiva", included: true },
                { text: "Seguimiento vía WhatsApp", included: true }
            ]
        },
        {
            name: "Básico",
            icon: "🥉",
            description: "Ideal para comenzar tu transformación",
            price: 1000,
            period: "MXN/mes",
            popular: false,
            features: [
                { text: "Asesoramiento presencial", included: true },
                { text: "Plan de entrenamiento personalizado", included: true },
                { text: "Plan nutricional", included: false },
                { text: "Acceso a la app móvil exclusiva", included: true },
                { text: "Seguimiento básico vía WhatsApp", included: true }
            ]
        },
        {
            name: "Online",
            icon: "💻",
            description: "Entrena desde cualquier lugar del mundo",
            price: 700,
            period: "MXN/mes",
            popular: false,
            features: [
                { text: "Plan de entrenamiento personalizado", included: true },
                { text: "Seguimiento en línea completo", included: true },
                { text: "Asesoramiento presencial", included: false },
                { text: "Acceso a la app móvil exclusiva", included: true },
                { text: "Videollamadas de seguimiento", included: true }
            ]
        }
    ];

    const addOns = [
        {
            name: "Consulta Nutricional Presencial",
            price: 400,
            description: "Análisis completo de composición corporal + plan personalizado en consultorio",
            icon: "🏥"
        },
        {
            name: "Plan Nutricional Online",
            price: 200,
            description: "Dieta personalizada adaptada a tus objetivos con seguimiento virtual",
            icon: "📱"
        }
    ];

    // Calcular días restantes
    const getDaysRemaining = (endDate) => {
        const end = new Date(endDate);
        const today = new Date();
        const diffTime = end - today;
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
        return diffDays > 0 ? diffDays : 0;
    };

    const daysLeft = promotion.active ? getDaysRemaining(promotion.endDate) : 0;

    const calculateDiscountedPrice = (price) => {
        return promotion.active ? Math.round(price * (1 - promotion.discountPercentage)) : price;
    };

    return (
        <section id="planes" className="py-24 bg-gradient-to-b from-white to-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Encabezado */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                        Planes que se Adaptan a
                        <span className="text-blue-600"> Tu Estilo de Vida</span>
                    </h2>
                    <p className="text-xl text-gray-600 mb-8">
                        Desde entrenamiento básico hasta asesoría nutricional completa
                    </p>

                    {/* Banner de Promociones */}
                    {promotion.active && (
                        <div className="max-w-4xl mx-auto mb-8 animate-fadeIn">
                            <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 p-6 shadow-2xl">
                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-shimmer"></div>

                                <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-4">
                                    <div className="flex-1 text-center md:text-left">
                                        <div className="flex items-center justify-center md:justify-start gap-2 mb-2">
                                            <Sparkles className="w-5 h-5 text-yellow-400" />
                                            <span className="text-white font-bold text-lg">
                                                {promotion.title}
                                            </span>
                                        </div>
                                        <p className="text-blue-100 text-sm md:text-base">
                                            {promotion.description}
                                        </p>
                                        {promotion.highlight && (
                                            <p className="text-yellow-400 font-semibold text-sm mt-1 flex items-center justify-center md:justify-start gap-1">
                                                <Tag className="w-4 h-4" />
                                                {promotion.highlight}
                                            </p>
                                        )}
                                    </div>

                                    <div className="flex items-center gap-4">
                                        <div className="bg-white rounded-xl px-6 py-3 shadow-lg">
                                            <div className="text-3xl font-black text-blue-600">
                                                {promotion.discount}
                                            </div>
                                        </div>

                                        {daysLeft > 0 && (
                                            <div className="bg-white/20 backdrop-blur-sm rounded-xl px-4 py-3 text-center border border-white/30">
                                                <div className="text-2xl font-bold text-white">
                                                    {daysLeft}
                                                </div>
                                                <div className="text-xs text-blue-100">
                                                    {daysLeft === 1 ? 'día' : 'días'}
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>

                {/* Grid de Planes */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                    {plans.map((plan, index) => (
                        <div
                            key={index}
                            className={`relative bg-white rounded-2xl p-6 transition-all ${
                                plan.popular
                                    ? 'border-4 border-blue-600 shadow-2xl lg:scale-105'
                                    : 'border-2 border-gray-200 shadow-lg hover:shadow-xl'
                            }`}
                        >
                            {plan.popular && (
                                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                                    <span className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-4 py-1.5 rounded-full text-xs font-bold shadow-lg whitespace-nowrap">
                                        MÁS POPULAR
                                    </span>
                                </div>
                            )}

                            {promotion.active && (
                                <div className="absolute -top-3 -right-3 bg-gradient-to-r from-yellow-400 to-orange-500 text-white rounded-full w-14 h-14 flex items-center justify-center shadow-lg transform rotate-12 animate-pulse">
                                    <div className="text-center">
                                        <div className="text-[10px] font-bold leading-tight">
                                            {promotion.discount}
                                        </div>
                                    </div>
                                </div>
                            )}

                            {/* Encabezado del plan */}
                            <div className="text-center mb-6">
                                <div className="text-4xl mb-2">{plan.icon}</div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                                <p className="text-gray-600 text-sm mb-4">{plan.description}</p>

                                <div className="flex flex-col items-center">
                                    {promotion.active && (
                                        <span className="text-lg font-bold text-gray-400 line-through">
                                            ${plan.price}
                                        </span>
                                    )}
                                    <div className="flex items-baseline">
                                        <span className={`${promotion.active ? 'text-blue-600' : 'text-gray-900'} text-4xl font-bold`}>
                                            ${calculateDiscountedPrice(plan.price)}
                                        </span>
                                        <span className="text-gray-600 ml-1 text-sm">{plan.period}</span>
                                    </div>
                                    {promotion.active && (
                                        <p className="text-green-600 font-semibold text-xs mt-1">
                                            Ahorras ${plan.price - calculateDiscountedPrice(plan.price)} MXN
                                        </p>
                                    )}
                                </div>
                            </div>

                            {/* Lista de características */}
                            <ul className="space-y-3 mb-6">
                                {plan.features.map((feature, i) => (
                                    <li key={i} className="flex items-start text-sm">
                                        {feature.included ? (
                                            <Check className={`w-4 h-4 ${plan.popular ? 'text-blue-600' : 'text-green-500'} mr-2 flex-shrink-0 mt-0.5`} />
                                        ) : (
                                            <X className="w-4 h-4 text-gray-300 mr-2 flex-shrink-0 mt-0.5" />
                                        )}
                                        <span className={`${
                                            feature.included
                                                ? feature.highlight
                                                    ? 'font-semibold text-gray-900'
                                                    : 'text-gray-700'
                                                : 'text-gray-400 line-through'
                                        }`}>
                                            {feature.text}
                                        </span>
                                    </li>
                                ))}
                            </ul>

                            {/* Botón */}
                            <a
                                href="#contacto"
                                className={`w-full py-3 rounded-xl font-bold text-sm transition-all flex justify-center items-center gap-2 group ${
                                    plan.popular
                                        ? 'bg-blue-600 hover:bg-blue-700 text-white shadow-lg'
                                        : 'bg-gray-100 hover:bg-gray-200 text-gray-900'
                                }`}
                            >
                                {promotion.active ? '¡Aprovechar Oferta!' : 'Comenzar Ahora'}
                                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </a>
                        </div>
                    ))}
                </div>

                {/* Agregados Opcionales */}
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-8">
                        <h3 className="text-3xl font-bold text-gray-900 mb-2">
                            Agregados <span className="text-blue-600">Opcionales</span>
                        </h3>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                        {addOns.map((addon, index) => (
                            <div
                                key={index}
                                className="bg-white border-2 border-blue-200 rounded-xl p-6 hover:border-blue-400 hover:shadow-lg transition-all"
                            >
                                <div className="flex items-start gap-4">
                                    <div className="text-4xl">{addon.icon}</div>
                                    <div className="flex-1">
                                        <h4 className="text-lg font-bold text-gray-900 mb-2">
                                            {addon.name}
                                        </h4>
                                        <p className="text-gray-600 text-sm mb-4">
                                            {addon.description}
                                        </p>
                                        <div className="flex items-center justify-between">
                                            <div className="flex items-baseline gap-2">
                                                {promotion.active && (
                                                    <span className="text-lg text-gray-400 line-through">
                                                        ${addon.price}
                                                    </span>
                                                )}
                                                <span className={`text-3xl font-bold ${promotion.active ? 'text-blue-600' : 'text-gray-900'}`}>
                                                    ${calculateDiscountedPrice(addon.price)}
                                                </span>
                                                <span className="text-gray-500 text-sm">MXN</span>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* CSS para animaciones */}
            <style>{`
                @keyframes fadeIn {
                    from { opacity: 0; transform: translateY(-10px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                
                @keyframes shimmer {
                    0% { transform: translateX(-100%); }
                    100% { transform: translateX(100%); }
                }
                
                .animate-fadeIn {
                    animation: fadeIn 0.6s ease-out;
                }
                
                .animate-shimmer {
                    animation: shimmer 3s infinite;
                }
            `}</style>
        </section>
    );
}