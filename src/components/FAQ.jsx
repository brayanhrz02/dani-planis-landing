import { useState } from "react";
import { ChevronDown, MessageCircle } from "lucide-react";
import { faqs, PRIMARY_COLOR } from "../data/content";

export default function FAQ() {
    const [faqOpen, setFaqOpen] = useState(null);

    return (
        <section className="py-24 bg-gray-50">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                        Preguntas <span className={`text-${PRIMARY_COLOR}`}>Frecuentes</span>
                    </h2>
                    <p className="text-xl text-gray-600">
                        Todo lo que necesitas saber antes de comenzar.
                    </p>
                </div>
                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-xl shadow-md overflow-hidden"
                        >
                            <button
                                onClick={() => setFaqOpen(faqOpen === index ? null : index)}
                                className="w-full px-8 py-6 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
                            >
                                <span className="font-bold text-gray-900 text-lg pr-8">{faq.q}</span>
                                <ChevronDown
                                    className={`w-6 h-6 text-${PRIMARY_COLOR} flex-shrink-0 transition-transform ${
                                        faqOpen === index ? 'transform rotate-180' : ''
                                    }`}
                                />
                            </button>
                            {faqOpen === index && (
                                <div className="px-8 pb-6">
                                    <p className="text-gray-700 leading-relaxed">{faq.a}</p>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
                <div className="mt-12 text-center bg-blue-50 rounded-2xl p-8">
                    <p className="text-gray-700 mb-4">¿Tienes más preguntas?</p>
                    <a href="#contacto"
                       className={`text-${PRIMARY_COLOR} hover:text-blue-800 font-bold inline-flex items-center`}>
                        Contáctanos directamente
                        <MessageCircle className="ml-2 w-5 h-5"/>
                    </a>
                </div>
            </div>
        </section>

    );
}