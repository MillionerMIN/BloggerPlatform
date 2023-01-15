import { Divider } from '../divider/Divider';

type TitleProps = {
  titleValue: string;
};

export const Title = ({ titleValue }: TitleProps) => {
  return (
    <>
      <h3 className='text-xl'>{titleValue}</h3>
      <Divider />
    </>
  );
};
