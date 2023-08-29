import React, {
  Children,
  ReactElement,
  ReactNode,
} from 'react';

export const childrenToArray = <T>(
  children: ReactNode,
  Component: React.ComponentType<T>
): ReactElement<T>[] => {
  return Children.toArray(children).filter(
    (child): child is ReactElement<T> =>
      React.isValidElement(child) &&
      child.type === Component
  );
};
