import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input"; // добовления input
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8">
      <div className="flex gap-4 items-center flex-col sm:flex-row">
        <Input
          placeholder="Enter your text"
          className="max-w-sm rounded-full h-10 sm:h-12 px-4 border-blue-500 focus:ring-2 focus:ring-blue-500"
        />
        <Button
          asChild
          variant="default"
          className="bg-blue-800 hover:bg-blue-900 text-white rounded-full h-10 sm:h-12 px-4 sm:px-5 w-full sm:w-auto md:w-[158px]"
        >
          <Link href="/login">Connect</Link>
        </Button>
      </div>
    </div>
  );
}