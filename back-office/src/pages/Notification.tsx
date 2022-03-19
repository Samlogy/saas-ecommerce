import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function Notification() {
  const [notification, setNotification] = useState({})
  const { id } = useParams()
  useEffect(() => {
    // load notification by id (useQuery)
    // setNotification({})
  }, [])
  return <div>Notification: {id} </div>
}

export default Notification
