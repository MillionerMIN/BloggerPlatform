import './layout.scss';

import { ReactNode } from 'react';

import { Container } from '../../../container/Container';

type LayoutType = {
  children: ReactNode;
};

export const Layout: React.FC<LayoutType> = (props: LayoutType) => {
  const { children } = props;
  return (
    <Container>
      <main className='flex'>{children}</main>
    </Container>
  );
};
