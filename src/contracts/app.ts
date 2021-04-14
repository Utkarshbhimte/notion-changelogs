export interface PageMetadata {
    primary_button_text?: string;
    primary_button_link?: string;
    heading: string;
    subheading?: string;
    app_name: string;
    icon: string;
}

export interface Post {
    id: string;
    title: string;
    slug: string;
    thumbnail?: string;
    tag: string[];
    created: string;
}