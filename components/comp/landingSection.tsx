"use client";
import CarouselPlugin from "@/components/ui/ImageCarousel";
import { SignUpButton } from "@clerk/nextjs";
import { MoveUpRight } from "lucide-react";
import { motion } from "motion/react";
import Link from "next/link";

export const LandingSection = () => {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center py-20 frosted-glass">
        <h1 className="text-4xl font-bold mb-4">Turn surplus into support</h1>
        <p className="text-lg mb-6">
          Donate food, clothing, or essentials to those nearby.
        </p>
        <div className="flex gap-4">
          <Link href="/give">
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="px-6 py-3 bg-green-600 rounded-lg shadow"
            >
              I want to give
            </motion.button>
          </Link>
          <Link href="/live">
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow"
            >
              I need support
            </motion.button>
          </Link>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 max-w-5xl mx-auto">
        <h2 className="text-2xl font-semibold text-center mb-10">
          What you can donate
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 text-center">
          {[
            "Food 🍎",
            "Clothing 👕",
            "Medicine 💊",
            "Books 📚",
            "Other 🎁",
          ].map((item) => (
            <motion.div
              key={item}
              whileHover={{ scale: 1.05 }}
              className="p-6 rounded-lg shadow border-gray-200 frosted-glass"
            >
              {item}
            </motion.div>
          ))}
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-16 frosted-glass">
        <h2 className="text-2xl font-semibold text-center mb-10 ">
          Our Impact - (Higly hypothetical numbers for demo purposes)
        </h2>
        <div className="flex justify-center gap-12 text-center">
          <div>
            <p className="text-3xl font-bold">500+</p>
            <p>Donations made</p>
          </div>
          <div>
            <p className="text-3xl font-bold">200+</p>
            <p>Families supported</p>
          </div>
          <div>
            <p className="text-3xl font-bold">100+</p>
            <p>Volunteers joined</p>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 max-w-4xl mx-auto">
        <h2 className="text-2xl font-semibold text-center mb-10">
          How it works
        </h2>
        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div>
            <p className="text-xl font-bold">1</p>
            <p>Sign up</p>
          </div>
          <div>
            <p className="text-xl font-bold">2</p>
            <p>List or claim donations</p>
          </div>
          <div>
            <p className="text-xl font-bold">3</p>
            <p>Make a difference</p>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 text-center frosted-glass">
        <h2 className="text-3xl font-bold mb-6">Ready to make an impact?</h2>
        <SignUpButton mode="modal">
          <motion.button
            whileHover={{ scale: 1.05 }}
            className="px-8 py-4 bg-green-600 rounded-lg shadow-lg"
          >
            Join Give Today
          </motion.button>
        </SignUpButton>
        <div className="pt-6">
          <CarouselPlugin />
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 text-center text-sm text-gray-500">
        © 2026 Give | About | Contact | Privacy | Terms
      </footer>
    </main>
  );
};
