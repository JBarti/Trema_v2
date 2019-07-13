# Trema

GitHub repozitorij za official web stranicu III. gimnazije, Split.

# Preuzimanje

Skinite kod sa github repozitorija:

backend: `https://github.com/JBarti/Trema_v2.git -b backend`

frontend: `https://github.com/JBarti/Trema_v2.git -b frontend`

sve: `https://github.com/JBarti/Trema_v2.git`

# Development:

## Frontend:

Nakon preuzimanja projekta udite u folder: _Trema_v2/frontend/trema_ `cd Trema_v2/frontend/trema`

Instalacija dependencija: `npm install`

Pokretanje aplikacije: `npm start`

### Rad na frontendu:

Ako zelite radit promjene na frontendu aplikacije 
prvo napravite branch pod imenom _<vase_ime>/sto_radite_.

Npr: _jb/add-news-page_  `git branch jb/add-news-page`

Checkoutajte se u novi branch `git checkout jb/add-news-page`

Na githubu otvorite pull request vaseg novog brancha na frotnend. [Tutorial](https://help.github.com/en/articles/creating-a-pull-request)

Svaku vecu promjenu comitajte uz prikladnu poruku. Commit poruke pisu se u imperativu. Npr: _Added News page_
`git commit -m "Added News page"`

Kada zavrsite sa vasim promjenama puhajte ih na svoj branch: `git push origin jb/add-news-page`

Netko od developera reviewat ce vas kod i odlucit hoce li on biti mergean u frontend branch,
tj. hoce li vase promjene biti prihvacene.

Pushani kod koji ne postuje pravila pisanja biti ce odbijen.

#### Pravila pisanja

Kako bi kod bio unificiran i svaka komponenta napisana na isti nacin svima razumljiv
u projektu koristimo modul eslint koji provjerava kvalitetu i postivanje standarda vaseg koda.

Eslint je konfiguriran prema [_Airbnb_ standardu](https://github.com/airbnb/javascript).

Eslint mozete direktno ukljuciti u vas VSCode IDE. On ce vas nakon toga upucivati na sve greske koje 
radite prilikom pisanja.

Pazite da u VSCodeu bude otvoren _Trema_v2/frontend/trema_ folder 
kako bi vas IDE mogao pronaci .eslintrc.json file.

U vscodeu ESlint ukljucujete instalacijom [ESlint ekstenzije](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint).