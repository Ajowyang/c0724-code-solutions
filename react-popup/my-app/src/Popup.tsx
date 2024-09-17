import { createPortal } from 'react-dom';

type PopupProps = {
  open: boolean;
  positionTo?: HTMLElement | null;
  onClose: () => void;
  children: string[];
};

export function Popup({ open, positionTo, onClose, children }: PopupProps) {
  if (!open) {
    onClose();
    return null;
  }

  const rect = positionTo?.getBoundingClientRect();
  const top = rect ? rect.bottom : '50%';
  const left = rect ? (rect.left + rect.width) / 2 : '50%';
  const listItems = children.map((child) => <li>{child}</li>);

  const bgDivStyle = {
    opacity: 0.1,
    top: 0,
  };

  return createPortal(
    <>
      <div
        onClick={onClose}
        className="bg-black w-screen h-screen fixed "
        style={bgDivStyle}></div>
      <div className="menu-wrapper absolute bg-white" style={{ top, left }}>
        <ul className="list-none shadow-2xl border">{listItems}</ul>
      </div>
    </>,
    document.body
  );
}
