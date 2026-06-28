export default function Sidebar() {
  return (
    <div className="w-64 bg-white border-r p-5">
      <h2 className="text-xl font-bold mb-6">CRM SaaS</h2>

      <nav className="space-y-3">
        <div className="text-gray-700 font-medium">Dashboard</div>
        <div className="text-gray-500">Opportunities</div>
        <div className="text-gray-500">Clients</div>
      </nav>
    </div>
  );
}