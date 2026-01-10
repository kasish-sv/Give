"use client";

import { useEffect } from "react";
import { submitLocation } from "@/lib/location";

export function LocationClient() {
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      ({ coords }) => {
        submitLocation(coords.latitude, coords.longitude);
      },
      (err) => {
        console.error("Location error:", err);
      }
    );
  }, []);

  return null; // no UI needed
}
