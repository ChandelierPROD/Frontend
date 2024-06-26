"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { isAuthenticated, redirectToLogin } from "./auth-token";

interface PrivateRouteProps {
  children: React.ReactNode;
}

const PrivateRoute = ({ children }: PrivateRouteProps) => {
  const router = useRouter();

  useEffect(() => {
    if (!isAuthenticated()) {
      redirectToLogin(router);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <>{children}</>;
};

export default PrivateRoute;
