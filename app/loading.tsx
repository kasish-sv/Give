import { Spinner } from "@/components/ui/spinner";
export default function Loading() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <Spinner className="size-16" />
    </main>
  );
}
