import React from "react"

export default function Pagination() {
  return (
    <div className="flex items-center justify-between text-sm text-gray-600 pt-4">
      <button className="text-blue-700 hover:underline" disabled>← Previous</button>
      <div className="flex space-x-2">
        <span className="w-8 h-8 rounded bg-white shadow text-center leading-8">1</span>
        <span className="w-8 h-8 text-center leading-8">2</span>
        <span className="w-8 h-8 text-center leading-8">3</span>
        <span className="w-8 h-8 text-center leading-8">…</span>
        <span className="w-8 h-8 text-center leading-8">10</span>
      </div>
      <button className="text-blue-700 hover:underline">Next →</button>
    </div>
  )
}
