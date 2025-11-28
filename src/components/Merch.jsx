import { ShoppingBag, ArrowRight, X, Plus, Minus } from "lucide-react";
import React, { useState } from "react";

// Imports corregidos de las imágenes
import PlayeraNegra from "../assets/merch/A_Pleno_Negra.jpg"
import PlayeraAzul from "../assets/merch/A_Pleno_Azul.jpg"
import PlayeraRosa from "../assets/merch/A_Pleno_Rosa.jpg"
import TermoN from "../assets/merch/Termo_Negro.jpg"
import TermoA from "../assets/merch/Termo_Azul.jpg"
import TermoR from "../assets/merch/Termo_Rosa.jpg"


export default function Merch() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState(null);

    // Productos destacados (se muestran siempre)
    const featuredProducts = [
        {
            id: 1,
            name: "Playera DS A Pleno",
            description: "Algodón transpirable de alta calidad",
            price: 399,
            // Mapeo de imágenes por color
            images: {
                'Negro': PlayeraNegra,
                'Azul': PlayeraAzul,
                'Rosa': PlayeraRosa
            },
            image: PlayeraNegra, // Imagen por defecto
            category: "Ropa",
            sizes: ['S', 'M', 'L', 'XL'],
            colors: ['Negro', 'Azul', 'Rosa'],
            hasColorImages: true // Flag para saber si tiene imágenes por color
        },
        {
            id: 2,
            name: "Termo de Acero Inoxidable",
            description: "750ml • Mantiene temperatura 24hrs",
            price: 299,
            images: {
                'Negro': TermoN,
                'Azul': TermoA,
                'Rosa': TermoR
            },
            image: TermoN,
            category: "Accesorios",
            sizes: ['750ml'],
            colors: ['Negro', 'Azul', 'Rosa'],
            hasColorImages: true // No tiene cambio de imagen
        }
    ];

    // Productos adicionales (se muestran en el modal)
    const additionalProducts = [
        {
            id: 7,
            name: "Sudadera Premium DS",
            description: "Algodón con interior afelpado",
            price: 449,
            image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=600&h=600&fit=crop",
            category: "Ropa",
            sizes: ['S', 'M', 'L', 'XL', 'XXL'],
            colors: ['Negro', 'Gris', 'Azul Marino'],
            hasColorImages: false
        },
        {
            id: 3,
            name: "Shorts de Entrenamiento",
            description: "Tela Dry-Fit con bolsillos laterales",
            price: 449,
            image: "https://acide.com.mx/cdn/shop/files/ShortMexicocaballerofrente.png?v=1701984228&width=3840",
            category: "Ropa",
            sizes: ['S', 'M', 'L', 'XL'],
            colors: ['Negro', 'Gris', 'Azul'],
            hasColorImages: false
        },
        {
            id: 4,
            name: "Gorra Snapback DS",
            description: "Gorra ajustable con logo bordado",
            price: 249,
            image: "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=600&h=600&fit=crop",
            category: "Accesorios",
            sizes: ['Única'],
            colors: ['Negro', 'Azul', 'Blanco'],
            hasColorImages: false
        },
        {
            id: 5,
            name: "Toalla de Gimnasio",
            description: "Microfibra ultra-absorbente 60x120cm",
            price: 199,
            image: "https://hanselhome.com/64144-large_default/toalla-gimnasio-de-microfibra-ligera-compacta-absorbente-secado-rapido-ideal-para-gym-viaje-piscina-playa.jpg",
            category: "Accesorios",
            sizes: ['Estándar'],
            colors: ['Negro', 'Azul', 'Gris'],
            hasColorImages: false
        },
        {
            id: 6,
            name: "Mochila Deportiva",
            description: "Ideal para ir al gym",
            price: 199,
            image: "https://m.media-amazon.com/images/I/419i8iwbVrL._AC_SY1000_.jpg",
            category: "Accesorios",
            sizes: ['Única'],
            colors: ['Negro', 'Azul'],
            hasColorImages: false
        }
    ];

    const allProducts = [...featuredProducts, ...additionalProducts];

    const ProductCard = ({ product, featured = false }) => {
        const [selectedSize, setSelectedSize] = useState(product.sizes[0]);
        const [selectedColor, setSelectedColor] = useState(product.colors[0]);
        const [quantity, setQuantity] = useState(1);

        // Estado para la imagen actual
        const [currentImage, setCurrentImage] = useState(
            product.hasColorImages && product.images
                ? product.images[product.colors[0]]
                : product.image
        );

        // Función para cambiar color e imagen
        const handleColorChange = (color) => {
            setSelectedColor(color);

            // Si el producto tiene imágenes por color, cambiar la imagen
            if (product.hasColorImages && product.images && product.images[color]) {
                setCurrentImage(product.images[color]);
            }
        };

        return (
            <div className={`group bg-gray-800 rounded-2xl overflow-hidden hover:transform hover:scale-105 transition-all shadow-2xl ${
                !featured ? 'h-full flex flex-col' : ''
            }`}>
                <div className={`relative ${featured ? 'h-80' : 'h-64'} overflow-hidden bg-gray-700`}>
                    <img
                        src={currentImage}
                        alt={`${product.name} - ${selectedColor}`}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-3 right-3 bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-bold">
                        {product.category}
                    </div>
                    {/* Indicador de color seleccionado */}
                    {product.hasColorImages && (
                        <div className="absolute bottom-3 left-3 bg-black/60 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-semibold">
                            {selectedColor}
                        </div>
                    )}
                </div>
                <div className={`p-6 ${!featured ? 'flex-1 flex flex-col' : 'p-8'}`}>
                    <h3 className={`${featured ? 'text-2xl' : 'text-xl'} font-bold mb-2`}>
                        {product.name}
                    </h3>
                    <p className="text-gray-400 mb-4 text-sm">{product.description}</p>

                    <div className="flex items-center justify-between mb-4">
                        <span className={`${featured ? 'text-3xl' : 'text-2xl'} font-bold text-blue-400`}>
                            ${product.price} MXN
                        </span>
                    </div>

                    {/* Selector de tallas */}
                    {product.sizes.length > 1 && (
                        <div className="mb-4">
                            <label className="text-xs text-gray-400 mb-2 block">Tallas disponibles:</label>
                            <div className="flex gap-2 flex-wrap">
                                {product.sizes.map(size => (
                                    <button
                                        key={size}
                                        onClick={() => setSelectedSize(size)}
                                        className={`px-3 py-2 border rounded-lg text-sm transition-all ${
                                            selectedSize === size
                                                ? 'border-blue-400 bg-blue-400/20 text-blue-400'
                                                : 'border-gray-600 hover:border-blue-400'
                                        }`}
                                    >
                                        {size}
                                    </button>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Selector de colores */}
                    <div className="mb-4">
                        <label className="text-xs text-gray-400 mb-2 block">
                            Color: {product.hasColorImages && <span className="text-blue-400 ml-1">(La imagen cambia)</span>}
                        </label>
                        <div className="flex gap-2 flex-wrap">
                            {product.colors.map(color => (
                                <button
                                    key={color}
                                    onClick={() => handleColorChange(color)}
                                    className={`px-3 py-2 border rounded-lg text-xs transition-all ${
                                        selectedColor === color
                                            ? 'border-blue-400 bg-blue-400/20 text-blue-400 font-bold'
                                            : 'border-gray-600 hover:border-blue-400'
                                    }`}
                                >
                                    {color}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Botón de compra */}
                    <button
                        onClick={() => {
                            const message = `Hola! Me interesa el ${product.name} - Talla: ${selectedSize}, Color: ${selectedColor}`;
                            window.open(`https://wa.me/525648026879?text=${encodeURIComponent(message)}`, '_blank');
                        }}
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl font-bold transition-colors flex items-center justify-center gap-2 mt-auto"
                    >
                        <ShoppingBag className="w-5 h-5" />
                        Ordenar por WhatsApp
                    </button>
                </div>
            </div>
        );
    };

    return (
        <>
            <section id="tienda" className="py-24 bg-gray-900 text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-4">
                            <ShoppingBag className="w-5 h-5"/>
                            <span className="font-semibold text-sm">MERCHANDISE OFICIAL</span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold mb-4">
                            Merch <span className="text-blue-400">Exclusivo</span>
                        </h2>
                        <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                            Entrena con estilo. Productos premium de edición limitada.
                        </p>
                    </div>

                    {/* Productos destacados */}
                    <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                        {featuredProducts.map(product => (
                            <ProductCard key={product.id} product={product} featured={true} />
                        ))}
                    </div>

                    {/* Botón para ver todos los productos */}
                    <div className="text-center mt-12">
                        <button
                            onClick={() => setIsModalOpen(true)}
                            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-bold inline-flex items-center gap-2 transition-all hover:scale-105 shadow-lg"
                        >
                            Ver toda la colección ({allProducts.length} productos)
                            <ArrowRight className="w-5 h-5"/>
                        </button>
                    </div>
                </div>
            </section>

            {/* Modal de Galería Completa */}
            {isModalOpen && (
                <div
                    className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fadeIn"
                    onClick={() => setIsModalOpen(false)}
                >
                    <div
                        className="bg-gray-900 rounded-2xl max-w-7xl w-full max-h-[90vh] overflow-y-auto relative"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Header del Modal */}
                        <div className="sticky top-0 bg-gray-900 border-b border-gray-800 p-6 flex items-center justify-between z-10">
                            <div>
                                <h3 className="text-3xl font-bold text-white mb-2">
                                    Colección Completa
                                </h3>
                                <p className="text-gray-400">
                                    {allProducts.length} productos disponibles
                                </p>
                            </div>
                            <button
                                onClick={() => setIsModalOpen(false)}
                                className="bg-gray-800 hover:bg-gray-700 p-3 rounded-full transition-colors"
                            >
                                <X className="w-6 h-6 text-white" />
                            </button>
                        </div>

                        {/* Grid de productos */}
                        <div className="p-6">
                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {allProducts.map(product => (
                                    <ProductCard key={product.id} product={product} featured={false} />
                                ))}
                            </div>
                        </div>

                        {/* Footer del Modal */}
                        <div className="sticky bottom-0 bg-gray-900 border-t border-gray-800 p-6 text-center">
                            <p className="text-gray-400 mb-4">
                                💳 Aceptamos transferencias bancarias y pago en efectivo
                            </p>
                            <p className="text-sm text-gray-500">
                                Envíos a toda la República Mexicana • Entrega local gratuita en Córdoba, Veracruz
                            </p>
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
                
                .animate-fadeIn {
                    animation: fadeIn 0.3s ease-out;
                }
            `}</style>
        </>
    );
}