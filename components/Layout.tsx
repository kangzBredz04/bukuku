// components/Layout.js
export default function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-blue-600 text-white p-4">
        <h1 className="text-center text-xl">BukuKu</h1>
      </header>
      <main className="flex-grow p-6">{children}</main>
      <footer className="bg-blue-600 text-white p-4 text-center">
        &copy; 2024 BukuKu
      </footer>
    </div>
  );
}
