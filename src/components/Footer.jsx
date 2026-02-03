import footerData from "../data/footerInfo.json";
import LinkFooter from "./Footer/LinkFooter";
import InfoFooter from "./Footer/InfoFooter";

export default function Footer() {
  const contactInfo = footerData.contactInfo;
  const socialLinks = footerData.socialLinks;

  return (
    <footer className="w-full bg-gray-200">
      <div className="flex items-center justify-between h-40 px-[110px] max-md:h-auto max-md:flex-col max-md:items-center max-md:justify-center max-md:gap-8 max-md:px-6 max-md:py-10 max-md:text-center">
        <h4 className="text-2xl font-bold">CoffeeLab</h4>

        <div className="info flex gap-8 max-md:flex-col max-md:items-center max-md:gap-4">
          {contactInfo.map((item, index) => (
            <InfoFooter
              key={index}
              imageCard={item.icon}
              Title={item.title}
              subTitle={item.subtitle}
              width={item.width}
            />
          ))}
        </div>

        <div className="links h-24 w-64 flex justify-center items-center gap-10 max-md:w-full max-md:h-auto max-md:justify-center">
          {socialLinks.map((link, index) => (
            <LinkFooter
              key={index}
              href={link.href}
              imageLink={link.icon}
              alt={link.alt}
            />
          ))}
        </div>
      </div>
    </footer>
  );
}
