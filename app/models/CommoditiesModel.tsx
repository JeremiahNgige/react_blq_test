interface Media {
    createdAt: string;
    updatedAt: string;
    deletedAt: string | null;
    uuid: string;
    mimeType: string;
    uri: string;
    fileName: string;
    objectKey: string;
    deviceType: string | null;
    collectionId: number;
    seq: number;
    itemKey: string | null;
    type: string;
}

interface Thumbnail extends Media {
}

interface Item {
    id: number;
    type: string;
    code: string;
    title: string;
    subtitle: string;
    description: string;
    trialPeriod: string | null;
    installmentPrice: number | null;
    installmentPeriod: number | null;
    rating: number;
    startDate: string | null;
    endDate: string | null;
    viewType: string | null;
    createdAt: string;
    items: any[]; // This should be replaced with the appropriate type if `items` has a consistent structure
    media: Media[];
    thumbnail: Thumbnail;
    taggings: any[]; // This should be replaced with the appropriate type if `taggings` has a consistent structure
    singleCollections: any[]; // This should be replaced with the appropriate type if `singleCollections` has a consistent structure
}

interface Data {
    items: Item[];
    totalCount: number;
}
