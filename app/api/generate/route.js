import clientPromise from "@/lib/mongodb"


export async function POST(request) {


    const body = await request.json()
    const client = await clientPromise;
    const db = client.db("URLShortener")
    const collection = db.collection("url")
    const urls = await collection.find({}).toArray();


    // Clean ShortURL: replace spaces with dashes
    const cleanShortURL = body.ShortURL.replace(/\s+/g, '-');

    // Check if the short url exists
    const doc = await collection.findOne({ ShortURL: cleanShortURL });
    if(doc){
        return Response.json({success: false, error: true,  message: 'URL already exists!' })
    }

    // Ensure the URL starts with http:// or https://
    let originalUrl = body.url;
    if (!/^https?:\/\//i.test(originalUrl)) {
        originalUrl = 'https://' + originalUrl;
    }

    // URL and ShortURL generator
    const result = await collection.insertOne({
        url: originalUrl,
        ShortURL: cleanShortURL
    })

    return Response.json({ success: true, error: false, message: 'URL generated successfully' })
}