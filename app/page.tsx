import { SignedIn, SignedOut, SignInButton, SignOutButton, SignUpButton } from "@clerk/nextjs"

export default function Home() {
  return (
    <div>
      <p className="text-center font-semibold text-4xl">Welcome to Home Services Platform</p>
      <div className="flex justify-center items-center h-screen">
        <SignedIn>
          <SignOutButton/>
        </SignedIn>
        <SignedOut>
          <div className="flex space-x-">
            <SignInButton/>
            <SignUpButton/>
          </div>
        </SignedOut>
      </div>
    </div>
  );
}
