import type { Dictionary } from "../dictionaries";

type Props = { dict: Dictionary };

export default function Footer({ dict }: Props) {
  return (
    <footer className="bg-purple-800 text-white p-4 mt-8">
            <div className='container mx-auto flex justify-between items-center'>
              {dict.footer.text}
            </div>
    </footer>
  );
}

