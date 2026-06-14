import { auth } from "@clerk/nextjs/server";

export async function getIsAdmin(): Promise<boolean> {
  const { userId, sessionClaims } = await auth();

  if (!userId) {
    return false;
  }

  return sessionClaims?.metadata?.isAdmin === true;
}
