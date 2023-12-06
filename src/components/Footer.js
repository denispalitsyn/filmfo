import { Link } from 'react-router-dom';
import { ReactComponent as Tg } from '../assets/tg.svg';
import { ReactComponent as Github } from '../assets/github.svg';
import { ReactComponent as In } from '../assets/in.svg';

export function Footer() {
  return (
    <div className="pt-24 pb-5">
      <div className="flex gap-5 justify-center items-center mb-4">
        <Link
          to={'https://t.me/denis_palitsyn'}
          target="_blank"
          className="hover:-rotate-12 transition-all"
        >
          <Tg />
        </Link>
        <Link
          to={'https://github.com/DenisPalitsyn'}
          target="_blank"
          className="hover:-rotate-12 transition-all"
        >
          <Github />
        </Link>
        <Link
          to={'https://www.linkedin.com/in/denis-palitsyn-5984a6255/'}
          target="_blank"
          className="hover:-rotate-12 transition-all"
        >
          <In />
        </Link>
      </div>
      <div className="text-center text-sm text-orange-500">
        Made by Denis Palitsyn
      </div>
    </div>
  );
}
