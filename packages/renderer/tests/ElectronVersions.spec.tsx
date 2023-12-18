import { render, screen } from '@testing-library/react'
import {expect, test, vi} from 'vitest';
import ElectronVersions from '../src/components/ElectronVersions.tsx';

vi.mock('#preload', () => {
  return {
    versions: {lib1: 1, lib2: 2},
  };
});

test('ElectronVersions component', async () => {
  expect(ElectronVersions).toBeTruthy();
  render(<ElectronVersions />);

  const rows = screen.getAllByRole("row");
  expect(rows.length).toBe(2);

  const ths = screen.getAllByRole("columnheader");
  const tds = screen.getAllByRole("cell")
  expect(ths[0].innerText).toBe('lib1 :');
  expect(tds[0].innerText).toBe('v1');

  expect(ths[1].innerText).toBe('lib2 :');
  expect(tds[1].innerText).toBe('v2');
});
