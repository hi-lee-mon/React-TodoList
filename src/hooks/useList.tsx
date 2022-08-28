import { useCallback, useState } from 'react';
// import { v4 } from 'uuid'; // jestでエラーになるためコメントアウト
import { useInput } from './useInput';
import { useMessage } from './useMessage';

export type Item = {
  id: string;
  text: string;
  checked: boolean;
};
type SetMessage = ReturnType<typeof useMessage>[1];
type ClearInput = ReturnType<typeof useInput>[1]['clearInput'];

type Return = [
  list: Item[],
  setList: {
    updateCheckState: (id: string) => void;
    deleteItem: (id: string) => void;
    addTodo: (setMessage: SetMessage, input: string, clearInput: ClearInput) => void;
  },
];

export const useList = (): Return => {
  const [list, setList] = useState<Item[]>([]);

  const addTodo = useCallback((setMessage: SetMessage, input: string, clearInput: ClearInput) => {
    setMessage.clearMessage();
    if (input === '') {
      setMessage.handleSetMessage('空文字エラー');
      return;
    }
    clearInput();
    const item: Item = {
      id: `${new Date().toISOString()}`,
      text: input,
      checked: false,
    };
    setList((prev) => [...prev, item]);
  }, []);

  const updateCheckState = useCallback(
    (id: string) => {
      const updatedList: Item[] = list.map((item) => {
        if (item.id === id) {
          const newItem: Item = {
            ...item,
            checked: !item.checked,
          };
          return newItem;
        }
        return item;
      });
      setList(updatedList);
    },
    [list],
  );

  const deleteItem = useCallback(
    (id: string) => {
      const deletedList = list.filter((item) => !(item.id === id));
      setList(deletedList);
    },
    [list],
  );

  return [
    list,
    {
      updateCheckState,
      deleteItem,
      addTodo,
    },
  ];
};
