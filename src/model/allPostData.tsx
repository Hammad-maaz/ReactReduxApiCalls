export interface AllPostData{
    userId: number,
    id: number,
    title: String
}
 type AllPostDataState = {
    value: AllPostData[] | [];
    loading: true | false;
    error: String | undefined;
}

export const initialState: AllPostDataState = {
  value: [],
  loading: false,
  error: undefined
};
 