import { StackNavigationProp } from "@react-navigation/stack"
import { Text, View } from "react-native"
import { stackParamsList } from "../routes/navigation"
import { User } from "../model/user"
import { FlatList } from "react-native-gesture-handler"


type stackProps = StackNavigationProp<stackParamsList, "dashboard">
type props = {
    navigation: stackProps
}
const Dashboard: React.FC<props> = ({navigation}) => {
    const usersList: User[] = [
        {name: "Hammad", age: 22, DOB: new Date(), address: "Sargodha"},
        {name: "Bilal", age: 22, DOB: new Date(), address: "Sargodha"},
        {name: "Qadeer", age: 22, DOB: new Date(), address: "Sargodha"},
        {name: "Rana", age: 22, DOB: new Date(2005, 6, 26), address: "Sargodha"},
        
    ];


    const listData = ({item}: {item: User}) => {
        return(
            <View style= {{flexDirection:"row", justifyContent: "space-between"}}>
                <Text>{item.name}</Text>
                <Text>{item.DOB.toDateString()}</Text>
            </View>
        )
    }



    return(
        <View>
            <FlatList
             data={usersList}
             renderItem={listData} />
        </View>
    )
}

export default Dashboard