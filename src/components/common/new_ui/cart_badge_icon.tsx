import { MDBIcon, MDBBadge } from 'mdb-react-ui-kit';


export default function CartBadgeIcon  ( badgeCount:any, iconStyle:any )  {
  return (
    <div className="d-flex align-items-center">
      <MDBIcon icon="shopping-bag" style={iconStyle} />
      {badgeCount > 0 && (
        <MDBBadge color="danger" pill className="ml-1">
          {badgeCount}
        </MDBBadge>
      )}
    </div>
  );
};
