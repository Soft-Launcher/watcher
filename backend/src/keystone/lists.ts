import {portfolioKeystoneLists} from '../portfolio/portfolio.keystone-lists';
import {UserSchema} from '../users/user.schema';

export const Lists = {
    User: UserSchema,
    ...portfolioKeystoneLists,
};
