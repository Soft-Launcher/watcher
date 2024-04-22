import {Project} from '../projects/project';

export class Category {
    public constructor(
        public readonly id: string,
        public readonly name: string,
        public readonly projects?: Project[],
    ) {}
}
