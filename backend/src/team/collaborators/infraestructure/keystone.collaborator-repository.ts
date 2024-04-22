import {keystoneContext} from '../../../keystone/context';
import {Collaborator} from '../collaborator';
import {CollaboratorFactory} from '../collaborator-factory';
import {CollaboratorRepository} from '../collaborator-repository';

export class KeystoneCollaboratorRepository implements CollaboratorRepository {
    private readonly _keystoneContext = keystoneContext;

    public constructor(private _collaboratorFactory: CollaboratorFactory) {}

    async findAllCollaborators(): Promise<Collaborator[]> {
        const collaborators =
            await this._keystoneContext.query.Collaborator.findMany({
                query: 'id name description profilePictureURI personalPortfolioURI',
            });

        return collaborators.map((collaborator) =>
            this._collaboratorFactory.make(collaborator),
        );
    }
}
