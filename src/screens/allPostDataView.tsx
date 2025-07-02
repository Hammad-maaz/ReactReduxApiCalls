import { Text, View } from "react-native"
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../redux/store/store";
import { getAllPostData } from "../redux/functions/allPostDataFunction";
import { FlatList } from "react-native-gesture-handler";
import {AllPostData} from "../model/allPostData";

const AllPostDataView:React.FC = () => {
    const dispatch = useDispatch<AppDispatch>();
    const selector = useSelector((state: RootState) => state.AllPostData);
    const error = useSelector((state: RootState) => state.AllPostData.error);

    useEffect(() => {
        dispatch(getAllPostData())
    }, [])

    return(
        <View style={{flex: 1, flexDirection: 'column', marginVertical: 10}}>
            <Text style={{fontSize: 20, fontWeight: "bold", textAlign: "center"}}>Api Data</Text>
            <Text>{selector.loading.toString()}</Text>
            <Text>{error}</Text>
            <FlatList
             data={selector.value}
             renderItem={(item: {item: AllPostData}) => {
                 return(
                    <Text>{item.item.id}</Text>
                 )
             }}
              />

        </View>
    )
}

export default AllPostDataView