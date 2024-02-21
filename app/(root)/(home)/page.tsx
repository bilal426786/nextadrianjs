import { UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <div className="flex min-h-screen content-center justify-center">
      <UserButton afterSignOutUrl="/" />
      <h1 className="font-bold text-primary-500">This is Home Page</h1>
      <h1>Home</h1>
    </div>
  );
}
