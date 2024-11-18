import React from "react";
import './header.css';
function Header() {
  return (
    <header className="header">
      {/* Left */}
      <div className="header__left">
        <svg
          viewBox="0 0 36 36"
          className="a8c37x1j ms05siws hwsy1cff b7h9ocf4"
          fill="url(#jsc_c_3)"
          height="40"
          width="40"
        >
          <defs>
            <linearGradient
              x1="50%"
              x2="50%"
              y1="97.0782153%"
              y2="0%"
              id="jsc_c_3"
            >
              <stop offset="0%" stopColor="#0062E0"></stop>
              <stop offset="100%" stopColor="#19AFFF"></stop>
            </linearGradient>
          </defs>
          <path d="M15 35.8C6.5 34.3 0 26.9 0 18 0 8.1 8.1 0 18 0s18 8.1 18 18c0 8.9-6.5 16.3-15 17.8l-1-.8h-4l-1 .8z"></path>
          <path
            className="p361ku9c"
            fill="#fff"
            d="M25 23l.8-5H21v-3.5c0-1.4.5-2.5 2.7-2.5H26V7.4c-1.3-.2-2.7-.4-4-.4-4.1 0-7 2.5-7 7v4h-4.5v5H15v12.7c1 .2 2 .3 3 .3s2-.1 3-.3V23h4z"
          ></path>
        </svg>
        <div className="header__searchbox">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            width="1.25rem"
            height="1.5rem"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
          <input
            className="header__searchinput"
            placeholder="Tìm kiếm"
          />
        </div>
      </div>

      {/* Center */}
      <div className="header__center">
        <div className="header__iccontainer">
          {/* Các biểu tượng khác có thể thêm ở đây */}
        </div>
      </div>

      {/* Right */}
      <div className="header__right">
        <img className="header__avatar" src="user-avatar-url" alt="User Avatar" />
        <p className="header__username">Username</p>
      </div>
    </header>
  );
}

export default Header;