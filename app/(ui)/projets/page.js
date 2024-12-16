import Carousel from "@/components/Carousel";
export default async function ProjetsPage() {
  const CLOUD_NAME = process.env.CLOUDINARY_CLOUD_NAME;
  const API_KEY = process.env.CLOUDINARY_API_KEY;
  const API_SECRET = process.env.CLOUDINARY_API_SECRET;
  const FOLDER = "Home";

  const url = `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/resources/image?prefix=${FOLDER}`;
  const auth = Buffer.from(`${API_KEY}:${API_SECRET}`).toString("base64");

  const res = await fetch(url, {
    headers: {
      Authorization: `Basic ${auth}`,
    },
    cache: "no-store",
  });
  console.log(res);

  if (!res.ok) {
    throw new Error("Impossible de récupérer les images de Cloudinary");
  }

  const data = await res.json();
  const images = data.resources.map((r) => r.secure_url);

  return (
    <main>
      <h1>Projets</h1>
      {/* On passe le tableau d'images au composant client */}
      <Carousel images={images} />
    </main>
  );
}
