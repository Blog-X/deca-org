/** @type {import('next').NextConfig} */
module.exports  = {
  reactStrictMode: true,
  images: {
    loader: 'akamai',
    path: '',
  },
  trailingSlash: true,
  future: { webpack5: true },
}
