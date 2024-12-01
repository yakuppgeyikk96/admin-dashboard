// src/hooks/use-keyboard-shortcut.ts
import { useEffect } from "react";

interface UseKeyboardShortcutProps {
  key: string;
  ctrlKey?: boolean;
  metaKey?: boolean;
  callback: () => void;
}

export const useKeyboardShortcut = ({
  key,
  ctrlKey = false,
  metaKey = false,
  callback,
}: UseKeyboardShortcutProps) => {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      const isMac = navigator.platform.toUpperCase().indexOf("MAC") >= 0;
      const modifierKey = isMac ? event.metaKey : event.ctrlKey;

      if (
        event.key.toLowerCase() === key.toLowerCase() &&
        modifierKey === (isMac ? metaKey : ctrlKey)
      ) {
        event.preventDefault();
        callback();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [key, ctrlKey, metaKey, callback]);
};
