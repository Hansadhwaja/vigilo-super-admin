export type TeamMember = {
  name: {
    avatar: string;
    initials: string;
    name: string;
    email: string;
  };
  role: "Super Admin" | "Billing Admin" | "Support Agent";
  status: "Active" | "Invited" | "Disabled";
  lastLogin: string;
};