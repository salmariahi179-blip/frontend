"use client";

import { opportunityService } from "../opportunity.service";
import { toast } from "sonner";

export default function DeleteOpportunityDialog({
  open,
  id,
  onClose,
  onSuccess,
}: any) {
  const handleDelete = async () => {
    await opportunityService.remove(id);
    toast.success("Deleted successfully");
    onSuccess();
    onClose();
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center">
      <div className="bg-white p-6 rounded">
        <p>Are you sure ?</p>

        <div className="flex gap-2 mt-4">
          <button onClick={onClose}>Cancel</button>
          <button onClick={handleDelete} className="text-red-500">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}