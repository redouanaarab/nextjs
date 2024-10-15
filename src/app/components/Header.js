// src/app/components/Header.js
export default function Header() {
  return (
    <header className="flex justify-between items-center p-4 bg-white shadow-bottom">
      <h1 className="text-xl text-black font-semibold">Dashboard</h1>
      <div className="flex items-center space-x-4">
        <button className="bg-blue-600 text-white px-4 py-2 rounded">
          Profile
        </button>
      </div>
    </header>
  );
}
