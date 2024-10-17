import routes from '@/navigation/routes';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

export type RootStackNavigationProps = {
  [routes.CHAT_SCREEN]: undefined;
};

export type RootStackNavigationPropsType =
  NativeStackNavigationProp<RootStackNavigationProps>;
