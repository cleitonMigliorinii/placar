import { createNativeStackNavigator } from "@react-navigation/native-stack"
import Home from "../screens/Home";
import Details from "../screens/Details";

function AppRoutes(){

    const {Screen, Navigator} = createNativeStackNavigator();

    return(

        <Navigator screenOptions={{headerShown: false}}>

            <Screen name="placar" component={Home}/>
            <Screen name="details" component={Details}/>
        </Navigator>

    )

}

export default AppRoutes