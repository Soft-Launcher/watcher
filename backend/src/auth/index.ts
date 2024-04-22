import {createAuth} from '@keystone-6/auth';
import {statelessSessions} from '@keystone-6/core/session';
import {randomBytes} from 'crypto';

const {withAuth} = createAuth({
    listKey: 'User',
    identityField: 'email',
    secretField: 'password',
    sessionData: 'isAdmin isSuperAdmin',
});

// Age in seconds
const sessionMaxAge = 60 * 60 * 24 * 30;
let sessionSecret = process.env.SESSION_SECRET;
if (!sessionSecret && process.env.NODE_ENV !== 'production') {
    sessionSecret = randomBytes(32).toString('hex');
}

const session = statelessSessions({
    maxAge: sessionMaxAge,
    secret: sessionSecret!,
});

export {withAuth, session};
