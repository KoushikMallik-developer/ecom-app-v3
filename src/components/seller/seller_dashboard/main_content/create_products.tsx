import {MDBBreadcrumb, MDBBreadcrumbItem} from "mdb-react-ui-kit";
import {Link} from "react-router-dom";
import {Button, TextField} from "@mui/material";
import DriveFolderUploadIcon from '@mui/icons-material/DriveFolderUpload';

const CreateProducts = () => {
    return (
        <div>
            <MDBBreadcrumb>
                <MDBBreadcrumbItem>
                    <Link to="/seller_create_products">Create Products</Link>
                </MDBBreadcrumbItem>
            </MDBBreadcrumb>
            <div>
                <TextField fullWidth label="Product Full Name" id="fullWidth"/>
                <div className="align-content-between justify-content-between py-3">
                    <TextField
                        id="outlined-controlled"
                        label="MRP"
                        style={{paddingRight: "10px"}}
                    />
                    <TextField
                        id="outlined-controlled"
                        label="Offer Price"
                        style={{paddingRight: "10px"}}
                    />
                    <TextField
                        id="outlined-controlled"
                        label="Number of Quantity"
                        style={{paddingRight: "10px"}}
                    />
                    <TextField
                        id="outlined-controlled"
                        label="Gender Perception"
                    />
                    <TextField
                        className="py-5"
                        id="outlined-multiline-static"
                        label="Product Breaf Description"
                        fullWidth
                        multiline
                        rows={4}
                    />
                </div>
                <Button
                    component="label"
                    role={undefined}
                    variant="contained"
                    tabIndex={-1}
                    startIcon={<DriveFolderUploadIcon/>}
                >
                    Upload file
                    {/*<VisuallyHiddenInput type="file"/>*/}
                </Button>
            </div>
        </div>
    )
}
export default CreateProducts
