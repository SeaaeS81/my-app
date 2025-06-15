'use client'

import * as React from "react"

// Вспомогательная функция для объединения классов
function cn(...inputs: any[]) {
  return inputs.filter(Boolean).join(" ");
}

// Компоненты карточек (Card)
const Card = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn("rounded-xl border bg-white text-black shadow", className)}
      {...props}
    />
  )
)
Card.displayName = "Card"

const CardHeader = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={cn("flex flex-col space-y-1.5 p-6", className)} {...props} />
)
CardHeader.displayName = "CardHeader"

const CardTitle = ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
  <h3 className={cn("text-2xl font-semibold leading-none tracking-tight", className)} {...props} />
)
CardTitle.displayName = "CardTitle"

const CardDescription = ({ className, ...props }: React.HTMLAttributes<HTMLParagraphElement>) => (
  <p className={cn("text-sm text-gray-500", className)} {...props} />
)
CardDescription.displayName = "CardDescription"

const CardContent = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={cn("p-6 pt-0", className)} {...props} />
)
CardContent.displayName = "CardContent"

const CardFooter = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={cn("flex items-center p-6 pt-0", className)} {...props} />
)
CardFooter.displayName = "CardFooter"

// Кнопка 
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
      <div className="bg-blue-100 p-6 rounded-xl shadow space-y-4 max-w-4xl mx-auto">
        <div className="flex justify-between items-center">
          <div>
            <h2 className="text-2xl font-bold text-blue-900">Attestations</h2>
            <p className="text-sm text-gray-600">Showing the most recent Attestations.</p>
          </div>
          <Button>Make Attestation</Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Card className="flex items-center space-x-4 p-4">
            <div className="bg-blue-200 p-3 rounded-full text-2xl">📄</div>
            <CardContent className="p-0">
              <CardTitle className="text-2xl text-blue-900">10,154</CardTitle>
              <CardDescription>Total Attestations</CardDescription>
            </CardContent>
          </Card>

          <Card className="flex items-center space-x-4 p-4">
            <div className="bg-blue-200 p-3 rounded-full text-2xl">📋</div>
            <CardContent className="p-0">
              <CardTitle className="text-2xl text-blue-900">626</CardTitle>
              <CardDescription>Unique Attestors</CardDescription>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
