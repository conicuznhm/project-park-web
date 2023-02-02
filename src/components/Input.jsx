export default function Input({ type, placeholder, name, value, onChange, error }) {
  return (
    <>
      <input
        className="placeholder:pl-1 placeholder:text-white my-0 mx-auto w-full bg-transparent border border-[#3CACFD] text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5"
        type={type || 'text'}
        placeholder={placeholder}
        name={name}
        // value={value}
        // onChange={onChange}
      />
      {error && <div className="">{error}</div>}
    </>
  );
}
