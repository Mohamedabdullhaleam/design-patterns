import { ToastProps } from "../components/Toast";
import { Observable } from "./observable";
import { v4 as uuidv4 } from "uuid";

type ToastItem = Omit<ToastProps, "onClose">;
type StoreEvent = ToastItem;
export const toastStore = new Observable<StoreEvent>();

export function toast(message: string) {
  toastStore.notify({ id: uuidv4(), message });
}
toast.success = function (message: string) {
  toastStore.notify({ id: uuidv4(), message, variant: "success" });
};
toast.default = function (message: string) {
  toastStore.notify({ id: uuidv4(), message, variant: "default" });
};
toast.error = function (message: string) {
  toastStore.notify({ id: uuidv4(), message, variant: "error" });
};
