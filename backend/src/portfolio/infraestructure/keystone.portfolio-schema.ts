import {CategoryKeystoneSchema} from '../categories/keystone.category-schema';
import {projectKeystoneSchema} from '../projects/infraestructure/keystone.project-schema';

export const portfolioKeystoneLists = {
    Category: CategoryKeystoneSchema,
    Project: projectKeystoneSchema,
};
