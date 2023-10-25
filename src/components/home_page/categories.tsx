import { Link } from 'react-router-dom';
import { MDBDropdown, MDBDropdownItem, MDBDropdownMenu, MDBDropdownToggle, MDBListGroup, MDBListGroupItem } from 'mdb-react-ui-kit';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';
import ComputerIcon from '@mui/icons-material/Computer';
import CheckroomIcon from '@mui/icons-material/Checkroom';
import ShowerIcon from '@mui/icons-material/Shower';
import ChairIcon from '@mui/icons-material/Chair';
import KitchenIcon from '@mui/icons-material/Kitchen';
import TwoWheelerIcon from '@mui/icons-material/TwoWheeler';
import GrassIcon from '@mui/icons-material/Grass';
import ToysIcon from '@mui/icons-material/Toys';

const CategoriesList = () => {
    const categoriesData = [
        { id: 1, name: 'Grocery', icon: <LocalGroceryStoreIcon/> },
        { id: 2, name: 'Mobiles & Accesories', icon: <PhoneIphoneIcon/> },
        { id: 3, name: 'Fashion', icon: <CheckroomIcon/> },
        { id: 4, name: 'Beauty & Care', icon: <ShowerIcon/>},
        { id: 5, name: 'Electronics', icon: <ComputerIcon/> },
        { id: 6, name: 'Home & Furnitures', icon: <ChairIcon/> },
        { id: 7, name: 'Appliances', icon: <KitchenIcon/>},
        { id: 8, name: 'Automobiles & Accesories', icon: <TwoWheelerIcon/>},
        { id: 9, name: 'Plants', icon: <GrassIcon/>},
        { id: 10, name: 'Toys & Gifts', icon: <ToysIcon/>},
      ];
      
  return (
    <div className='shadow-5-strong'>
      <h5 className='fw-bold bg-light mt-4 pt-3 pb-2 mb-1 text-center text-capitalize'>TOP CATEGORIES</h5>
      <MDBListGroup className='rounded-0 bg-light pb-1'>
      {categoriesData.map((category) => (
        <>
        <Link to=''>
        <MDBListGroupItem key={category.id} hover noBorders className='d-flex justify-content-between align-items-center py-2 px-4'>
          <div className='d-flex fw-bold align-items-center'>
            
          {/* <MDBIcon fas icon={category.icon} /> */}
          {category.icon}
            
            {/* <img
              src='https://mdbootstrap.com/img/new/avatars/8.jpg'
              alt={category.name}
              style={{ width: '25px', height: '25px' }}
              className=''
            /> */}
            <div className='mx-3'>
            <MDBDropdown dropright>
        <MDBDropdownToggle tag='a' className='text-dark' role='button'>{category.name}</MDBDropdownToggle>
        <MDBDropdownMenu>
          <MDBDropdownItem link>Action</MDBDropdownItem>
          <MDBDropdownItem link>Another action</MDBDropdownItem>
          <MDBDropdownItem link>Something else here</MDBDropdownItem>
          <MDBDropdownItem divider />
          <MDBDropdownItem link>Separated link</MDBDropdownItem>
        </MDBDropdownMenu>
      </MDBDropdown>
              {/* <p className='fw-bold mb-0'>{category.name}</p> */}
              {/* <p className='text-muted mb-0'>john.doe@gmail.com</p> */}
            </div>
          </div>
        </MDBListGroupItem>
        </Link>
        </>
      ))}
        
      </MDBListGroup>
    </div>
  );
}

export default CategoriesList;