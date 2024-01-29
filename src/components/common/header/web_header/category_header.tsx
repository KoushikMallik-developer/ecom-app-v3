import {
    MDBNavbar,
    MDBContainer,
    MDBNavbarNav,
    MDBNavbarItem,
    MDBNavbarLink,
    MDBDropdown,
    MDBDropdownMenu,
    MDBDropdownToggle,
    MDBDropdownItem
} from 'mdb-react-ui-kit';

const CategoryHeader = () => {
    // const categories = ["men"];

    return (
        <MDBNavbar expand='lg' light bgColor='light'>
            <MDBContainer fluid className="mx-5 px-5">

                <MDBNavbarNav className='mr-auto mb-2 mb-lg-0'>
                    <MDBNavbarItem>
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
                    </MDBNavbarItem>
                </MDBNavbarNav>


            </MDBContainer>
        </MDBNavbar>
    )
}
export default CategoryHeader
