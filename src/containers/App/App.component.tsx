import React from 'react';

export interface AppProps {
  name: string
}

const AppComponent = (props: AppProps) => {
  const { name } = props;
  return (
    <div className="App">
      {name}
    </div>
  );
};

export default AppComponent;
