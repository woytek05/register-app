import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Main from "./components/Main";
import Users from "./components/Users";
import Details from "./components/Details";
import colors from "./components/Colors";

const Stack = createNativeStackNavigator();

function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="main"
                    component={Main}
                    options={{
                        headerShown: false,
                    }}
                />
                <Stack.Screen
                    name="users"
                    component={Users}
                    options={{
                        title: "Users",
                        headerStyle: {
                            backgroundColor: colors.darkPrimaryColor,
                        },
                        headerTintColor: colors.white,
                        headerTitleStyle: {
                            fontWeight: "bold",
                        },
                    }}
                />
                <Stack.Screen
                    name="details"
                    component={Details}
                    options={{
                        title: "Details",
                        headerStyle: {
                            backgroundColor: colors.darkPrimaryColor,
                        },
                        headerTintColor: colors.white,
                        headerTitleStyle: {
                            fontWeight: "bold",
                        },
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default App;
