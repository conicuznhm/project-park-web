export default function Loading() {
  return (
    <div className="fixed flex-col inset-0 bg-[#1B2838] flex justify-center items-center">
      <div className="relative w-36 h-36">
        <div className="absolute inset-x-0 top-16 text-center">Loading...</div>
        <div className="w-36 h-36 rounded-full animate-spin border-y-4 border-solid border-[#2085a9] shadow-lg shadow-indigo-500/50 border-t-transparent"></div>
      </div>
    </div>
  );
}
