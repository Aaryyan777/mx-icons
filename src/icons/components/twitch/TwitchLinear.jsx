import React from "react";
import Icon from "../../Icon";

export default function TwitchLinear({
  size = 24,
  color = "#292D32",
  className = "",
  ...props
}) {
  return (
    <Icon
      size={size}
      color={color}
      fill="none"
      className={className}
      {...props}
    >
      <path
        d="M15.9796 7.49512V12.4951M11.9796 7.49512V12.4951"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path
        d="M19.9909 3.49902H4.00915C4.00364 3.49902 3.99918 3.50351 3.99918 3.50904V16.5076C3.99918 16.5132 4.00373 16.5177 4.00929 16.5176L7.02167 16.4738V20.4909C7.02167 20.4999 7.03239 20.5043 7.03868 20.498L11.0141 16.5178H16.988L20.0008 13.5152V3.50904C20.0008 3.50351 19.9964 3.49902 19.9909 3.49902Z"
        stroke="currentColor"
        strokeWidth="1.5"
      />
    </Icon>
  );
}
