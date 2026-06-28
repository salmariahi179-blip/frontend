"use client";

import { useOpportunities } from "@/hooks/useOpportunities";

export default function OpportunityTable() {
  const { data, loading } = useOpportunities();

  if (loading) return <p>Loading...</p>;

  return (
    <div className="p-4">
      <table className="w-full border">
        <thead>
          <tr>
            <th>Title</th>
            <th>Client</th>
            <th>Amount</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>
          {data.map((op) => (
            <tr key={op.id} className="border-t">
              <td>{op.title}</td>
              <td>{op.client}</td>
              <td>{op.amount}</td>
              <td>{op.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}