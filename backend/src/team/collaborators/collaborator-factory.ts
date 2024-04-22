import {Parser} from '../../common/parser';
import {Collaborator} from './collaborator';

interface CollaboratorParser extends Parser<Collaborator> {}

export class CollaboratorFactory {
    public constructor(
        private readonly _collaboratorParser: CollaboratorParser,
    ) {}

    public make(obj: unknown) {
        return this._collaboratorParser.parse(obj);
    }
}
