import { Button } from "./components/Button";
import { ToastContainer } from "./components/ToastContainer";
import { toast } from "./utils/toast";

function App() {
  return (
    <div className="flex flex-col items-center space-y-10">
      <h1 className="text-7xl font-bold text-center">Hello, World</h1>

      <div className="space-x-2">
        <Button
          onClick={() => {
            toast("hiiiiiiiiiiiiii");
          }}
        >
          Default
        </Button>
        <Button
          onClick={() => {
            toast.success("We did it 🐱‍👤🐱‍👤🐱‍👤🐱‍👤🐱‍👤🐱‍👤");
          }}
        >
          Success ✅
        </Button>
        <Button
          onClick={() => {
            toast.error("We fucked up 🤡🤡🤡🤡");
          }}
        >
          Error ❌
        </Button>
      </div>

      <ToastContainer />
    </div>
  );
}

export default App;
