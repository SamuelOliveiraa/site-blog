/** @type {import('next').NextConfig} */
import { withContentlayer } from "next-contentlayer";
import createNextIntlPlugin from "next-intl/plugin";

// Cria o plugin do next-intl
const withNextIntl = createNextIntlPlugin();

const nextConfig = {
  reactStrictMode: true
};

// Encadeia os plugins
export default withContentlayer(withNextIntl(nextConfig));
