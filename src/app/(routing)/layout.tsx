"use client";

import { useWindowSize } from "@/shared/hooks/useWindowSize";
import { LayoutDesktop } from "@/shared/layouts/layouts/desktop";
import { LayoutMobile } from "@/shared/layouts/layouts/mobile/ui/ui";
import PrivateRoute from "@/shared/lib/auth/private-route";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import { ReactNode } from "react";

export default function LayoutPage({ children }: { children: ReactNode }) {
  const windowSize = useWindowSize();
  return (
    <>
      <AntdRegistry>
        <PrivateRoute>
          {windowSize.width > 768 ? (
            <LayoutDesktop>{children}</LayoutDesktop>
          ) : (
            <LayoutMobile>{children}</LayoutMobile>
          )}
        </PrivateRoute>
      </AntdRegistry>
    </>
  );
}
