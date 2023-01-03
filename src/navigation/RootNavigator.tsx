import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicon from 'react-native-vector-icons/Ionicons';
import { navRouting } from './config';
import 'react-native-gesture-handler';
import i18n from 'i18next';

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
					<Tab.Screen name={i18n.t(navRouting[0].name)} component={navRouting[0].component} />
					<Tab.Screen name={i18n.t(navRouting[1].name)} component={navRouting[1].component} />
					<Tab.Screen name={i18n.t(navRouting[2].name)} component={navRouting[2].component} />
					<Tab.Group key={'unvisible'} screenOptions={{ tabBarButton: () => null }}>
						<Tab.Screen name={i18n.t(navRouting[3].name)} component={navRouting[3].component} />
						<Tab.Screen name={i18n.t(navRouting[4].name)} component={navRouting[4].component} />
						<Tab.Screen name={i18n.t(navRouting[5].name)} component={navRouting[5].component} />
						<Tab.Screen name={i18n.t(navRouting[6].name)} component={navRouting[6].component} />
						<Tab.Screen name={i18n.t(navRouting[7].name)} component={navRouting[7].component} />
						<Tab.Screen name={i18n.t(navRouting[8].name)} component={navRouting[8].component} />
						<Tab.Screen name={i18n.t(navRouting[9].name)} component={navRouting[9].component} />
						<Tab.Screen name={i18n.t(navRouting[10].name)} component={navRouting[10].component} />
					</Tab.Group>
				</Tab.Navigator>
			</NavigationContainer>
		</>
	);
}

export default RootNavigator;