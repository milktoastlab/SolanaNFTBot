const mediaIdCache: { [id: string]: string } = {};

export function getFromCache(token: string) {
    return mediaIdCache.hasOwnProperty(token) ? mediaIdCache[token] : undefined;
}

export function insertIntoCache(token: string, mediaId: string) {
    mediaIdCache[token] = mediaId;
}
