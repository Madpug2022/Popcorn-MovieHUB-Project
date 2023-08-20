import dotenv from 'dotenv';
//Tipado
type TConfig = {
    [key: string]: EnvironmentConfig;
}
type EnvironmentConfig = {
    app: AppConfig;
    auth0: AuthConfig;
    cloudinary: CloudinaryConfig;
}
type AppConfig = {
    PORT: string | number;
}
type AuthConfig = {
    client_origin: string | undefined;
    audience: string | undefined;
    issuer: string | undefined;
}
type CloudinaryConfig = {
    cloud: string | undefined;
    apiKey: string | undefined;
    apiSecret: string | undefined;
}

if (process.env.NODE_ENV === 'production') {
    dotenv.config({ path: '.env.production' });
} else {
    dotenv.config({ path: '.env.development' });
}

const ENV = process.env.NODE_ENV ?? 'development'

const CONFIG: TConfig = {
    development: {
        app: {
            PORT: process.env.PORT || 8800,
        },
        auth0: {
            client_origin: process.env.APP_ORIGIN,
            audience: process.env.AUTH0_AUDIENCE,
            issuer: process.env.AUTH0_ISSUER,
        },
        cloudinary: {
            cloud: process.env.CLOUDINARY_CLOUD,
            apiKey: process.env.CLOUDINARY_API_KEY,
            apiSecret: process.env.CLOUDINARY_API_SECRERT,
        },
    },
    production: {
        app: {
            PORT: process.env.PORT || 8801,
        },
        auth0: {
            client_origin: process.env.APP_ORIGIN,
            audience: process.env.AUTH0_AUDIENCE,
            issuer: process.env.AUTH0_ISSUER,
        },
        cloudinary: {
            cloud: process.env.CLOUDINARY_CLOUD,
            apiKey: process.env.CLOUDINARY_API_KEY,
            apiSecret: process.env.CLOUDINARY_API_SECRERT,
        },
    }
}

export default CONFIG[ENV]
