import { NavigationContainer } from "@react-navigation/native";
import AppRoutes from "./app.routes";
import { useState } from "react";
import AuthRoutes from "./auth.routes";

function Routes(){

    const token= "";

    return(
        <NavigationContainer>

            {
                token.length > 0 ?
                <AuthRoutes/>
                :
                <AppRoutes/>
            }

            
        </NavigationContainer>
    )
}
export default Routes;