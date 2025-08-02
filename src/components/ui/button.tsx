import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-semibold tracking-wide ring-offset-background transition-all duration-300 transform focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 interactive",
  {
    variants: {
      variant: {
        // Utilitarian Primary - Industrial Orange
        default: "bg-primary text-primary-foreground hover:bg-primary/90 utilitarian-border rounded-lg shadow-lg hover:shadow-xl text-glow",
        
        // Glassmorphism Variant
        glass: "glass-card text-foreground hover:glass-primary rounded-xl backdrop-blur-xl",
        
        // Maximalist Glow
        maximalist: "bg-gradient-to-r from-primary to-secondary text-white rounded-xl maximalist-glow font-bold",
        
        // Hyper-realistic Secondary
        secondary: "glass-secondary text-secondary border border-secondary/20 rounded-lg hover:border-secondary/40 text-glow-secondary",
        
        // Modern Outline
        outline: "border-2 border-primary/30 bg-transparent hover:bg-primary/10 text-foreground rounded-lg hyper-shadow hover:border-primary/60",
        
        // Destructive with effects
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90 rounded-lg shadow-lg",
        
        // Ghost with subtle effects  
        ghost: "hover:glass-primary text-foreground rounded-lg",
        
        // Link with gradient text
        link: "text-primary underline-offset-4 hover:underline gradient-text",
      },
      size: {
        default: "h-12 px-8 text-base",
        sm: "h-10 px-6 text-sm",
        lg: "h-14 px-10 text-lg",
        xl: "h-16 px-12 text-xl",
        icon: "h-12 w-12",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
