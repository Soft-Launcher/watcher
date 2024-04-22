import 'reflect-metadata';
import {KeystoneProjectRepository} from './portfolio/projects/infraestructure/keystone.project-repository';
import {ValibotProjectParser} from './portfolio/projects/infraestructure/valibot.project-parser';
import {ProjectService} from './portfolio/projects/project-service';
import {ProjectFactory} from './portfolio/projects/project-factory';

export const porfolio = {
    project: (() => {
        const projectParser = new ValibotProjectParser();
        const projectFactory = new ProjectFactory(projectParser);
        const projectRepository = new KeystoneProjectRepository(projectFactory);
        const projectService = new ProjectService(projectRepository);

        return {findAll: () => projectService.findAllProjects()};
    })(),
};
