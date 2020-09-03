import React from 'react';

import HomePage from '../HomePage/HomePage.component';
import GlobalStyle from '../../globalStyle';
import PikachuLoading from '../../components/PikachuLoading';

export interface AppProps {
  name: string
}

const AppComponent = (props: AppProps) => {
  const { name } = props;
  return (
    <>
      <PikachuLoading />
      <GlobalStyle />
    </>

  );
};

export default AppComponent;
