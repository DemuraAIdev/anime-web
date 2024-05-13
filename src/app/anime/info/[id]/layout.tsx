import { Suspense } from "react";
import { Metadata } from "next";
import siteMetadata from "@/data/config";

type Props = {
  params: { id: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const id = params.id;
  const anime = await fetch(`/api/animelist/getinfo/${id}`);
  const { data } = await anime.json();
  return {
    title: data.title,
    openGraph: {
      title: `${data.title} | ${siteMetadata.title}`,
      description: data.synopsis,
      url: `./anime/info/${id}`,
      siteName: siteMetadata.title,
      images: [data.main_picture.large],
      locale: "en_US",
      type: "website",
    },
    twitter: {
      title: `${data.title} | ${siteMetadata.title}`,
      card: "summary_large_image",
      images: [data.main_picture.large],
    },
  };
}

export default function Layouts({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>
    </>
  );
}
