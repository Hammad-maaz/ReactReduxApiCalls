import React, { useEffect } from 'react'
import { Text, View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { RootState, AppDispatch } from '../redux/store/store'
import { getUserDetails } from '../redux/functions/userDetails'

const userDetails:React.FC = () => {
    const selector = useSelector((state: RootState) => state.userDetails);
    const dispatch = useDispatch<AppDispatch>();

    useEffect(() => {
        dispatch(getUserDetails())
    }, [])

  return (
    <View style={{flex: 1, flexDirection: "column"}}>
        <Text style={{fontSize: 20, fontWeight: "bold", textAlign: "center"}}>User Details</Text>
        <Text>{selector.value?.firstName}</Text>
        <Text>{selector.value?.lastName}</Text>
        <Text>{selector.value?.email}</Text>
        <Text>{selector.value?.address.street}</Text>
        <Text>{selector.value?.address.geo.lat} ---- {selector.value?.address.geo.lng}</Text>
        <Text>{selector.value?.login.username}</Text>
        <Text>{selector.value?.company.name}</Text>
        <Text>{selector.value?.company.bs}</Text>
        <Text>{selector.value?.phone}</Text>
    </View>
  )
}

export default userDetails