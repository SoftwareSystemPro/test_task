import React, { useEffect } from 'react'
import Hero from '../../components/hero/index'
import LastComponent from '../../components/last'

export default function Home() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <>
      <Hero />
      <LastComponent />
    </>
  )
}
