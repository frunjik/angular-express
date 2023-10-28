import fs from 'fs';
import path from 'path';
import { FolderEntry } from './types.js';

export function readFile(filename: string): Promise<string> {
    return fs.promises.readFile(filename, 'utf-8');
}

function createFolderEntry(filename: string, isFolder: boolean): FolderEntry {
    return {
        filename,
        isFolder
    };
}

async function createFolderEntries(foldername: string): Promise<FolderEntry[]> {
    const names = await fs.promises.readdir(foldername);
    const stats = await Promise.all(names.map(e => fs.promises.stat(path.join(foldername, e))));
    return names.map((name, i) => createFolderEntry(name, stats[i].isDirectory()));
}
export class FileSystem {
    constructor(public readonly rootpath: string) {}

    readFile(filename: string): Promise<string> {
        return readFile(path.join(this.rootpath, filename));
    }

    readFolder(foldername: string): Promise<FolderEntry[]> {
        return createFolderEntries(path.join(this.rootpath, foldername));
    }
}
