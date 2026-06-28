export type OpportunityStatus = "NEW" | "IN_PROGRESS" | "WON" | "LOST";

export interface Opportunity {
  id: string;
  title: string;
  amount: number;
  status: OpportunityStatus;
  createdAt: string;
}