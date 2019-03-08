var pokemoni = [
    {
        "name": "Charmander",
        "type": "Fire",
        "description": "Charmander je ohnivý pokémon z první série, znamý jako Lizard Pokémon.",
        "photo": "charmander.png",
        "height": "0,6 m",
        "weight": "8,5 kg",
        "link": "https://pokemondb.net/pokedex/charmander"
    },
    {
        "name": "Squirtle",
        "type": "Water",
        "description": "Squirtle je vodní pokémon z první série, znamý jako Tiny Turtle Pokemon.",
        "photo": "squirtle.png",
        "height": "0,5 m",
        "weight": "9,0 kg",
        "link": "https://pokemondb.net/pokedex/squirtle"
    },
    {
        "name": "Weedle",
        "type": "Bug/Poison",
        "description": "Charmander je hmyzí/jedovatý pokémon z první série, známý jako Hairy Bug Pokémon.",
        "photo": "weedle.png",
        "height": "0,3 m",
        "weight": "3,2 kg",
        "link": "https://pokemondb.net/pokedex/weedle"
    },
    {
        "name": "Meowth",
        "type": "Normal",
        "description": "Meowth je normální pokémov z první série, známý jako Scratch Cat Pokémon.",
        "photo": "meowth.png",
        "height": "0,4 m",
        "weight": "4,2 kg",
        "link": "https://pokemondb.net/pokedex/meowth"
    },
    {
        "name": "Onix",
        "type": "Rock/Ground",
        "description": "Onix je kamenný/zemní pokémon z první série, známý jako Rock Snake Pokémon.",
        "photo": "onix.png",
        "height": "8,8 m",
        "weight": "210,0 kg",
        "link": "https://pokemondb.net/pokedex/onix"
    },
    {
        "name": "Gyarados",
        "type": "Water/Flying",
        "description": "Gyarados je vodní pokémon z první série, známý jako Atrocious Pokémon.",
        "photo": "gyarados.png",
        "height": "6,5 m",
        "weight": "235.0 kg",
        "link": "https://pokemondb.net/pokedex/gyarados"
    },    
];

var sidla = [
    {
        "place": "Pražský hrad",
        "description": "Pražský hrad je naší nejvýznamnější národní kulturní a historickoupamátkou, je symbolem více než tisíciletého vývoje českého státu. Je to monumentální komplex palácových, církevních, fortifikačních, úředních a obytných staveb, které jsou vzácnými památkami na všechna slohová období. Rozkládá se na ploše 45 ha. Byl sídlem českých knížat, králů a císařů a od vzniku republiky v r. 1918 i sídlem prezidentů.",
        "photo": "prazsky-hrad.jpg"
    },
    {
        "place": "Zámek Lány u Prahy",
        "description": "Zámek Lány je barokní stavba, jež se nachází na jižním okraji obce Lány v okrese Kladno ve Středočeském kraji západně od Prahy. Zámek je situován na severním okraji rozsáhlých křivoklátských lesů (CHKO Křivoklátsko), jeho součástí je rozsáhlý anglický park, rybník Bahňák, velký palmový skleník a přilehlá Lánská obora. K zámku také patřil hospodářský dvůr. Od roku 1921 je zámek majetkem státu a stal se oficiálním letním sídlem prezidentů Československa, dnes prezidentů České republiky.",
        "photo": "zamek-lany.jpg"
    },
    {
        "place": "Zámek Topolčianky",
        "description": "V letech 1923–39 a 1945–51 sloužil jako letní sídlo československých prezidentů, 1939–45 jako letní sídlo prezidenta Slovenské republiky. Nejvíce je spjat s pobyty prezidenta Masaryka ve 20. letech a na počátku 30. let. Za slovenské letní sídlo prezidenta ČSR byl vybrán se zřetelem na svůj dobrý stav, fungující železniční spojení s Prahou, příjemné klima a anglický park. Na jaře 1923 prošel rychlými úpravami tak, aby mohl prezidenta i s doprovodem poprvé uvítat už 29. 7. 1923. Pro zajištění rychlého spojení s Prahou byla zde v době zdejšího prezidentova pobytu zřízena letecká pošta, posilněny telefonní a telegrafní ústředny a na louce Lazy vybudováno polní letiště.",
        "photo": "zamek-topolcianky.jpg"
    },
];


var perlicky = [
    {
        "title": "Masaryk na koni",
        "text": "V roce 1926 a 1932 přijel na koni Hektorovi na VIII. a IX. Všesokolský slet na Strahově a 15. výročí republiky 28. října 1933 oslavil poslední projížďkou na novém koni Prahou v čele přehlídkového jízdního vojska od Muzea na Václavském náměstí až po Rudolfinum na dnešním náměstí Jana Palacha, kde sídlilo Národní shromáždění a byla zbudována slavnostní tribuna."
    },
    {
        "title": "Krasavec Novotný",
        "text": "Prezident Novotný se stal, podobně jako jeho předchůdci, terčem četných anekdot, které se vysmívaly jeho nevzdělanosti a ješitnosti. Mezi lidmi měl přezdívku \"schöne Toni\". Když se jako host zúčastnil zasedání Valného shromáždění OSN, byl údajně zvolen nejkrásnějším státníkem, který na jednání byl."
    },
    {
        "title": "Spisovatel Zápotocký",
        "text": "Vedle politické činnosti se věnoval i literatuře a publicistice. Ve svých dílech se věnoval především rozvoji revolučního dělnického hnutí, často se inspiroval životem svých rodičů – otce líčí jako cílevědomého člověka, který stál na počátku české sociální demokracie, matku jako milující, oddanou ženu, jež se dokázala vyrovnat s nelehkými životními podmínkami. Díla jsou situována na Kladensko, do okolí Zákolan (kde strávil autor své dětství), popř. do Prahy. Dvě z jeho děl (Vstanou noví bojovníci a Rudá záře nad Kladnem) byla v 50. letech za jeho vlády zfilmována."
    },
    {
        "title": "Mumifikovaný Gottwald",
        "text": "Tělo Klementa Gottwalda bylo uloženo v mauzoleu původně předpokládaném pro prezidenta Tomáše Garrigua Masaryka v uzpůsobeném Národním památníku na pražském vrchu Vítkově. Tělo bylo v letech 1953 až 1962 vystavováno návštěvníkům podobně jako Leninovo. Navzdory široce rozšířenému mýtu o špatně provedené balzamaci, bylo tělo v okamžiku odstranění z památníku v perfektním stavu, což plyne z odtajněné zprávy o doplňující balzamaci provedené sovětskými odborníky v roce 1961.[13] Ke zpopelnění těla v roce 1962 došlo čistě na základě politického rozhodnutí souvisejícího s nákladností provozu mauzolea a kritikou kultu osobnosti v ČSSR. Již rozšířené zvěsti o špatném stavu těla se však hodily jako zdůvodnění před stalinisticky smýšlející frakcí komunistů."
    },

]
