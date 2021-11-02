const {PHASE_DEVELOPMENT_SERVER} = require('next/constants');

module.exports = (phase) => {
    // Configuration on Development Mode:
    if (phase === PHASE_DEVELOPMENT_SERVER) {
        return {
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

            // Environment variables (inside an object):
            env: {
                mongodb_cluster_free_name: 'cluster0',
                mongodb_db_host: 'cluster0.bmfsm.mongodb.net',
                mongodb_db_name: '20211029_nextjs_blog',
                mongodb_db_user: 'reinier',
                mongodb_db_pass: 'Desfasator2015',
                mongodb_db_uri: 'mongodb+srv://reinier:Desfasator2015@cluster0.bmfsm.mongodb.net/20211029_nextjs_blog?retryWrites=true&w=majority',
                development_url: 'http://localhost:3000',
                production_url: 'http://localhost:3000',
                react_app_sc_disable_speedy: false,
                mongodb_db_contacts_collection: 'contacts',
            },
        };
    }

    // Configuration on Production Mode:
    return {
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

        // Environment variables (inside an object):
        env: {
            mongodb_cluster_free_name: 'cluster0',
            mongodb_db_host: 'cluster0.bmfsm.mongodb.net',
            mongodb_db_name: '20211029_nextjs_blog',
            mongodb_db_user: 'reinier',
            mongodb_db_pass: 'Desfasator2015',
            mongodb_db_uri: 'mongodb+srv://reinier:Desfasator2015@cluster0.bmfsm.mongodb.net/20211029_nextjs_blog?retryWrites=true&w=majority',
            development_url: 'http://localhost:3000',
            production_url: 'http://localhost:3000',
            react_app_sc_disable_speedy: false,
            mongodb_db_contacts_collection: 'contacts',
        },
    };
}
