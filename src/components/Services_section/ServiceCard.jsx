export default function ServiceCard({ image, title, description }) {
  return (
    <article
      className="menu-card grid grid-rows-[auto_1fr] min-h-[450px] w-72 rounded-xl py-4 px-4"
      style={{boxShadow: "rgba(17, 17, 26, 0.1) 0px 4px 16px, rgba(17, 17, 26, 0.05) 0px 8px 32px"}}>

      <div className="content flex justify-center items-center overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-auto max-w-full object-contain"
        />
      </div>

      <footer className="grid grid-cols-1 gap-2 py-2">
        <div className="product-info flex flex-col justify-center gap-6">
          <h3 className="text-[1.10rem] text-center font-semibold font-heading leading-tight">
            {title}
          </h3>
          <p className="text-sm text-gray-700 text-center font-semibold opacity-70 px-4">
            {description}
          </p>
        </div>
      </footer>
    </article>
  )
}
