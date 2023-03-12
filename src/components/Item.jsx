export default function Item({ src, alt, name }) {
  return (
    <div className="flex items-center gap-x-4 ">
      <div className="w-40 h-24 border-2 rounded-2xl border-gray-400">
        <img src={src} alt={alt} className=" border rounded-2xl object-cover w-full h-full" />
      </div>
      <div className="text-start text-white text-lg">
        <span>{name}</span>
      </div>
    </div>
  );
}
