import CarouselPlugin from "@/components/ui/ImageCarousel";
import { SignUpButton } from "@clerk/nextjs";
import { MoveUpRight } from "lucide-react";

export default function frontPage() {
  return (
    <div className="flex flex-col justify-center items-center p-3 mt-8">
      <p className="text-3xl font-bold p-2 max-w-2xl text-center">
        A platform for giving and receiving support. A small step towards a
        better world.
      </p>
      <p className="text-lg mt-2 p-4">Sign up now to make a difference!</p>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-ceramic-white h-8 rounded-full px-4 sm:h-12 cursor-pointer
      dark:bg-gray-700 dark:hover:bg-gray-600"
      >
        <SignUpButton mode="modal">
          <span className="flex items-center gap-2">
            Count Me in <MoveUpRight size={16} />
          </span>
        </SignUpButton>
      </button>
      <CarouselPlugin />
    </div>
  );
}
