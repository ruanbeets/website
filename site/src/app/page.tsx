export default function HomePage() {
  return (
    <>
      <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight mb-6">
        Operational systems
        <br />
        built for real businesses
      </h1>

      <p className="text-slate-400 max-w-2xl mb-10">
        KRYX designs and builds internal platforms — inventory, operations,
        analytics, and workflow systems — that replace fragile spreadsheets and
        manual processes.
      </p>

      <div className="flex gap-4 mb-16">
        <a
          href="/projects"
          className="bg-blue-600 hover:bg-blue-500 transition text-white px-5 py-2 rounded-md text-sm"
        >
          View Projects
        </a>
        <a
          href="/contact"
          className="border border-slate-700 hover:border-slate-500 transition px-5 py-2 rounded-md text-sm"
        >
          Contact
        </a>
      </div>

      <div className="grid sm:grid-cols-3 gap-6">
        <div className="border border-slate-800 rounded-lg p-6">
          <h3 className="font-medium mb-2">Operational Systems</h3>
          <p className="text-slate-400 text-sm">
            Internal tools businesses rely on daily — inventory, orders, and
            workflows.
          </p>
        </div>

        <div className="border border-slate-800 rounded-lg p-6">
          <h3 className="font-medium mb-2">System Design</h3>
          <p className="text-slate-400 text-sm">
            Clean data models, predictable flows, and scalable architecture.
          </p>
        </div>

        <div className="border border-slate-800 rounded-lg p-6">
          <h3 className="font-medium mb-2">Delivery Focus</h3>
          <p className="text-slate-400 text-sm">
            Practical systems shipped fast — no overengineering.
          </p>
        </div>
      </div>
    </>
  );
}
