'use client'

import * as React from "react"
import { cn } from "@/lib/utils"

const data = [
  {
    uid: "d328e111-b0f9-487f-9194-3...",
    schema: "#1",
    schemaDesc: "User → Agent Attestation",
    from: "did:peer:21t6HKXN4UXVtdd...",
    to: "did:peer:21t6HKXN4UXVtdd...",
    time: "1 min ago",
  },
  {
    uid: "d328e111-b0f9-487f-9194-3...",
    schema: "#2",
    schemaDesc: "User → Agent Attestation",
    from: "did:peer:21t6HKXN4UXVtdd...",
    to: "did:peer:21t6HKXN4UXVtdd...",
    time: "7 min ago",
  },
  {
    uid: "d328e111-b0f9-487f-9194-3...",
    schema: "#3",
    schemaDesc: "User → Agent Attestation",
    from: "did:peer:21t6HKXN4UXVtdd...",
    to: "did:peer:21t6HKXN4UXVtdd...",
    time: "12 hours ago",
  },
  {
    uid: "d328e111-b0f9-487f-9194-3...",
    schema: "#4",
    schemaDesc: "User → Agent Attestation",
    from: "did:peer:21t6HKXN4UXVtdd...",
    to: "did:peer:21t6HKXN4UXVtdd...",
    time: "12 hours ago",
  },
  {
    uid: "d328e111-b0f9-487f-9194-3...",
    schema: "#5",
    schemaDesc: "User → Agent Attestation",
    from: "did:peer:21t6HKXN4UXVtdd...",
    to: "did:peer:21t6HKXN4UXVtdd...",
    time: "12 hours ago",
  },
  {
    uid: "d328e111-b0f9-487f-9194-3...",
    schema: "#6",
    schemaDesc: "User → Agent Attestation",
    from: "did:peer:21t6HKXN4UXVtdd...",
    to: "did:peer:21t6HKXN4UXVtdd...",
    time: "12 hours ago",
  },
]

export default function Table() {
  return (
    <div className="overflow-x-auto rounded-xl">
      <table className="min-w-full bg-white rounded-xl">
        <thead className="bg-blue-50 text-left text-sm text-gray-600">
          <tr>
            <th className="py-3 px-4">UID</th>
            <th className="py-3 px-4">Schema</th>
            <th className="py-3 px-4">From</th>
            <th className="py-3 px-4">To</th>
            <th className="py-3 px-4">Time</th>
          </tr>
        </thead>
        <tbody className="text-sm text-gray-800">
          {data.map((item, index) => (
            <tr key={index} className="border-t border-gray-200 hover:bg-gray-50">
              <td className="py-3 px-4">{item.uid}</td>
              <td className="py-3 px-4">
                <div className="flex items-center space-x-2">
                  <span className="text-white bg-cyan-500 px-2 py-0.5 rounded text-xs font-semibold">{item.schema}</span>
                  <span className="text-xs text-gray-600 bg-yellow-50 px-2 py-0.5 rounded">{item.schemaDesc}</span>
                </div>
              </td>
              <td className="py-3 px-4">{item.from}</td>
              <td className="py-3 px-4">{item.to}</td>
              <td className="py-3 px-4">{item.time}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
