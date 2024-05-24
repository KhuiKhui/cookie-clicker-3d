/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config, { isServer }) => {
    // Handle development server exclusion (optional)
    if (!isServer) {
      config.module.rules.push({
        test: /\.glb$/,
        use: "file-loader",
      });
    }

    return config;
  },
};

export default nextConfig;
