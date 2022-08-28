import React from 'react';
import { useInput } from '../hooks/useInput';

type UseInput = ReturnType<typeof useInput>;
type Props = {
  input: UseInput[0];
  setInput: (Input: string) => void;
  handleEnter: () => void;
};

export const TextFiled = (props: Props) => {
  const { input, setInput, handleEnter } = props;
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.nativeEvent.isComposing || e.key !== 'Enter') return;
    handleEnter();
  };
  return (
    <input
      type='input'
      value={input}
      onChange={(e) => setInput(e.target.value)}
      onKeyDown={handleKeyDown}
    />
  );
};
