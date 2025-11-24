export interface AffirmationCategory{
    title: string;
    data: GalleryPreviewData[];
}

export interface GalleryPreviewData {
    id: number;
    test: string;
    image: any;
}