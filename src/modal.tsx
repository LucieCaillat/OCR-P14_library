/**
 *
 * @param {string} children : the text of your modal
 * @param {boolean} open : a boolean state
 * @param {function} onClose : a function that changes the boolean state
 * @param {HTMLElement} HtmlElement : the physical placement of the DOM node for your modal
 * @returns a modal box
 */

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
