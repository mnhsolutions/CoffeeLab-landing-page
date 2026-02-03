import IconArrow from '../../icons/IconArrow'

export default function CoffeeCard({
  headerBackground,
  imageCard,
  titleCard,
  textCard,
  textButtonCard,
  backgroundCard,
  titleColorCard,
  textColorButtonCard,
  textColorCard,
  imageShadow = "drop-shadow-[0_18px_32px_rgba(0,0,0,0.35)]",
}) {
  return (
    <div
      className="w-[240px] sm:w-full grid h-[65vh] sm:h-[75vh] lg:h-[70vh] grid-rows-[6%_58%_20%_16%] rounded-2xl"
      style={{ backgroundColor: backgroundCard }}
    >
      <header className="w-full rounded-t-2xl" style={{ backgroundColor: headerBackground }}>
			</header>
      <div className="w-full overflow-hidden">
        <img
          src={imageCard}
          alt={titleCard}
          className={`w-full h-full object-contain sm:object-cover filter
        ${imageShadow}
        mask-[linear-gradient(to_bottom,black_88%,transparent_100%)]
        [-webkit-mask-image:linear-gradient(to_bottom,black_88%,transparent_100%)]`}
        />
      </div>

      <div className="flex flex-col items-center gap-3 px-4 sm:px-6 mt-2 text-center">
        <h1 className="text-xl sm:text-2xl font-bold font-heading" style={{ color: titleColorCard }}>
          {titleCard}
        </h1>

        <p className="text-sm sm:text-base opacity-80" style={{ color: textColorCard }}>
          {textCard}
        </p>
      </div>

      <footer className="flex justify-center items-center">
        <button
          className="flex items-center justify-center bg-amber-500 gap-2 font-bold px-4 py-2 rounded-xl cursor-pointer hover:bg-amber-800"
          style={{ color: textColorButtonCard }}
        >
          {textButtonCard}
          <IconArrow />
        </button>
      </footer>
    </div>
  );
}
