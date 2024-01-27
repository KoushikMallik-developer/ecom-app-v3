import HomeCarousel from '../home_page/carousel';
import { MDBContainer, MDBRow } from 'mdb-react-ui-kit';
import bank_offer_img from '..//..//assets/homepage/homepage_bank_offer.png'
import TrendingProductCard from '../home_page/trending_products';
import OfferCard from '../home_page/offer_card';
import CategoriesCard from '../home_page/categories_card';
import RecentlyViewedItems from '../home_page/recently_viewed';


const Home = () => {

  const hotDealsData = {
    id: "hot_deals",
    data:
      [
        {
          label: "Up to 40% off | Deals on popular brand",
          details: 
            [
              { id: 1, description: 'Savings up to ₹14,000' },
              { id: 2, description: 'Savings up to ₹29,999' },
              { id: 3, description: 'Savings up to ₹4,999' },
              { id: 4, description: 'Savings up to ₹11,000' },
            ]
        },
        {
          label: "Up to 60% off | Deals on popular brand",
          details: 
            [
              { id: 1, description: 'Savings up to ₹41,000' },
              { id: 2, description: 'Savings up to ₹9,999' },
              { id: 3, description: 'Savings up to ₹4,999' },
              { id: 4, description: 'Savings up to ₹8,999' },
            ]
        },
        {
          label: "Up to 60% off | Deals on popular brand",
          details: 
            [
              { id: 1, description: 'Savings up to ₹41,000' },
              { id: 2, description: 'Savings up to ₹9,999' },
              { id: 3, description: 'Savings up to ₹4,999' },
              { id: 4, description: 'Savings up to ₹8,999' },
            ]
        },
        {
          label: "Up to 60% off | Deals on popular brand",
          details: 
            [
              { id: 1, description: 'Savings up to ₹41,000' },
              { id: 2, description: 'Savings up to ₹9,999' },
              { id: 3, description: 'Savings up to ₹4,999' },
              { id: 4, description: 'Savings up to ₹8,999' },
            ]
        },
      ]
  };

  const trendingProducts = {
    id: "trending_products",
    data:
      [
        {
          label: "ASUS Laptops",
          details: 
            [
              { id: 1, description: 'Savings up to ₹14,000' },
              { id: 2, description: 'Savings up to ₹29,999' },
              { id: 3, description: 'Savings up to ₹4,999' },
              { id: 4, description: 'Savings up to ₹11,000' },
            ]
        },
        {
          label: "Iphones",
          details: 
            [
              { id: 1, description: 'Savings up to ₹41,000' },
              { id: 2, description: 'Savings up to ₹9,999' },
              { id: 3, description: 'Savings up to ₹4,999' },
              { id: 4, description: 'Savings up to ₹8,999' },
            ]
        },
        {
          label: "Samsung Mobiles",
          details: 
            [
              { id: 1, description: 'Savings up to ₹41,000' },
              { id: 2, description: 'Savings up to ₹9,999' },
              { id: 3, description: 'Savings up to ₹4,999' },
              { id: 4, description: 'Savings up to ₹8,999' },
            ]
        },
        {
          label: "Furnitures",
          details: 
            [
              { id: 1, description: 'Savings up to ₹41,000' },
              { id: 2, description: 'Savings up to ₹9,999' },
              { id: 3, description: 'Savings up to ₹4,999' },
              { id: 4, description: 'Savings up to ₹8,999' },
            ]
        },
      ]
  };

  const categoriesOffers = {
    id: "trending_products",
    data:
      [
        {
          label: "ASUS Laptops",
          details: 
            [
              { id: 1, description: 'Flat Rs. 1999 off' },
              { id: 2, description: 'Savings up to ₹29,999' },
              { id: 3, description: 'Savings up to ₹4,999' },
              { id: 4, description: 'Savings up to ₹11,000' },
            ]
        },
        {
          label: "Iphones",
          details: 
            [
              { id: 1, description: '25% Instant off' },
              { id: 2, description: 'Savings up to ₹9,999' },
              { id: 3, description: 'Savings up to ₹4,999' },
              { id: 4, description: 'Savings up to ₹8,999' },
            ]
        },
        {
          label: "Samsung Mobiles",
          details: 
            [
              { id: 1, description: 'Up to 15% off' },
              { id: 2, description: 'Savings up to ₹9,999' },
              { id: 3, description: 'Savings up to ₹4,999' },
              { id: 4, description: 'Savings up to ₹8,999' },
            ]
        },
        {
          label: "Furnitures",
          details: 
            [
              { id: 1, description: 'Flat Rs. 1000 off' },
              { id: 2, description: 'Savings up to ₹9,999' },
              { id: 3, description: 'Savings up to ₹4,999' },
              { id: 4, description: 'Savings up to ₹8,999' },
            ]
        },
        {
          label: "Smart Watches",
          details: 
            [
              { id: 1, description: 'Flat Rs. 500 off' },
              { id: 2, description: 'Savings up to ₹9,999' },
              { id: 3, description: 'Savings up to ₹4,999' },
              { id: 4, description: 'Savings up to ₹8,999' },
            ]
        },
        {
          label: "Earpods",
          details: 
            [
              { id: 1, description: 'Flat Rs. 500 off' },
              { id: 2, description: 'Savings up to ₹9,999' },
              { id: 3, description: 'Savings up to ₹4,999' },
              { id: 4, description: 'Savings up to ₹8,999' },
            ]
        },
      ]
  };

  return (
    <div className='my-2 mx-5'>
      
      <MDBContainer fluid className='px-5'>
        <MDBRow>
          {/*<MDBCol sm={3}>*/}
          {/*  <HomepageCategories />*/}
          {/*</MDBCol>*/}
          {/*<MDBCol sm={9} className='my-auto mx-auto'>*/}
            <HomeCarousel />
          {/*</MDBCol>*/}
        </MDBRow>

        <MDBRow className='shadow-5-strong mx-0 d-flex justify-content-center mb-4'>
          <img className='px-2 py-1 my-3 rounded-4 shadow-5-strong' style={{ width: '750px', height: '75px' }} src={bank_offer_img}></img>
        </MDBRow>

        <MDBRow className='shadow-5-strong mx-0 mb-4'>
          <h5 className='fw-bold my-3 text-capitalize'>HOT DEALS</h5>
          <div className='d-flex justify-content-between px-4'>
          <OfferCard hotDealsData={hotDealsData} />
          </div>
        </MDBRow>

        <MDBRow className='shadow-5-strong mx-0 mb-4'>
          <h5 className='fw-bold my-3 text-capitalize'>TRENDING PRODUCTS</h5>
          <div className='d-flex justify-content-between px-4'>
          <TrendingProductCard trending_products={trendingProducts} />
          </div>
        </MDBRow>

        <MDBRow className='shadow-5-strong mx-0 mb-4'>
          <h5 className='fw-bold my-3 text-capitalize'>SHOP BY CATEGORIES</h5>
          <div className='d-flex justify-content-between px-4'>
          <CategoriesCard categoriesOffers={categoriesOffers} />
          </div>
        </MDBRow>

        <MDBRow className='shadow-5-strong mx-0 mb-4'>
          <h5 className='fw-bold my-3 text-capitalize'>RECENTLY VIEWED</h5>
          <div className='d-flex justify-content-between px-4'>
          <RecentlyViewedItems categoriesOffers={categoriesOffers} />
          </div>
        </MDBRow>

      </MDBContainer>
    </div>
  );
}


export default Home;
