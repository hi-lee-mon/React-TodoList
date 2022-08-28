import { useCallback, useState } from 'react';

type Return = [
  input: string,
  setInput: {
    handleSetInput: (Input: string) => void;
    clearInput: () => void;
  },
];

export const useInput = (): Return => {
  const [input, setInput] = useState('');
  const handleSetInput = useCallback((input: string) => {
    setInput(input);
  }, []);
  const clearInput = useCallback(() => setInput(''), [input]);

  return [input, { handleSetInput, clearInput }];
};
