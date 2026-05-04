"use client";

import Link from "next/link";
import logo from "@/assets/logo.png";
import Image from "next/image";
import NavLink from "./NavLink";
import { authClient } from "@/lib/auth-client";
import avater from "@/assets/userAvater.jpg";
import { useState } from "react";
import Toast from "./Toast";

const Navbar = () => {
  const { data: session } = authClient.useSession();
  const [toast, setToast] = useState(null);

  const user = session?.user;

  const handleLogout = async () => {
    await authClient.signOut();
    setToast({
      message: "✓ Logged out successfully!",
      type: "success",
    });
  };

  const navLinks = (
    <>
      <li>
        <NavLink href="/" className="hover:text-primary">
          Home
        </NavLink>
      </li>

      <li>
        <NavLink href="/all-animals" className="hover:text-primary">
          All Animals
        </NavLink>
      </li>

      <li>
        <NavLink href="/my-profile" className="hover:text-primary">
          My Profile
        </NavLink>
      </li>
    </>
  );

  return (
    <>
      {toast && (
        <Toast
          message={toast.message}
          type={toast.type}
          duration={3000}
          onClose={() => setToast(null)}
        />
      )}
      <div className="navbar bg-base-100 shadow-md sticky top-0 z-50 px-4 lg:px-8">
        {/* Navbar Start */}
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
          <Link href="/" className="flex items-center">
            <Image
              src={logo}
              width={60}
              height={10}
              alt="QurbaniHaat Logo"
              className="object-contain"
            />
          </Link>
        </div>

        {/* Desktop Menu */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal gap-2 px-1 text-base font-medium">
            {navLinks}
          </ul>
        </div>

        {/* Navbar End */}
        {user ? (
          <div className="navbar-end gap-2">
            <Image
              src={user.image || avater}
              width={60}
              height={60}
              alt="user image"
            ></Image>

            <button className="btn" onClick={handleLogout}>
              Logout
            </button>
          </div>
        ) : (
          <div className="navbar-end gap-3">
            <Link href="/signIn" className="btn btn-outline btn-sm">
              Sign In
            </Link>
            <Link href="/signUp" className="btn btn-outline btn-sm">
              Sign Up
            </Link>
          </div>
        )}
      </div>
    </>
  );
};

export default Navbar;
