import { useState } from "react";
import { Dumbbell } from "lucide-react";
import { BRAND_NAME, PRIMARY_COLOR, navItems } from "../data/content";
import miImagen from "../assets/D_Planis_SF.png"; // Tu imagen importada

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="sticky top-0 z-50 bg-blue-900/100 backdrop-blur-sm shadow-md">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">
                    <a href="#" className="flex items-center space-x-2">
                        <div className={`bg-${PRIMARY_COLOR} p-2 rounded-lg w-25 h-25 flex items-center justify-center overflow-hidden`}>
                            <img
                                src={miImagen}
                                alt="Logo Dani Planis"
                                className="w-full h-full object-contain" // Tamaño exacto del icono original
                            />
                        </div>
                        <span className="text-white font-bold text-2xl tracking-tight">{BRAND_NAME}</span>
                    </a>

                    {/* Desktop Nav */}
                    <nav className="hidden md:flex space-x-8">
                        {navItems.map((item) => (
                            <a
                                key={item.name}
                                href={item.href}
                                className="text-gray-300 hover:text-white transition-colors font-medium text-lg"
                            >
                                {item.name}
                            </a>
                        ))}
                    </nav>

                    {/* CTA Desktop */}
                    <a
                        href="#contacto"
                        className={`hidden md:block bg-${PRIMARY_COLOR} hover:bg-blue-600 text-white px-6 py-3 rounded-xl font-bold transition-all shadow-lg`}
                    >
                        Agenda Tu Consulta
                    </a>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden text-white focus:outline-none"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                            ></path>
                        </svg>
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden bg-gray-800 absolute w-full shadow-lg">
                    {navItems.map((item) => (
                        <a
                            key={item.name}
                            href={item.href}
                            onClick={() => setIsOpen(false)}
                            className="block px-4 py-3 text-white hover:bg-gray-700 transition-colors font-medium border-b border-gray-700"
                        >
                            {item.name}
                        </a>
                    ))}
                    <a
                        href="#contacto"
                        onClick={() => setIsOpen(false)}
                        className={`block text-center bg-${PRIMARY_COLOR} hover:bg-blue-600 text-white px-6 py-4 font-bold transition-all`}
                    >
                        Agenda Tu Consulta
                    </a>
                </div>
            )}
        </header>

    );
}