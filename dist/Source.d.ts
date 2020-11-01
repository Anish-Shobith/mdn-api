export declare function Source(query: string): Promise<(Document & {
    diff: number;
})>;
export declare function Source(query: string, array?: boolean): Promise<(Document & {
    diff: number;
})[]>;
export declare type MaybeArray<T> = T | T[];
export interface Result {
    count: number;
    next: string | null;
    previous: string | null;
    query: string;
    page: number;
    pages: number;
    start: number;
    end: number;
    documents: Array<Document>;
}
export interface Document {
    title: string;
    slug: string;
    locale: string;
    excerpt: string;
}
