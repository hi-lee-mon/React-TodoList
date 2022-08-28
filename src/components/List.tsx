import { memo } from 'react';
import { Item } from '../App';

type Props = {
  list: Item[];
  updateCheckState: (id: string) => void;
  deleteItem: (id: string) => void;
};

export const List = memo(({ list, updateCheckState, deleteItem }: Props) => {
  return (
    <ul
      style={{ margin: '0', padding: '0', display: 'flex', flexDirection: 'column', gap: '16px' }}
    >
      {list.map((item) => (
        <li key={item.id} style={{ display: 'flex', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex' }}>
            <input
              id={item.id}
              type="checkbox"
              checked={item.checked}
              onChange={() => updateCheckState(item.id)}
            />
            {item.checked ? (
              <label
                htmlFor={item.id}
                style={{
                  display: 'inline-block',
                  fontSize: '24px',
                  color: 'gray',
                  width: '400px',
                  wordBreak: 'break-all',
                }}
              >
                <s>{item.text}</s>
              </label>
            ) : (
              <label
                htmlFor={item.id}
                style={{
                  display: 'inline-block',
                  fontSize: '24px',
                  width: '400px',
                  wordBreak: 'break-all',
                }}
              >
                {item.text}
              </label>
            )}
          </div>
          <button onClick={() => deleteItem(item.id)}>削除</button>
        </li>
      ))}
    </ul>
  );
});
