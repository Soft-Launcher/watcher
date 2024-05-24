import {config} from '@keystone-6/core';
import {Lists} from './src/keystone/lists';
import {withAuth, session} from './src/auth';

export default withAuth(
    config({
        db: {
            provider: 'postgresql',
            url: process.env.POSTGRES_URL || '',
        },
        session,
        lists: Lists,
        server: {
            port: Number(process.env.PORT) || 3000,
        },
        ui: {
            basePath: process.env.BASE_PATH,
        },
        graphql: {
            path: `${process.env.BASE_PATH || ''}/api/graphql`,
        },
        telemetry: false,
    }),
);
