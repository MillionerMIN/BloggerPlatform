import { SvgIcons } from '../common/svgIcons/SvgIcons';
import { Container } from '../container/Container';

export const Header = () => {
  return (
    <header className='w-auto bg-slate-100 py-3'>
      <Container>
        <div className='flex items-center gap-x-1.5'>
          <SvgIcons icon='logo' className='w-9' />
          <h1 className='text-center text-xl'>Blogger Platform</h1>
        </div>
      </Container>
    </header>
  );
};
