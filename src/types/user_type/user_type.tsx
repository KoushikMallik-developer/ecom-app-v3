interface UserType {
  id: String
  username: String
  email: string
  fname: string
  lname: string
  dob: string
  phone: string
  image: string
  is_active: boolean
  account_type: string
  delivery_address_list: {
    address_list: UserAddress[]
  };
  created_at: string
  updated_at: string
}

interface UserAddress {
  id: string
  address_line1: string
  address_line2: string
  state: string
  city: string
  pin: string
  country: string
  landmark: string
  address_type: string
  is_default: boolean
  delivery_to_phone: string
  delivery_to_person_name: string
  created_at: string
  updated_at: string
}