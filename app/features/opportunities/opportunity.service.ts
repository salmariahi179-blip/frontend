import api from "@/lib/api/client";
import { Opportunity } from "./type";

export const opportunityService = {
  async getAll() {
    const res = await api.get<Opportunity[]>("/opportunities");
    return res.data;
  },

  async create(data: Partial<Opportunity>) {
    const res = await api.post("/opportunities", data);
    return res.data;
  },

  async update(id: string, data: Partial<Opportunity>) {
    const res = await api.patch(`/opportunities/${id}`, data);
    return res.data;
  },

  async remove(id: string) {
    const res = await api.delete(`/opportunities/${id}`);
    return res.data;
  },
};