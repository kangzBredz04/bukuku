export default function DashboardLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="h-screen flex flex-col bg-gray-200">
      {/* Navbar di bagian atas */}
      <nav className="bg-gray-800 text-white text-center py-3 font-bold">
        Ini adalah navbar halaman dashboard
      </nav>

      {/* Konten utama yang fleksibel */}
      <div className="flex-grow p-6">{children}</div>

      {/* Footer di bagian bawah */}
      <footer className="bg-gray-800 text-white text-center py-3 font-bold">
        Ini adalah footer halaman dashboard
      </footer>
    </section>
  );
}
