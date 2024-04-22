import {CollaboratorRepository} from './collaborator-repository';

export class CollaboratorService {
    public constructor(
        private readonly _collaboratorRepository: CollaboratorRepository,
    ) {}

    public findAllCollaborators() {
        return this._collaboratorRepository.findAllCollaborators();
    }
}
