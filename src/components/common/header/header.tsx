import BrandHeader from "./web_header/brandHeader.tsx";
import SubHeader from "./web_header/sub_header.tsx";
import {useMediaQuery} from 'react-responsive'
import BrandHeaderMobile from "./mobile_header/brand_header_mobile.tsx";
import CategoryHeader from "./web_header/category_header.tsx";
import TabletCategoryHeader from "./tablet_header/tablet_category_header.tsx";
import TabletBrandHeader from "./tablet_header/tablet_brand_header.tsx";
import TabletSubHeader from "./tablet_header/tablet_sub_haeder.tsx";


const Header = () => {
    const isMobile = useMediaQuery({query: '(max-width: 574px)'})
    const isTablet = useMediaQuery({query: '(max-width: 1224px)'})


    return (
        <div>
            {isMobile ? <BrandHeaderMobile/> :
                isTablet ? <>
                        <TabletBrandHeader/>
                        <TabletSubHeader/>
                        <TabletCategoryHeader/>
                    </> :
                    <>
                        <div>
                            <BrandHeader/>
                        </div>

                        <div className="my-2" style={{paddingTop: "55px"}}>
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
