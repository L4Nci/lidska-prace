import { useState, useEffect } from 'react'
import { supabase } from '../lib/supabase'

export interface Shift {
  id: number
  day_of_week: number
  hours: number
}

export const useShifts = () => {
  const [shifts, setShifts] = useState<Shift[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchShifts = async () => {
      try {
        const { data, error } = await supabase
          .from('shifts')
          .select('*')
          .order('day_of_week')

        if (error) throw error
        setShifts(data || [])
      } catch (e) {
        setError(e.message)
      } finally {
        setLoading(false)
      }
    }

    fetchShifts()
  }, [])

  return { shifts, loading, error }
}
