import "./globals.css";

export const metadata = {
  title: "Ruan Beets",
  description:
    "Operational systems, supply chain tooling, and modern web applications",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-slate-950 text-slate-100 antialiased">
        <header className="border-b border-slate-800">
          <nav className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
            <span className="font-semibold tracking-wide">Ruan Beets</span>
            <div className="space-x-6 text-slate-400 text-sm">
              <a href="/projects" className="hover:text-white transition">
                Projects
              </a>
              <a href="/about" className="hover:text-white transition">
                About
              </a>
              <a href="/contact" className="hover:text-white transition">
                Contact
              </a>
            </div>
          </nav>
        </header>

        <main className="max-w-6xl mx-auto px-6 py-16">
          {children}
        </main>

        <footer className="border-t border-slate-800 mt-24">
          <div className="max-w-6xl mx-auto px-6 py-8 text-sm text-slate-500">
            © {new Date().getFullYear()} Ruan Beets
          </div>
        </footer>
      </body>
    </html>
  );
}
