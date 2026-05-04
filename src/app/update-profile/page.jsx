"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Toast from "@/components/Toast";
import defaultAvatar from "@/assets/userAvater.jpg";

export default function UpdateProfile() {
  const router = useRouter();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [updating, setUpdating] = useState(false);
  const [toast, setToast] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    photo: "",
  });

  useEffect(() => {
    // Get user data from localStorage
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      const userData = JSON.parse(storedUser);
      setUser(userData);
      setFormData({
        name: userData.name || "",
        photo: userData.photo || "",
      });
    }
    setLoading(false);
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleUpdate = async (e) => {
    e.preventDefault();

    // Validate form
    if (!formData.name) {
      setToast({
        message: "Please enter your name",
        type: "warning",
      });
      return;
    }

    setUpdating(true);

    // Simulate API call
    setTimeout(() => {
      // Update localStorage
      const updatedUser = {
        ...user,
        name: formData.name,
        photo: formData.photo,
      };
      localStorage.setItem("user", JSON.stringify(updatedUser));
      setUser(updatedUser);

      setUpdating(false);
      setToast({
        message: "✓ Profile updated successfully!",
        type: "success",
      });

      // Redirect to profile after 2 seconds
      setTimeout(() => {
        router.push("/my-profile");
      }, 2000);
    }, 1000);
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
      {toast && (
        <Toast
          message={toast.message}
          type={toast.type}
          duration={4000}
          onClose={() => setToast(null)}
        />
      )}

      <div className="max-w-2xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Update Profile</h1>

        <div className="card bg-base-100 shadow-lg p-6 md:p-8">
          <form onSubmit={handleUpdate} className="space-y-6">
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
                name="photo"
                value={formData.photo}
                onChange={handleInputChange}
                placeholder="Enter photo URL (optional)"
                className="input input-bordered w-full text-lg"
              />
              <p className="text-sm text-gray-600 mt-2">
                Provide a complete URL to an image (e.g.,
                https://example.com/photo.jpg)
              </p>

              {/* Photo Preview */}
              {formData.photo && (
                <div className="mt-4">
                  <p className="text-sm font-semibold mb-2">Photo Preview:</p>
                  <div className="relative w-32 h-32 rounded-lg overflow-hidden border-2 border-primary">
                    <Image
                      src={formData.photo}
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
                disabled={updating}
                className="btn btn-primary flex-1"
              >
                {updating ? (
                  <>
                    <span className="loading loading-spinner loading-sm"></span>
                    Updating...
                  </>
                ) : (
                  "Update Information"
                )}
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
