import "./globals.css";
import Link from "next/link";

export const metadata = {
  title: "KRYX",
  description:
    "KRYX builds operational systems, internal tools, and scalable software for real businesses.",
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
            {/* Brand / Home link */}
            <Link
              href="/"
              className="font-semibold tracking-widest text-sm hover:text-blue-400 transition-colors"
            >
              KRYX
            </Link>

            {/* Navigation */}
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

        <main className="max-w-6xl mx-auto px-6 py-16">{children}</main>

        <footer className="border-t border-slate-800 mt-24">
          <div className="max-w-6xl mx-auto px-6 py-8 text-sm text-slate-500">
            © {new Date().getFullYear()} KRYX
          </div>
        </footer>
      </body>
    </html>
  );
}
