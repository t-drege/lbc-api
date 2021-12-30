export interface NextCloudImpl {
    createFolder(name: string)

    createFile(folderId: string, file)
}