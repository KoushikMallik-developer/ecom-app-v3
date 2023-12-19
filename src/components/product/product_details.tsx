import React, { useState } from 'react';


import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBCard, MDBCardBody, MDBInput, MDBCardHeader, MDBListGroup, MDBListGroupItem, MDBPopover, MDBPopoverBody, MDBPopoverHeader } from 'mdb-react-ui-kit';

const ProductDetailsPage: React.FC = () => {

  const product = {
    name: "Dennis Lingo Men's Solid Slim Fit Cotton Casual Shirt",
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    image: 'https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Products/3.webp',
    mrp: '$19.99',
    discount: "$9.99",
    discPer: "- 55%",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["red", "white", "black"],
    additionalImages: [
      "https://images.unsplash.com/photo-1621072156002-e2fccdc0b176?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1621072156002-e2fccdc0b176?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1621072156002-e2fccdc0b176?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    ],
    features: [
      {
        icon: "https://m.media-amazon.com/images/G/31/A2I-Convert/mobile/IconFarm/icon-warranty._CB485935626_.png",
        title: "1 year warenty",
        context: "1 year on product, 10 years on compressor"
      },
      {
        icon: "https://m.media-amazon.com/images/G/31/A2I-Convert/mobile/IconFarm/icon-returns._CB484059092_.png",
        title: "Replacement Policy",
        context: "10 days Replacement by Brand"
      },
      {
        icon: "https://m.media-amazon.com/images/G/31/A2I-Convert/mobile/IconFarm/trust_icon_free_shipping_81px._CB630870460_.png",
        title: "Free Delivery",
        context: "The product is eligible for Free delivery."
      },
      {
        icon: "https://m.media-amazon.com/images/G/31/A2I-Convert/mobile/IconFarm/icon-amazon-delivered._CB485933725_.png",
        title: "Delivery by",
        context: "Amazon directly manages delivery for this product. Order delivery tracking to your doorstep is available."
      },
      {
        icon: "https://m.media-amazon.com/images/G/31/A2I-Convert/mobile/IconFarm/icon-top-brand._CB617044271_.png",
        title: "Top Brand",
        context: "Top Brand indicates high quality, trusted brands on Amazon aggregated basis verified ratings, returns/refunds and recent order history at brand level."
      },
    ]
  };

  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [selectedColor, setSelectedColor] = useState<string | null>(null);
  const [showMessage, setShowMessage] = useState(false);



  const handleSizeChange = (size: string) => {
    setSelectedSize(size);
  };

  const handleColorChange = (color: string) => {
    setSelectedColor(color);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (pin.length === 6) {
      setShowMessage(true);
    }
    else {
      setShowMessage(false);
    }
  };

  const [pin, setPin] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length <= 6) {
      setPin(e.target.value);
      setShowMessage(false);
    }
  };

  const [hoveredFeature, setHoveredFeature] = useState<string | null>(null);



  return (
    <MDBContainer className="px-3 py-3">
      <MDBRow className="align-items-center" style={{ backgroundColor: 'white' }}>

        <MDBCol md="7">
          <img src={product.image} alt={product.name} className="img-fluid" />

          <MDBRow>
            <MDBCol md="12">
              <MDBListGroup horizontal>
                {product.additionalImages.map((image, index) => (
                  <MDBListGroupItem key={index}>
                    <img src={image} alt={`Additional Image ${index + 1}`} className="img-fluid" style={{ width: '50px', height: '50px' }} />
                  </MDBListGroupItem>
                ))}
              </MDBListGroup>
            </MDBCol>
          </MDBRow>
        </MDBCol>


        <MDBCol md="5" className="text-black">

          <div>
            <h1>{product.name}</h1>
            <p>{product.description}</p>
          </div>

          <div className="d-flex flex-row align-items-center">
            <p className="mb-0" style={{ color: 'red', fontSize: '20px' }}>{product.discPer}</p>
            <div style={{ width: '10px' }} />
            <p className="mb-0" style={{ fontWeight: 'bold', fontSize: '25px' }}>{product.discount}</p>
            <div style={{ width: '10px' }} />
            <p className="mb-0" style={{ textDecoration: 'line-through', fontSize: '15px' }}>MRP: {product.mrp}</p>
          </div>


          <div>
            <p>Size: {selectedSize}</p>
            <div>
              {product.sizes.map((size) => (
                <MDBBtn
                  key={size}
                  color={selectedSize === size ? 'primary' : 'secondary'}
                  onClick={() => handleSizeChange(size)}
                  className={`mx-1 ${selectedSize === size ? '' : ''}`}
                >
                  {size}
                </MDBBtn>
              ))}
            </div>
          </div>


          <div>
            <p>Color: {selectedColor}</p>
            <div>
              {product.colors.map((color) => (
                <MDBBtn
                  key={color}
                  color={selectedColor === color ? 'primary' : 'secondary'}
                  onClick={() => handleColorChange(color)}
                  className="mx-1 rounded-circle"
                  style={{
                    backgroundColor: color,
                    width: '40px',
                    height: '40px',
                    outline: selectedColor === color ? '2px solid #ffaa00' : 'none',
                  }}
                />
              ))}
            </div>
          </div>

          <div style={{ height: '10px' }} />

          <MDBCard shadow='2' border='info' background='white' className='mb-3'>
            <MDBCardHeader>Check product availability in your area</MDBCardHeader>
            <MDBCardBody>
              <MDBCol>
                <form onSubmit={handleSubmit}>
                  <MDBRow className='mb-0'>
                    <MDBCol size='8'>
                      <MDBInput
                        type='number'
                        label='Your deliverable PIN Code'
                        maxLength={6}
                        value={pin}
                        onChange={handleChange}
                      />
                    </MDBCol>
                    <MDBCol size='4'>
                      <MDBBtn color='primary' type='submit'>
                        Submit
                      </MDBBtn>
                    </MDBCol>
                  </MDBRow>
                </form>
              </MDBCol>
              {showMessage && (
                <h6 style={{ color: 'green' }}>Your product is available</h6>
              )}
            </MDBCardBody>
          </MDBCard>


          {/* <MDBCard className="mt-">
            <MDBCardBody>
              <MDBRow>
                {product.features.map((feature, index) => (
                  <MDBCol md="4" key={index} className="mb-4">
                    <div
                      className="text-center"
                      onMouseEnter={() => setHoveredFeature(feature.context)}
                      onMouseLeave={() => setHoveredFeature(null)}
                    >
                      <img src={feature.icon} alt={feature.title} className="mt-1" style={{ width: '30px', height: '30px' }} />
                      <h6 className="font-weight-bold mt-1">{feature.title}</h6>
                      <MDBPopover color='secondary' btnChildren='Popover on top' placement='top'>
                        <MDBPopoverHeader>{feature.title}</MDBPopoverHeader>
                        <MDBPopoverBody>{feature.context}</MDBPopoverBody>
                      </MDBPopover>
                    </div>
                  </MDBCol>
                ))}
              </MDBRow>
            </MDBCardBody>
          </MDBCard> */}

          <MDBRow>
            {product.features.map((feature, index) => (
              <MDBCol md="4" key={index} className="mb-4">
                <div
                  className="text-center"
                  onMouseEnter={() => setHoveredFeature(feature.context)}
                  onMouseLeave={() => setHoveredFeature(null)}>
                  <img src={feature.icon} alt={feature.title} className="mt-1" style={{ width: '30px', height: '30px' }} />
                  <h6 className="font-weight-bold mt-1">{feature.title}</h6>
                  {/* {hoveredFeature === feature.context ? feature.context : null && (
                    <MDBPopover color='secondary' btnChildren='Popover on top' placement='top'>
                      <MDBPopoverHeader>{feature.title}</MDBPopoverHeader>
                      <MDBPopoverBody>{feature.context}</MDBPopoverBody>
                    </MDBPopover>
                  )} */}
                </div>

              </MDBCol>
            ))}
          </MDBRow>


          <MDBRow>
            <MDBCol size='auto'>
              <MDBBtn color="primary" className="mr-2">
                Add to Cart
              </MDBBtn>
            </MDBCol>
            <MDBCol size='auto'>
              <MDBBtn color="success">
                Wishlist
              </MDBBtn>
            </MDBCol>
          </MDBRow>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default ProductDetailsPage;