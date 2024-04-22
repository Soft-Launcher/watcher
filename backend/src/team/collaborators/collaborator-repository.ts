import {Collaborator} from './collaborator';

export interface CollaboratorRepository {
    findAllCollaborators(): Promise<Collaborator[]>;
}
