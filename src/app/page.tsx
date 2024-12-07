import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-black bg-home-img bg-cover bg-center">
      <div className="absolute inset-0 bg-home-img backdrop-blur-3xl">
        {" "}
        <main className="flex flex-col justify-center text-center max-w-5xl mx-auto h-dvh">
          <div className="flex flex-col gap-6 p-12 rounded-xl bg-black/90 w-4/5 sm:max-w-96 mx-auto text-white sm:text-2xl">
            <h1 className="text-4xl font-bold">
              John&apos;s Computer
              <br />
              Repair Shop
            </h1>
            <address>
              Lorem ipsum dolor sit amet.
              <br />
              Kansas City, KS 12345
            </address>
            <p>Open Daily: 9am to 5pm</p>
            <Link href="tel:5555555555" className="hover:underline">
              123-456-5555
            </Link>
          </div>
        </main>
      </div>
    </div>
  );
}
