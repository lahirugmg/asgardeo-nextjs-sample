import {
  SignInButton,
  SignedIn,
  SignOutButton,
  SignedOut,
} from "@asgardeo/nextjs";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center gap-6">
      <header className="flex flex-col items-center gap-2">
        <SignedOut>
          <SignInButton
            signInOptions={null as unknown as Record<string, never>}
          />
        </SignedOut>
        <SignedIn>
          <SignOutButton />
        </SignedIn>
      </header>
    </div>
  );
}
