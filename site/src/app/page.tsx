import Link from "next/link";

export default function HomePage() {
  return (
    <section className="space-y-16">
      <div className="max-w-3xl space-y-6">
        <h1 className="text-4xl font-semibold leading-tight">
          I design operational systems for real businesses.
        </h1>

        <p className="text-slate-400">
          KRYX builds internal platforms — inventory, order management,
          analytics, and workflows — not consumer apps or marketing sites.
        </p>

        <p className="text-slate-400">
          For small to mid-sized businesses outgrowing spreadsheets and manual
          processes.
        </p>

        <Link
          href="/platform"
          className="inline-block bg-blue-600 hover:bg-blue-500 transition text-white px-6 py-3 rounded-md text-sm"
        >
          View SCM Platform →
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
        <div className="border border-slate-800 rounded-lg p-6">
          <h3 className="font-medium mb-2">Operational Systems</h3>
          <p className="text-slate-400">
            Internal tools businesses rely on daily — inventory, orders, and
            workflows.
          </p>
        </div>

        <div className="border border-slate-800 rounded-lg p-6">
          <h3 className="font-medium mb-2">System Design</h3>
          <p className="text-slate-400">
            Clean data models and predictable flows designed for scale.
          </p>
        </div>

        <div className="border border-slate-800 rounded-lg p-6">
          <h3 className="font-medium mb-2">Delivery Focus</h3>
          <p className="text-slate-400">
            Practical systems shipped to solve real operational problems.
          </p>
        </div>
      </div>
    </section>
  );
}
