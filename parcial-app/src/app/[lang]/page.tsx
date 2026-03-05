import Image from "next/image";
import { notFound } from "next/navigation";
import { getDictionary, hasLocale } from './dictionaries'

type Props = {
  params: Promise<{ lang: string }>;
}
export default async function Home({ params }: Props) {
  const { lang } = await params;

  if (!hasLocale(lang)) notFound();

  const dict = await getDictionary(lang);

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-4xl font-bold mb-4">{dict.welcome}</h1>
    </main>
  );

}