/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        // remotePatterns: ["cdn.imagin.studio"]
        remotePatterns: [
            {
              protocol: 'https',
              hostname: 'cdn.imagin.studio',
              port: '',
              pathname: '/**',
            },
        ],
    }
};

// const nextConfig = {
//     images: {
//         // domains: ["cdn.imagin.studio"]
//         remotePatterns: [
//             {
//               protocol: 'https',
//               hostname: 'upload.wikimedia.org',
//               port: '',
//               pathname: '/**',
//             },
//             {
//               protocol: 'https',
//               hostname: 'commons.wikimedia.org',
//               port: '',
//               pathname: '/**',
//             },
//         ],
//     }
// }

// module.exports = nextConfig

export default nextConfig;
