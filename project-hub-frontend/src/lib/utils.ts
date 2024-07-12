import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
export const getDeadlineRemainingTime = (deadline: Date) => {
  const now = new Date();
  const timeDiff = deadline.getTime() - now.getTime();
  const daysRemaining = Math.ceil(timeDiff / (1000 * 3600 * 24));
  return daysRemaining;
};

export const getDeadlineColor = (daysRemaining: number) => {
  if (daysRemaining <= 5) return "red";
  if (daysRemaining <= 14) return "orange";
  return "green";
};
