// Strapi v5 image format
export interface StrapiImage {
    id: number;
    url: string;
    width: number;
    height: number;
    alternativeText: string | null;
}

// Strapi v5 Home Hero data format (no attributes wrapper)
export interface HomeHeroData {
    id: number;
    documentId: string;
    title_line_1: string;
    title_line_2: string;
    title_line_3: string;
    subtitle: string;
    small_text?: string;
    torus_image: StrapiImage | null;
    arrow_image: StrapiImage | null;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
}
