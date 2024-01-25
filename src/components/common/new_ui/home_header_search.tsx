import {MDBCol, MDBContainer, MDBInputGroup} from "mdb-react-ui-kit";
import Logo from "../../../assets/brand/logo-no-background.svg"
import {Ghost, Heart, ShoppingBag} from "lucide-react";

export default function HomeHeaderSearch() {
    const mainStyle = {
        backgroundColor: "#1B6392",
    };
    const iconStyle = {
        marginRight: 25,
    };
    return (
        <>
            <MDBContainer fluid className="d-flex py-3 text-center text-white align-items-center" style={mainStyle}>
                <MDBCol sm={4}>
                    <img src={Logo} className='img-fluid'
                         style={{height: '30px'}}
                         alt=''/>
                </MDBCol>

                <MDBCol sm={4}>
                    {/*<div className="input-group">*/}
                    {/*    <input type="text" className="form-control" placeholder="Search"/>*/}
                    {/*    /!*<MDBInput type="text" className="form-control text-white" placeholder="Search"/>*!/*/}
                    {/*    <button className="btn btn-outline-light" type="button">Search</button>*/}
                    {/*</div>*/}
                    <MDBInputGroup textAfter={['Search']} className="text-white">
                        <input className='form-control' type='text' placeholder="Search what you need!"/>
                    </MDBInputGroup>
                </MDBCol>

                <MDBCol sm={4}>
                    <ShoppingBag color="white" size={25} style={iconStyle}/>
                    <Heart color="white" size={25} style={iconStyle}/>
                    <Ghost color="white" size={25} style={iconStyle}/>
                </MDBCol>
            </MDBContainer>
        </>
    );
}