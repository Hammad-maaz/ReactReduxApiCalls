import { Text, View } from "react-native"
import { PostData } from "../model/postData";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../redux/store/store";
import { postDataFunction } from "../redux/functions/postDataFunction";

const ApiData:React.FC = () => {
    const dispatch = useDispatch<AppDispatch>();
    const selector = useSelector((state: RootState) => state.postsApiSlice);
    const error = useSelector((state: RootState) => state.postsApiSlice.error);

    useEffect(() => {
        dispatch(postDataFunction("1"))
    }, [])

    return(
        <View style={{flex: 1, flexDirection: 'column', marginVertical: 10}}>
            <Text style={{fontSize: 20, fontWeight: "bold", textAlign: "center"}}>Api Data</Text>
            <Text>{selector.loading.toString()}</Text>
            <Text>{selector.value?.userId}</Text>
            <Text>{error}</Text>

        </View>
    )
}

export default ApiData