'use client'

import * as React from "react"
import { Container } from "@/components/ui/Container"
import StatisticsSection from "@/components/ui/StatisticsSection"

function cn(...inputs: any[]) {
  return inputs.filter(Boolean).join(" ");
}

const Button = ({ children, className, ...props }: React.ButtonHTMLAttributes<HTMLButtonElement>) => (
  <button
    className={cn("bg-blue-900 hover:bg-blue-800 text-white px-4 py-2 rounded-md", className)}
    {...props}
  >
    {children}
  </button>
)

export default function Page() {
  return (
    <div className="min-h-screen bg-blue-50 p-8">
      <Container>
        <div className="flex justify-between items-center">
          <div>
            <h2 className="text-2xl font-bold text-blue-900">Attestations</h2>
            <p className="text-sm text-gray-600">Showing the most recent Attestations.</p>
          </div>
          <Button>Make Attestation</Button>
        </div>

        <StatisticsSection />
      </Container>
    </div>
  )
}
