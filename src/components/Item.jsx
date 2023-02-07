export default function Item({ src, alt, name }) {
  return (
    <div className="flex ">
      <div className="w-104 h-84">
        <img src={src} alt={alt} />
      </div>
      <div className="text-start">
        <span>{name}</span>
      </div>
    </div>
  );
}
