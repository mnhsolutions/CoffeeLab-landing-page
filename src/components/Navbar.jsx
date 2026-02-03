import LinkNavbar from "./Navbar/LinkNavbar";
import IconCart from "../icons/IconCart";
import IconMenu from "../icons/IconMenu";
import IconCloseMenu from "../icons/IconCloseMenu";

export default function Navbar() {
  return (
    <>
      <nav
        id="navbar"
        className="fixed top-0 left-0 w-full z-40 flex items-center justify-between h-20 
        md:h-18 px-6 md:px-26 text-white bg-transparent transition-all duration-300">
        <h4 className="text-xl md:text-2xl font-bold text-current">CoffeeLab</h4>

        <div className="hidden md:flex items-center gap-6">
          <LinkNavbar titleLink="Nuestro café" href="#coffees" />
          <LinkNavbar titleLink="Menú" href="#menu" />
          <LinkNavbar titleLink="Sobre nosotros" href="#about" />
          <LinkNavbar titleLink="Servicios" href="#services" />
          <LinkNavbar titleLink="Contacto" href="#contact" />
        </div>

        <div className="flex items-center gap-4">
          <button id="cart-icon" class="cursor-pointer">
            <IconCart />
          </button>
              
          <button
            id="menu-toggle"
            className="flex flex-col justify-center items-center w-6 h-6 gap-1 md:hidden">
              <IconMenu />
            </button>
        </div>

        <div
          id="mobile-menu"
          className="fixed inset-0 w-screen h-screen bg-[#362415] z-50 hidden flex flex-col items-center justify-center space-y-8 text-white text-xl gap-4">
          <button
            id="close-menu"
            className="absolute top-6 right-6 text-3xl">
            <IconCloseMenu size={32} /> 
          </button>
          <h4 className="text-2xl font-bold text-current">CoffeeLab</h4>
            <LinkNavbar titleLink="Home" href="#hero" />
            <LinkNavbar titleLink="Nuestro café" href="#coffees" />
            <LinkNavbar titleLink="Nuestro Menú" href="#menu" />
            <LinkNavbar titleLink="Sobre nosotros" href="#about" />
            <LinkNavbar titleLink="Servicios" href="#services" />
            <LinkNavbar titleLink="Contacto" href="#contact" />
        </div>
      </nav>
    </>
  );
}
