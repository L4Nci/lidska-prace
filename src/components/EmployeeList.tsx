import { useEmployees } from '../hooks/useEmployees'

interface EmployeeListProps {
  selectedEmployees: Set<number>
  onEmployeeToggle: (id: number) => void
}

const EmployeeList = ({ selectedEmployees, onEmployeeToggle }: EmployeeListProps) => {
  const { employees, loading, error } = useEmployees()

  if (loading) return <div>Načítání...</div>
  if (error) return <div>Error: {error}</div>

  const employees_regular = employees.filter(emp => !emp.is_contractor)
  const employees_contractors = employees.filter(emp => emp.is_contractor)

  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <div className="space-y-6">
        {/* Zaměstnanci */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Zaměstnanci</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {employees_regular.map(employee => (
              <div key={employee.id} className="flex items-center space-x-3">
                <input
                  type="checkbox"
                  id={`employee-${employee.id}`}
                  checked={selectedEmployees.has(employee.id)}
                  onChange={() => onEmployeeToggle(employee.id)}
                  className="rounded border-gray-300"
                />
                <label htmlFor={`employee-${employee.id}`}>
                  {employee.name}
                </label>
              </div>
            ))}
          </div>
        </div>

        {/* Brigádníci */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Brigádníci</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {employees_contractors.map(employee => (
              <div key={employee.id} className="flex items-center space-x-3">
                <input
                  type="checkbox"
                  id={`employee-${employee.id}`}
                  checked={selectedEmployees.has(employee.id)}
                  onChange={() => onEmployeeToggle(employee.id)}
                  className="rounded border-gray-300"
                />
                <label htmlFor={`employee-${employee.id}`}>
                  {employee.name}
                </label>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default EmployeeList
