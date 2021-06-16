import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {style} from './style.js';
//stack screens
import Darklogin from '../screens/auth/login/darklogin';
import Intro from '../screens/dashboard/intro';
import Iniciarlogin from '../screens/auth/login/Iniciarlogin';
import AbrirSignup from '../screens/auth/signup/AbrirSingup';
import ContinuarSignup from '../screens/auth/signup/ContinuarSignup';

//project tabs
import Campana from '../screens/projects/campana';
import Project from '../screens/projects/project';
import Detalles from '../screens/projects/datalles';
import Rendimiento from '../screens/projects/rendimiento';

//sideBar screen
import Sidebar from '../screens/sidebar';
//bottom tabs screens
import Invertir from '../screens/dashboard/Invertir';
import Cuenta from '../screens/dashboard/Cuenta';
import Ajustes from '../screens/dashboard/Ajustes';
import Contacto from '../screens/dashboard/Contacto';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

function StackNavigator({navigation}) {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Darklogin" component={Darklogin} />
      <Stack.Screen name="Intro" component={Intro} />
      <Stack.Screen name="Iniciarlogin" component={Iniciarlogin} />
      <Stack.Screen name="AbrirSignup" component={AbrirSignup} />
      <Stack.Screen name="ContinuarSignup" component={ContinuarSignup} />
      <Stack.Screen name="TabNavigator" component={TabNavigator} />
      <Stack.Screen name="Project" component={Project} />
      <Stack.Screen name="Campana" component={Campana} />
      <Stack.Screen name="Detalles" component={Detalles} />
      <Stack.Screen name="Rendimiento" component={Rendimiento} />
    </Stack.Navigator>
  );
}

function DrawerNavigator({navigation, route}) {
  return (
    <Drawer.Navigator drawerContent={props => <Sidebar {...props} />}>
      <Drawer.Screen name="Stack" component={StackNavigator} />
    </Drawer.Navigator>
  );
}

function TabNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Invertir"
        component={Invertir}
        options={{
          tabBarLabel: 'Invertir',
          tabBarIcon: ({color, size}) => (
            <Ionicons
              style={style.tabIcon}
              name="trending-up"
              color={color}
              size={size}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Cuenta"
        component={Cuenta}
        options={{
          tabBarLabel: 'Cuenta',
          tabBarIcon: ({color, size}) => (
            <Ionicons
              style={style.tabIcon}
              name="barcode"
              color={color}
              size={size}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Feedjj"
        component={Ajustes}
        options={{
          tabBarLabel: 'Ajustes',
          tabBarIcon: ({color, size}) => (
            <Ionicons
              style={style.tabIcon}
              name="ios-settings-sharp"
              color={color}
              size={size}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Feedjrj"
        component={Contacto}
        options={{
          tabBarLabel: 'Contacto',
          tabBarIcon: ({color, size}) => (
            <Ionicons
              style={style.tabIcon}
              name="ios-chatbox-outline"
              color={color}
              size={size}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

function Navigation() {
  return (
    <NavigationContainer>
      <DrawerNavigator />
    </NavigationContainer>
  );
}
export default Navigation;
