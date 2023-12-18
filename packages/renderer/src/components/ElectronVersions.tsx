import {versions} from '#preload';
import './ElectronVersions.css';

export default function ElectronVersions() {
  return (
    <>
      <table id="process-versions">
        <tbody>
          {Object.entries(versions).map(([lib, version]) => {
            return (
              <tr key={lib}>
                <th>{lib} :</th>
                <td>v{version}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <code>packages/renderer/src/components/ElectronVersions.tsx</code>
    </>
  );
}
