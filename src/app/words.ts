import { Word } from "./types";

const wordsText = `Hast du ein Musikfestival besucht? Wie War das? = Letzen Sommer habe ich im Coachella besucht. Es hat spaß gemacht denn ich habe interessant leute kennengelernt und die Musik war total toll!\n
Welches Musikfestival wirst du besuchen und warum? = Ich habe Coachella besucht aber ich will Wireless und Glastonbury besuchen denn cool Bands spielen immer und die karten sind nicht zu teuer.\n
Was sind die Vorteile / Nachteile des Events? = Ein Nachteil von Events ist dass es lärmbelastung gibt. Ein Vorteile ist mann kann neuer Musiker finden. Das ist total toll aber neue Bands sind manchmal schlecht.\n
Bist du für oder gegen Events? = Ich bin für Events weil obwohl sie laut sind und Leute konnen Schlaf verlieren. Sie sind auch spaßige und sie spielen sehr gut Musik also die Vorteile sind toller als die Nachteile.\n
Was machst du für die Umwelt? = Für die Umwelt trenne ich Müll am Sonntag und Donnerstag. Ich organisiere eine Fahrrad woche einmal mit mein freunden und familie weil es umstiege zu helfen die Umwelt ist.\n
Was sind die Umweltsprobleme? = Ein Umweltproblem ist der Meeresspiegel seicht weil polkappen schmelzen. Der Meeresspiegel ist eine Probleme weil es überschwemmunge verursachen kann.\n
Sind Umweltprobleme dir wichtig? = Ich glaube das die wichtigste probleme ist Kohlendioxid und luftverschmutzung weil es verursachte globale erwärmung kann. Kohlendioxid in die atmosphäre kann auch zu sauren regen fuhren nas dem Ökosystem schadet.\n
Wie werden wir "grüner" in der Zukunft? = In der Zukunft können wir Solaranlagen für Energie installieren und sie nicht nutzen fossile Brennstoffe. Wir können auch Druckerpatronen, Kopierpatronen und Papier recycleren zu Abfall reduzieren.\n
Welche freiwillige Arbeit willst du machen? = Ich bin freiwilliger in einem Tafelladen für die Hausfreigen und auch Bienenkorb im Schulgarten hatte. Ich denke freiwillige ist sehr wichtig weil es die welt hilft.\n`

const words: Word[] = [];

const lines = wordsText.split('\n');

lines.forEach((line) => {
  if (line.trim() !== '') {
    const [german, english] = line.split(' = ');
    words.push({ german, english, priority: 1 });
  }
});

export default words;
