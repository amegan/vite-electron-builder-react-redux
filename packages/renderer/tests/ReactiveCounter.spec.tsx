import {expect, test} from 'vitest';

import { fireEvent, screen } from '@testing-library/react'
import { renderWithProviders } from '../src/utils/test-utils.tsx'

import ReactiveCounter from '../src/components/ReactiveCounter.tsx';

test('ReactiveHash component', async () => {
  expect(ReactiveCounter).toBeTruthy();

  renderWithProviders(<ReactiveCounter/>);

  expect(screen.getByRole('button').innerText.trim()).toBe('count is: 0');

  fireEvent.click(screen.getByRole('button'));

  expect(screen.getByRole('button').innerText.trim()).toBe('count is: 1');
});
