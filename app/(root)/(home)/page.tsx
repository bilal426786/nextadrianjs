import { UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <div className="flex min-h-screen content-center justify-center">
      <UserButton />
      <h1>Home</h1>
    </div>
  );
}
