/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    compiler: { styledComponents: true },
    swcMinify: true,
    images: { domains: ['avatars.githubusercontent.com'] },
}

module.exports = nextConfig
