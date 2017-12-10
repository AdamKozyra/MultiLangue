import {Page} from './Models/Page'
import {Book} from './Models/Book'
import {Chapter} from './Models/Chapter'
import {HardWord} from './Models/HardWord'
export class BookService{

    getBook(id)
    {
        var book = new Book(id);
        book.name = "Lord Jim";
        book.chapters = [new Chapter(1,"Gdzie Lord G poznaje"), new Chapter(2,"Rzodział 2"), new Chapter(3,"Rzodział 3"),new Chapter(4,"Rzodział 4"), new Chapter(5,"Rzodział 2")];
        book.chapters[0].pages = [new Page(1), new Page(2), new Page(3)]
        book.chapters[1].pages = [new Page(1), new Page(2)]
        book.chapters[2].pages = [new Page(1), new Page(2), new Page(3), new Page(3)]
        
        return book;
    }
    getChapter(number)
    {
            var c = new Chapter(number, "Rozdział " + number);
            /*int*/
            c.pages = [new Page(1), new Page(2), new Page(3), new Page(4), new Page(5), new Page(6), new Page(7)];
        
    }
    getPageByNumber(number)
    {        
        if(number === 1)
        {
        let p = new Page();
        p.orginalText = "He was an inch, perhaps two, under six feet, powerfully built, and he \
        advanced straight at you with a slight stoop of the shoulders, head\
        forward, and a fixed from-under stare which made you think of a charging\
        bull. His voice was deep, loud, and his manner displayed a kind of\
        dogged self-assertion which had nothing aggressive in it. It seemed\
        a necessity, and it was directed apparently as much at himself as at\
        anybody else. He was spotlessly neat, apparelled in immaculate white\
        from shoes to hat, and in the various Eastern ports where he got his\
        living as ship-chandler's water-clerk he was very popular.\
        \
        A water-clerk need not pass an examination in anything under the sun,\
        but he must have Ability in the abstract and demonstrate it practically.\
        His work consists in racing under sail, steam, or oars against other\
        water-clerks for any ship about to anchor, greeting her captain\
        cheerily, forcing upon him a card--the business card of the\
        ship-chandler--and on his first visit on shore piloting him firmly but\
        without ostentation to a vast, cavern-like shop which is full of things\
        that are eaten and drunk on board ship; where you can get everything\
        to make her seaworthy and beautiful, from a set of chain-hooks for her\
        cable to a book of gold-leaf for the carvings of her stern; and where\
        her commander is received like a brother by a ship-chandler he has never\
        seen before. There is a cool parlour, easy-chairs, bottles, cigars,\
        writing implements, a copy of harbour regulations, and a warmth of\
        welcome that melts the salt of a three months' passage out of a seaman's\
        heart. The connection thus begun is kept up, as long as the ship remains\
        in harbour, by the daily visits of the water-clerk. To the captain he\
        is faithful like a friend and attentive like a son, with the patience\
        of Job, the unselfish devotion of a woman, and the jollity of a boon\
        companion. Later on the bill is sent in. It is a beautiful and humane\
        occupation. Therefore good water-clerks are scarce. When a water-clerk\
        who possesses Ability in the abstract has also the advantage of having\
        been brought up to the sea, he is worth to his employer a lot of money\
        and some humouring. Jim had always good wages and as much humouring\
        as would have bought the fidelity of a fiend. Nevertheless, with black\
        ingratitude he would throw up the job suddenly and depart. To his\
        employers the reasons he gave were obviously inadequate. They said\
        'Confounded fool!' as soon as his back was turned. This was their\
        criticism on his exquisite sensibility.";
           p.translatedText = " Potężnie zbudowany, bardzo wysoki, szedł prosto na ciebie z lekkim pochyleniem ramion, głową naprzód,\
            patrząc spode łba, jak byk gotujący się do ataku. Jego głęboki, niski głos, nacechowany pewnością siebie, \
            nie miał w sobie nic przykrego. Był niepokalanie czysty, biało ubrany od trzewików do kapelusza i w rozmaitych wschodnich portach, \
            gdzie zarabiał na życie w charakterze agenta okrętowego, ciszył się wielką popularnością.\
            Agent okrętowy nie potrzebuje zdawać żadnych egzaminów, ale musi posiadać zdolność abstrakcyjnego myślenia i umieć wykazać je w praktyce. Jego praca polega na tym, by przy pomocy pary, żagli lub wioseł ścigać się z innymi agentami na widok zarzucającego kotwicę okrętu, serdecznie powitać kapitana i wsunąć mu swą kartę — kartę agenta okrętowego — a przy pierwszej jego wizycie na wybrzeżu stanowczo, lecz bez ostentacji skierować go do obszernego, podobnego do winiarni magazynu, gdzie jest wszystko, co się pije i je na statku; gdzie kupić można wszystko, co jest potrzebne do użytku i upiększenia okrętu, począwszy od łańcuchów z hakami, poprzez ozdoby steru aż do książek o złotych kartkach, i gdzie kapitan okrętu przyjmowany jest z otwartymi ramionami przez agenta okrętowego, którego przedtem nigdy w życiu nie widział. Tam jest chłodna izba, wygodne fotele, butelki, cygara, materiały piśmiennicze, kopie przepisów portowych i ciepło powitania topiące całą sól zebraną w sercu marynarza po trzymiesięcznej wędrówce po morzu. Zawarta w ten sposób znajomość trwa tak długo, dopóki okręt pozostaje w porcie, gdyż agent pamięta o złożeniu codziennej wizyty. Dla kapitana jest wierny jak przyjaciel, uważny jak syn, odznacza się cierpliwością Hioba, oddaniem kobiety i wesołością dobrego kompana. Później za to wszystko posyła się rachunek. Jest to piękne, humanitarne zajęcie. Dlatego też dobrych agentów nie liczy się na tuziny. Gdy taki jegomość nie tylko posiada zdolność abstrakcyjnego myślenia, ale jest jeszcze oswojony z morzem, to dla swego pracodawcy przedstawia niemałą wartość i zasługuje na to, by mu dogadzano. Jim otrzymywał zawsze doskonałą pensję i dogadzano mu tak, że można by w ten sposób kupić wierność samego czarta. Pomimo to z czarną niewdzięcznością rzucał on nagle służbę i zmykał. Przyczyny, jakie podawał, wydawały się pracodawcom dziwaczne. „Przeklęty głupiec” mówili za jego plecami, krytykując w ten sposób jego nadzwyczajną drażliwość.";
            
            p.hardWords = [new HardWord('Confounded ', 'Przeklęty'), new HardWord('clerk ', 'agent')];
            
            return p;
        }
        if(number === 2)
        {
        let p = new Page();
        p.orginalText = "7He was an inch, perhaps two, under six feet, powerfully built, and he\
            advanced straight at you with a slight stoop of the shoulders, head\
            forward, and a fixed from-under stare which made you think of a charging\
            bull. His voice was deep, loud, and his manner displayed a kind of\
            dogged self-assertion which had nothing aggressive in it. It seemed\
            a necessity, and it was directed apparently as much at himself as at\
            anybody else. He was spotlessly neat, apparelled in immaculate white\
            from shoes to hat, and in the various Eastern ports where he got his\
            living as ship-chandler’s water-clerk he was very popular.";
           p.translatedText = "  Dla białych ludzi prowadzących interesy w porcie i dla kapitanów okrętów był on po prostu Jimem. Miał, rozumie się, również nazwisko, ale bardzo pragnął, by go nie wymieniano. Jego incognito, podziurawione jak rzeszoto, kryło nie osobnika, lecz pewne zdarzenie. Gdy wiadomość o nim rozniosła się w porcie, gdzie w tym czasie przebywał — rzucał to miejsce i udawał się gdzie indziej — najczęściej dalej na wschód. Trzymał się morskich portów, gdyż był wygnanym z morza marynarzem, a miał zdolność do tego rodzaju abstrakcyjnego myślenia, które przydatne jest tylko w pracy agenta okrętowego. Znany był w Bombaju, Kalkucie, Rangunie, Penang, Batawii — i w tych wszystkich miejscowościach Jim był agentem okrętowym. Później, gdy jego wysubtelnione odczucia odciągnęły go na dobre od portów morskich i białych ludzi, skrył dane mu od natury, a niewygodne własności duchowe w dziewiczych lasach i tam mieszkańcy dżungli, Malajczycy, dodali słówko do jego jednozgłoskowego incognita. Nazwali go Tuan Jim, co się równa mianu Lord Jim.\
           Pochodził z probostwa. Wielu kapitanów handlowych okrętów pochodzi z tego przybytku pobożności i spokoju. Ojciec Jima posiadał pewną dozę wiadomości o rzeczach niezbadanych, które potrzebne są ludziom mieszkającym w skromnych domkach, a nie naruszają spokoju umysłowego ludzi, którym nieomylna Opatrzność zamieszkiwać każe w pałacach. Mały kościółek na wzgórzu miał szarą barwę skały widzianej poprzez zasłonę z zielonych liści. Stał tam już od wieków, a otaczające go drzewa pamiętały zapewne chwilę, gdy kładziono kamień węgielny. Poniżej czerwony dach probostwa tworzył ciepłą plamę na tle gazonów i grządek kwiatowych. Warzywny ogródek znajdował się w głębi, żwirowany dziedziniec na froncie, a szklany dach oranżerii wznosił się nad ceglanym murem. Od kilku już pokoleń dom ten należał do rodziny, ale Jim był jednym z pięciu synów, więc gdy po początkowych studiach nad literaturą objawiło się jego powołanie do kariery marynarza, został wysłany natychmiast „na okręt, gdzie kształcono przyszłych oficerów floty handlowej”.\
           Nauczył się tam trochę trygonometrii i nabył zręczności we wdrapywaniu się na wysokie maszty. Ogólnie był lubiany. Był trzeci w sztuce pływania i wiosłował zawsze w pierwszej łodzi. Mając mocną głowę i doskonałe zdrowie, czuł się dobrze na dużych wysokościach. Stanowisko jego było na samym szczycie masztu i często spoglądał stamtąd z pogardą człowieka przeznaczonego do błyszczenia wśród niebezpieczeństw na spokojne dachy domów, między którymi wiła się ciemna wstęga rzeki, na kominy faktorii wznoszące się prostopadle na tle szarego nieba, wysmukłe jak ołówki i wyrzucające dymy jak wulkany. Mógł patrzeć na odpływające wielkie okręty, na szerokie promy w nieustannym ruchu, na malutkie łódeczki, uwijające się pod jego stopami, na mglistą wspaniałość oddalonego morza, pieszcząc nadzieję przebywania w świecie pełnym przygód i niebezpieczeństw.";         

        return p;
        }
        if(number === 3)
        {
        let p = new Page();
        p.orginalText = "9He was an inch, perhaps two, under six feet, powerfully built, and he\
            advanced straight at you with a slight stoop of the shoulders, head\
            forward, and a fixed from-under stare which made you think of a charging\
            bull. His voice was deep, loud, and his manner displayed a kind of\
            dogged self-assertion which had nothing aggressive in it. It seemed\
            a necessity, and it was directed apparently as much at himself as at\
            anybody else. He was spotlessly neat, apparelled in immaculate white\
            from shoes to hat, and in the various Eastern ports where he got his\
            living as ship-chandler’s water-clerk he was very popular."
           p.translatedText = "Na dolnym pokładzie, wśród gwaru dwóchset głosów zapadał w marzenia i z góry przeżywał historie zaczerpnięte z opisów podróży morskich. Zdawało mu się, że ratuje ludzi z tonących okrętów, odcinając maszty przy huku nawałnicy, że trzymając się liny walczy z bałwanami; albo znów jako samotny rozbitek, nagi, bosy, wdrapuje się po skałach, szukając ślimaków, by się ratować od śmierci głodowej. Spotykał się z dzikusami na podzwrotnikowych wybrzeżach, uspakajał bunty i w małej łódeczce rzuconej na łaskę oceanu, podtrzymywał na duchu zrozpaczonych towarzyszy. Zawsze był wzorem człowieka oddanego swym obowiązkom, zawsze niewzruszony — jak bohater w książce.\
           — Coś się stało na górze. Lećmy!\
           Zerwał się. Chłopcy ciągnęli drabiny. Na górze słychać było bieganinę i krzyki, a gdy wylazł przez otwór — stanął jak skamieniały.\
           Był zmierzch zimowego dnia. Od południa wiatr wzmógł się, zatrzymując ruch na rzece, teraz wył w strasznym huraganie, a wybuchy jego sprawiały wrażenie wystrzałów armatnich. Deszcz lał całymi strugami, które to wisiały w powietrzu, to wiatrem pchnięte — rozsuwały się; w takiej chwili Jim dojrzał małe statki przy brzegu ciskane falami, olbrzymie gmachy niewyraźnie rysujące się na wybrzeżu, szerokie łodzie promowe szarpiące się na kotwicach, pomosty podrzucane w górę i zalewane pianą wodną. Nowy tuman zakrył to wszystko. Powietrze przepełnione było lecącą wodą. Był jakiś śmiały cel w tym wichrze, jakaś wściekła stanowczość w jego wrzeniu, w tym brutalnym rozhukaniu nieba i ziemi, które zdawało się zwracać przeciw niemu i zaparło mu dech z przerażenia. Stał nieporuszony. Zdawało mu się, że jest porwany w jakiś wir.\
           Popchnięto go. „Śpieszcie się, do łodzi!” ktoś krzyknął. Mali marynarze przebiegli obok niego. Jeden z kutrów pływających zwykle wzdłuż wybrzeży, szukając schronienia, wpadł na statek stojący na kotwicy, a któryś z okrętowych instruktorów dostrzegł wypadek. Gromada chłopaków wgramoliła się na belki poprzeczne i skupiła się u otworów zewnętrznych. „Zderzyły się statki. Akurat przed nami. Pan Simons widział to!” Nowe pchnięcia, Jim zatoczył się do środkowego masztu i schwycił się za sznur. Stary „okręt-szkoła” przymocowany do swych pali, zadrgał całym ciałem, łagodnie chyląc swój przód w stronę wiatru, zdawał się nucić niskim basem przebrzmiałą piosenkę młodości.\
           „Spuszczać łódź!” Ujrzał lekko opuszczającą się łódź i rzucił się za nią. Usłyszał plusk. „Dalej! Naprzód!” Pochylił się jeszcze bardziej. Woda naokoło gotowała się, rozpryskując jasne smugi. Przy zapadającej ciemności widać było łódkę targaną niemiłosiernie wichrem. Przeciągły krzyk doszedł niewyraźnie uszu Jima. „Równo, szczeniaki, jeżeli chcecie kogoś wyratować! Równo!” Nagle łódź, pchnięta zręcznymi wiosłami, podniosła wysoko swój dziób i przeskoczyła huczący bałwan, zwyciężając zaklęcie rzucone na nią przez wicher i wodę.\
           Jim uczuł, że ktoś go mocno schwycił za ramię. „Za późno, smyku!” Kapitan okrętu położył swą ciężką rękę na ramieniu chłopca, który, zdawało się, chce się rzucić do wody. Jim spojrzał w górę z wyrazem bolesnego zawodu w oczach. Kapitan uśmiechnął się przyjaźnie. „Będziesz miał więcej szczęścia innym razem. To cię nauczy zwinności!”\
           Radosne okrzyki powitały powracającą łódź. Tańczyła na falach do połowy napełniona wodą, wioząc dwóch uratowanych ludzi. Cała groza wzburzonych żywiołów zdawała się teraz Jimowi godna pogardy, zwiększając żal, że te marne pogróżki zdołały rozbudzić w nim taki strach. Teraz wiedział, co o tym myśleć. Przekonany był, że nic a nic nie boi się huraganu. Mógłby stawić czoło większym niebezpieczeństwom. Potrafiłby tego lepiej dokonać niż inni. Nie pozostała w nim ani odrobina strachu. Jednak tego wieczoru trzymał się na uboczu, gdyż chłopiec, który pośpieszył na pomoc zagrożonemu statkowi, był bohaterem dolnego pokładu. Chłopiec ten, o twarzy dziewczyny i dużych szarych oczach, zarzucany był pytaniami przez cisnących się do niego towarzyszy.\
           — Gdy ujrzałem — opowiadał — wynurzającą się z wody jego głowę, cisnąłem do wody hak ratunkowy. Utkwił w jego majtkach, a ja o mało nie wyleciałem z łódki i byłbym wypadł, gdyby stary Simons nie porzucił rudla i nie schwycił mnie za nogi. To porządny chłop ten stary Simons. Ani trochę nie mam żalu do niego, że gdera na nas tak często. Przeklinał mnie cały czas, trzymając mnie za nogę, ale to był jego sposób ostrzegania, bym nie puścił z ręki liny. Stary Simons prędko się unosi, to prawda. Nie, nie ten jasnowłosy, to tamten z brodą. Gdyśmy go wciągnęli do łodzi, jęczał: „Oj, moja noga! Moja noga!” i przewracał oczami. Pomyślcie sobie, taki wielki chłop, a mdlał jak dziewczyna. Czy który z was mdlałby od ukąszenia takiego haka? Bo ja to nie. Taki kawałek wlazł mu w mięso! — Pokazywał hak, który w tym celu przyniósł ze sobą na dół, i wywołał wielkie wrażenie. — To śmieszne, doprawdy! Że tam dużo krwi stracił, to się rozumie.\
           Jim pomyślał, że to nieładnie tak przechwalać się swymi czynami. Huragan wywołał w tym chłopcu równie fałszywy heroizm, jak w nim strach. Gniewał się na ten brutalny spisek nieba i ziemi, który go zaskoczył niespodzianie i ogłuszył gotowość na wszystkie niebezpieczeństwa. Gdyby nie to, byłby nawet rad, że nie przystąpił do czynu, skoro tak prędko dało się to załatwić. Poszerzył swoje wiadomości bardziej niż ci, którzy tej pracy dokonali. Gdy wszyscy będą się wahać, on, czuł to doskonale, będzie wiedział, jak działać wobec grozy wzburzonego oceanu i wichru. Wiedział, co o tym myśleć. Nie czuł w sobie najmniejszego wzruszenia na wspomnienie nawałnicy i ostateczny skutek tego wypadku był taki, że trzymając się z dala od hałaśliwej gromady chłopców, drżał nową żądzą przygód, wierząc w swą niezachwianą, wszechstronną odwagę.";
        return p;
        }
        return new Page(0);
    }
    getHardWords()
    {
        return [new HardWord('Confounded ', 'Przeklęty'), new HardWord('clerk ', 'agent')];
    }
}