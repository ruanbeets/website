export default function Projects() {
  return (
    <section className="space-y-10">
      <h1 className="text-3xl font-bold">Projects</h1>

      <div className="border border-slate-800 rounded-xl p-6 hover:border-slate-600 transition">
        <h2 className="text-xl font-semibold">
          Supply Chain Management System
        </h2>
        <p className="text-slate-400 mt-2 max-w-2xl">
          Inventory and order tracking platform designed for small businesses
          transitioning away from spreadsheets.
        </p>

        <a
          href="/projects/scm-system"
          className="inline-block mt-4 text-blue-400 hover:text-blue-300"
        >
          View case study →
        </a>
      </div>
    </section>
  );
}
