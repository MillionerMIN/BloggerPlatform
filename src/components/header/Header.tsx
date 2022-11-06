import './header.scss';

import { SvgIcons } from '../common/svgIcons/SvgIcons';

export const Header = () => {
  return (
    <header className='header header-pd'>
      <div className='container'>
        <div className='header--wrapper'>
          <SvgIcons icon='logo' className='header--logo' />
          <h1 className='header--title'>Blogger Platform</h1>
        </div>
      </div>
    </header>
  );
};
