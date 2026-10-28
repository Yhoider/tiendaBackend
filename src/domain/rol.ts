export const roles = ["cliente", "supervisor", "admin"] as const;
export type Role = (typeof roles)[number];

export const isRole = (value: unknown): value is Role =>
  typeof value === "string" && roles.includes(value as Role);
