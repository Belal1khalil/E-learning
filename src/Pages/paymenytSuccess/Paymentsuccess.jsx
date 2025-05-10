import axios from 'axios'
import React, { useEffect, useState } from 'react'

export default function PaymentSuccess() {
  const [order, setOrder] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  const queryParams = new URLSearchParams(location.search)
  const session_id = queryParams.get('session_id')

  useEffect(() => {
    async function getOrderDetails() {
      try {
        const { data } = await axios.get(
          `https://brightminds.runasp.net/api/Order/session?sessionId=${session_id}`
        )
        setOrder(data.data)
      } catch (err) {
        setError('Failed to load order details.')
      } finally {
        setLoading(false)
      }
    }

    if (session_id) getOrderDetails()
  }, [session_id])

  if (loading) return <div className="p-10 text-center text-xl">Loading...</div>
  if (error) return <div className="p-10 text-center text-red-600">{error}</div>

  return (
    <div className="max-w-5xl mx-auto p-6">
      <div className="bg-green-100 border border-green-300 rounded-2xl p-6 shadow-md mb-8 text-center">
        <h1 className="text-3xl font-bold text-green-700">Payment Successful 🎉</h1>
        <p className="text-gray-700 mt-2">Thank you, <span className="font-semibold">{order.userName}</span>!</p>
        <p className="text-sm text-gray-600">Order ID: #{order.id}</p>
      </div>

      <div className="bg-white rounded-xl shadow p-6 mb-8">
        <h2 className="text-xl font-bold mb-4 text-gray-800">Order Summary</h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-sm text-gray-700">
          <div>
            <p className="font-semibold">Date:</p>
            <p>{new Date(order.creationDate).toLocaleDateString()}</p>
          </div>
          <div>
            <p className="font-semibold">Status:</p>
            <p className="text-green-600">{order.status}</p>
          </div>
          <div>
            <p className="font-semibold">Courses:</p>
            <p>{order.items.length}</p>
          </div>
          <div>
            <p className="font-semibold">Total Paid:</p>
            <p className="text-blue-600">${order.totalCost.toFixed(2)}</p>
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-bold mb-4 text-gray-800">Courses Purchased</h2>
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
          {order.items.map((item) => (
            <div key={item.id} className="border rounded-xl shadow p-4 bg-white">
              <img
                src={item.imageUrl}
                alt={item.courseName}
                className="w-full h-40 object-cover rounded-lg mb-3"
              />
              <h3 className="font-semibold text-lg">{item.courseName}</h3>
              <p className="text-sm text-gray-500">Price: ${item.price}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
