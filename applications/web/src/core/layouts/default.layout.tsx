import type { ParentComponent } from 'solid-js';
import { Box } from '@codemudbox/design-system';

const DefaultLayout: ParentComponent = ({ children }) => (
  <Box>
    { children }
  </Box>
);

export default DefaultLayout;
