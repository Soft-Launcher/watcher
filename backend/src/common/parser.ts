export interface Parser<T> {
    parse(obj: unknown): T;
}
