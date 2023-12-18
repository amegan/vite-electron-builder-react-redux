import logo from './logo.svg';

import './App.css';

import ReactiveCounter from './components/ReactiveCounter';
import ReactiveHash from './components/ReactiveHash';
import ElectronVersions from './components/ElectronVersions';

const APP_VERSION = import.meta.env.VITE_APP_VERSION;

export default function App() {
  return (
    <div className="App">
      <img
        className="App-logo"
        alt="React logo"
        src={logo}
      />

      <p>App version: {APP_VERSION}</p>

      <p>
        For a guide and recipes on how to configure / customize this project,
        <br />
        check out the
        <a
          href="https://github.com/cawa-93/vite-electron-builder"
          target="_blank"
        >
          vite-electron-builder documentation
        </a>
        .
      </p>

      <fieldset>
        <legend>Test React/Redux Reactivity</legend>
        <ReactiveCounter />
      </fieldset>

      <fieldset>
        <legend>Test Node.js API</legend>
        <ReactiveHash />
      </fieldset>

      <fieldset>
        <legend>Environment</legend>
        <ElectronVersions />
      </fieldset>

      <p>
        Edit <code>packages/renderer/src/App.tsx</code> to test hot module replacement.
      </p>
    </div>
  );
}