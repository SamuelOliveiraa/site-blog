/** @type {import('next').NextConfig} */
import { withContentlayer } from "next-contentlayer";

const nextConfig = {
  /* config options here */
  reactStrictMode: true
};

export default withContentlayer(nextConfig);
