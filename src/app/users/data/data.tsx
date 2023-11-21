import { ChevronDown } from "lucide-react";

export const labels = [
  {
    value: "bug",
    label: "Bug",
  },
  {
    value: "feature",
    label: "Feature",
  },
  {
    value: "documentation",
    label: "Documentation",
  },
];

export const statuses = [
  {
    value: "backlog",
    label: "Backlog",
    icon: ChevronDown,
  },
  {
    value: "todo",
    label: "Todo",
    icon: ChevronDown,
  },
  {
    value: "in progress",
    label: "In Progress",
    icon: ChevronDown,
  },
  {
    value: "done",
    label: "Done",
    icon: ChevronDown,
  },
  {
    value: "canceled",
    label: "Canceled",
    icon: ChevronDown,
  },
];

export const priorities = [
  {
    label: "Low",
    value: "low",
    icon: ChevronDown,
  },
  {
    label: "Medium",
    value: "medium",
    icon: ChevronDown,
  },
  {
    label: "High",
    value: "high",
    icon: ChevronDown,
  },
];
