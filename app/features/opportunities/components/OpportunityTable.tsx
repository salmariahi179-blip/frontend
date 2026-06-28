export default function OpportunityTable({ data }: unknown) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full text-sm">
        <thead className="bg-gray-100 text-left">
          <tr>
            <th className="p-3">ID</th>
            <th className="p-3">Title</th>
            <th className="p-3">Client</th>
            <th className="p-3">Amount</th>
            <th className="p-3">Status</th>
          </tr>
        </thead>

        <tbody>
          {data.map((op: any) => (
            <tr key={op.id} className="border-t hover:bg-gray-50">
              <td className="p-3">{op.id}</td>
              <td className="p-3 font-medium">{op.title}</td>
              <td className="p-3">{op.client}</td>
              <td className="p-3">{op.amount} $</td>
              <td className="p-3">
                <span className="px-2 py-1 rounded bg-blue-100 text-blue-700">
                  {op.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}