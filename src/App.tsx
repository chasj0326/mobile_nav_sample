import {
  NavigationContainer,
  Navigator,
  Screen,
} from './navigation';
import Home from './pages/Home';
import Edit from './pages/Edit';
import Post from './pages/Post';

const App = () => {
  return (
    <NavigationContainer>
      <Navigator initialScreenName='Home'>
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
