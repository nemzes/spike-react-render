import { useCallback, useRef, useState } from "react";
import "./App.css";

const rows = [...Array(1000).keys()];
const cols = [...Array(10).keys()];

function MyComponent({ callback, children }) {
  const ref = useRef();
  const [clicks, setClicks] = useState(0);
  const handleClick = () => {
    setClicks(clicks + 1);
    callback(ref.current);
  }
  return (
    <div ref={ref} onClick={handleClick} className="blah">
      {children} ({clicks})
    </div>
  );
}

function App() {
  const anchor = useRef(null);
  const handleClick = useCallback(
    (element) => {
      if (!anchor) {
        console.log('setting anchor for first time')
      }
      console.log(element);
      anchor.current = element;
    },
    []
  );
  return (
    <div>
      <table>
        <tbody>
          {rows.map((row) => (
            <tr key={row}>
              {cols.map((col) => (
                <td key={col}>
                  <MyComponent callback={handleClick}>
                    {row}-{col}
                  </MyComponent>
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
