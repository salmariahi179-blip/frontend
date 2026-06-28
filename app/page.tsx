import OpportunityTable from "./features/opportunities/components/OpportunityTable";

export default function Home() {
  return (
    <main>
      <h1 className="text-2xl font-bold p-4">CRM Dashboard</h1>
      <OpportunityTable />
    </main>
  );
}