'use client'

import React from "react"
import Table from "@/components/ui/Table"
import Pagination from "@/components/ui/Pagination"
import AssetsBlock from "@/components/ui/AssetsBlock"

export default function AttestationsPage() {
  return (
    <div className="min-h-screen bg-blue-50 p-8">
      <div className="bg-blue-100 p-6 rounded-xl shadow max-w-6xl mx-auto space-y-6">
        <h2 className="text-2xl font-bold text-blue-900">Attestations History</h2>
        <AssetsBlock />
        <Table />
        <Pagination />
      </div>
    </div>
  )
}
