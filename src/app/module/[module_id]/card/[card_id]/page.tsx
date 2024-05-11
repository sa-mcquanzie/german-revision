import { createClient } from '@/utils/supabase/server'
import CardPage from '@/components/card/component'

const Page = async (
  { params }: { params: { module_id: string, card_id: string } }
) => {
  const supabase = createClient()
  
  const { data: cards } = await supabase
    .from('card')
    .select()
    .filter('module_id', 'eq', params.module_id)
    .filter('id', 'eq', params.card_id)

  if (!cards || cards.length === 0) return <>Card {params.card_id} not found :(</>

  const card = cards[0]

  return <CardPage moduleId={params.module_id} prompt={card.prompt} answer={card.answer}/>
}

export default Page
