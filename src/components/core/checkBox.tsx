import { cn } from "@/lib/utils";
import type { Icon } from "@/types/icon";
import { CheckIcon, PlusIcon, SquircleIcon } from "lucide-react";

export function CheckBox({ checked, mixed, color, className, iconClassName, ...props }: { checked?: boolean, mixed?: boolean, icon?: Icon, color?: string, className?: string, iconClassName?: string }) {
  return (<div className={cn('relative', className)}>
    {props.icon ? <props.icon className={cn(
      "size-[1em] text-neutral-600 dark:text-neutral-400",
      "group-hover/tag-toggle:text-neutral-500",
      !checked && "opacity-25 group-hover/check-box:opacity-50",
      checked && "opacity-75"
    )} /> : <SquircleIcon
      className={cn(
        "size-[1em] text-current/25",
        "group-hover/tag-toggle:text-current/50"
      )}
    />}

    {checked ? (
      <CheckIcon
        style={{ color }}
        className={cn(
          "size-[0.75em] absolute top-1/2 left-1/2 -translate-1/2 text-primary-500",
          props.icon && "translate-1/6 text-primary-500 dark:text-primary-400",
          iconClassName
        )}
        strokeWidth={4}
      />
    ) : mixed ? (
      <PlusIcon
        className={cn(
          "size-2 absolute top-1/2 left-1/2 -translate-1/2 text-current/75"
        )}
        strokeWidth={1.5}
      />
    ) : null}
  </div>)
}
