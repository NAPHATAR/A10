interface HospitalItem {
    _id: string,
    name: string,
    address: string,
    district: string,
    province: string,
    postalcode: string,
    tel: string,
    picture: string,
    __v: number,
    id: string
  }
  
  interface HospitalJson {
    success: boolean,
    count: number,
    pagination: Object,
    data: HospitalItem[]
  }

  interface UserProfile {
    _id: string;
    name: string;
    email: string;
    tel: string;
    role: string;
    createdAt: string;
  }

  interface LoginCredentials {
    email: string;
    password: string;
  }

  interface LoginResponse {
    success: boolean;
    _id: string;
    name: string;
    email: string;
    token: string;
  }