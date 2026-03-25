/** @type {import('next').NextConfig} */
const nextConfig = {
  allowedDevOrigins: ["*.preview.same-app.com"],
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "source.unsplash.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "ext.same-assets.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "ugc.same-assets.com",
        pathname: "/**",
      },
    ],
  },
  async redirects() {
    return [
      {
        source: '/maps/240/togliatti/house/ulitsa_marshala_zhukova_54/:path*',
        destination: '/maps/240/togliatti/house/shlyuzovaya_ul_2/:path*',
        permanent: true,
      },
      {
        source: '/maps/240/togliatti/house/ulitsa_marshala_zhukova_54',
        destination: '/maps/240/togliatti/house/shlyuzovaya_ul_2/YEAYdA5oTEQHQFtpfXlxcnhgbQ==',
        permanent: true,
      }
    ];
  },
};

module.exports = nextConfig;
