export default function InfoFooter({ imageCard, Title, subTitle, width = "w-40" }) {
  return (
    <div className={`${width} h-24 grid grid-cols-[40px_1fr] gap-2 items-center`}>
      <img src={imageCard} alt={Title} className="w-10 h-10 object-contain justify-self-center" />
      <div className="info flex flex-col items-start px-2 text-sm leading-tight">
        <h1 className="text-lg font-semibold">{Title}</h1>
        <p className="text-xs text-gray-600">{subTitle}</p>
      </div>
    </div>
  );
}
