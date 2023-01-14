import { Link } from 'react-router-dom';

import { SvgIcons } from '../common/svgIcons/SvgIcons';

export const AppBar = () => {
  return (
    <nav className='flex flex-col gap-y-1 pl-16'>
      <Link
        to='blogs'
        className='grid auto-cols-min grid-flow-col gap-x-2 border-r-4 border-transparent py-2 hover:border-indigo-400 hover:text-indigo-400'
      >
        <SvgIcons icon='blogs' className='h-6 w-6 stroke-current' />
        Blogs
      </Link>
      <Link
        to='posts'
        className='grid auto-cols-min grid-flow-col gap-x-2 border-r-4 border-transparent  py-2 hover:border-indigo-400 hover:text-indigo-400'
      >
        <SvgIcons icon='posts' className='h-6 w-6 stroke-current stroke-1' />
        Posts
      </Link>
    </nav>
  );
};
