interface ResultPanelProps {
  capacity: {
    pickCapacity: number
    packCapacity: number
    totalCapacity: number
    regularEmployeesPickCapacity: number
    regularEmployeesPackCapacity: number
  }
  orderCount: number
}

const ResultPanel = ({ capacity, orderCount }: ResultPanelProps) => {
  const fulfillmentPercentage = orderCount > 0 
    ? Math.round((capacity.totalCapacity / orderCount) * 100) 
    : 0

  const getStatusColor = (percentage: number) => {
    if (percentage < 90) return 'text-red-600'
    if (percentage > 110) return 'text-yellow-600'
    return 'text-green-600'
  }

  return (
    <div className="bg-white p-6 rounded-lg shadow space-y-6">
      <h2 className="text-lg font-semibold mb-4">Výsledky</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Celkové výsledky */}
        <div className="space-y-2">
          <h3 className="font-medium">Celková kapacita (všichni)</h3>
          <div className="text-xl">
            <div>Vypickují: <span className="font-bold">{capacity.pickCapacity} ks</span></div>
            <div>Zabalí: <span className="font-bold">{capacity.packCapacity} ks</span></div>
          </div>
        </div>

        {/* Výsledky bez brigádníků */}
        <div className="space-y-2">
          <h3 className="font-medium">Kapacita (bez brigádníků)</h3>
          <div className="text-xl">
            <div>Vypickují: <span className="font-bold">{capacity.regularEmployeesPickCapacity} ks</span></div>
            <div>Zabalí: <span className="font-bold">{capacity.regularEmployeesPackCapacity} ks</span></div>
          </div>
        </div>
      </div>

      {/* Plnění plánu */}
      <div className="space-y-4">
        <div className={`text-xl font-bold ${getStatusColor(fulfillmentPercentage)}`}>
          Plán splněn: {fulfillmentPercentage} %
        </div>

        {/* Přidaná legenda */}
        <div className="text-sm grid grid-cols-1 gap-2">
          <div className="text-red-600">🔴 Pod 90% - Nedostatečná kapacita</div>
          <div className="text-green-600">🟢 90-110% - Optimální kapacita</div>
          <div className="text-yellow-600">🟡 Nad 110% - Přebytek kapacity</div>
        </div>
      </div>

      {/* Doporučení */}
      <div className="mt-4 p-4 rounded-md border">
        <div className="font-semibold mb-2">Doporučení:</div>
        {fulfillmentPercentage > 110 && (
          <div className="text-yellow-600">⚠️ Přebytek kapacity – zvážit nevolat brigádníka</div>
        )}
        {fulfillmentPercentage < 90 && (
          <div className="text-red-600">⚠️ Nedostatečná kapacita – zvážit povolat brigádníka</div>
        )}
        {fulfillmentPercentage >= 90 && fulfillmentPercentage <= 110 && (
          <div className="text-green-600">✅ Kapacita odpovídá plánu</div>
        )}
      </div>
    </div>
  )
}

export default ResultPanel
