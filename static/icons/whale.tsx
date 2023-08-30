import React, { Component } from "react";

interface WhaleIconProps {
  className?: string;
  size?: number;
}

class WhaleIcon extends Component<WhaleIconProps> {
  render() {
    const { className, size } = this.props;
    const viewBox = size ? `0 0 ${size} ${size}` : "0 0 50 50";
    return (
      <svg
        className={className}
        viewBox={viewBox}
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* whale body */}
        <ellipse cx="25" cy="25" rx="20" ry="12" fill="#0066cc" />

        {/* whale tail */}
        <polygon points="30,25 40,15 40,35" fill="#004080" />

        {/* whale eye */}
        <circle cx="20" cy="20" r="3" fill="white" />
        <circle cx="20" cy="20" r="1.5" fill="black" />

        {/* whale mouth */}
        <path d="M25 25 Q30 27 30 23" fill="none" stroke="black" />
      </svg>
    );
  }
}

export default WhaleIcon;
