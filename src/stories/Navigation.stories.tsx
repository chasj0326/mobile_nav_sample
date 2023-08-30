import type { Meta, StoryFn } from '@storybook/react';
import {
  NavigationContainer,
  Navigator,
  Screen,
} from '../navigation';
import { Home, Post, Edit } from '../pages';

const meta: Meta<typeof Navigator> = {
  title: 'Navigation',
  component: Navigator,
  args: {
    options: {
      animation: {
        animationType: 'fade',
        timeout: 500,
      },
      header: {
        headerColor: '#f1f1f1',
        titleColor: '#272727',
        tintColor: '#0b52e1',
        forward: true,
        border: true,
        shadow: true,
        buttonDetail: true,
        pointerShape: 'chevron',
        titleAlign: 'center',
      },
    },
  },
};
export default meta;

export const Default: StoryFn = args => {
  return (
    <NavigationContainer initialScreenName='Home'>
      <Navigator {...args}>
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
