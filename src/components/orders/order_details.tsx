import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
// import { getOrder } from '../services/api';
import { getOrder } from '../../services/api';

const OrderDetails = () => {
  const { id } = useParams();
  const [order, setOrder] = useState(null);

  useEffect(() => {
    const fetchOrder = async () => {
      try {
        const response = await getOrder(id);
        setOrder(response.data);
      } catch (error) {
        console.error('Error fetching order:', error);
      }
    };

    fetchOrder();
  }, [id]);

  if (!order) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>Order Details</h2>
      <p>Order ID: {order.id}</p>
      <p>Date: {order.date}</p>
      {/* Additional order details */}
    </div>
  );
}

export default OrderDetails;
