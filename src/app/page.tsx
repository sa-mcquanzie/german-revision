import { createClient } from '@/utils/supabase/server'
import Link from 'next/link'

const Page = async () => {
  const supabase = createClient()

  const { data: subjects } = await supabase.from('subject').select()

  return (
    <div id="pageContainer">
      {subjects.map((subject) => (
        <div key={subject.id} >
          <Link href={`/subject/${subject.id}`}>{subject.name}</Link>
        </div>
      ))}
    </div>
  );
}

export default Page
