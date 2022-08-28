import '@testing-library/jest-dom';
import { App } from './App';
import { screen, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

test('初期描画', () => {
  render(<App />);
  const titleEletemt = screen.getByRole('heading', {
    name: 'TODO',
  });
  const textElement = screen.getByRole('textbox');
  expect(titleEletemt).toBeInTheDocument();
  expect(textElement).toBeInTheDocument();
});

test('TODO作成', () => {
  render(<App />);
  userEvent.type(screen.getByRole('textbox'), 'go to sauna');
  expect(screen.getByRole('textbox')).toHaveValue('go to sauna');
  userEvent.keyboard('{enter}');
  expect(screen.getByLabelText('go to sauna')).toBeInTheDocument();
  expect(screen.getByRole('checkbox', { name: 'go to sauna' })).toBeInTheDocument();
  expect(screen.getByRole('button', { name: '削除' })).toBeInTheDocument();
});

test('TODO削除', () => {
  render(<App />);
  userEvent.type(screen.getByRole('textbox'), 'go to sauna');
  userEvent.keyboard('{enter}');
  expect(screen.getByRole('checkbox', { name: 'go to sauna' })).toBeInTheDocument();
  userEvent.click(screen.getByRole('button', { name: '削除' }));
  expect(screen.queryByRole('checkbox', { name: 'go to sauna' })).toBeNull();
});

test('TODOチェック', () => {
  render(<App />);
  userEvent.type(screen.getByRole('textbox'), 'go to sauna');
  userEvent.keyboard('{enter}');
  userEvent.click(screen.getByRole('checkbox', { name: 'go to sauna' }));
  expect(screen.getByRole('checkbox', { name: 'go to sauna' })).toBeChecked();
});
