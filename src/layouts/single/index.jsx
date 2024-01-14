import React, { useEffect } from 'react'
import SingleComponent from '../../components/single'

export default function Single() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <>
      <SingleComponent />
    </>
  )
}
