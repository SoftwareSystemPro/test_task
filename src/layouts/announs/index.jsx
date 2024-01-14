import React, { useEffect } from 'react'
import AnnouncComponent from '../../components/announc'

export default function Announc() {
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
    return (
        <>
            <AnnouncComponent />
        </>
    )
}
