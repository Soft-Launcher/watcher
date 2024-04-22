import {list} from '@keystone-6/core';
import {allowAll} from '@keystone-6/core/access';
import {text} from '@keystone-6/core/fields';

export const collaboratorKeystoneSchema = list({
    access: allowAll,
    fields: {
        name: text(),
        description: text(),
        profilePictureURI: text(),
        personalPortfolioURI: text(),
    },
});
