import type { Component } from 'solid-js';
import { CodeEditor } from './core/components';
import { DefaultLayout } from './core/layouts';

const Application: Component = () => {
  return (
    <DefaultLayout>
      <CodeEditor />
    </DefaultLayout>
  );
};

export default Application;
