import {Category} from '../categories/category';

export class Project {
    public constructor(
        private readonly id: string,
        private readonly name: string,
        private readonly caption: string,
        private readonly categories: Category[],
        private readonly client: string,
        private readonly pictureURI: string,
    ) {}
}
