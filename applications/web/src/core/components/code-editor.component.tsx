import type { VoidComponent } from 'solid-js';
import { createSignal } from 'solid-js';
import { Button, TextArea } from '@codemudbox/design-system';
import { execute } from '../services';

const CodeEditor: VoidComponent = () => {
  const [getPayload, setPayload] = createSignal('');

  return (
    <>
      <TextArea
        style={'height: 80%; width: 80%; margin-bottom: 8px'}
        onChange={(event) => setPayload(event.target.value)}
      />
      <Button onClick={() => execute(getPayload())}>Submit</Button>
    </>
  );
};

export default CodeEditor;
