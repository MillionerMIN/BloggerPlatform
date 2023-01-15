export const SearchPanel = () => {
  return (
    <div className='grid grid-cols-[2fr_1fr] gap-2'>
      <input type='text' placeholder='search' className='border p-1' />
      <div>filter</div>
    </div>
  );
};
