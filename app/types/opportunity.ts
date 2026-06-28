export interface Opportunity {
  id: number;
  title: string;
  client: string;
  amount: number;
  status: "NEW" | "IN_PROGRESS" | "WON" | "LOST";
  createdAt: string;
}