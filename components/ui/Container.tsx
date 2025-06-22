import React from "react"
import { cn } from "@/lib/utils" 

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {}

export const Container = ({ className, ...props }: ContainerProps) => {
  return (
    <div
      className={cn(
        "bg-blue-100 p-6 rounded-xl shadow space-y-4 max-w-4xl mx-auto",
        className
      )}
      {...props}
    />
  )
}
