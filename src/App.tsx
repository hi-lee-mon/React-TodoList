import { List } from './components/List';
import { useList } from './hooks/useList';
import { useInput } from './hooks/useInput';
import { useMessage } from './hooks/useMessage';
import { TextFiled } from './components/TextFiled';

export type Item = {
  id: string;
  text: string;
  checked: boolean;
};

export const App = () => {
  const [list, setList] = useList();
  const [input, setInput] = useInput();
  const [message, setMessage] = useMessage();

  // jsx
  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      {/* テーブル */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          background: '#cececece',
          marginTop: '36px',
          padding: '16px 48px',
          borderRadius: '8px',
          width: '480px',
        }}
      >
        <header style={{ display: 'flex', alignItems: 'center', gap: '36px' }}>
          <h1 style={{ fontSize: '24px', margin: '0' }}>TODO</h1>
          <TextFiled
            input={input}
            setInput={setInput.handleSetInput}
            handleEnter={() => setList.addTodo(setMessage, input, setInput.clearInput)}
          />
        </header>
        <p style={{ color: 'red' }}>{message}</p>
        {/* List */}
        <List
          list={list}
          updateCheckState={setList.updateCheckState}
          deleteItem={setList.deleteItem}
        />
      </div>
    </div>
  );
};
