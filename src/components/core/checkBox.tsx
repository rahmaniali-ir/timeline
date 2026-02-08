import { cn } from "@/lib/utils";
import { CheckIcon, MinusIcon, SquircleIcon } from "lucide-react";

export function CheckBox({ checked, mixed, color, className, iconClassName }: { checked?: boolean, mixed?: boolean, color?: string, className?: string, iconClassName?: string }) {
  return (<div className={cn('relative', className)}>
    <SquircleIcon
      className={cn(
        "size-[1em] text-neutral-400",
        "group-hover/tag-toggle:text-neutral-500"
      )}
    />

    {checked ? (
      <CheckIcon
        style={{ color }}
        className={cn(
          "size-[0.75em] absolute top-1/2 left-1/2 -translate-1/2",
          iconClassName
        )}
      />
    ) : mixed ? (
      <MinusIcon
        className={cn(
          "size-1.5 absolute top-1/2 left-1/2 -translate-1/2 text-neutral-600"
        )}
      />
    ) : null}
  </div>)
}
