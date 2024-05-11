import { createClient } from '@/utils/supabase/server'
import { redirect } from 'next/navigation'

const Page = async ({ params }: { params: { module_id: string } }) => {
  const supabase = createClient()

  const { data: cards } = await supabase
    .from('card')
    .select()
    .filter('module_id', 'eq', params.module_id)

  if (!cards || cards.length === 0) return <>No cards found for module {params.module_id}</>

  const randomCard = cards[Math.floor(Math.random() * cards.length)]

  redirect(`/module/${params.module_id}/card/${randomCard.id}`)
}

export default Page
