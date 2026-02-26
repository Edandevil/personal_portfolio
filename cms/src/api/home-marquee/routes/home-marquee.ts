export default {
    routes: [
        {
            method: 'GET',
            path: '/home-marquee',
            handler: 'home-marquee.find',
            config: {
                auth: false,
            },
        },
    ],
};
