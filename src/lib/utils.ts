import { type ClassValue, clsx } from "clsx";
import { ToastOptions, toast } from "react-toastify";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const toastError = (content?: string, options?: ToastOptions) => {
  toast.error(content || "An error occured", {
    position: "bottom-center",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: true,
    progress: undefined,
    ...options,
  } satisfies ToastOptions);
};

export const toastSuccess = (content: string, options?: ToastOptions) => {
  toast.success(content, {
    position: "bottom-center",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: true,
    progress: undefined,
    ...options,
  } satisfies ToastOptions);
};

export const copyToClipboard = async (text: string) => {
  try {
    await navigator.clipboard.writeText(text);
  } catch (error) {
    /* empty */
  }
};

export const isValidEmail = (text: string) => {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  let valid = true;
  if (re.test(text) == false) {
    valid = false;
  }
  return valid;
};
