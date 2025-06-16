import React from "react"

export default function AssetsBlock() {
  const assets = [
    { icon: "🪙", name: "Token A", value: "100.00" },
    { icon: "💎", name: "Token B", value: "250.00" },
    { icon: "🧠", name: "Token C", value: "75.50" },
  ]

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
      {assets.map((asset, index) => (
        <div key={index} className="bg-white rounded-xl shadow p-4 flex items-center space-x-4">
          <div className="text-2xl">{asset.icon}</div>
          <div>
            <div className="text-gray-800 font-semibold">{asset.name}</div>
            <div className="text-gray-500 text-sm">{asset.value}</div>
          </div>
        </div>
      ))}
    </div>
  )
}
