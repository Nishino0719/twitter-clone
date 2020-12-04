import { useRouter } from "next/router";
import { useEffect } from "react";

function isAuthenticated() {
  return true;
}

export function authGuard() {
  const router = useRouter();
  const isAuth = isAuthenticated();

  useEffect(() => {
    if (isAuth) {
      router.push("home");
    }
  }, [isAuthenticated]);
}
