import React, { Component } from "react";
interface MenuIconProps {
  className?: string;
  size?: number;
  onClick?: () => void;
}
class MenuIcon extends Component<MenuIconProps> {
  render() {
    const { className, size, onClick } = this.props;
    const viewBox = size ? `0 0 ${size} ${size}` : "0 0 24 24";
    return (
      <svg
        className={className}
        viewBox={viewBox}
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        onClick={onClick}
      >
        <line x1="3" y1="12" x2="21" y2="12"></line>
        <line x1="3" y1="6" x2="21" y2="6"></line>
      </svg>
    );
  }
}

export default MenuIcon;
