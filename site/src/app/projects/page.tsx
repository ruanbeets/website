import Link from "next/link";

export default function ProjectsPage() {
  return (
    <section className="space-y-12 max-w-4xl">
      <h1 className="text-3xl font-semibold">Projects</h1>

      <div className="border border-slate-800 rounded-lg p-6 space-y-3">
        <div className="flex justify-between items-center">
          <h2 className="text-lg font-medium">
            Supply Chain Management Platform
          </h2>
          <span className="text-xs text-green-400">Active</span>
        </div>

        <p className="text-slate-400">
          An internal system designed to replace spreadsheet-based inventory
          and order tracking for small businesses.
        </p>

        <Link
          href="/platform"
          className="text-blue-400 hover:text-blue-300 text-sm"
        >
          View Platform →
        </Link>
      </div>
    </section>
  );
}
