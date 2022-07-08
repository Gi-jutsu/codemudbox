import type { VoidComponent } from 'solid-js';
import { createSignal } from 'solid-js';
import { Box, Button, TextArea } from '@codemudbox/design-system';
import { execute } from '../services';

const CodeEditor: VoidComponent = () => {
  const [getPayload, setPayload] = createSignal('');

  return (
    <Box>
      <TextArea onChange={(event) => setPayload(event.target.value)}/>
      <Button onClick={() => execute(getPayload())}>Submit</Button>
    </Box>
  );
};

export default CodeEditor;
