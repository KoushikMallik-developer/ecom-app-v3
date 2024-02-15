import {MDBBreadcrumb, MDBBreadcrumbItem} from "mdb-react-ui-kit";

const ProductContent = () => {
    return (
        <div>
            <MDBBreadcrumb>
                <MDBBreadcrumbItem>
                    <a href='/seller_reports'>Products</a>
                </MDBBreadcrumbItem>
                {/*<MDBBreadcrumbItem active>Data</MDBBreadcrumbItem>*/}
            </MDBBreadcrumb>
        </div>
    )
}
export default ProductContent
