import TimeTableList from '@/Components/ViewTimeTables';

export default function Home() {
  return (
    <>
      <div className='m-10 flex justify-center mx-auto gap-2 max-w-[70rem]'>
        <TimeTableList />
      </div>
    </>
  );
}
