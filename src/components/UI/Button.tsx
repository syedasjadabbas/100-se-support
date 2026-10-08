import React from 'react';
import { Link } from 'react-router-dom';
import './Button.css';

export interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'accent' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  to?: string;
  onClick?: (e: React.MouseEvent) => void;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  ariaLabel?: string;
  target?: string;
  rel?: string;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  href,
  to,
  onClick,
  className = '',
  type = 'button',
  ariaLabel,
  target,
  rel,
}) => {
  const classes = `btn btn--${variant} btn--${size} ${className}`.trim();

  if (to) {
    return (
      <Link
        to={to}
        className={classes}
        onClick={onClick}
        aria-label={ariaLabel}
      >
        <span className="btn__text">{children}</span>
      </Link>
    );
  }

  if (href) {
    return (
      <a
        href={href}
        className={classes}
        onClick={onClick}
        aria-label={ariaLabel}
        target={target}
        rel={rel}
      >
        <span className="btn__text">{children}</span>
      </a>
    );
  }

  return (
    <button
      type={type}
      className={classes}
      onClick={onClick}
      aria-label={ariaLabel}
    >
      <span className="btn__text">{children}</span>
    </button>
  );
};
