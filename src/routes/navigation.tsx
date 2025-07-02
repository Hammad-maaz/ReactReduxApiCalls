import { createStackNavigator } from "@react-navigation/stack";
import ApiData from "../screens/api_data";
import Loading from "../screens/redux_loading";
import userDetails from "../screens/userDetails";


export type stackParamsList = {
    apiData: undefined,
    loading: undefined,
    userDetails: undefined
}

const Stack = createStackNavigator<stackParamsList>();
const StackNavigation: React.FC = () => {
    return(
        <Stack.Navigator>
            <Stack.Screen name = "userDetails" component={userDetails} />
            <Stack.Screen name = "apiData" component={ApiData} />
            <Stack.Screen name="loading" component={Loading}/>
        </Stack.Navigator>
    );
}

export default StackNavigation;