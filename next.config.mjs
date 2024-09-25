/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack: (config, { isServer }) => {
      // Handle fs and other Node.js modules based on the environment
      if (!isServer) {
        // This is for Webpack 4 and 5 compatibility
        config.resolve.fallback = {
          fs: false,   // Prevents 'fs' from being included in client bundle
          path: false,  // Add any other modules as needed
        };
      }
  
      return config; // Return the modified config
    },
  };
  
  export default nextConfig; // Use ES module export syntax
  