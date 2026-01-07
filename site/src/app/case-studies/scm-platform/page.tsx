export default function SCMCaseStudyPage() {
  return (
    <>
      <h1 className="text-3xl font-semibold mb-8">
        Case Study: SCM Platform
      </h1>

      <section className="space-y-6 max-w-3xl">
        <div>
          <h2 className="font-medium mb-1">Context & Constraints</h2>
          <p className="text-slate-400">
            Built as a solo project with limited time and no direct client,
            focusing on realistic operational constraints.
          </p>
        </div>

        <div>
          <h2 className="font-medium mb-1">Real Business Problem</h2>
          <p className="text-slate-400">
            Spreadsheet-based inventory systems break down under operational
            pressure.
          </p>
        </div>

        <div>
          <h2 className="font-medium mb-1">System Design Decisions</h2>
          <p className="text-slate-400">
            Prioritized data integrity and auditability over feature breadth.
          </p>
        </div>

        <div>
          <h2 className="font-medium mb-1">Trade-offs Made</h2>
          <p className="text-slate-400">
            Reduced configurability to avoid complexity and edge cases.
          </p>
        </div>

        <div>
          <h2 className="font-medium mb-1">What Worked</h2>
          <p className="text-slate-400">
            Clear workflows and predictable behavior under load.
          </p>
        </div>

        <div>
          <h2 className="font-medium mb-1">What I’d Change Next</h2>
          <p className="text-slate-400">
            Introduce role-based access and forecasting.
          </p>
        </div>
      </section>
    </>
  );
}
