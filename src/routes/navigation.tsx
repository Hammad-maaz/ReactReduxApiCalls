import { createStackNavigator } from "@react-navigation/stack";
import ApiData from "../screens/api_data";
import Loading from "../screens/redux_loading";
import userDetails from "../screens/userDetails";
import AllPostDataView from "../screens/allPostDataView";
import loginScreen from "../screens/loginScreen";


export type stackParamsList = {
    apiData: undefined,
    loading: undefined,
    userDetails: undefined,
    allPostData: undefined,
    loginScreen: undefined
}

const Stack = createStackNavigator<stackParamsList>();
const StackNavigation: React.FC = () => {
    return(
        <Stack.Navigator>
            <Stack.Screen name = "loginScreen" component={loginScreen} />
            <Stack.Screen name = "allPostData" component={AllPostDataView} />
            <Stack.Screen name = "userDetails" component={userDetails} />
            <Stack.Screen name = "apiData" component={ApiData} />
            <Stack.Screen name="loading" component={Loading}/>
        </Stack.Navigator>
    );
}

export default StackNavigation;