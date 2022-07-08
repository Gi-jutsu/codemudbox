import type { ParentComponent } from 'solid-js';
import { Box } from '@codemudbox/design-system';

const DefaultLayout: ParentComponent = ({ children }) => (
  <Box style={`display: flex; flex-direction: column; justify-content: center; align-items:center; height: 100vh; width: 100vw`}>
    { children }
  </Box>
);

export default DefaultLayout;
