"use client";

import Image from "next/image";
import { useRouter, useParams } from "next/navigation";
import { useEffect, useState } from "react";
import Toast from "@/components/Toast";

export default function AnimalDetails() {
  const params = useParams();
  const id = params?.id;
  const router = useRouter();
  const [animal, setAnimal] = useState(null);
  const [loading, setLoading] = useState(true);
  const [toast, setToast] = useState(null);
  const [bookingLoading, setBookingLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  });

  useEffect(() => {
    if (!id) return;

    const fetchAnimal = async () => {
      try {
        const response = await fetch("/data.json");
        const data = await response.json();
        console.log("Searching for ID:", id, "Type:", typeof id);
        console.log(
          "Available IDs:",
          data.map((a) => a.id),
        );

        const foundAnimal = data.find((a) => a.id === parseInt(id));
        console.log("Found animal:", foundAnimal);

        if (foundAnimal) {
          setAnimal(foundAnimal);
        }
      } catch (error) {
        console.error("Error fetching animal:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchAnimal();
  }, [id]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleBooking = (e) => {
    e.preventDefault();

    // Validate form
    if (
      !formData.name ||
      !formData.email ||
      !formData.phone ||
      !formData.address
    ) {
      setToast({
        message: "Please fill all fields",
        type: "warning",
      });
      return;
    }

    // Validate email
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      setToast({
        message: "Please enter a valid email",
        type: "warning",
      });
      return;
    }

    setBookingLoading(true);

    // Simulate booking (no DB save)
    setTimeout(() => {
      setBookingLoading(false);
      setToast({
        message: "✓ Booking request submitted successfully!",
        type: "success",
      });

      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        address: "",
      });
    }, 1000);
  };

  if (loading) {
    return (
      <main className="min-h-screen flex justify-center items-center">
        <span className="loading loading-spinner loading-lg"></span>
      </main>
    );
  }

  if (!animal) {
    return (
      <main className="min-h-screen flex justify-center items-center">
        <div className="text-center">
          <p className="text-2xl mb-4">Animal not found</p>
          <button
            onClick={() => router.push("/all-animals")}
            className="btn btn-primary"
          >
            Back to All Animals
          </button>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-base-50 py-8 px-4">
      {toast && (
        <Toast
          message={toast.message}
          type={toast.type}
          duration={4000}
          onClose={() => setToast(null)}
        />
      )}

      <div className="max-w-6xl mx-auto">
        <button
          onClick={() => router.back()}
          className="btn btn-ghost gap-2 mb-6"
        >
          ← Back
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Image Section */}
          <div className="card bg-base-100 shadow-lg p-4">
            <figure className="relative w-full h-96 rounded-lg overflow-hidden mb-4">
              <Image
                src={animal.image}
                alt={animal.name}
                fill
                className="object-cover"
                priority
              />
            </figure>
            <div className="space-y-3">
              <div className="badge badge-lg badge-success">
                {animal.category}
              </div>
              <p className="text-sm text-gray-600 leading-relaxed">
                {animal.description}
              </p>
            </div>
          </div>

          {/* Details & Booking Section */}
          <div className="space-y-6">
            {/* Basic Info */}
            <div className="card bg-base-100 shadow-lg p-6">
              <h1 className="text-3xl font-bold mb-2">{animal.name}</h1>
              <p className="text-lg text-error font-semibold mb-4">
                Breed: {animal.breed}
              </p>

              <div className="divider my-4"></div>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-base-200 p-3 rounded">
                  <p className="text-sm text-gray-600">Type</p>
                  <p className="text-lg font-bold">{animal.type}</p>
                </div>
                <div className="bg-base-200 p-3 rounded">
                  <p className="text-sm text-gray-600">Age</p>
                  <p className="text-lg font-bold">{animal.age} years</p>
                </div>
                <div className="bg-base-200 p-3 rounded">
                  <p className="text-sm text-gray-600">Weight</p>
                  <p className="text-lg font-bold">{animal.weight} kg</p>
                </div>
                <div className="bg-base-200 p-3 rounded">
                  <p className="text-sm text-gray-600">Location</p>
                  <p className="text-lg font-bold">{animal.location}</p>
                </div>
              </div>

              <div className="divider my-4"></div>

              <div className="text-4xl font-bold text-success">
                ৳ {animal.price.toLocaleString()}
              </div>
            </div>

            {/* Booking Form */}
            <div className="card bg-base-100 shadow-lg p-6">
              <h2 className="text-2xl font-bold mb-4">Booking Form</h2>
              <form onSubmit={handleBooking} className="space-y-4">
                <div>
                  <label className="label">
                    <span className="label-text font-semibold">Full Name</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Enter your name"
                    className="input input-bordered w-full"
                    required
                  />
                </div>

                <div>
                  <label className="label">
                    <span className="label-text font-semibold">Email</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Enter your email"
                    className="input input-bordered w-full"
                    required
                  />
                </div>

                <div>
                  <label className="label">
                    <span className="label-text font-semibold">
                      Phone Number
                    </span>
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="Enter your phone number"
                    className="input input-bordered w-full"
                    required
                  />
                </div>

                <div>
                  <label className="label">
                    <span className="label-text font-semibold">Address</span>
                  </label>
                  <textarea
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    placeholder="Enter your complete address"
                    className="textarea textarea-bordered w-full"
                    rows="3"
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={bookingLoading}
                  className="btn btn-primary btn-block mt-4"
                >
                  {bookingLoading ? (
                    <>
                      <span className="loading loading-spinner loading-sm"></span>
                      Processing...
                    </>
                  ) : (
                    "Book This Animal"
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
