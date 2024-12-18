import { createPortal } from "react-dom";
import { useEffect, useRef } from "react";

export default function Modal({ children, open, onClose, className = "" }) {
  const dialog = useRef();

  useEffect(() => {
    if (open) {
      dialog.current.showModal();
    }

    return () => dialog.current?.close();
  }, [open]);

  return createPortal(
    <dialog className={`modal ${className}`} onClose={onClose} ref={dialog}>
      {children}
    </dialog>,
    document.getElementById("modal")
  );
}
