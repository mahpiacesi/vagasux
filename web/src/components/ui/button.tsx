import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { Slot } from "radix-ui"

import { cn } from "@/lib/utils"

/** Pill buttons with VagasUX brand tokens — overrides shadcn defaults (rounded-lg, primary token). */
const guiaPillBase =
  "h-auto min-h-0 rounded-full font-bold shadow-none transition-colors active:translate-y-0 focus-visible:ring-brand-300/40"

const buttonVariants = cva(
  "group/button inline-flex shrink-0 items-center justify-center rounded-lg border border-transparent bg-clip-padding text-sm font-medium whitespace-nowrap transition-all outline-none select-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 active:not-aria-[haspopup]:translate-y-px disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/80",
        outline:
          "border-border bg-background hover:bg-muted hover:text-foreground aria-expanded:bg-muted aria-expanded:text-foreground dark:border-input dark:bg-input/30 dark:hover:bg-input/50",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-[color-mix(in_oklch,var(--secondary),var(--foreground)_5%)] aria-expanded:bg-secondary aria-expanded:text-secondary-foreground",
        ghost:
          "hover:bg-muted hover:text-foreground aria-expanded:bg-muted aria-expanded:text-foreground dark:hover:bg-muted/50",
        destructive:
          "bg-destructive/10 text-destructive hover:bg-destructive/20 focus-visible:border-destructive/40 focus-visible:ring-destructive/20 dark:bg-destructive/20 dark:hover:bg-destructive/30 dark:focus-visible:ring-destructive/40",
        link: "text-primary underline-offset-4 hover:underline",
        guia: cn(
          guiaPillBase,
          "gap-2 border-transparent bg-brand-400 px-5 py-3 text-sm text-neutral-100 hover:bg-brand-500",
        ),
        "guia-outline": cn(
          guiaPillBase,
          "gap-2 border-brand-200 bg-brand-100/40 px-5 py-3 text-sm text-brand-500 hover:bg-brand-100 hover:text-brand-500",
        ),
        "guia-compact": cn(
          guiaPillBase,
          "gap-2 border-transparent bg-brand-400 px-4 py-2.5 text-sm text-neutral-100 hover:bg-brand-500 [&_svg:not([class*='size-'])]:size-[18px]",
        ),
        "guia-compact-outline": cn(
          guiaPillBase,
          "gap-2 border border-neutral-500/10 bg-brand-100/30 px-4 py-2.5 text-sm text-neutral-500 hover:border-brand-300 hover:bg-brand-100/60 hover:text-brand-500 [&_svg:not([class*='size-'])]:size-[18px]",
        ),
        "guia-chip": cn(
          guiaPillBase,
          "gap-1.5 whitespace-nowrap border-neutral-500/10 bg-neutral-100 px-3 py-1.5 text-xs font-bold text-neutral-500 hover:border-brand-300 hover:bg-brand-100/60 hover:text-brand-500",
        ),
        "guia-chip-active": cn(
          guiaPillBase,
          "gap-1.5 whitespace-nowrap border-brand-400 bg-brand-400 px-3 py-1.5 text-xs font-bold text-neutral-100",
        ),
        "guia-clear": cn(
          guiaPillBase,
          "gap-1 border border-dashed border-neutral-500/20 bg-transparent px-3 py-1.5 text-xs font-bold text-neutral-400 hover:border-brand-300 hover:bg-transparent hover:text-brand-500 [&_svg:not([class*='size-'])]:size-3",
        ),
      },
      size: {
        default:
          "h-8 gap-1.5 px-2.5 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2",
        xs: "h-6 gap-1 rounded-[min(var(--radius-md),10px)] px-2 text-xs in-data-[slot=button-group]:rounded-lg has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 [&_svg:not([class*='size-'])]:size-3",
        sm: "h-7 gap-1 rounded-[min(var(--radius-md),12px)] px-2.5 text-[0.8rem] in-data-[slot=button-group]:rounded-lg has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 [&_svg:not([class*='size-'])]:size-3.5",
        lg: "h-9 gap-1.5 px-2.5 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2",
        icon: "size-8",
        "icon-xs":
          "size-6 rounded-[min(var(--radius-md),10px)] in-data-[slot=button-group]:rounded-lg [&_svg:not([class*='size-'])]:size-3",
        "icon-sm":
          "size-7 rounded-[min(var(--radius-md),12px)] in-data-[slot=button-group]:rounded-lg",
        "icon-lg": "size-9",
        /** Skips fixed h-8 / px-2.5 from default — guia variants bring their own padding. */
        guia: "",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

const GUIA_VARIANTS = new Set([
  "guia",
  "guia-outline",
  "guia-compact",
  "guia-compact-outline",
  "guia-chip",
  "guia-chip-active",
  "guia-clear",
])

function Button({
  className,
  variant = "default",
  size = "default",
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot.Root : "button"
  const resolvedSize =
    variant && GUIA_VARIANTS.has(variant) ? "guia" : size

  return (
    <Comp
      data-slot="button"
      data-variant={variant}
      data-size={resolvedSize}
      className={cn(buttonVariants({ variant, size: resolvedSize, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }
