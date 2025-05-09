import { withPayload } from "@payloadcms/next/withPayload";
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

/** @type {import('next').NextConfig} */
const nextConfig = {
  // TypeScript config is needed for proper ESM support
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default withPayload(nextConfig, {
  // The second parameter to withPayload contains Payload-specific configuration
  configPath: path.resolve(__dirname, "./payload.config.js"),
  // This will ensure the Payload admin bundle is properly generated
  payloadPath: path.resolve(__dirname, "./payload.js"),
});
