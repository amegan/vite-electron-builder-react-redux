import { render, fireEvent, screen } from '@testing-library/react'
import {expect, test, vi} from 'vitest';
import ReactiveHash from '../src/components/ReactiveHash.tsx';

vi.mock('#preload', () => {
  return {
    sha256sum: vi.fn((s: string) => `${s}:HASHED`),
  };
});

test('ReactiveHash component', async () => {
  expect(ReactiveHash).toBeTruthy();
  render(<ReactiveHash />);

  const [dataInput, hashInput] = screen.queryAllByRole('textbox');

  const dataToHashed = Math.random().toString(36).slice(2, 7);
  fireEvent.change(dataInput, {target: { value: dataToHashed}});
  expect(hashInput.value).toBe(`${dataToHashed}:HASHED`);
});
