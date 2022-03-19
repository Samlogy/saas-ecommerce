import React from 'react'
import { useParams } from 'react-router-dom'

function Notification() {
  const { id } = useParams()
  return <div>Notification: {id} </div>
}

export default Notification
