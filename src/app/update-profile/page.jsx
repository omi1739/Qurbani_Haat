"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import defaultAvatar from "@/assets/userAvater.jpg";
import { authClient } from "@/lib/auth-client";

export default function UpdateProfile() {
  const router = useRouter();
  const { data: session, isPending: loading } = authClient.useSession();
  const [formData, setFormData] = useState({
    name: session?.user?.name || "",
    image: session?.user?.image || "",
  });

  const user = session?.user;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

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
              Please sign in to update your profile
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
      <div className="max-w-2xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Update Profile</h1>

        <div className="card bg-base-100 shadow-lg p-6 md:p-8">
          <form className="space-y-6">
            {/* Name Field */}
            <div>
              <label className="label">
                <span className="label-text font-semibold text-lg">Name</span>
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Enter your name"
                className="input input-bordered w-full text-lg"
                required
              />
            </div>

            {/* Photo URL Field */}
            <div>
              <label className="label">
                <span className="label-text font-semibold text-lg">
                  Photo URL
                </span>
              </label>
              <input
                type="url"
                name="image"
                value={formData.image}
                onChange={handleInputChange}
                placeholder="Enter photo URL (optional)"
                className="input input-bordered w-full text-lg"
              />
              <p className="text-sm text-gray-600 mt-2">
                Provide a complete URL to an image (e.g.,
                https://example.com/photo.jpg)
              </p>

              {/* Photo Preview */}
              {formData.image && (
                <div className="mt-4">
                  <p className="text-sm font-semibold mb-2">Photo Preview:</p>
                  <div className="relative w-32 h-32 rounded-lg overflow-hidden border-2 border-primary">
                    <Image
                      src={formData.image}
                      alt="Preview"
                      fill
                      className="object-cover"
                      onError={(e) => {
                        e.currentTarget.src = defaultAvatar;
                      }}
                    />
                  </div>
                </div>
              )}
            </div>

            <div className="divider"></div>

            {/* Buttons */}
            <div className="flex gap-3">
              <button
                type="submit"
                className="btn btn-primary flex-1"
              >
                Update Information
              </button>

              <button
                type="button"
                onClick={() => router.back()}
                className="btn btn-outline flex-1"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
}
              </button>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
}
