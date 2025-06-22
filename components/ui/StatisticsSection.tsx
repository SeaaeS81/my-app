import React from "react"
import { StatisticBox } from "@/components/ui/StatisticBox"

const StatisticsSection = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
      <StatisticBox
        icon="📄"
        value="10,154"
        label="Total Attestations"
      />
      <StatisticBox
        icon="📋"
        value="626"
        label="Unique Attestors"
      />
    </div>
  )
}

export default StatisticsSection
