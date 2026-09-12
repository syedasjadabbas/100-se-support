import React from 'react';
import type { SubMenuItem } from '../../types/navigation';
import './Dropdown.css';

interface DropdownProps {
  items: SubMenuItem[];
  isOpen: boolean;
  onClose?: () => void;
}

export const Dropdown: React.FC<DropdownProps> = ({ items, isOpen, onClose }) => {
  return (
    <ul className={`nav-dropdown ${isOpen ? 'nav-dropdown--open' : ''}`} role="menu">
      {items.map((sub) => (
        <li key={sub.id} className="nav-dropdown__item" role="none">
          <a
            href={sub.href}
            className="nav-dropdown__link"
            role="menuitem"
            onClick={onClose}
          >
            {sub.label}
          </a>
        </li>
      ))}
    </ul>
  );
};
