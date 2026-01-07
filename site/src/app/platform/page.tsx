import Link from "next/link";

export default function PlatformPage() {
  return (
    <section className="space-y-16 max-w-4xl">
      <div className="space-y-4">
        <h1 className="text-3xl font-semibold">
          The KRYX SCM Platform
        </h1>
        <p className="text-slate-400">
          An internal system designed to replace spreadsheets, emails, and
          manual tracking in supply chain operations.
        </p>
      </div>

      <div className="space-y-6">
        <h2 className="text-xl font-medium">The Problem</h2>
        <ul className="list-disc list-inside text-slate-400 space-y-2">
          <li>Inventory spread across spreadsheets</li>
          <li>Orders tracked manually or via email</li>
          <li>No real-time operational visibility</li>
          <li>Problems discovered after they occur</li>
        </ul>
      </div>

      <div className="space-y-6">
        <h2 className="text-xl font-medium">Who It’s Built For</h2>
        <ul className="list-disc list-inside text-slate-400 space-y-2">
          <li>Small to mid-sized distributors</li>
          <li>Manufacturers managing stock movement</li>
          <li>Operations managers, not marketing teams</li>
        </ul>
      </div>

      <div className="space-y-6">
        <h2 className="text-xl font-medium">Core Capabilities</h2>
        <ul className="list-disc list-inside text-slate-400 space-y-2">
          <li>Centralized product and inventory model</li>
          <li>Incoming and outgoing order tracking</li>
          <li>Operational visibility and history</li>
          <li>Reporting embedded into workflows</li>
        </ul>
      </div>

      <div className="space-y-6">
        <h2 className="text-xl font-medium">Key Design Decisions</h2>
        <ul className="list-disc list-inside text-slate-400 space-y-2">
          <li>Single source of truth over flexibility</li>
          <li>Predictable workflows over customization</li>
          <li>Auditability over convenience</li>
        </ul>
      </div>

      <div className="space-y-4">
        <h2 className="text-xl font-medium">How Companies Engage</h2>
        <ol className="list-decimal list-inside text-slate-400 space-y-2">
          <li>Understand existing workflows</li>
          <li>Design the operational system</li>
          <li>Build and deploy incrementally</li>
          <li>Iterate based on real usage</li>
        </ol>
      </div>

      <Link
        href="/contact"
        className="inline-block bg-blue-600 hover:bg-blue-500 transition text-white px-6 py-3 rounded-md text-sm"
      >
        Discuss Your Operations
      </Link>
    </section>
  );
}
