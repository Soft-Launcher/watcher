import {Lifecycle, inject, scoped} from 'tsyringe';
import {Parser} from '../../common/parser';
import {Project} from './project';

interface ProjectParser extends Parser<Project> {}

@scoped(Lifecycle.ContainerScoped)
export class ProjectFactory {
    public constructor(
        @inject('ProjectParser')
        private readonly _parser: ProjectParser,
    ) {}

    public make(obj: unknown) {
        return this._parser.parse(obj);
    }
}
