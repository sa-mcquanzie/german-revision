import { createClient } from '@/utils/supabase/server'
import Link from 'next/link'

const Page = async ({ params }: { params: { id: string } }) => {
  const supabase = createClient()

  const { data: mods } = await supabase
    .from('mod')
    .select()
    .filter('subject_id', 'eq', params.id)

  return (
    <div id="pageContainer">
      {mods.map((mod) => (
        <div key={mod.id} >
          <Link href={`/module/${mod.id}`}>{mod.name}</Link>
        </div>
      ))}
    </div>
  );
}

export default Page