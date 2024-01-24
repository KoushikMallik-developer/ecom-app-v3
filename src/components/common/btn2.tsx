import {MDBContainer} from 'mdb-react-ui-kit';
import {X} from "lucide-react";

const CrossButton = () => {
    return (
        <MDBContainer className="text-white">
            <X/>
            {/*<MDBIcon far icon="close" size="lg" className="text-white align-items-center"/>*/}
        </MDBContainer>
    );
};

export default CrossButton;
