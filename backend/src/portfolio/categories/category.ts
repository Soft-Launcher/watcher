import {Project} from '../projects/project';

export class Category {
    public constructor(
        private readonly id: string,
        private readonly name: string,
        private readonly projects: Project[],
    ) {}
}
