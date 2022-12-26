import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicon from 'react-native-vector-icons/Ionicons';
import { navRouting } from './config';
import 'react-native-gesture-handler';

const Tab = createBottomTabNavigator();

//TODO change routing config in object to have better access 
export function RootNavigator() {
	return (
		<>
			<NavigationContainer>
				<Tab.Navigator initialRouteName={navRouting[0].name} screenOptions={({ route }) => ({
					tabBarIcon: ({ focused, color, size }) => {
						let iconName;
						const rn = route.name;

						if (rn === navRouting[0].name) {
							iconName = focused ? 'home' : 'home-outline';
						} else if (rn === navRouting[1].name) {
							iconName = focused ? 'menu' : 'menu-outline';
						} else if (rn === navRouting[2].name) {
							iconName = focused ? 'body' : 'body-outline';
						} else {
							iconName = 'home';
						}

						return <Ionicon name={iconName} size={size} color={color} />;
					},
				})}>
					<Tab.Screen name={navRouting[0].name} component={navRouting[0].component} />
					<Tab.Screen name={navRouting[1].name} component={navRouting[1].component} />
					<Tab.Screen name={navRouting[2].name} component={navRouting[2].component} />
					<Tab.Group key={'unvisible'} screenOptions={{ tabBarButton: () => null }}>
						{navRouting.splice(3, navRouting.length - 1).map((item) => {
							return <Tab.Screen key={item.name} name={item.name} component={item.component} />;
						})
						}
					</Tab.Group>
				</Tab.Navigator>
			</NavigationContainer>
		</>
	);
}

export default RootNavigator;