import styled from 'styled-components';

import { Images } from '../../themes';

export const HomepageContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  background-image: url(${Images.backgroundImage});
  background-size: cover;
`;
