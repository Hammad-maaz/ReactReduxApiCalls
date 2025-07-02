import { createStackNavigator } from "@react-navigation/stack";
import Dashboard from "../screens/dashboard";
import ApiData from "../screens/api_data";
import Loading from "../screens/redux_loading";


export type stackParamsList = {
    dashboard: undefined,
    apiData: undefined,
    loading: undefined
}

const Stack = createStackNavigator<stackParamsList>();
const StackNavigation: React.FC = () => {
    return(
        <Stack.Navigator>
            <Stack.Screen name = "apiData" component={ApiData} />
            <Stack.Screen name="loading" component={Loading}/>
            <Stack.Screen name = "dashboard" component={Dashboard} />
        </Stack.Navigator>
    );
}

export default StackNavigation;