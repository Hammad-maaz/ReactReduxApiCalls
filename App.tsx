import { NavigationContainer } from "@react-navigation/native"
import StackNavigation from "./src/routes/navigation"
import { Provider } from "react-redux"
import store from "./src/redux/store/store"

const App = () => {
  return(
    <Provider store={store}>
      <NavigationContainer>
      <StackNavigation />
    </NavigationContainer>
    </Provider>
  )
}

export default App