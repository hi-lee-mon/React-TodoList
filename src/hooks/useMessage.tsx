import { useCallback, useState } from 'react';

type Return = [
  message: string,
  setMessage: {
    handleSetMessage: (message: string) => void;
    clearMessage: () => void;
  },
];

export const useMessage = (): Return => {
  const [message, setMessage] = useState('');
  const handleSetMessage = useCallback((message: string) => {
    setMessage(message);
  }, []);
  const clearMessage = useCallback(() => setMessage(''), []);

  return [message, { handleSetMessage, clearMessage }];
};
