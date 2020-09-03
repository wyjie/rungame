import React from 'react';
import styled from 'styled-components';

import { Images } from '../../themes';

const Pikachu = styled.div`
  background-image: url(${Images.pikachu});
  width: 200px;
  height: 209px;
`;

const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const PikachuLoading = () => (
  <LoadingContainer>
    <Pikachu />
  </LoadingContainer>
);

export default PikachuLoading;
