import {MDBListGroup, MDBListGroupItem, MDBBreadcrumb, MDBBreadcrumbItem} from "mdb-react-ui-kit";

const ReportContent = () => {
    return (

        <div>
            {/*<Link to="/friends"><h6 className='bg-transparent p-2 shadow-5-strong text-center fw-bolder'>Reports</h6>
            </Link>*/}
            <MDBBreadcrumb>
                <MDBBreadcrumbItem>
                    <a href='/seller_reports'>Reports</a>
                </MDBBreadcrumbItem>
                <MDBBreadcrumbItem>
                    <a href="/">Report</a>
                </MDBBreadcrumbItem>
                {/*<MDBBreadcrumbItem active>Data</MDBBreadcrumbItem>*/}
            </MDBBreadcrumb>
            <MDBListGroup light className='mb-4 shadow-5-strong'>
                <MDBListGroupItem noBorders
                                  className='d-flex justify-content-between align-items-center bg-transparent shadow-5-strong'>
                    <div className='d-flex align-items-center'>
                        <img
                            src='https://mdbootstrap.com/img/new/avatars/8.jpg'
                            alt=''
                            style={{width: '45px', height: '45px'}}
                            className='rounded-circle ms-3'
                        />
                        <div className='ms-3'>
                            <p className='fw-bold mb-1'>John Doe</p>
                            <p className='text-muted mb-0'>john.doe@gmail.com</p>
                        </div>
                    </div>
                </MDBListGroupItem>
                <MDBListGroupItem noBorders
                                  className='d-flex justify-content-between align-items-center bg-transparent shadow-5-strong'>
                    <div className='d-flex align-items-center'>
                        <img
                            src='https://mdbootstrap.com/img/new/avatars/6.jpg'
                            alt=''
                            style={{width: '45px', height: '45px'}}
                            className='rounded-circle ms-3'
                        />
                        <div className='ms-3'>
                            <p className='fw-bold mb-1'>Alex Ray</p>
                            <p className='text-muted mb-0'>alex.ray@gmail.com</p>
                        </div>
                    </div>
                </MDBListGroupItem>
                <MDBListGroupItem noBorders
                                  className='d-flex justify-content-between align-items-center bg-transparent shadow-5-strong'>
                    <div className='d-flex align-items-center'>
                        <img
                            src='https://mdbootstrap.com/img/new/avatars/7.jpg'
                            alt=''
                            style={{width: '45px', height: '45px'}}
                            className='rounded-circle ms-3'
                        />
                        <div className='ms-3'>
                            <p className='fw-bold mb-1'>Kate Hunington</p>
                            <p className='text-muted mb-0'>kate.hunington@gmail.com</p>
                        </div>
                    </div>
                </MDBListGroupItem>
            </MDBListGroup>
        </div>
    )
}
export default ReportContent
