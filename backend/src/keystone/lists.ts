import {portfolioKeystoneLists} from '../portfolio/infraestructure/keystone.portfolio-schema';
import {keystoneTeamLists} from '../team/infraestructure/keystone.team-schema';
import {UserSchema} from '../users/user.schema';

export const Lists = {
    User: UserSchema,
    ...portfolioKeystoneLists,
    ...keystoneTeamLists,
};
