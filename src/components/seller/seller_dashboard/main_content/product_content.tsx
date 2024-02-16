import {
    MDBBreadcrumb,
    MDBBreadcrumbItem,
    MDBCard,
    MDBCardBody,
    MDBCardImage, MDBCardText,
    MDBCardTitle,
    MDBCol,
    MDBRow, MDBDropdown, MDBDropdownMenu, MDBDropdownToggle, MDBDropdownItem
} from "mdb-react-ui-kit";
import {Link} from "react-router-dom";
import {Button, DialogActions, DialogContent, DialogTitle, Divider, IconButton, Modal} from "@mui/material";
import AutoFixHighIcon from '@mui/icons-material/AutoFixHigh';
import AutoDeleteIcon from '@mui/icons-material/AutoDelete';
import WarningAmberIcon from '@mui/icons-material/WarningAmber';
import * as React from 'react';
import ModalDialog from '@mui/joy/ModalDialog';


const ProductContent = () => {


    const dummyProducts: Product[] = [
        {
            prd_ID: 1,
            name: "Casio G sock Watch",
            mrpPrice: 100.99,
            offerPrice: 10.99,
            description: "Description for Product 1",
            image: "src/assets/seller/watch_prd.jpg",
            category: "Wear",
            subCategory: "Cotton",
            genderCategory: "Male",
            availableQty: 15
        },
        {
            prd_ID: 2,
            name: "Faitch&Earn T-Shirt",
            mrpPrice: 19.99,
            offerPrice: 10.99,
            description: "Description for Product 2",
            image: "src/assets/seller/shirt_prd.jpg",
            category: "Cloth",
            subCategory: "Regular Fabric",
            genderCategory: "Unisex",
            availableQty: 1
        },
        {
            prd_ID: 3,
            name: "Mountain Cap",
            mrpPrice: 9.99,
            offerPrice: 0.99,
            description: "Description for Product 3",
            image: "src/assets/seller/cap_prd.jpg",
            category: "Ware",
            subCategory: "",
            genderCategory: "Unisex",
            availableQty: 5
        },
        {
            prd_ID: 4,
            name: "Tatti Phone",
            mrpPrice: 799.99,
            offerPrice: 599.99,
            description: "Description for Product 3",
            image: "src/assets/seller/phone_prd.jpg",
            category: "Electronics",
            subCategory: "Smart-Phone",
            genderCategory: "-",
            availableQty: 5
        },
    ];

    function isNotEmptyNullOrZero(value: any): string {
        if (value !== null && value !== undefined && value !== 0 && value !== '') {
            return value;
        } else {
            return 'NA';
        }
    }


    const [open, setOpen] = React.useState<boolean>(false);


    return (
        <div>
            {/*<MDBRow className="d-flex bg-dark">*/}
            {/*    <MDBBreadcrumb>*/}
            {/*        <MDBBreadcrumbItem>*/}
            {/*            <Link to="/seller_products">Products</Link>*/}
            {/*        </MDBBreadcrumbItem>*/}
            {/*    </MDBBreadcrumb>*/}
            {/*    <MDBDropdown>*/}
            {/*        <MDBDropdownMenu responsive='lg-end'>*/}
            {/*            <MDBDropdownToggle>Left-aligned but right aligned when large screen</MDBDropdownToggle>*/}
            {/*            <MDBDropdownItem link childTag='button'>*/}
            {/*                Action*/}
            {/*            </MDBDropdownItem>*/}
            {/*            <MDBDropdownItem link childTag='button'>*/}
            {/*                Another action*/}
            {/*            </MDBDropdownItem>*/}
            {/*            <MDBDropdownItem link childTag='button'>*/}
            {/*                Something else here*/}
            {/*            </MDBDropdownItem>*/}
            {/*        </MDBDropdownMenu>*/}
            {/*    </MDBDropdown>*/}
            {/*</MDBRow>*/}
            <MDBRow className="d-flex align-items-center align-content-between">

                <MDBBreadcrumb>
                    <MDBBreadcrumbItem>
                        <Link to="/seller_products">Products</Link>
                    </MDBBreadcrumbItem>
                </MDBBreadcrumb>

                <MDBDropdown>
                    <MDBDropdownToggle className="btn btn-dark">
                        Filter Categories
                    </MDBDropdownToggle>
                    <MDBDropdownMenu>
                        <MDBDropdownItem>
                            Cloths
                        </MDBDropdownItem>
                        <MDBDropdownItem>
                            Watch </MDBDropdownItem>
                        <MDBDropdownItem>
                            Electronics </MDBDropdownItem>
                    </MDBDropdownMenu>
                </MDBDropdown>
            </MDBRow>

            <MDBRow className='row-cols-1 row-cols-md-3 g-4 d-flex'>
                {dummyProducts.map((product) => (
                    <MDBCol>
                        <MDBCard className='h-100'>
                            <MDBCardImage
                                src={product.image}
                                alt='...'
                                style={{aspectRatio: "1/1", objectFit: "cover"}}
                                position='top'
                                height="200"
                                width="50"
                            />
                            <MDBCardBody>
                                <MDBCardTitle>{isNotEmptyNullOrZero(product.name)}</MDBCardTitle>
                                <div className="d-flex flex-row">
                                    <MDBCardText style={{paddingRight: "10px"}}
                                                 className="text-success">₹{isNotEmptyNullOrZero(product.offerPrice)}</MDBCardText>
                                    <MDBCardText style={{
                                        textDecoration: 'line-through',
                                        paddingRight: "10px"
                                    }} className="text-denger">₹{isNotEmptyNullOrZero(product.mrpPrice)}</MDBCardText>
                                    <MDBCardText>Gender: {isNotEmptyNullOrZero(product.genderCategory)}</MDBCardText>
                                </div>
                                <div className="d-flex flex-row">
                                    <MDBCardText
                                        style={{paddingRight: "10px"}}>Category: {isNotEmptyNullOrZero(product.category)}</MDBCardText>
                                    <MDBCardText>Sub-Category: {isNotEmptyNullOrZero(product.genderCategory)}</MDBCardText>
                                </div>

                                <MDBCardText>Available
                                    Quantity: {isNotEmptyNullOrZero(product.availableQty)}</MDBCardText>

                                <div className="align-items-center justify-content-between text-center">
                                    <Button
                                        component="label"
                                        role={undefined}
                                        variant="contained"
                                        tabIndex={-1}
                                        startIcon={<AutoFixHighIcon/>}
                                    >Customize It</Button>
                                    <IconButton aria-label="delete" size="large" style={{color: "red"}}
                                                onClick={() => setOpen(true)}>
                                        <AutoDeleteIcon fontSize="inherit"/>
                                    </IconButton>
                                    <Modal open={open} onClose={() => setOpen(false)}>
                                        <ModalDialog variant="outlined" role="alertdialog">
                                            <DialogTitle>
                                                <WarningAmberIcon/>
                                                Confirmation
                                            </DialogTitle>
                                            <Divider/>
                                            <DialogContent>
                                                Are you sure? You want to discard {product.name}!
                                            </DialogContent>
                                            <DialogActions>
                                                <Button variant="solid" color="danger" onClick={() => setOpen(false)}>
                                                    Discard notes
                                                </Button>
                                                <Button variant="plain" color="neutral" onClick={() => setOpen(false)}>
                                                    Cancel
                                                </Button>
                                            </DialogActions>
                                        </ModalDialog>
                                    </Modal>
                                </div>

                            </MDBCardBody>
                        </MDBCard>
                    </MDBCol>
                ))}
            </MDBRow>

        </div>
    )
}
export default ProductContent
