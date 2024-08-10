"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

// `app/dashboard/page.tsx` is the UI for the `/dashboard` URL
export default function Page() {
  const router = useRouter();
  return (
    <>
      <h1>Hello, Dashboard Page!</h1>
      <Link href={"/"}>To Home (Menggunakan Link)</Link>

      <button type="button" onClick={() => router.push("/")}>
        To Home (Menggunakan useRouter)
      </button>
    </>
  );
}
