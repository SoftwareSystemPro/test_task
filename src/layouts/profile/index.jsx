import React, { useEffect } from 'react'
import ProfileComponent from '../../components/profile'

export default function Profile() {
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
    return (
        <>
            <ProfileComponent />
        </>
    )
}
