"use client";

import { useEffect, useState } from "react";
import { opportunityService } from "../opportunity.service";
import { Opportunity } from "../type";

export function useOpportunities(search = "") {
  const [data, setData] = useState<Opportunity[]>([]);
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    setLoading(true);

    const res = await opportunityService.getAll();

    const filtered = res.filter((item) =>
      item.title.toLowerCase().includes(search.toLowerCase())
    );

    setData(filtered);
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, [search]);

  return { data, loading, refresh: fetchData };
}