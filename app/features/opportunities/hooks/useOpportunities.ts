"use client";

import { useEffect, useState } from "react";
import { Opportunity } from "@/types/opportunity";
import { getOpportunities } from "@/types/opportunity.service";

export const useOpportunities = () => {
  const [data, setData] = useState<Opportunity[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    setLoading(true);
    const res = await getOpportunities();
    setData(res);
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return { data, loading, refresh: fetchData };
};