/** @type {import('next').NextConfig} */
// This File will allow to add configurations for the NEXT Framework
const nextConfig = {
    // Configuring the NExt App to allow images from the defined pattern (protocol and hostname)
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'images.unsplash.com'
            },
        ]
    }
};

export default nextConfig;
