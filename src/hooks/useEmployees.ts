import { useState, useEffect } from 'react'
import { supabase } from '../lib/supabase'

export interface Employee {
  id: number
  name: string
  is_contractor: boolean
  active: boolean
  pick_rate_mon: number
  pick_rate_tue: number
  pick_rate_wed: number
  pick_rate_thu: number
  pick_rate_fri: number
  pack_rate_mon: number
  pack_rate_tue: number
  pack_rate_wed: number
  pack_rate_thu: number
  pack_rate_fri: number
}

export const useEmployees = () => {
  const [employees, setEmployees] = useState<Employee[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        const { data, error } = await supabase
          .from('employees')
          .select('*')
          .eq('active', true)

        if (error) throw error

        setEmployees(data || [])
      } catch (e: unknown) {
        setError(e instanceof Error ? e.message : 'Unknown error occurred')
      } finally {
        setLoading(false)
      }
    }

    fetchEmployees()
  }, [])

  return { employees, loading, error }
}
