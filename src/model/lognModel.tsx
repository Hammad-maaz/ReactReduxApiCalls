export interface LoginModel{
    id: number,
    username: String,
    email: String,
    firstName: String,
    lastName: String,
    gender: String,
    image: String,
    accessToken: String,
}

export interface LoginModelSate{
    value: LoginModel | null,
    loading: true | false,
    error: String | undefined
}

export const initialState: LoginModelSate = {
    value: null,
    loading: false,
    error: undefined
}