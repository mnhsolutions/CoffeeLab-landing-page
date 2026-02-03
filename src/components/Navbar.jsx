import { useState, useEffect, useRef } from "react";
import LinkNavbar from "./Navbar/LinkNavbar";
import IconCart from "../icons/IconCart";
import IconMenu from "../icons/IconMenu";
import IconCloseMenu from "../icons/IconCloseMenu";
import useNavbarColorOnScroll from "../hooks/useNavbarColorOnScroll";

const navLinks = [
  { title: "Home", href: "#hero" },
  { title: "Nuestros cafés", href: "#coffees" },
  { title: "Nuestro Menú", href: "#menu" },
  { title: "Sobre nosotros", href: "#about" },
  { title: "Servicios", href: "#services" },
  { title: "Contacto", href: "#contact" },
];

export default function Navbar({ sentinelRef }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navbarRef = useRef(null);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  // Hook que cambia el color según scroll
  useNavbarColorOnScroll(navbarRef, sentinelRef);

  // Bloqueamos el scroll cuando el menú mobile esta activo
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }

    // Cleanup por si el componente se desmonta
    return () => document.body.classList.remove("overflow-hidden");
  }, [isMobileMenuOpen]);

  const handleMobileLinkClick = () => {
    toggleMobileMenu();
  };

  return (
    <>
      <nav
        ref={navbarRef}
        id="navbar"
        className="fixed top-0 left-0 w-full z-40 flex items-center justify-between h-20 
        md:h-18 px-6 md:px-26 text-white bg-transparent transition-all duration-300"
      >
        <h4 className="text-xl md:text-2xl font-bold text-current">
          CoffeeLab
        </h4>

        <div className="hidden md:flex items-center gap-6">
          <LinkNavbar titleLink="Nuestro café" href="#coffees" />
          <LinkNavbar titleLink="Menú" href="#menu" />
          <LinkNavbar titleLink="Sobre nosotros" href="#about" />
          <LinkNavbar titleLink="Servicios" href="#services" />
          <LinkNavbar titleLink="Contacto" href="#contact" />
        </div>

        <div className="flex items-center gap-4">
          <button id="cart-icon" className="cursor-pointer">
            <IconCart />
          </button>

          <button
            id="menu-toggle"
            className="flex flex-col justify-center items-center w-6 h-6 gap-1 md:hidden"
            onClick={toggleMobileMenu}>
            <IconMenu />
          </button>
        </div>
      </nav>

      {/* Menu responsive activo */}
      {isMobileMenuOpen && (
        <nav
          id="mobile-menu"
          className="fixed inset-0 z-50 w-3/4 h-full bg-white text-black text-xl flex flex-col"
        >
          {/* Header */}
          <header className="flex items-center justify-between p-6 border-b-2 border-gray-400">
            <h4 className="text-3xl font-bold">CoffeeLab</h4>
            <button onClick={toggleMobileMenu}>
              <IconCloseMenu size={40} />
            </button>
          </header>

          {/* Lista de links */}
          <ul className="flex flex-col gap-10 p-6 overflow-y-auto">
            {navLinks.map((link) => (
              <li key={link.href}>
                <LinkNavbar
                  titleLink={link.title}
                  href={link.href}
                  onClick={handleMobileLinkClick}
                />
              </li>
            ))}
          </ul>
        </nav>
      )}
    </>
  );
}
