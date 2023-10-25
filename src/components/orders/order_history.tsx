import  { useState, useEffect } from 'react';
import { getOrderHistory } from '../../services/api';

const OrderHistory = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchOrderHistory = async () => {
      try {
        const response = await getOrderHistory();
        setOrders(response.data);
      } catch (error) {
        console.error('Error fetching order history:', error);
      }
    };

    fetchOrderHistory();
  }, []);

  return (
    <div>
      <h2>Order History</h2>
      {orders.map((order) => (
        <div key={order.id}>
          <p>Order ID: {order.id}</p>
          <p>Date: {order.date}</p>
          {/* Additional order details */}
        </div>
      ))}
    </div>
  );
}

export default OrderHistory;
