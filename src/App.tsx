import {
  NavigationContainer,
  Navigator,
  Screen,
} from './navigation';
import { Home, Edit, Post } from './pages';

const App = () => {
  return (
    <NavigationContainer initialScreenName='Home'>
      <Navigator>
        <Screen
          name='Home'
          title='홈'
          component={Home}
        />
        <Screen
          name='Edit'
          title='에디터'
          component={Edit}
        />
        <Screen
          name='Post'
          title='포스팅'
          component={Post}
        />
      </Navigator>
    </NavigationContainer>
  );
};

export default App;
