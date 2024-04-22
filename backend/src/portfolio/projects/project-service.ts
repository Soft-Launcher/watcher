import {ProjectRepository} from './project-repository';

export class ProjectService {
    constructor(private readonly _projectRepository: ProjectRepository) {}

    findAllProjects() {
        return this._projectRepository.findAllProjects();
    }
}
