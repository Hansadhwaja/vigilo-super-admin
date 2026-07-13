export type Transaction = {
  id: string;
  date: string;
  tenant: {
    avatar: string;
    name: string;
  };
  amount: number;
  plan: "Starter" | "Pro" | "Business" | "Enterprise";
  status: "Paid" | "Pending" | "Failed";
  method: "Card" | "UPI" | "Bank Transfer";
};