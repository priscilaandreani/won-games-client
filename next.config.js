// @ts-check

/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  compiler: {
    styledComponents: {
      displayName: true,
      ssr: false
    }
  }
};

export default nextConfig;
