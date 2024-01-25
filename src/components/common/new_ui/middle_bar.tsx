import {Facebook, Globe, Instagram, Twitter} from "lucide-react";
import {
    MDBCol,
    MDBContainer,
    MDBDropdown,
    MDBDropdownItem,
    MDBDropdownMenu,
    MDBDropdownToggle,
    MDBRow
} from "mdb-react-ui-kit";
// import {useState} from "react";
import {Linkedin, Youtube} from "lucide-react";

export default function MiddleBar() {

    /*    const [selectedFlag, setSelectedFlag] = useState('');

        const handleFlagSelect = (flag: string) => {
            setSelectedFlag(flag);
        };*/

    const iconStyle = {
        marginRight: 10,
    };
    const style = {
        backgroundColor: "#1B6392",
    };
    const dropDownIconStyle = {
        marginRight: 5
    };

    return <>
        <MDBContainer fluid className="d-flex py-3" style={style}>
            <MDBCol sm={4} className="text-white text-center">
                <text>Welcome to Shoppixa online eCommerce store.</text>
            </MDBCol>

            <MDBCol sm={4}></MDBCol>

            <MDBCol sm={3} className="text-end ">
                <MDBRow>
                    <MDBContainer>
                        <text className="text-white px-3">Follow Us :</text>
                        <Twitter color="white" size={25} style={iconStyle}/>
                        <Facebook color="white" size={25} style={iconStyle}/>
                        <Instagram color="white" size={25} style={iconStyle}/>
                        <Youtube color="white" size={25} style={iconStyle}/>
                        <Linkedin color="white" size={25} style={iconStyle}/>
                    </MDBContainer>

                    <MDBDropdown className='shadow-0'>
                        <MDBDropdownToggle color='warning'><Globe style={dropDownIconStyle}/>Eng</MDBDropdownToggle>
                        <MDBDropdownMenu>
                            <MDBDropdownItem link>English</MDBDropdownItem>
                            <MDBDropdownItem link>Hindi</MDBDropdownItem>
                            <MDBDropdownItem link>Bengali</MDBDropdownItem>
                        </MDBDropdownMenu>
                    </MDBDropdown>
                </MDBRow>

            </MDBCol>
            <MDBCol sm={1}></MDBCol>
        </MDBContainer>
    </>
}