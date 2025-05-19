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
import { currentUser } from "@clerk/nextjs/server";
import { getDbUserId } from "@/actions/user.action";
import CreatePost from "@/components/CreatePost";
import WhoToFollow from "@/components/WhoToFollow";

export default async function Home() {
  const user = await currentUser();
  const dbUserId = await getDbUserId();
  return (
    <div className="grid grid-cols-1 lg:grid-cols-10">
      <div className="lg:col-span-6">
        <CreatePost />
      </div>
      <div className="hidden lg:block lg:col-span-4 sticky">
        <WhoToFollow />
      </div>
    </div>
  );
}
