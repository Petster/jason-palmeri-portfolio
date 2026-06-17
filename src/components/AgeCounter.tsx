'use client'

import { useEffect, useState } from 'react'

function calculateAge() {
  const today = new Date()
  const birthDate = new Date(2000, 9, 30)
  let age = today.getFullYear() - birthDate.getFullYear()
  const hasHadBirthdayThisYear =
    today.getMonth() > birthDate.getMonth() ||
    (today.getMonth() === birthDate.getMonth() && today.getDate() >= birthDate.getDate())

  if (!hasHadBirthdayThisYear) {
    age -= 1
  }

  return age
}

export default function AgeCounter() {
  const [age, setAge] = useState<number | null>(null)

  useEffect(() => {
    setAge(calculateAge())
  }, [])

  return <>{age ?? '...'}</>
}
