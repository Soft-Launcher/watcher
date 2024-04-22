import {Parser} from '../../../common/parser';
import {object, parse, string} from 'valibot';
import {Collaborator} from '../collaborator';

export class ValibotCollaboratorParser implements Parser<Collaborator> {
    private readonly _schema;
    private readonly _object = object;
    private readonly _parse = parse;
    private readonly _string = string;

    public constructor() {
        this._schema = this._object({
            id: this._string(),
            name: this._string(),
            description: this._string(),
            profilePictureURI: this._string(),
            personalPortfolioURI: this._string(),
        });
    }

    parse(obj: unknown): Collaborator {
        return this._parse(this._schema, obj);
    }
}
