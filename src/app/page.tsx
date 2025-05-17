import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/modeToggle";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignUpButton,
  UserButton,
} from "@clerk/nextjs";
import Image from "next/image";

export default function Home() {
  return (
    <div className="">
      <SignedOut>
        <SignInButton mode="modal"/>
        <SignUpButton mode="modal"/>
      </SignedOut>

      <SignedIn>
        <UserButton  />
      </SignedIn>

      <ModeToggle/>

      <Button>Click me</Button>
    </div>
  );
}
