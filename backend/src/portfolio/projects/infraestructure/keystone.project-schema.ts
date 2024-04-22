import {list} from '@keystone-6/core';
import {allowAll} from '@keystone-6/core/access';
import {relationship, text} from '@keystone-6/core/fields';

export const projectKeystoneSchema = list({
    access: allowAll,
    fields: {
        name: text(),
        caption: text(),
        categories: relationship({ref: 'Category.projects', many: true}),
        client: text(),
        pictureURI: text(),
    },
});
