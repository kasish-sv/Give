"use client";
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSet,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useEffect, useState } from "react";
import { reverseGeocode } from "@/lib/location";

export function DonorLocation() {
  const [location, setLocation] = useState<string | null>(null);
  const [lat, setLat] = useState<number | null>(null);
  const [lng, setLng] = useState<number | null>(null);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(async (pos) => {
      const lat = pos.coords.latitude;
      const lng = pos.coords.longitude;

      // Call server action directly
      const place = await reverseGeocode(lat, lng);
      setLocation(place);
      setLat(lat);
      setLng(lng);
    });
  }, []);

  return (
    <Field>
      <FieldLabel htmlFor="donate-address">Address</FieldLabel>
      <Textarea
        id="donate-address"
        name="donate-address"
        placeholder="1234 Main St, City, State, ZIP"
        defaultValue={location || ""}
      />
      <FieldDescription>
        Enter your complete address for smoother pickup
      </FieldDescription>
      <Input
        type="hidden"
        id="donate-latitude"
        name="donate-latitude"
        defaultValue={lat || "0"}
      />
      <Input
        type="hidden"
        id="donate-longitude"
        name="donate-longitude"
        defaultValue={lng || "0"}
      />
    </Field>
  );
}
