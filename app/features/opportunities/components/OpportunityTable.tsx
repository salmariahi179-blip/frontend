"use client";

import { Opportunity } from "../type";

type Props = {
  data: Opportunity[];
  onEdit: (op: Opportunity) => void;
  onDelete: (id: string) => void;
};

export default function OpportunityTable({ data, onEdit, onDelete }: Props) {
  return (
    <div className="bg-white rounded-lg shadow">
      <table className="w-full">
        <thead>
          <tr className="border-b">
            <th className="p-3 text-left">Title</th>
            <th className="p-3 text-left">Amount</th>
            <th className="p-3 text-left">Status</th>
            <th className="p-3 text-left">Actions</th>
          </tr>
        </thead>

        <tbody>
          {data.map((op) => (
            <tr key={op.id} className="border-b">
              <td className="p-3">{op.title}</td>
              <td className="p-3">{op.amount} €</td>
              <td className="p-3">{op.status}</td>

              <td className="p-3 flex gap-2">
                <button
                  className="text-blue-500"
                  onClick={() => onEdit(op)}
                >
                  Edit
                </button>

                <button
                  className="text-red-500"
                  onClick={() => onDelete(op.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}