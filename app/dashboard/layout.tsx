export default function DashboardLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex flex-col bg-gray-200">
      {/* Navbar di bagian atas */}
      <nav className="bg-gray-800 text-white text-center py-3 font-bold">
        Ini adalah navbar halaman dashboard
      </nav>
      <main className="flex-grow p-6">{children}</main>
      {/* Footer di bagian bawah */}
      <footer className="bg-gray-800 text-white text-center py-3 font-bold mt-auto">
        Ini adalah footer halaman dashboard
      </footer>
    </div>
  );
}
