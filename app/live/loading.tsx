import { SkeletonCard } from "@/components/ui/SkeletonCard";

export default function Loading() {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">
        Browse through the list of available donations in your vicinity
      </h1>
      <span className="text-md">
        Act quickly to make a difference! Donations are only listed if they are
        made in the last 24 hours to ensure freshness.
      </span>
      <SkeletonCard />
      <p className="leading-4 text-xs text-center p-4">
        Please note that the donations listed here are based on your current
        location. If you wish to see donations in a different area, please
        update your location settings.
      </p>
    </div>
  );
}
