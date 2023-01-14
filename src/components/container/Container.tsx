import { ReactNode } from 'react';

type ContainerType = {
  children: ReactNode;
};

export const Container = ({ children }: ContainerType) => {
  return <div className='container mx-auto max-w-7xl px-2'>{children}</div>;
};
