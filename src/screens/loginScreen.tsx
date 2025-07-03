import { View, Text, Button, TextInputComponent, TextInput } from "react-native"
import { AppDispatch, RootState } from "../redux/store/store";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { login } from "../redux/functions/login";

const loginScreen: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { value, error } = useSelector((state: RootState) => state.Login);
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const loginUser = () => {
    // const data = {
    //       // username: "emilys",
    //       // password: "emilyspass",
    //       username: userName,
    //       password: password
    //     }

    const formData = new FormData();
    formData.append("username", userName)
    formData.append("password", password)

    dispatch(login(formData))
  }

  return (
    <View>
        <Text>Login Screen</Text>
        <Text>{value?.email}</Text>
        <Text>{value?.firstName}</Text>
        <Text>{value?.lastName}</Text>
        <Text>{value?.accessToken}</Text>
        <Text>{value?.email}</Text>
        <Text>{error}</Text>

        <TextInput value={userName} placeholder="Username" onChangeText={(text) => setUserName(text)} style={{marginBottom: 20, marginHorizontal: 20, borderWidth: 1, borderRadius: 5 ,padding: 10}}/>
        <TextInput value={password} placeholder="Password" onChangeText={(text) => setPassword(text)} style={{marginBottom: 20, marginHorizontal: 20, borderWidth: 1, borderRadius: 5 ,padding: 10}}/>

        <Button disabled={userName === "" || password === ""} title="Login" onPress={() => loginUser()}/>
    </View>
  )
}

export default loginScreen