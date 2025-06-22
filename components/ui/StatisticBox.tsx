import React from "react"

interface StatisticBoxProps {
  icon: React.ReactNode
  value: string | number
  label: string
}

export const StatisticBox = ({ icon, value, label }: StatisticBoxProps) => {
  return (
    <div className="flex items-center space-x-4 p-4 rounded-xl border bg-white text-black shadow">
      <div className="bg-blue-200 p-3 rounded-full text-2xl">{icon}</div>
      <div>
        <div className="text-2xl font-semibold text-blue-900">{value}</div>
        <div className="text-sm text-gray-500">{label}</div>
      </div>
    </div>
  )
}
