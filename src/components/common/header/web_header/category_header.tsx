import {
    MDBNavbar,
    MDBContainer,
    MDBNavbarNav,
    MDBNavbarItem,
    MDBNavbarLink
} from 'mdb-react-ui-kit';
import  "../../../../assets/css/home_page_css/home_category_style.css"

const CategoryHeader = () => {
    const categories = ["Woman", "Male", "Mother-Child", "Home & Furniture", "Super market",
        "Cosmetics", "Shoe & Bag", "Electronic", "Sport & Outdoor", "Best seller"];

    return (
        <MDBNavbar expand='lg' light bgColor='light'>
            <MDBContainer fluid className="mx-5 px-5">

                <MDBNavbarNav className='mr-auto mb-2 mb-lg-0 justify-content-between text-center'>
                    {categories.map((category, index) => (
                        <MDBNavbarItem key={index}>
                            <MDBNavbarLink className="category-link">{category}</MDBNavbarLink>
                        </MDBNavbarItem>
                    ))}
                    {/*<MDBNavbarItem>
                        <MDBNavbarLink active aria-current='page' href='#'>
                            Brand
                        </MDBNavbarLink>
                    </MDBNavbarItem>
                    <MDBNavbarItem>
                        <MDBNavbarLink href='#'>Link</MDBNavbarLink>
                    </MDBNavbarItem>

                    <MDBNavbarItem>
                        <MDBDropdown>
                            <MDBDropdownToggle tag='a' className='nav-link' role='button'>
                                Dropdown
                            </MDBDropdownToggle>
                            <MDBDropdownMenu>
                                <MDBDropdownItem link>Action</MDBDropdownItem>
                                <MDBDropdownItem link>Another action</MDBDropdownItem>
                                <MDBDropdownItem link>Something else here</MDBDropdownItem>
                            </MDBDropdownMenu>
                        </MDBDropdown>
                    </MDBNavbarItem>*/}
                </MDBNavbarNav>


            </MDBContainer>
        </MDBNavbar>
    )
}
export default CategoryHeader
