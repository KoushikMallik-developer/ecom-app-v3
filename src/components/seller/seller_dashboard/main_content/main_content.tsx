import CreateProducts from "./create_products.tsx";
import ReportContent from "./report_content.tsx";
import ProductContent from "./product_content.tsx";

const MainContent = (props: any) => {
    return (<>

            {props.pathname.includes("dashboard") ?
                <h1>{props}-1</h1>
                :
                props.pathname.includes("seller_products") ?
                    <ProductContent/>
                    : props.pathname.includes("seller_create_products") ?
                        <CreateProducts/>
                        : <></>
            }
            {props.pathname.includes("seller_reports") && <ReportContent/>}
        </>
    )
}
export default MainContent
