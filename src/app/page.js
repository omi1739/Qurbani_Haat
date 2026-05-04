'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import bannerImage from "@/assets/Banner_image.jpg"

export default function Home() {
  const [animals, setAnimals] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAnimals = async () => {
      try {
        const response = await fetch('/data.json');
        const data = await response.json();
        setAnimals(data.slice(0, 4)); // Featured 4 animals
        setLoading(false);
      } catch (error) {
        console.error('Error fetching animals:', error);
        setLoading(false);
      }
    };

    fetchAnimals();
  }, []);

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="hero min-h-96 bg-linear-to-r from-primary to-secondary text-primary-content">
        <div className="hero-content text-center flex-col-reverse lg:flex-row">
          <div>
            <h1 className="text-5xl font-bold mb-6">Welcome to QurbaniHaat</h1>
            <p className="text-xl mb-8 max-w-md">
              Your trusted marketplace for quality livestock. Browse, select, and book
              your perfect animal for Qurbani with confidence.
            </p>
            <Link href="/all-animals" className="btn btn-lg btn-accent">
              Browse Animals Now
            </Link>
          </div>
          <div className="relative w-full lg:w-96 h-80">
            <Image
              src={bannerImage}
              alt="Qurbani Animals"
              fill
              className="object-cover rounded-lg"
              priority
            />
          </div>
        </div>
      </section>

      {/* Featured Animals */}
      <section className="py-12 px-4 md:px-8 bg-base-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">
            Featured Animals
          </h2>

          {loading ? (
            <div className="flex justify-center items-center h-64">
              <span className="loading loading-spinner loading-lg"></span>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {animals.map((animal) => (
                <div
                  key={animal.id}
                  className="card bg-base-100 shadow-lg hover:shadow-2xl transition-shadow"
                >
                  <figure className="relative h-48">
                    <Image
                      src={animal.image}
                      alt={animal.name}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute top-2 right-2 badge badge-primary">
                      {animal.category}
                    </div>
                  </figure>
                  <div className="card-body">
                    <h3 className="card-title text-lg">{animal.name}</h3>
                    <p className="text-sm text-gray-600">{animal.breed}</p>
                    <div className="grid grid-cols-2 gap-2 my-2 text-sm">
                      <div>
                        <span className="font-semibold">Type:</span> {animal.type}
                      </div>
                      <div>
                        <span className="font-semibold">Age:</span> {animal.age} yrs
                      </div>
                      <div>
                        <span className="font-semibold">Weight:</span> {animal.weight} kg
                      </div>
                      <div>
                        <span className="font-semibold">Location:</span>{' '}
                        {animal.location}
                      </div>
                    </div>
                    <div className="card-price my-3 text-2xl font-bold text-primary">
                      ৳ {animal.price.toLocaleString()}
                    </div>
                    <Link
                      href={`/all-animals/${animal.id}`}
                      className="btn btn-primary btn-sm"
                    >
                      View Details
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          )}

          <div className="flex justify-center mt-8">
            <Link href="/all-animals" className="btn btn-outline btn-lg">
              View All Animals
            </Link>
          </div>
        </div>
      </section>

      {/* Qurbani Tips Section */}
      <section className="py-12 px-4 md:px-8 bg-base-100">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Qurbani Tips</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: 'Health Checks',
                description:
                  'Always inspect the animal for any signs of illness or injury before booking. Check teeth, eyes, and body condition.',
                icon: '🏥',
              },
              {
                title: 'Proper Feeding',
                description:
                  'Feed the animal quality fodder and water. Ensure the animal is well-rested and calm during the Qurbani process.',
                icon: '🌾',
              },
              {
                title: 'Weight Matters',
                description:
                  'Ensure the animal meets minimum weight requirements. Healthy weight indicates better meat quality.',
                icon: '⚖️',
              },
              {
                title: 'Age Verification',
                description:
                  'Check that the animal is of appropriate age. Younger animals may not meet religious requirements.',
                icon: '📅',
              },
              {
                title: 'Veterinary Care',
                description:
                  'Get a veterinary certificate to confirm the animal is healthy and fit for Qurbani.',
                icon: '👨‍⚕️',
              },
              {
                title: 'Transportation',
                description:
                  'Transport the animal carefully to avoid stress. Use proper ventilation and comfortable space.',
                icon: '🚚',
              },
            ].map((tip, idx) => (
              <div key={idx} className="card bg-base-200 shadow-md">
                <div className="card-body">
                  <div className="text-4xl mb-2">{tip.icon}</div>
                  <h3 className="card-title text-xl">{tip.title}</h3>
                  <p className="text-sm">{tip.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Top Breeds Section */}

    </main>
  );
}
