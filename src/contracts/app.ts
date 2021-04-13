export interface PageMetadata {
    primary_button_text?: string;
    primary_button_link?: string;
    heading: string;
    subheading?: string;
}

export interface Post {
    title: string;
    thumbnail?: string;
    tag: string[];
    created: string;
}