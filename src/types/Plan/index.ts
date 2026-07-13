export type Plan = {
  id: string;
  name: string;
  description: string;
  price: number | null;
  billing: "month" | "year" | "custom";
  popular: boolean;
  status: "Active" | "Draft";
  tenants: number;
  features: string[];
};