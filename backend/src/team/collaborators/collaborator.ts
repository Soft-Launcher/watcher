export class Collaborator {
    public constructor(
        public readonly id: string,
        public readonly name: string,
        public readonly description: string,
        public readonly profilePictureURI: string,
        public readonly personalPortfolioURI?: string,
    ) {}
}
