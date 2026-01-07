export default function SCMPlatformPage() {
  return (
    <>
      <h1 className="text-3xl font-semibold mb-6">
        Supply Chain Management Platform
      </h1>

      {/* Problem */}
      <section className="mb-8">
        <h2 className="font-medium mb-2">Problem</h2>
        <p className="text-slate-400 max-w-2xl">
          Small businesses rely on spreadsheets for inventory and orders,
          leading to errors, poor visibility, and operational breakdown as
          volume increases.
        </p>
      </section>

      {/* Target users */}
      <section className="mb-8">
        <h2 className="font-medium mb-2">Target Users</h2>
        <ul className="text-slate-400 list-disc pl-5">
          <li>Operations managers</li>
          <li>Warehouse staff</li>
          <li>Business owners</li>
        </ul>
      </section>

      {/* Core features */}
      <section className="mb-8">
        <h2 className="font-medium mb-2">Core Features</h2>
        <ul className="text-slate-400 list-disc pl-5">
          <li>Inventory tracking</li>
          <li>Inbound and outbound orders</li>
          <li>Audit history</li>
          <li>Basic reporting</li>
        </ul>
      </section>

      {/* Design decisions */}
      <section className="mb-8">
        <h2 className="font-medium mb-2">Key Design Decisions</h2>
        <p className="text-slate-400 max-w-2xl">
          The system favors simple data models and predictable workflows over
          flexibility to ensure reliability and ease of use.
        </p>
      </section>

      {/* Links */}
      <section className="flex gap-4">
        <span className="text-sm text-slate-500">Live demo: Coming soon</span>
        <span className="text-sm text-slate-500">
          GitHub: Private repository
        </span>
      </section>
    </>
  );
}
