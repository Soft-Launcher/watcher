import {Project} from './project';

export interface ProjectRepository {
    findAllProjects(): Promise<Project[]>;
}
