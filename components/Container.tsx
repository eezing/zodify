import Monaco from '@monaco-editor/react';
import _debounce from 'lodash.debounce';
import { FC, useCallback, useState } from 'react';
import { generate } from 'ts-to-zod';

const Container: FC = () => {
  const defaultSource =
    getSearchParam('source') ??
    'interface Foo {\n    bar: string;\n    biz: boolean;\n    baz: number;\n};';

  const [zodCode, setZodCode] = useState(compileZod(defaultSource) ?? '');

  const onInputChange = useCallback(
    _debounce((source: string = '') => {
      const next = compileZod(source);

      setZodCode((current) => {
        if (next !== null && next !== current) {
          setSearchParam('source', source);
          return next;
        } else {
          return current;
        }
      });
    }, 250),
    []
  );

  return (
    <div className="container">
      <Monaco
        height="99vh"
        width="45vw"
        defaultLanguage="typescript"
        theme="vs-dark"
        defaultValue={defaultSource}
        onChange={onInputChange}
        options={{ minimap: { enabled: false }, wordWrap: 'on' }}
      />
      <Monaco
        height="99vh"
        width="55vw"
        defaultLanguage="typescript"
        theme="vs-dark"
        value={zodCode}
        options={{
          minimap: { enabled: false },
          readOnly: true,
          wordWrap: 'on',
        }}
      />
      <style jsx>{`
        .container {
          display: flex;
          justify-content: center;
        }
      `}</style>
    </div>
  );
};

function compileZod(source: string) {
  const result = generate({ sourceText: source });

  return result.errors.length
    ? null
    : result.getZodSchemasFile('./interfaces.ts');
}

function getSearchParam(name: string) {
  const queryParams = new URLSearchParams(window.location.search);
  return queryParams.get(name);
}

function setSearchParam(name: string, value: string) {
  const queryParams = new URLSearchParams(window.location.search);
  queryParams.set(name, value);
  window.history.replaceState(null, '', `?${queryParams.toString()}`);
}

export default Container;
