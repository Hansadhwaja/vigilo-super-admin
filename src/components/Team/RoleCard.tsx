"use client";

import { Check, type LucideIcon } from "lucide-react";

import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";


interface RoleCardProps {
  role: {
    title: string;
    description: string;
    icon: LucideIcon
    color: string;
    features: string[];
  };
}

export default function RoleCard({ role }: RoleCardProps) {
  const Icon = role.icon;

  return (
    <Card className="transition-all hover:shadow-lg">
      <CardHeader className="space-y-4">
        <div className="flex items-center gap-3">
          <div
            className={`flex h-12 w-12 items-center justify-center rounded-xl ${role.color}`}
          >
            <Icon className="size-6" />
          </div>

          <div>
            <h3 className="text-lg font-semibold">{role.title}</h3>

            <Badge variant="secondary">Role</Badge>
          </div>
        </div>

        <p className="text-sm text-muted-foreground">
          {role.description}
        </p>
      </CardHeader>

      <CardContent className="space-y-6">
        <div className="space-y-3">
          {role.features.map((feature) => (
            <div
              key={feature}
              className="flex items-center gap-2"
            >
              <Check className="size-4 text-green-500" />
              <span className="text-sm">{feature}</span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}