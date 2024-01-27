import BrandHeader from "./brandHeader.tsx";
import SubHeader from "./sub_header.tsx";
import {useMediaQuery} from 'react-responsive'
import BrandHeaderMobile from "../mobile_header/brand_header_mobile.tsx";
import CategoryHeader from "./category_header.tsx";


const Header = () => {
    const isMobile = useMediaQuery({query: '(max-width: 1224px)'})


    return (
        <div>
            {isMobile ? <BrandHeaderMobile/> : <>
                <div>
                    <BrandHeader/>
                </div>

                <div className="my-2" style={{paddingTop:"55px"}}>
                    <SubHeader/>
                </div>

                <div className="my-2">
                    <CategoryHeader/>
                </div>
            </>}
        </div>
    );
}

export default Header;
