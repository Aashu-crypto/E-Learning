import Image from "next/image";
import { Button } from "@repo/ui/button";
import styles from "./page.module.css";
import { useSession } from "next-auth/react";
import { stringify } from "querystring";
import { getServerSession } from "next-auth";
import UserSession from "../components/userSession";
import { NEXT_AUTH_CONFIG } from "./lib/auth";

export default async function Home() {
  const session = await getServerSession(NEXT_AUTH_CONFIG);
  if (session?.user) {
    return (
      <div>
        <div>Courses</div>
        
      </div>
    );
  }

  return (
    <div>
      hey: {JSON.stringify(session)}
      <UserSession />
    </div>
  );
}
