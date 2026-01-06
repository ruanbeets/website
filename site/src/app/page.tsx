export default function Home() {
  return (
    <section className="space-y-10">
      <div className="space-y-6">
        <h1 className="text-4xl md:text-5xl font-bold leading-tight">
          I build operational systems <br />
          for real businesses
        </h1>

        <p className="text-slate-400 text-lg max-w-2xl">
          Supply Chain graduate designing inventory, order, and analytics
          platforms that replace fragile spreadsheets and manual workflows.
        </p>

        <div className="flex gap-4 pt-4">
          <a
            href="/projects"
            className="px-6 py-3 bg-blue-600 rounded-lg hover:bg-blue-500 transition"
          >
            View Projects
          </a>

          <a
            href="/contact"
            className="px-6 py-3 border border-slate-700 rounded-lg hover:bg-slate-800 transition"
          >
            Contact
          </a>
        </div>
      </div>

      <section className="grid md:grid-cols-3 gap-6 pt-20">
        <div className="border border-slate-800 rounded-xl p-6">
          <h3 className="font-semibold mb-2">Operational Systems</h3>
          <p className="text-slate-400 text-sm">
            Internal tools businesses rely on daily — inventory, orders, and
            workflows.
          </p>
        </div>

        <div className="border border-slate-800 rounded-xl p-6">
          <h3 className="font-semibold mb-2">System Design</h3>
          <p className="text-slate-400 text-sm">
            Clean data models, predictable flows, and scalable architecture.
          </p>
        </div>

        <div className="border border-slate-800 rounded-xl p-6">
          <h3 className="font-semibold mb-2">Delivery Focus</h3>
          <p className="text-slate-400 text-sm">
            Practical solutions shipped fast — no overengineering.
          </p>
        </div>
      </section>
    </section>
  );
}
