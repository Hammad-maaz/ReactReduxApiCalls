export interface PostData{
    userId: number,
    id: number,
    title: String
}
 type PostDataState = {
    value: PostData | null;
    loading: true | false;
    error: String | undefined;
}

export const initialState: PostDataState = {
  value: null,
  loading: false,
  error: undefined
};
 