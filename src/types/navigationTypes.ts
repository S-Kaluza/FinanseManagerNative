import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { NavigationProp, CompositeNavigationProp, NavigatorScreenParams } from '@react-navigation/native';

export type tabParamList = {
    info: {incomeOrExpanseId: number}|undefined,
}

export type StackParamList = {
    Home: undefined;
    Profile: { userId: string };
    Feed: { sort: 'latest' | 'top' } | undefined;
};

export type TabParamList = {
    Home: NavigatorScreenParams<StackParamList>;
    Profile: { userId: string };
  };

export type ProfileScreenNavigationProp = CompositeNavigationProp<
  BottomTabNavigationProp<TabParamList, 'Profile'>,
  NavigationProp<StackParamList>
>;