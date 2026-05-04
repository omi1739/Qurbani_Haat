"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import defaultAvatar from "@/assets/userAvater.jpg";

export default function MyProfile() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Get user data from localStorage
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    setLoading(false);
  }, []);

  if (loading) {
    return (
      <main className="min-h-screen flex justify-center items-center">
        <span className="loading loading-spinner loading-lg"></span>
      </main>
    );
  }

  if (!user) {
    return (
      <main className="min-h-screen bg-base-50">
        <div className="max-w-4xl mx-auto px-4 py-12">
          <div className="card bg-base-100 shadow-lg p-8 text-center">
            <h1 className="text-3xl font-bold mb-4">Not Logged In</h1>
            <p className="text-gray-600 mb-6">
              Please sign in to view your profile
            </p>
            <Link href="/sign-in" className="btn btn-primary">
              Go to Sign In
            </Link>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-base-50 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">My Profile</h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Profile Card */}
          <div className="card bg-base-100 shadow-lg p-6 md:col-span-1">
            <figure className="relative w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden">
              <Image
                src={user.photo || defaultAvatar}
                alt={user.name}
                fill
                className="object-cover"
              />
            </figure>
            <h2 className="text-2xl font-bold text-center mb-2">{user.name}</h2>
            <p className="text-center text-gray-600 text-sm">{user.email}</p>

            <div className="divider my-4"></div>

            <Link href="/update-profile" className="btn btn-primary btn-block">
              Update Information
            </Link>
          </div>

          {/* Profile Details */}
          <div className="card bg-base-100 shadow-lg p-6 md:col-span-2">
            <h3 className="text-2xl font-bold mb-6">Profile Information</h3>

            <div className="space-y-6">
              <div>
                <label className="text-sm font-semibold text-gray-600">
                  Name
                </label>
                <p className="text-lg mt-1">{user.name}</p>
              </div>

              <div>
                <label className="text-sm font-semibold text-gray-600">
                  Email
                </label>
                <p className="text-lg mt-1">{user.email}</p>
              </div>

              <div>
                <label className="text-sm font-semibold text-gray-600">
                  Photo
                </label>
                <div className="flex items-center gap-3 mt-1">
                  <div className="relative w-16 h-16 rounded-lg overflow-hidden">
                    <Image
                      src={user.photo || defaultAvatar}
                      alt={user.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="text-sm text-gray-600">
                    {user.photo ? "Photo uploaded" : "No photo uploaded"}
                  </div>
                </div>
              </div>

              <div className="pt-4">
                <button
                  onClick={() => window.history.back()}
                  className="btn btn-outline"
                >
                  Back
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
