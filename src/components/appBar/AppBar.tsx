import './appBar.scss';

import { Link } from 'react-router-dom';

export const AppBar = () => {
  return (
    <nav className='flex flex-col'>
      <Link to='blogs'>Blogs</Link>
      <Link to='posts'>Posts</Link>
    </nav>
  );
};
