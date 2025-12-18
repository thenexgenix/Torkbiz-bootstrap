/** @type {import('next').NextConfig} */
const nextConfig = {
  reactCompiler: true,
  sassOptions: {
    quietDeps: true, // silences vendor Sass warnings
  },
};

export default nextConfig;
