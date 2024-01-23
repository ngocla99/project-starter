/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ["tsx", "mdx", "ts", "js"],
  // Already doing linting and typechecking as separate tasks in CI
  eslint: { ignoreDuringBuilds: true },
  typescript: { ignoreBuildErrors: true },
}

export default nextConfig
