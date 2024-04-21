import { parsePromptResponseTest } from "./helpers";
import { Card } from "./types";


const vocabularyText = `die Gaste = the guests\n
ich weiss = I know\n
die Kunstgalerien = the art gallery\n
von... bis = from... to\n
bald = soon\n
der Wettbeweber = the competition\n
anstatt = instead\n
zweimal pro tag = twice a day\n
reden = to talk\n
die ganze zeit = the whole time\n
das argert mich = that annoys me\n
sich treffen = to meet\n
konzentriert = concentrated\n
laufen = to run\n
das rennen = the race\n
einmal = once\n
empfehlen = to reccomend\n
der Eintritt = the entry\n
kostenloss = for free\n
die geschichten = the stories\n
viel besser = much/a lot better\n
eigen = own\n
das Einshalle = the ice rink\n
die schittschue = the skates\n
zu mieten/leihen = to rent/borrow\n
wahrend = during\n
die fahrt = the ride\n
regnen = to rain\n
zussammen = together\n
die mahlzeit = the meal\n
sich freuen = to rejoice\n
fruher = earlier\n
die denkmaler = the monuments\n
sich angeren uber = get angry about\n
versuchen = to try\n
(un)reif = (im)mature\n
selbstbewusst = confident\n
sollen = to have to\n
bestimmit = certainly\n
der Breif = the letter\n
schrieben = to write\n
sich bedanken = to thank\n
die worterucher = the dictionaries\n
die chemilabour = the chemistry lab\n
sammeln = to collect\n
der erfolg = the success\n
der kuchenverkauf = the bake sale\n
verkaufen = to sell\n
die Blumen = the flowers\n
stolz = proud\n
die Leistung = the performance\n
weiderholen = to repeat\n
feiern = to celebrate\n
geschichte = history\n
beschreiben = to describe\n
sich befinden = to be located\n
die wege = the ways\n
kurtz = short\n
einfach = easy/simple\n
in anderen landern = in another country\n
bakannt = well known\n
das familienleben = the family life\n
dort = there\n
spater = later\n
zeit verbringen = to spend time\n
ob = if\n
telentiert = talented\n
wenn = if\n
verdienen = to earn\n
das Fernsehshow = the tv show\n
werden = to get\n
erfahren = to exeperience\n
meistens = mostly\n
die Fernsehsender = the tv channels\n
kaum = barely\n
to be interested in = sich intressieren fur\n
die zahl = the number\n
die zuschauer = the audience\n
die erwachsene = the adult\n
wenig =  few\n
zeigen = to show\n
erfolgreich = sucsessful\n
sanger(in) = singer\n
beliebt = popular\n
radfahren = to ride(a bike)\n
die staus = the traffic\n
die larm = the noise\n
das benzin = the gasoline\n
unterstutzen = to support/aid\n
schmutzig = dirty\n
die luft = the air\n
kennen = to know\n
die landschaft = the landscape\n
gut gelaunt = in a good mood\n
jemand = someone\n
kosten = to cost\n
der Aufenthalt = the stay\n
ein traum = a dream\n
wertvoll = valuable\n
erleben = to experience\n
die arbeitgeber = the employers\n
bevorzugen = to prefer\n`

const theme2Text = `Wo wohnst du? = Als ich jenzer war wohnte in Jamaika aber jetzt wohne ich in London. Ich wohne nicht gern hier denn es gibt viel lärmbelastung und ich kann nicht schlafen.\n
Was kann man in deiner Stadt Machen? = Als kind, konnte man in dem schwimmbad und Fußball in dem park spielen. Jetzt gibt es nicht viel zu tun. Man kann filme im kino sehen aber das finde ich langweilig.\n
Was hast du in letzter Zeit in deiner Stadt gemacht? = Ich wollte basketball spielen, aber ich musste meine familie sehen. Es war spaßig aber ich werde lieber basketball spielen.\n
Was wirst du dieses Wochenende machen, wenn das Wetter schön ist? = Wenn das wetter schlecht ist, werde ich spielen in Hause blieben und computerspieler weil ich computerspiele aufregend finde.\n
Wo willst du in der Zukunft wohnen? = Als kind, wollte ich in Tokyo wohnen, aber in der Zukunft will ich in Cuba wohnen weil ich kommunist bin.\n
Würdest du lieber in einer Stadt oder auf dem Land wohnen? Warum? = Ich wurde nie auf dem Land wohnen, denn es ist zu natürlich und ziemlich ekelhaft.\n
Fährst du lieber an die Küste oder in die Berge? Warum? = Wenn es freie war, wurde ich in die Berge fahren, weil es sehr romantische ist aber ich habe kein geld also ich fahre an der Küste.\n
Wohin fährst du normalerweise in Urlaub? = Ich fahre normalerweise nach München denn ich liebe die berühmte Beerhalle. Wenn ich genau Geld hatte, werde ich nach China fahre weis es eine Tolle Kultur als.\n
Was hast du in deinem letzten Urlaub gemacht? = In meinem letzten Urlaub, habe ich Tischtennis in Mozambique gespielt. Es war stressig aber ich bin schlecht in Tischtennis.\n
Erzähl mir von einem besonderen Tag, den du auf Urlaub hattest. = Am letztes Tag, habe ich ein basketball spiele in LA gesehen. Es hat viel spaß gemacht, denn mein Lieblingsmannschaft gespielt haben.\n
Erzähl Sie mir von einem Problem, das du auf Urlaub hattest. = Mein Urlaub war manchmal schlecht, denn ich hatte ein grozes Probleme es war das ich hatte nicht mein Pass denn es war in meinem Haus.\n
Was wirst du in deinem nächsten Urlaub machen? = Um etwas Neues zu erfahren mochte ich gern gehe ein Skiurlaub machen denn Ski ist mein Lieblingssport.\n
Wie fährst du am liebsten auf Urlaub? = Ich werde liebe immer mit rad fahren denn rad ist umweltfreundlicher als auto.\n
Wo möchtest du in der Zukunft besuchen? = Wenn ich genau Geld hatte, mochte in Luxemburg besuchen weil ich gern Formel Eins sehe.\n
`

const theme5Text = `Hast du ein Musikfestival besucht? Wie War das? = Letzen Sommer habe ich im Coachella besucht. Es hat spaß gemacht denn ich habe interessant leute kennengelernt und die Musik war total toll!\n
Welches Musikfestival wirst du besuchen und warum? = Ich habe Coachella besucht aber ich will Wireless und Glastonbury besuchen denn cool Bands spielen immer und die karten sind nicht zu teuer.\n
Was sind die Vorteile / Nachteile des Events? = Ein Nachteil von Events ist dass es lärmbelastung gibt. Ein Vorteile ist mann kann neuer Musiker finden. Das ist total toll aber neue Bands sind manchmal schlecht.\n
Bist du für oder gegen Events? = Ich bin für Events weil obwohl sie laut sind und Leute konnen Schlaf verlieren. Sie sind auch spaßige und sie spielen sehr gut Musik also die Vorteile sind toller als die Nachteile.\n
Was machst du für die Umwelt? = Für die Umwelt trenne ich Müll am Sonntag und Donnerstag. Ich organisiere eine Fahrrad woche einmal mit mein freunden und familie weil es wichtigste zu helfen die Umwelt ist.\n
Was sind die Umweltsprobleme? = Ein Umweltproblem ist der Meeresspiegel seicht weil polkappen schmelzen. Der Meeresspiegel ist eine Probleme weil es überschwemmunge verursachen kann.\n
Sind Umweltprobleme dir wichtig? = Ich glaube das die wichtigste probleme ist Kohlendioxid und luftverschmutzung weil es verursachte globale erwärmung kann. Kohlendioxid in die atmosphäre kann auch zu sauren regen fuhren nas dem Ökosystem schadet.\n
Wie werden wir "grüner" in der Zukunft? = In der Zukunft können wir Solaranlagen für Energie installieren und sie nicht nutzen fossile Brennstoffe. Wir können auch Druckerpatronen, Kopierpatronen und Papier recycleren zu Abfall reduzieren.\n
Welche freiwillige Arbeit willst du machen? = Ich bin freiwilliger in einem Tafelladen für die Hausfreigen und auch Bienenkorb im Schulgarten hatte. Ich denke freiwillige ist sehr wichtig weil es die welt hilft.\n`

const modules = [
  {
    id: '1',
    title: 'Vocabulary',
    cards: parsePromptResponseTest(vocabularyText)
  },
  {
    id: '2',
    title: 'Theme 2: Local Area, Holiday and Travel',
    cards: parsePromptResponseTest(theme2Text)
  },
  {
    id: '5',
    title: 'Theme 5: International and Global Dimension',
    cards: parsePromptResponseTest(theme5Text)
  }
]

export default modules;
