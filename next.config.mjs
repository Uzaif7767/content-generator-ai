/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ["cdn-icons-png.flaticon.com"],
        remotePatterns:[
            {
                protocol: 'https',
                hostname: 'randomuser.me',
                // pathname: '/images/**',
            }
        ]
    }
};

export default nextConfig;
