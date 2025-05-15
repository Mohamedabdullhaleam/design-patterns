import { Toast } from './Toast';

export function ToastContainer() {
  return (
    <div className="absolute bottom-0 end-0 p-4 space-y-2 w-full h-full justify-end pointer-events-none flex flex-col max-w-xs ">
      <Toast id={Math.random()} message="Toast default" onClose={() => {}} />
    </div>
  );
}
