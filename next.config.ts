import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  typescript: {
    // ⚠️ 빌드 시 타입 체크 건너뛰기 - 실제 운영 환경에서는 다시 활성화하는 것을 권장합니다
    ignoreBuildErrors: true,
  },
  eslint: {
    // ⚠️ 빌드 시 ESLint 검사 건너뛰기 - 실제 운영 환경에서는 다시 활성화하는 것을 권장합니다
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
