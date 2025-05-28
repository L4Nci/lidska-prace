import { useState } from 'react'
import { useEmployees } from '../hooks/useEmployees'
import { useShifts } from '../hooks/useShifts'
import EmployeeList from './EmployeeList'
import ResultPanel from './ResultPanel'

const CapacityCalculator = () => {
  const [selectedDate, setSelectedDate] = useState<string>(
    new Date().toISOString().split('T')[0]
  )
  const [orderCount, setOrderCount] = useState<number>(0)
  const [selectedEmployees, setSelectedEmployees] = useState<Set<number>>(new Set())
  const { employees } = useEmployees()
  const { shifts } = useShifts()

  const getDayName = (dateStr: string): string => {
    const days = ['Neděle', 'Pondělí', 'Úterý', 'Středa', 'Čtvrtek', 'Pátek', 'Sobota']
    const date = new Date(dateStr)
    return days[date.getDay()]
  }

  const getCurrentShift = (dateStr: string): number | undefined => {
    const dayOfWeek = new Date(dateStr).getDay() || 7
    return shifts.find(s => s.day_of_week === dayOfWeek)?.hours
  }

  const getDayOfWeek = (dateStr: string): number => {
    const date = new Date(dateStr)
    return date.getDay() || 7 // převede neděli (0) na 7
  }

  const handleEmployeeToggle = (employeeId: number) => {
    const newSelected = new Set(selectedEmployees)
    if (newSelected.has(employeeId)) {
      newSelected.delete(employeeId)
    } else {
      newSelected.add(employeeId)
    }
    setSelectedEmployees(newSelected)
  }

  const calculateCapacity = () => {
    const dayOfWeek = getDayOfWeek(selectedDate)
    const shift = shifts.find(s => s.day_of_week === dayOfWeek)
    const hours = shift?.hours || 0
    
    let totalPickRate = 0
    let totalPackRate = 0
    
    selectedEmployees.forEach(empId => {
      const employee = employees.find(e => e.id === empId)
      if (employee) {
        const pickRates: Record<number, number> = {
          1: employee.pick_rate_mon,
          2: employee.pick_rate_tue,
          3: employee.pick_rate_wed,
          4: employee.pick_rate_thu,
          5: employee.pick_rate_fri
        }
        const packRates: Record<number, number> = {
          1: employee.pack_rate_mon,
          2: employee.pack_rate_tue,
          3: employee.pack_rate_wed,
          4: employee.pack_rate_thu,
          5: employee.pack_rate_fri
        }

        const pickRate = (pickRates[dayOfWeek] || 0) * hours
        const packRate = (packRates[dayOfWeek] || 0) * hours

        totalPickRate += pickRate
        totalPackRate += packRate
      }
    })

    return {
      pickCapacity: totalPickRate,
      packCapacity: totalPackRate,
      totalCapacity: Math.min(totalPickRate, totalPackRate),
    }
  }

  const capacity = calculateCapacity()

  return (
    <div className="space-y-6">
      <div className="bg-white p-6 rounded-lg shadow">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Datum
              </label>
              <input
                type="date"
                value={selectedDate}
                onChange={(e) => setSelectedDate(e.target.value)}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>
            <div className="text-sm text-gray-600">
              <div>Den: {getDayName(selectedDate)}</div>
              <div>Počet pracovních hodin: {getCurrentShift(selectedDate) || 0}h</div>
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Počet objednávek
            </label>
            <input
              type="number"
              value={orderCount}
              onChange={(e) => setOrderCount(Number(e.target.value))}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              min="0"
            />
          </div>
        </div>
      </div>

      {/* Seznam zaměstnanců */}
      <EmployeeList
        selectedEmployees={selectedEmployees}
        onEmployeeToggle={handleEmployeeToggle}
      />

      {/* Výsledkový panel */}
      <ResultPanel
        capacity={capacity}
        orderCount={orderCount}
      />
    </div>
  )
}

export default CapacityCalculator
