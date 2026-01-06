export default function SCMSystem() {
  return (
    <article className="space-y-12">
      <header className="space-y-4">
        <h1 className="text-3xl font-bold">
          Supply Chain Management System
        </h1>
        <p className="text-slate-400 max-w-3xl">
          A practical inventory and order management system built to replace
          spreadsheets and manual tracking for small businesses.
        </p>
      </header>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Problem</h2>
        <p className="text-slate-400 max-w-3xl">
          Small businesses often rely on spreadsheets that break down as volume,
          complexity, and accountability increase.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Solution</h2>
        <p className="text-slate-400 max-w-3xl">
          A centralized system to track products, stock levels, incoming and
          outgoing orders, and historical changes.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">What I Focused On</h2>
        <ul className="list-disc list-inside text-slate-400">
          <li>Clear data models</li>
          <li>Operational visibility</li>
          <li>Simple, predictable workflows</li>
          <li>Scalability without overengineering</li>
        </ul>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Next Steps</h2>
        <p className="text-slate-400">
          Role-based access, forecasting, and multi-location support.
        </p>
      </section>
    </article>
  );
}
