export interface UserDetails{
    id: number,
    firstName: String,
    lastName: String,
    email: String,
    phone: String,
    login: Login,
    address: Address,
    company: Company
}

export interface Login{
    username: String
}

export interface Address{
    street: String,
    geo: Geo
}

export interface Geo{
    lat: String,
    lng: String
}

export interface Company{
    name: String,
    bs: String
}


export interface UserState{
    value: UserDetails | null,
    loading: true | false,
    error: String | undefined
}

export const initialState: UserState ={
    value: null,
    loading: false,
    error: undefined
}