import {list} from '@keystone-6/core';
import {allowAll} from '@keystone-6/core/access';
import {relationship, text} from '@keystone-6/core/fields';

export const CategoryKeystoneSchema = list({
    access: allowAll,
    fields: {
        name: text({isIndexed: 'unique'}),
        projects: relationship({ref: 'Project.categories', many: true}),
    },
});
