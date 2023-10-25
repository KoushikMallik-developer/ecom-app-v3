
import {
  MDBRow,
  MDBCol
} from 'mdb-react-ui-kit';
import ProductCard from './home_product_card';


export default function TrendingProductCard(props) {
  return (
    <MDBRow className=''>
    {
        props.trending_products.data.map(data => (
        <MDBCol>
            <ProductCard data={data}/>
        </MDBCol>   
        ))
    }
    </MDBRow>
  );
}