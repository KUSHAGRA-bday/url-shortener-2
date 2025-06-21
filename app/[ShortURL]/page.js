import { redirect } from "next/navigation";
import clientPromise from "@/lib/mongodb";

export default async function Page({ params }) {
    const { ShortURL } = params
    const client = await clientPromise;
    const db = client.db("URLShortener")
    const collection = db.collection("url")

    const doc = await collection.findOne({ ShortURL})
    if (doc && doc.url) {
        redirect(doc.url);
    }
    else {
        redirect(`${process.env.NEXT_PUBLIC_HOST}`)
    }
    return null
}