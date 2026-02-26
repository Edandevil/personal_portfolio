export default ({ env }) => ({
    upload: {
        config: {
            providerOptions: {
                localServer: {
                    maxage: 300000,
                },
            },
            sizeLimit: 250 * 1024 * 1024, // 250MB
            actionOptions: {
                upload: {},
                uploadStream: {},
                delete: {},
            },
            generateResponsiveFormats: false, // disable responsive formats
            sizeOptimization: false, // disable size optimization
            autoOrientation: false, // disable auto orientation
        },
    },
});
