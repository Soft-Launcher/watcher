import {Category} from '../categories/category';

export class Project {
    public constructor(
        public readonly id: string,
        public readonly name: string,
        public readonly caption: string,
        public readonly client: string,
        public readonly pictureURI: string,
        public readonly categories?: Category[],
    ) {}
}
