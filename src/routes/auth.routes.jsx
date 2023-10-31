import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { Text } from "react-native";
import Details from "../screens/Details";
import Auth from "../screens/Auth";

function AuthRoutes(){

    const {Screen, Navigator} = createNativeStackNavigator();

    return(

        <Navigator  screenOptions={{headerShown: false}}>
              <Screen name="dashboard" component={Auth}/>
          
        </Navigator>

    )

}

export default AuthRoutes