"use client";

import Link from "next/link";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    // Check if user is logged in from localStorage
    const storedUser = localStorage.getItem("qurbani_user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
      setIsLoggedIn(true);
    }
    setLoading(false);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("qurbani_user");
    setIsLoggedIn(false);
    setUser(null);
    router.push("/");
  };

  const navLinks = (
    <>
      <li>
        <Link href="/" className="hover:text-primary">
          Home
        </Link>
      </li>
      <li>
        <Link href="/all-animals" className="hover:text-primary">
          All Animals
        </Link>
      </li>
    </>
  );

  return (
    <div className="navbar bg-base-100 shadow-md sticky top-0 z-50">
      <div className="navbar-start">
        {/* Mobile Menu */}
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content z-50 menu p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navLinks}
          </ul>
        </div>

        {/* Logo */}
        <Link href="/" className="btn btn-ghost text-xl font-bold">
          <span className="text-2xl">🐄</span> QurbaniHaat
        </Link>
      </div>

      {/* Desktop Menu */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navLinks}</ul>
      </div>

      {/* Auth Section */}
      <div className="navbar-end gap-2">
        {!loading && isLoggedIn && user ? (
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full bg-primary text-white flex items-center justify-center">
                {user.photo ? (
                  <img
                    src={user.photo}
                    alt={user.name}
                    className="w-full h-full object-cover rounded-full"
                  />
                ) : (
                  <span className="text-lg font-bold">
                    {user.name?.charAt(0).toUpperCase()}
                  </span>
                )}
              </div>
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content z-50 menu p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <span className="font-semibold text-sm">{user.name}</span>
              </li>
              <li>
                <Link href="/my-profile">My Profile</Link>
              </li>
              <li>
                <button onClick={handleLogout}>Logout</button>
              </li>
            </ul>
          </div>
        ) : (
          <>
            <Link href="/sign-in" className="btn btn-outline btn-sm">
              Sign In
            </Link>
            <Link href="/sign-up" className="btn btn-primary btn-sm">
              Sign Up
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
