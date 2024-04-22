import {list} from '@keystone-6/core';
import {checkbox, password, text} from '@keystone-6/core/fields';

type Session = {
    data: {
        id: string;
        isAdmin: boolean;
        isSuperAdmin: boolean;
    };
};

const isAdmin = ({session}: {session?: Session}) =>
    Boolean(session?.data.isAdmin);

export const UserSchema = list({
    fields: {
        name: text(),
        surname: text(),
        email: text({isIndexed: 'unique'}),
        password: password(),
        isAdmin: checkbox(),
        isSuperAdmin: checkbox(),
    },
    access: {
        operation: {
            query: () => true,
            create: isAdmin,
            delete: isAdmin,
            update: isAdmin,
        },
    },
});
