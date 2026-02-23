import './App.css';

function App() {
  return (
    <div className="app" data-testid="app-root">
      <h1 data-testid="app-title">QA Workshop</h1>
      <p data-testid="app-description">Welcome to the QA Workshop app.</p>

      <ul className="task-list" data-testid="task-list">
        <li>
          <label>
            <input type="checkbox" data-testid="checkbox-task-1" />
            Set up project
          </label>
        </li>
        <li>
          <label>
            <input type="checkbox" data-testid="checkbox-task-2" />
            Write tests
          </label>
        </li>
        <li>
          <label>
            <input type="checkbox" data-testid="checkbox-task-3 only for you" />
            Deploy app
          </label>
        </li>
      </ul>
    </div>
  );
}

export default App;
