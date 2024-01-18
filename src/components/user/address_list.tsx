import React from 'react';

interface AddressListComponentProps {
  addresses: string[]; // Assuming the addresses are strings for simplicity
}

const AddressListComponent: React.FC<AddressListComponentProps> = ({ addresses }) => {
  return (
    <div className="mt-5">
      <h3>Delivery Addresses</h3>
      <ul>
        {addresses.map((address, index) => (
          <li key={index}>{address}</li>
        ))}
      </ul>
    </div>
  );
};

export default AddressListComponent;
