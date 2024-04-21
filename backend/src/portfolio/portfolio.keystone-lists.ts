import {categoryKeystoneSchema} from './categories/category.keystone-schema';
import {projectKeystoneSchema} from './projects/project.keystone-schema';

export const portfolioKeystoneLists = {
    Category: categoryKeystoneSchema,
    Project: projectKeystoneSchema,
};
