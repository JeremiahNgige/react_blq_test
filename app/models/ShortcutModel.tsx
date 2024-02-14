// interfaces.ts
interface MainShortcut {
    mainShortcutId: number;
    title: string;
    sort: number;
    imageUrl: string;
    linkUrl: string;
    creator: string;
    updater: string;
    deleter: string | null;
    createdAt: string;
    updatedAt: string;
    deletedAt: string | null;
}

export type {MainShortcut};
