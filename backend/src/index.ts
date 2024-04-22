import 'reflect-metadata';
import {KeystoneProjectRepository} from './portfolio/projects/infraestructure/keystone.project-repository';
import {ValibotProjectParser} from './portfolio/projects/infraestructure/valibot.project-parser';
import {ProjectService} from './portfolio/projects/project-service';
import {ProjectFactory} from './portfolio/projects/project-factory';
import {ValibotCollaboratorParser} from './team/collaborators/infraestructure/valibot.collaborator-parser';
import {CollaboratorFactory} from './team/collaborators/collaborator-factory';
import {KeystoneCollaboratorRepository} from './team/collaborators/infraestructure/keystone.collaborator-repository';
import {CollaboratorService} from './team/collaborators/collaborator-service';

export const porfolio = {
    project: (() => {
        const projectParser = new ValibotProjectParser();
        const projectFactory = new ProjectFactory(projectParser);
        const projectRepository = new KeystoneProjectRepository(projectFactory);
        const projectService = new ProjectService(projectRepository);

        return {findAll: () => projectService.findAllProjects()};
    })(),
};

export const team = {
    collaborator: (() => {
        const collaboratorParser = new ValibotCollaboratorParser();
        const collaboratorFactory = new CollaboratorFactory(collaboratorParser);
        const collaboratorRepository = new KeystoneCollaboratorRepository(
            collaboratorFactory,
        );
        const collaboratorService = new CollaboratorService(
            collaboratorRepository,
        );

        return {findAll: () => collaboratorService.findAllCollaborators()};
    })(),
};
