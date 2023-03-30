import Link from "next/link";
import { cn } from "../utils/misc";

interface NoteCardProps {
  title: string;
  description: string;
  price: number;
  author: string;
  noteid: string;
}

const NoteCard = (props: NoteCardProps) => {
  const { title, description, price, author, noteid } = props;

  return (
    <>
      <div className="max-w-screen-sm:max-w-xs w-60 self-start rounded-2xl border border-gray-200 bg-white pb-11 shadow-sm lg:w-100">
        <div className="mt-7 px-5 sm:px-6 md:px-7">
          <div className="mb-9 mt-4">
            <h2 className="font-secondary text-2xl font-semibold text-slate-700">
              {title}
            </h2>
            <div className="mt-2 h-px w-full bg-gray-200" />
            <p className="mt-8 text-gray-500">{description}</p>
          </div>
          <span className={cn("block", "text-gray-400")}>
            {(price == 0 && "Free") || (price != 0 && "$ " + price)}
          </span>
          <span className="mt-3 text-gray-400">Authored by {author}</span>
          <div className="mt-8 h-px w-full bg-gray-200" />
          <div className="mt-6 h-11">
            <Link href={`/note/${noteid}`}>
              {price == 0 && (
                <button className="flex h-full w-full items-center justify-center rounded-lg bg-primary text-white transition-colors delay-100 ease-in hover:bg-primary-600">
                  Get free access
                </button>
              )}
              {price != 0 && (
                <button className="flex h-full w-full items-center justify-center rounded-lg bg-primary text-white transition-colors delay-100 ease-in hover:bg-primary-600">
                  Get access
                </button>
              )}
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default NoteCard;