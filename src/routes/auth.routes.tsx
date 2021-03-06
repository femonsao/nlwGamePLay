import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { Home } from "../screens/Home";
import { Signin } from "../screens/Signin";
import { theme } from "../global/styles/theme";
import { AppointmentsDetails } from "../screens/AppointmentsDetails";
import { AppointmentsCreate } from "../screens/AppointmentsCreate";


const { Navigator, Screen } = createStackNavigator();

export function AuthRoutes() {
  return (
    <Navigator
      headerMode='none'
      screenOptions={
        {
          cardStyle:{
            backgroundColor: theme.colors.secondary100
          }
        }
      }
    >
      <Screen name="Signin" component={Signin} />
      <Screen name="Home" component={Home} />
      <Screen name="AppointmentsDetails" component={AppointmentsDetails} />
      <Screen name="AppointmentsCreate" component={AppointmentsCreate} />
    </Navigator>
  );
}
