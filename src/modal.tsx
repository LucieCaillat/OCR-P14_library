import * as React from "react";
import "./modal.css";
import { createPortal } from "react-dom";

interface IProps {
  children: string;
  open: boolean;
  onClose: any;
  HtmlElement: HTMLElement;
}
export function Modal({ children, open, onClose, HtmlElement }: IProps) {
  if (!open) return null;
  return createPortal(
    <div className="modal-background">
      <div className="modal">
        {children} <button onClick={onClose} className="close-modal" />
      </div>
    </div>,
    HtmlElement
  );
}
