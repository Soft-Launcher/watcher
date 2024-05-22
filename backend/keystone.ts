import {config} from '@keystone-6/core';
import {Lists} from './src/keystone/lists';
import {withAuth, session} from './src/auth';

export default withAuth(
    config({
        db: {provider: 'sqlite', url: 'file:./keystone.db'},
        session,
        lists: Lists,
        // server: {
        //     port: Number(process.env.PORT) ?? 3000,
        // },
        ui: {
            basePath: '/admin',
            isAccessAllowed: () => true,
        },
        graphql: {
            path: '/admin/api/graphql',
        },
        telemetry: false,
    }),
);
