import BrandHeader from "./brandHeader.tsx";
import SubHeader from "./sub_header.tsx";
import {useMediaQuery} from 'react-responsive'
import BrandHeaderMobile from "./brand_header_mobile.tsx";
import CategoryHeader from "./category_header.tsx";


const Header = () => {
    const isTabletOrMobile = useMediaQuery({query: '(max-width: 1224px)'})


    return (
        <header>
            {isTabletOrMobile ? <BrandHeaderMobile/> : <>
                <BrandHeader/>
                <SubHeader/>
                <CategoryHeader/>
            </>}
        </header>
    );
}

export default Header;
