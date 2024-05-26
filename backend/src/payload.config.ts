import path from 'path';

import {payloadCloud} from '@payloadcms/plugin-cloud';
import {postgresAdapter} from '@payloadcms/db-postgres';
import {webpackBundler} from '@payloadcms/bundler-webpack';
import {slateEditor} from '@payloadcms/richtext-slate';
import {buildConfig} from 'payload/config';

import Users from './collections/Users';
import {Collaborators} from './collections/Collaborators';

export default buildConfig({
    admin: {
        user: Users.slug,
        bundler: webpackBundler(),
    },
    editor: slateEditor({}),
    collections: [Users, Collaborators],
    typescript: {
        outputFile: path.resolve(__dirname, 'payload-types.ts'),
    },
    graphQL: {
        schemaOutputFile: path.resolve(__dirname, 'generated-schema.graphql'),
    },
    plugins: [payloadCloud()],
    db: postgresAdapter({
        pool: {
            connectionString: process.env.DATABASE_URI,
        },
    }),
    routes: {
        admin: process.env.BASEPATH || '/admin',
        api: `${process.env.BASEPATH || '/admin'}/api`,
        graphQL: `${process.env.BASEPATH || '/admin'}/graphql`,
        graphQLPlayground: `${process.env.BASEPATH || '/admin'}/graphql-playground`,
    },
});
