import { Check, Plus } from "lucide-react";

export const KeywordChip = ({ label, status }) => {
  const found = status === "found";
  return (
    <span
      data-testid={`keyword-chip-${found ? "found" : "missing"}-${label.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}
      className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-medium transition-colors duration-200 ${
        found
          ? "border-brand-cyan/30 bg-brand-cyan/10 text-cyan-800"
          : "border-brand-amber/30 bg-brand-amber/10 text-brand-amber"
      }`}
    >
      {found ? <Check className="h-3 w-3" /> : <Plus className="h-3 w-3" />}
      {label}
    </span>
  );
};
