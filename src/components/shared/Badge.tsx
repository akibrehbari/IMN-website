interface BadgeProps {
  label: string;
  color?: string;
  size?: "sm" | "md";
}

export default function Badge({ label, color, size = "sm" }: BadgeProps) {
  const sizeClasses = size === "sm" ? "px-2 py-0.5 text-xs" : "px-3 py-1 text-sm";

  return (
    <span
      className={`inline-flex items-center ${sizeClasses} rounded-full
        font-semibold uppercase tracking-wider`}
      style={
        color
          ? {
              backgroundColor: `${color}15`,
              color: color,
            }
          : undefined
      }
    >
      {!color && (
        <span className="badge-red">{label}</span>
      )}
      {color && label}
    </span>
  );
}
