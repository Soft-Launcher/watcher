import {ProjectRepository} from './project-repository';

export class ProjectService {
    constructor(private readonly _projectRepository: ProjectRepository) {}

    doing() {
        console.log('REPO', this._projectRepository);
    }

    findAllProjects() {
        return this._projectRepository.findAllProjects();
    }
}
