import CreateTimeTable from '@/Components/CreateTimeTable';
import TimeTableList from '@/Components/ViewTimeTables';

export default function Home() {
  return (
    <>
      <div className='m-10  flex flex-row gap-2'>
        <CreateTimeTable />
        <TimeTableList />
      </div>
    </>
  );
}
