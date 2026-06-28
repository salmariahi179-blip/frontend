"use client";

import { useForm } from "react-hook-form";
import { opportunityService } from "../opportunity.service";
import { toast } from "sonner";

type FormData = {
  title: string;
  amount: number;
};

export default function CreateOpportunityModal({
  open,
  onClose,
  onSuccess,
}: any) {
  const { register, handleSubmit, reset } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    await opportunityService.create({
      ...data,
      status: "NEW",
    });

    toast.success("Opportunity created");
    reset();
    onSuccess();
    onClose();
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center">
      <div className="bg-white p-6 rounded w-[400px]">
        <h2 className="text-xl mb-4">Create Opportunity</h2>

        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-3">
          <input
            placeholder="Title"
            className="border p-2"
            {...register("title")}
          />

          <input
            type="number"
            placeholder="Amount"
            className="border p-2"
            {...register("amount")}
          />

          <div className="flex justify-end gap-2">
            <button type="button" onClick={onClose}>
              Cancel
            </button>

            <button className="bg-blue-500 text-white px-3 py-1">
              Create
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}