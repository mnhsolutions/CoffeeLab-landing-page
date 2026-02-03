export default function LinkFooter({ href, imageLink, alt }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer">
      <img src={imageLink} alt={alt} className="w-6 h-6" />
    </a>
  );
}
