const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'picsum.photos',
                port: '',
                pathname: '/**',
            },
        ],
        dangerouslyAllowSVG: true,
    },
    async redirects() {
        return [
            {
                source: '/',
                destination: '/landing',
                permanent: true,
            },
        ]
    },
};

export default nextConfig;
