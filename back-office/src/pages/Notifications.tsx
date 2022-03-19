import React, { useState, useEffect } from 'react'

function Notifications() {
  const [notifications, setNotifications] = useState([])
  useEffect(() => {
    // load notification by id (useQuery)
    // setNotification({})
  }, [])
  return <div>Notifications</div>
}

export default Notifications
