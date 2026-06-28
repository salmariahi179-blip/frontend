import api from "@/services/api";
import { Opportunity } from "@/types/opportunity";

export const getOpportunities = async (): Promise<Opportunity[]> => {
  const res = await api.get("/opportunities");
  return res.data;
};

export const createOpportunity = async (data: Partial<Opportunity>) => {
  return await api.post("/opportunities", data);
};

export const deleteOpportunity = async (id: number) => {
  return await api.delete(`/opportunities/${id}`);
};