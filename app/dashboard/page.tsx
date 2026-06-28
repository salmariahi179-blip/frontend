"use client";

import { useState } from "react";
import { useDebounce } from "@/features/opportunities/hooks/useDebounce";
import { useOpportunities } from "@/features/opportunities/hooks/useOpportunities";
import OpportunityTable from "@/features/opportunities/components/OpportunityTable";
import CreateOpportunityModal from "@/features/opportunities/modals/CreateOpportunityModal";
import DeleteOpportunityDialog from "@/features/opportunities/modals/DeleteOpportunityDialog";

export default function DashboardPage() {
  const [search, setSearch] = useState("");
  const debounced = useDebounce(search);

  const { data, refresh } = useOpportunities(debounced);

  const [openCreate, setOpenCreate] = useState(false);
  const [deleteId, setDeleteId] = useState<string | null>(null);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">CRM Dashboard</h1>

      <div className="flex gap-2 my-4">
        <input
          className="border p-2"
          placeholder="Search..."
          onChange={(e) => setSearch(e.target.value)}
        />

        <button
          onClick={() => setOpenCreate(true)}
          className="bg-blue-500 text-white px-3"
        >
          + Create
        </button>
      </div>

      <OpportunityTable
        data={data}
        onEdit={() => {}}
        onDelete={(id) => setDeleteId(id)}
      />

      <CreateOpportunityModal
        open={openCreate}
        onClose={() => setOpenCreate(false)}
        onSuccess={refresh}
      />

      <DeleteOpportunityDialog
        open={!!deleteId}
        id={deleteId}
        onClose={() => setDeleteId(null)}
        onSuccess={refresh}
      />
    </div>
  );
}