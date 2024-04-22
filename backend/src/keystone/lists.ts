import {portfolioKeystoneLists} from '../portfolio/infraestructure/keystone.portfolio-schema';
import {UserSchema} from '../users/user.schema';

export const Lists = {
    User: UserSchema,
    ...portfolioKeystoneLists,
};
