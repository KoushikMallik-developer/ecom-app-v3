import  { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getProduct } from '../../services/api';

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await getProduct(id);
        setProduct(response.data);
      } catch (error) {
        console.error('Error fetching product:', error);
      }
    };

    fetchProduct();
  }, [id]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>Product Detail</h2>
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <p>Price: {product.price}</p>
    </div>
  );
}

export default ProductDetail;
