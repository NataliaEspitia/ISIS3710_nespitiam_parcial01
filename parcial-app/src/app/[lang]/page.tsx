import { notFound } from "next/navigation";
import { getDictionary, hasLocale } from './dictionaries'
import Card from "./components/Card";



type Props = {
  params: Promise<{ lang: string }>;
}
export default async function Home({ params }: Props) {
  const { lang } = await params;

  if (!hasLocale(lang)) notFound();

  const dict = await getDictionary(lang);

  return (
    <main className="flex min-h-screen flex-col items-center p-24 bg-[#e0e0e0]">
      <h1 className="text-[#FDB608] text-4xl font-bold">{dict.welcome}</h1>
      <p className="text-gray-700 text-lg">{dict.texthp}</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-8">
        </div>
    </main>
  );

}