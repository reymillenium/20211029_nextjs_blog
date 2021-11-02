module.exports = {
    reactStrictMode: true,

    // Redirects from one route to another (permanent in true stores in cache the redirection):
    // async redirects() {
    //   return [
    //     {
    //       source: '/',
    //       destination: '/posts/featured/',
    //       permanent: false,
    //     },
    //   ]
    // },


    // Solves the strange error: Module not found: Can't resolve 'fs'
    webpack: (config, {isServer}) => {
        if (!isServer) {
            config.resolve.fallback.fs = false;
        }
        return config;
    },
}
