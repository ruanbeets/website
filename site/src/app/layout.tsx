import "./globals.css";
import Link from "next/link";

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
      <body className="bg-slate-950 text-slate-100 antialiased relative">
        {/* Header / Navigation */}
        <header className="border-b border-slate-800">
          <nav className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
            {/* Always go home */}
            <Link
              href="/"
              className="font-semibold tracking-wide hover:text-blue-400 transition-colors"
            >
              Ruan Beets
            </Link>

            <div className="space-x-6 text-slate-400 text-sm">
              <Link href="/projects" className="hover:text-white transition">
                Projects
              </Link>
              <Link href="/about" className="hover:text-white transition">
                About
              </Link>
              <Link href="/contact" className="hover:text-white transition">
                Contact
              </Link>
            </div>
          </nav>
        </header>

        {/* Main Content + Subtle Sci-Fi Glow */}
        <main className="relative max-w-6xl mx-auto px-6 py-16">
          {/* Background glow (visual depth, non-interactive) */}
          <div className="pointer-events-none absolute inset-0 -z-10">
            <div className="absolute top-0 left-1/3 h-[500px] w-[500px] rounded-full bg-blue-500/10 blur-[120px]" />
            <div className="absolute bottom-0 right-1/4 h-[400px] w-[400px] rounded-full bg-cyan-400/10 blur-[120px]" />
          </div>

          {children}
        </main>

        {/* Footer */}
        <footer className="border-t border-slate-800 mt-24">
          <div className="max-w-6xl mx-auto px-6 py-8 text-sm text-slate-500">
            © {new Date().getFullYear()} Ruan Beets
          </div>
        </footer>

        {/* Chatbot / Assistant Entry (UI only for now) */}
        <button
          className="fixed bottom-6 right-6 z-50 h-12 w-12 rounded-full
                     bg-blue-600 hover:bg-blue-500 transition
                     shadow-lg shadow-blue-600/20"
          aria-label="Open assistant"
        >
          <span className="block text-white text-lg">◉</span>
        </button>
      </body>
    </html>
  );
}
