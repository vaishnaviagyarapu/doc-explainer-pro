/** @type {import('next').NextConfig} */
const nextConfig = {
  // Explicitly set the root if multiple lockfiles are still detected elsewhere
  experimental: {
    // turbopack: {
    //   root: '.',
    // },
  },
};

export default nextConfig;
