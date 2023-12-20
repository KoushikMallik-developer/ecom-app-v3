// api.js

// Example base URL for your backend API
const BASE_URL = 'https://auth-stg.onrender.com';

export const handleRegister = async (formData: UserDataType) => {
  try {
    debugger;
    const mydata = {
      "username": "xse",
      "email": formData.email,
      "fname": formData.fname,
      "lname": formData.lname,
      "password1": formData.password1,
      "password2": formData.password2
    }

    const response = await fetch(`${BASE_URL}/api/v2/create-users`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(mydata)
    });

    if (response.ok) {
      // Handle success, maybe show a success message
      debugger;
      console.log('Data sent successfully', response.json());
    } else {
      // Handle error response from the server
      debugger;
      console.error('Failed to send data');
    }
  } catch (error) {
    // Handle network errors or other exceptions
    debugger;
    console.error('Error occurred:', error);
  }
};

// Fetch all products
export const getProducts = async () => {
  try {
    const response = await fetch(`https://www.flipkart.com/mobile-phones-store`);
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error('Error fetching products:');
  }
};

// Fetch all users
export const getUsers = async () => {
  try {
    const response = await fetch(`/api/v2/all-users`);
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error('Error fetching users:');
  }
};

// Fetch a single product by ID
export const getProduct = async (id: any) => {
  try {
    const response = await fetch(`${BASE_URL}/products/${id}`);
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error('Error fetching product:');
  }
};

// Fetch cart items
export const getCartItems = async () => {
  try {
    const response = await fetch(`${BASE_URL}/cart/items`);
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error('Error fetching cart items:');
  }
};

// Remove an item from the cart
export const removeFromCart = async (itemId: any) => {
  try {
    const response = await fetch(`${BASE_URL}/cart/items/${itemId}`, {
      method: 'DELETE',
    });
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error('Error removing item from cart:');
  }
};

// Fetch order history
export const getOrderHistory = async () => {
  try {
    const response = await fetch(`${BASE_URL}/orders/history`);
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error('Error fetching order history:');
  }
};

// Fetch a single order by ID
export const getOrder = async (id: any) => {
  try {
    const response = await fetch(`${BASE_URL}/orders/${id}`);
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error('Error fetching order:');
  }
};

// Fetch user profile
export const getUserProfile = async () => {
  try {
    const response = await fetch(`${BASE_URL}/profile`);
    const data = await response.json();
    debugger
    return data;
  } catch (error) {
    throw new Error('Error fetching user profile:');
  }
};

// Update user profile
export const updateUserProfile = async (userData: any) => {
  try {
    const response = await fetch(`${BASE_URL}/profile`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    });
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error('Error updating user profile:');
  }
};
