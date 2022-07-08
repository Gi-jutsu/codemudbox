import type { Component } from 'solid-js';
import { Box } from '@codemudbox/design-system';
import { CodeEditor } from './core/components';

const Application: Component = () => {
  return (
    <Box>
      <CodeEditor />
    </Box>
  );
};

export default Application;
