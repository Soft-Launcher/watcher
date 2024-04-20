import {config} from '@keystone-6/core';
import {lists} from './src/keystone/lists';
import {withAuth, session} from './src/auth';

export default withAuth(
    config({
        db: {provider: 'sqlite', url: 'file:./keystone.db'},
        session,
        lists,
    }),
);
