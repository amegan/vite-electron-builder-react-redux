import {useState} from 'react';

import {sha256sum} from '#preload';

export default function ReactiveHash() {
  const [rawString, setRawString] = useState('Hello World');
  const hashedString = sha256sum(rawString);

  return (
    <>
      <table>
        <tbody>
          <tr>
            <th>
              <label htmlFor="reactive-hash-raw-value">Raw value :</label>
            </th>
            <td>
              <input
                id="reactive-hash-raw-value"
                value={rawString}
                onChange={ev => setRawString(ev.target.value)}
                type="text"
              />
            </td>
          </tr>

          <tr>
            <th>
              <label htmlFor="reactive-hash-hashed-value">Hashed by node:crypto :</label>
            </th>
            <td>
              <input
                id="reactive-hash-hashed-value"
                value={hashedString}
                readOnly
                type="text"
              />
            </td>
          </tr>
        </tbody>
      </table>
      <code>packages/renderer/src/components/ReactiveHash.vue</code>
    </>
  );
}
