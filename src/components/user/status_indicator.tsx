import React from 'react';
import { MDBIcon } from 'mdb-react-ui-kit';

interface ActiveStatusIndicatorProps {
    isActive: boolean;
  }
  
  const ActiveStatusIndicator: React.FC<ActiveStatusIndicatorProps> = ({ isActive }) => {
    return (
      <MDBIcon
        icon={isActive ? 'check-circle' : 'times-circle'}
        className={isActive ? 'text-success' : 'text-danger'}
        size='1x'
      />
    );
  };
  
  export default ActiveStatusIndicator;