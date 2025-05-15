import { Button } from './components/Button';
import { ToastContainer } from './components/ToastContainer';

function App() {
  return (
    <div className="flex flex-col items-center space-y-10">
      <h1 className="text-7xl font-bold text-center">Hello, World</h1>

      <div className="space-x-2">
        <Button onClick={() => {}}>Default</Button>
        <Button onClick={() => {}}>Success ✅</Button>
        <Button onClick={() => {}}>Error ❌</Button>
      </div>

      <ToastContainer />
    </div>
  );
}

export default App;
