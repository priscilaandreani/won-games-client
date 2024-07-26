import { PropsWithChildren } from 'react';
import GlobalStyles from '../styles/globals';

export function Providers({ children }: PropsWithChildren) {
  return (
    <>
      <GlobalStyles />
      {children}
    </>
  );
}
