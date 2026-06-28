export default function OpportunityFilters() {
  return (
    <div className="flex gap-3 bg-white p-4 rounded-xl shadow">
      <input
        className="border p-2 rounded w-full"
        placeholder="Search client..."
      />

      <select className="border p-2 rounded">
        <option>ALL</option>
        <option>NEW</option>
        <option>IN_PROGRESS</option>
        <option>WON</option>
        <option>LOST</option>
      </select>
    </div>
  );
}