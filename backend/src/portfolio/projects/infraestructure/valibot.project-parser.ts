import {Parser} from '../../../common/parser';
import {Project} from '../project';
import {array, object, parse, string} from 'valibot';

export class ValibotProjectParser implements Parser<Project> {
    private readonly _schema;
    private readonly _array = array;
    private readonly _object = object;
    private readonly _parse = parse;
    private readonly _string = string;

    public constructor() {
        this._schema = this._object({
            id: this._string(),
            name: this._string(),
            caption: this._string(),
            categories: this._array(
                this._object({
                    id: this._string(),
                    name: this._string(),
                }),
            ),
            client: this._string(),
            pictureURI: this._string(),
        });
    }

    parse(obj: unknown): Project {
        return this._parse(this._schema, obj);
    }
}
