"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

// `app/page.tsx` is the UI for the `/` URL
export default function Page() {
  const router = useRouter();

  return (
    <>
      <h1>Hello, Home page!</h1>
      <Link href={"/dashboard"}>To Dashboard (Menggunakan Link)</Link>

      <button type="button" onClick={() => router.push("/dashboard")}>
        To Dashboard (Menggunakan useRouter)
      </button>
    </>
  );
}
