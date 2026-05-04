"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function AllAnimals() {
  const [animals, setAnimals] = useState([]);
  const [filteredAnimals, setFilteredAnimals] = useState([]);
  const [loading, setLoading] = useState(true);
  const [sortBy, setSortBy] = useState("default");
  const [selectedType, setSelectedType] = useState("all");

  useEffect(() => {
    const fetchAnimals = async () => {
      try {
        const response = await fetch("/data.json");
        const data = await response.json();
        setAnimals(data);
        setFilteredAnimals(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching animals:", error);
        setLoading(false);
      }
    };

    fetchAnimals();
  }, []);

  useEffect(() => {
    let result = [...animals];

    // Filter by type
    if (selectedType !== "all") {
      result = result.filter((animal) => animal.type === selectedType);
    }

    // Sort
    switch (sortBy) {
      case "price-low":
        result.sort((a, b) => a.price - b.price);
        break;
      case "price-high":
        result.sort((a, b) => b.price - a.price);
        break;
      case "name":
        result.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case "default":
      default:
        break;
    }

    setFilteredAnimals(result);
  }, [sortBy, selectedType, animals]);

  const types = ["all", ...new Set(animals.map((a) => a.type))];

  return (
    <main className="min-h-screen bg-base-50">
      {/* Header */}
      <div className="bg-linear-to-r from-success to-error text-primary-content py-8 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold mb-2">All Animals</h1>
          <p className="text-lg">
            Browse our complete collection of quality livestock
          </p>
        </div>
      </div>

      {/* Filters & Sorting */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="bg-base-100 shadow-md rounded-lg p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Type Filter */}
            <div>
              <label className="block text-sm font-semibold mb-2">
                Filter by Type
              </label>
              <select
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
                className="select select-bordered w-full"
              >
                {types.map((type) => (
                  <option key={type} value={type}>
                    {type.charAt(0).toUpperCase() + type.slice(1)}
                  </option>
                ))}
              </select>
            </div>

            {/* Sort */}
            <div>
              <label className="block text-sm font-semibold mb-2">
                Sort by Price
              </label>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="select select-bordered w-full"
              >
                <option value="default">Default</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="name">Name (A-Z)</option>
              </select>
            </div>
          </div>
          <div className="mt-4 text-sm text-gray-600">
            Showing {filteredAnimals.length} of {animals.length} animals
          </div>
        </div>

        {/* Animals Grid */}
        {loading ? (
          <div className="flex justify-center items-center h-64">
            <span className="loading loading-spinner loading-lg"></span>
          </div>
        ) : filteredAnimals.length === 0 ? (
          <div className="bg-base-100 rounded-lg shadow-md p-12 text-center">
            <p className="text-xl text-gray-600 mb-4">No animals found</p>
            <button
              onClick={() => {
                setSortBy("default");
                setSelectedType("all");
              }}
              className="btn btn-primary"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {filteredAnimals.map((animal) => (
              <div
                key={animal.id}
                className="card bg-base-100 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
              >
                <figure className="relative h-48">
                  <Image
                    src={animal.image}
                    alt={animal.name}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-2 right-2 badge badge-success">
                    {animal.category}
                  </div>
                  {animal.price < 50000 && (
                    <div className="absolute top-2 left-2 badge badge-secondary">
                      Budget Friendly
                    </div>
                  )}
                </figure>
                <div className="card-body">
                  <h2 className="card-title text-lg">{animal.name}</h2>
                  <p className="text-sm text-gray-600 mb-3">
                    {animal.description}
                  </p>

                  <div className="divider my-2"></div>

                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="font-semibold">Type:</span>
                      <span>{animal.type}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-semibold">Breed:</span>
                      <span>{animal.breed}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-semibold">Age:</span>
                      <span>{animal.age} years</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-semibold">Weight:</span>
                      <span>{animal.weight} kg</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-semibold">Location:</span>
                      <span>{animal.location}</span>
                    </div>
                  </div>

                  <div className="divider my-2"></div>

                  <div className="text-2xl font-bold text-error mb-3">
                    ৳ {animal.price.toLocaleString()}
                  </div>

                  <div className="card-actions gap-2">
                    <Link
                      href={`/all-animals/${animal.id}`}
                      className="btn btn-success btn-block"
                    >
                      View Details & Book
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
