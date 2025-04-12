"use server"

export default async function imageValidation(url: string) {
    const res = await fetch(url, {method: "HEAD"});
    const contentType = res.headers.get("content-type");
    return contentType?.startsWith("image/");
}