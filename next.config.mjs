/** @type {import('next').NextConfig} */
const nextConfig={
  images:{unoptimized:true},
  reactStrictMode:true,
  outputFileTracing:false,
  experimental:{cpus:1,workerThreads:false},
};
export default nextConfig;
