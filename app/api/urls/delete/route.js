import clientPromise from "@/lib/mongodb";

export async function DELETE(request) {
  const { ShortURL } = await request.json();
  console.log("Deleting ShortURL:", ShortURL);
  const client = await clientPromise;
  const db = client.db("URLShortener");
  const collection = db.collection("url");
  const result = await collection.deleteOne({ ShortURL });
  if (result.deletedCount === 1) {
    return Response.json({ success: true, message: "Short URL deleted." });
  } else {
    return Response.json({ success: false, message: "Short URL not found." }, { status: 404 });
  }
}