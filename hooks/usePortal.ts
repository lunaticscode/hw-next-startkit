import { FC, ReactNode, useEffect, useState } from "react";
import { createPortal } from "react-dom";

const usePortal = (
  container: HTMLElement | null
): {
  Portal: FC<{ children: ReactNode }>;
  target: Element | HTMLElement | undefined;
} => {
  const [mountElement, setMountElement] = useState<Element | HTMLElement>();
  useEffect(() => {
    setMountElement(container as HTMLElement);
  }, [container]);

  const Portal: FC<{ children: ReactNode }> = ({ children }) => {
    return mountElement ? createPortal(children, mountElement) : null;
  };

  return {
    Portal,
    target: mountElement,
  };
};
export default usePortal;
