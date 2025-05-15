import { ToastProps } from "../components/Toast";
import { Observable } from "./observable";

type ToastItem = Omit<ToastProps, "onClose">;
type StoreEvent = ToastItem;
export const toastStore = new Observable<StoreEvent>();

export function toast(message: string) {
  toastStore.notify({ id: Math.random(), message });
}
toast.success = function (message: string) {
  toastStore.notify({ id: Math.random(), message, variant: "success" });
};
toast.default = function (message: string) {
  toastStore.notify({ id: Math.random(), message, variant: "default" });
};
toast.error = function (message: string) {
  toastStore.notify({ id: Math.random(), message, variant: "error" });
};
