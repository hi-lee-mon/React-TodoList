import '@testing-library/jest-dom';
import { renderHook, act } from '@testing-library/react-hooks';
import { useList } from './useList';
import { useInput } from './useInput';
import { useMessage } from './useMessage';

describe('useList', () => {
  test('addTodoの確認', () => {
    const mockDate = new Date('2022-09-22T06:30:30');
    jest.useFakeTimers();
    jest.setSystemTime(mockDate);
    const { result: useListResult } = renderHook(() => useList());
    const { result: useInputResult } = renderHook(() => useInput());
    const { result: useMessageResult } = renderHook(() => useMessage());
    act(() => {
      useListResult.current[1].addTodo(
        useMessageResult.current[1],
        'go to sauna',
        useInputResult.current[1].clearInput,
      );
    });
    expect(useListResult.current[0]).toStrictEqual([
      { checked: false, id: '2022-09-21T21:30:30.000Z', text: 'go to sauna' },
    ]);
  });
});
