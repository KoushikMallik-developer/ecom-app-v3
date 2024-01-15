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
  //delivery_address_list:  Map<string, any>
  delivery_address_list: {
    address_list: string[]
  };
  created_at: string
  updated_at: string
}