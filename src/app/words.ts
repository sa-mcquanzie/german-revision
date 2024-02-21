import { Word } from "./types";

const wordsText = `die Gaste = the guests\n
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

const words: Word[] = [];

const lines = wordsText.split('\n');

lines.forEach((line) => {
  if (line.trim() !== '') {
    const [german, english] = line.split(' = ');
    words.push({ german, english, priority: 1 });
  }
});

export default words;
