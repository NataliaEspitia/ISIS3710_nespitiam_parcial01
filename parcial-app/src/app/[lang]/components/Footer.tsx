import type { Dictionary } from "../dictionaries";

type Props = { dict: Dictionary };

export default function Footer({ dict }: Props) {
  return (
    <footer className="bg-[#BBCCBB] text-black p-4 mt-8">
            <div className='container mx-auto flex justify-between items-center'>
              {dict.footer.text}
               -----------------------------------------------------------------------------Desarrollado para: ISIS3710
            </div>            
    </footer>
  );
}

