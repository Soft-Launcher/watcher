import {keystoneContext} from '../../../keystone/context';
import {ProjectRepository} from '../project-repository';
import {ProjectFactory} from '../project-factory';
import {injectable} from 'tsyringe';
import {Project} from '../project';

@injectable()
export class KeystoneProjectRepository implements ProjectRepository {
    private readonly _keystoneContext = keystoneContext;

    public constructor(private _projectFactory: ProjectFactory) {}

    public async findAllProjects() {
        const projects = await this._keystoneContext.query.Project.findMany({
            query: 'id name caption categories { id name } client pictureURI',
        });
        return projects.map((project) => this._projectFactory.make(project));
    }
}

export class InMemoryProjectRespository implements ProjectRepository {
    async findAllProjects(): Promise<Project[]> {
        return this.projects;
    }
    private readonly projects: Project[] = [];
}
