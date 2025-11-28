import {
    Dumbbell,
    Apple,
    Smartphone,
} from "lucide-react";

export const BRAND_NAME = "Dani Planis";
export const PRIMARY_COLOR = "blue-700";
export const LIGHT_COLOR = "blue-100";

export const features = [
    {
        icon: Dumbbell,
        title: "Planificación Personalizada",
        description: "Programas de entrenamiento basados en tu nivel, metas y horario. ¡Máximo rendimiento garantizado!",
    },
    {
        icon: Apple,
        title: "Planes Nutricionales",
        description: "Guías alimenticias detalladas + Antropometría para medir y optimizar tu progreso corporal.",
    },
    {
        icon: Smartphone,
        title: "App Móvil Exclusiva",
        description: "Accede a tus rutinas, videos de ejercicios y seguimiento desde cualquier lugar, 24/7.",
    },
];

export const processSteps = [
    {
        step: "01",
        title: "Evaluación Completa",
        description: "Definimos tu punto de partida con análisis antropométrico, historial médico y metas claras.",
    },
    {
        step: "02",
        title: "Diseño de Tu Plan",
        description: "Creamos rutinas de entrenamiento y nutrición 100% a medida. Sin plantillas genéricas.",
    },
    {
        step: "03",
        title: "Asesoramiento",
        description: "Soporte presencial o virtual constante y ajustes semanales para asegurar resultados óptimos.",
    },
];

export const testimonials = [
   /*
    {
        name: "Arturo M.",
        role: "Aumento Muscular",
        rating: 5,
        text: "En 3 meses, gané una energía y musculo increíble. El plan de Dani es realmente adaptado a mi vida.",
        image: "https://placehold.co/100x100/3B82F6/FFFFFF?text=A",
    },
    {
        name: "Tadeo .",
        role: "Fitness General",
        rating: 5,
        text: "Nunca creí que pudiera ser tan constante. La App es muy útil y el asesoramiento virtual es inmediato.",
        image: "https://placehold.co/100x100/3B82F6/FFFFFF?text=J",
    },
    {
        name: "Sofía .",
        role: "Pérdida de Peso",
        rating: 5,
        text: "Las clases funcionales en Sport Fitness son geniales, y mi plan nutricional me ayudó a mejorar mi composición corporal.",
        image: "https://placehold.co/100x100/3B82F6/FFFFFF?text=S",
    },

    */

];

export const faqs = [
    {
        q: "¿Necesito un gimnasio para seguir los planes?",
        a: "No necesariamente. Diseñamos planes para gimnasio, casa o al aire libre, adaptándonos al equipo que tengas disponible. Lo esencial es tu compromiso.",
    },
    {
        q: "¿Qué incluye el plan nutricional y la antropometría?",
        a: "Incluye un plan de comidas detallado y totalmente personalizado a tus gustos y objetivos. La antropometría es una medición corporal profesional para un seguimiento preciso de tu progreso (masa muscular vs. grasa).",
    },
    {
        q: "¿Cómo funciona la asesoría presencial vs. virtual?",
        a: "La asesoría presencial se realiza en Sport Fitness, enfocada en la técnica. La virtual es a través de videollamadas y chats 24/7 para resolver dudas, revisar progreso y hacer ajustes semanales.",
    },
    {
        q: "¿Qué tipo de clases funcionales ofrecen en Sport Fitness?",
        a: "Ofrecemos clases funcionales de alta intensidad enfocadas en fuerza, resistencia y movilidad, ideales para complementar tu entrenamiento personalizado. Son en grupos reducidos para mantener la atención personalizada.",
    },
];

export const navItems = [
    { name: "Planes", href: "#planes" },
    { name: "Proceso", href: "#proceso" },
    { name: "Clases", href: "#clases" },
    { name: "Testimonios", href: "#transformaciones" },
    { name: "Tienda", href: "#tienda" },
    { name: "Contacto", href: "#contacto" },
];

// Agrega esto al final de content.js, antes del export de navItems


export const promotion = {
    active: false, // Cambiar a false para ocultar el banner
    title: "🎉 Promoción de Lanzamiento",
    discount: "20% OFF", // Texto del descuento
    discountPercentage: 0.20, // 20% = 0.20, 30% = 0.30
    description: "En todos los planes al contratar hoy",
    endDate: "2024-12-31", // Formato: YYYY-MM-DD
    highlight: "Aprovecha estos descuentos" // Bonus adicional (opcional, dejar null si no hay)
};