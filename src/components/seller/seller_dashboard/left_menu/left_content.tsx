import {MDBListGroup, MDBListGroupItem} from "mdb-react-ui-kit";
import {Link} from "react-router-dom";
import {Button} from "@mui/material";

const LeftContent = (props: any) => {
    return (
        <>

            <MDBListGroup light
                          className={props.isMobile ? "dashboard-left-side-navbar shadow-5-strong my-2" : "shadow-5-strong my-2"}>
                <MDBListGroupItem noBorders className="bg-transparent shadow-5-strong">
                    <Link to="/seller_products" className="text-dark">Products</Link>
                </MDBListGroupItem>
                <MDBListGroupItem noBorders className="bg-transparent shadow-5-strong">
                    <Link to="/seller_create_products" className="text-dark">Create Product</Link>
                </MDBListGroupItem>
                <MDBListGroupItem noBorders className="bg-transparent shadow-5-strong"><Link to="/seller_reports"
                                                                                             className="text-dark"> Report(s)</Link></MDBListGroupItem>
                <MDBListGroupItem noBorders className="bg-transparent shadow-5-strong">Add Offer(s)</MDBListGroupItem>
                <MDBListGroupItem noBorders className="bg-transparent shadow-5-strong">Update Details</MDBListGroupItem>
                <MDBListGroupItem noBorders className="bg-transparent shadow-5-strong">Order Tracker</MDBListGroupItem>
                <MDBListGroupItem noBorders className="bg-transparent shadow-5-strong">Recycle Bin</MDBListGroupItem>

                <hr/>
                <Button variant="outlined" color="error" size="large">
                    Log Out
                </Button>
            </MDBListGroup>
        </>
    )
}
export default LeftContent
