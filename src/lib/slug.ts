export function splitSlug(slug: string): [string, string, string] {
    let firstSlash = slug.indexOf("/")
    let entryChapter = slug.substring(0, firstSlash)

    let secondSlash = slug.indexOf("/", firstSlash + 1)
    let entrySection = slug.substring(firstSlash + 1, secondSlash)

    let entryName = slug.substring(secondSlash + 1)

    return [entryChapter, entrySection, entryName]
}