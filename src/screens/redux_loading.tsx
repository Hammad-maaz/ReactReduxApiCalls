import { Button, Text, View } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { updateLoading } from "../redux/slice/loadingSlice";
import { RootState } from "../redux/store/store";

const Loading: React.FC = () => {
    const loading = useSelector((state: RootState) => state.loading.value);
    const dispatch = useDispatch();

    return(
        <View>
            <Text>Loading Value: {loading.toString()}</Text>
            <Button title="Update Loading Value" onPress={() => {dispatch(updateLoading())}}/>
        </View>
    )
}

export default Loading;