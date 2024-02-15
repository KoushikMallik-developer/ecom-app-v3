import {MDBBreadcrumb, MDBBreadcrumbItem} from "mdb-react-ui-kit";

const CreateProducts = () => {
    return (
        <div>
            <MDBBreadcrumb>
                <MDBBreadcrumbItem>
                    <a href='/seller_reports'>Create Products</a>
                </MDBBreadcrumbItem>
                <MDBBreadcrumbItem>
                    <a href="/">Report</a>
                </MDBBreadcrumbItem>
                {/*<MDBBreadcrumbItem active>Data</MDBBreadcrumbItem>*/}
            </MDBBreadcrumb>
        </div>
    )
}
export default CreateProducts
