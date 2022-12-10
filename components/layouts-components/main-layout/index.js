import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import MainScreen from "../../screen-components/main-screen";
import AboutScreen from "../../screen-components/about-screen";

const Tab = createBottomTabNavigator();

export default function MainLayout() {

    return (
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen
                    name="Home"
                    component={MainScreen}
                    options={{
                        tabBarLabel: 'Главная',
                        tabBarIcon: ({ color, size }) => (
                            <MaterialCommunityIcons name="home" color={color} size={size} />
                        ),
                    }}
                />
                <Tab.Screen
                    name="About"
                    component={AboutScreen}
                    options={{
                        tabBarLabel: 'О сервере',
                        tabBarIcon: ({ color, size }) => (
                            <MaterialCommunityIcons name="information-outline" color={color} size={size} />
                        ),
                    }}
                />
            </Tab.Navigator>
        </NavigationContainer>
    );
};

