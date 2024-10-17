import routes from '@/navigation/routes';
import Chat from '@/screens/Chat';

const Screens = [
  {
    title: 'splash_screen',
    name: routes.CHAT_SCREEN,
    component: Chat,
    headerShown: false,
  },
];

export default Screens;
