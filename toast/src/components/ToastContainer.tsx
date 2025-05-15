import { useEffect, useState } from "react";
import { Toast, ToastProps } from "./Toast";
import { toastStore } from "../utils/toast";
import { useAutoAnimate } from "@formkit/auto-animate/react";

type ToastItem = Omit<ToastProps, "onClose">;

export function ToastContainer() {
  const [toasts, setToasts] = useState<ToastItem[]>([]);
  const [animateRef] = useAutoAnimate();
  useEffect(() => {
    return toastStore.subscribe((toast) => {
      setToasts((prevToast) => [...prevToast, toast]);

      setTimeout(() => {
        setToasts((prev) => prev.filter((t) => t.id !== toast.id));
      }, 2000);
    });
  }, []);

  return (
    <div
      ref={animateRef}
      className="absolute bottom-0 end-0 p-4 space-y-2 w-full h-full justify-end pointer-events-none flex flex-col max-w-xs "
    >
      {toasts.map((toast) => (
        <Toast
          id={toast.id}
          message={toast.message}
          variant={toast.variant}
          onClose={() => {
            setToasts((previous) =>
              previous.filter((tst) => tst.id !== toast.id)
            );
          }}
        />
      ))}
    </div>
  );
}
