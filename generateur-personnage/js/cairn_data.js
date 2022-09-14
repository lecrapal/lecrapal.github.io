gen_data['character'] = [
  'Je suis <i> {name} {surname}</i>, anciennement {background}. J\'ai un physique {physique}, la peau {skin}, {hair}, et un visage {face}. Je parle {speech} et porte des vêtements {clothing}. Je suis {vice} mais {virtue}, et suis généralement considéré(e) comme {reputation}. J\'ai eu la malchance d\'avoir été {misfortune}.'
]

gen_data['name'] = [
'Agune'
, 'Beatrice'
, 'Breagan'
, 'Bronwyn'
, 'Cannora'
, 'Drelil'
, 'Elgile'
, 'Esme'
, 'Griya'
, 'Henaine'
, 'Lirann'
, 'Lirathil'
, 'Lisabeth'
, 'Moralil'
, 'Morgwen'
, 'Sybil'
, 'Theune'
, 'Wenain'
, 'Ygwal'
, 'Yslen'
, 'Arwel'
, 'Bevan'
, 'Boroth'
, 'Borrid'
, 'Breagle'
, 'Breglor'
, 'Canhoreal'
, 'Emrys'
, 'Ethex'
, 'Gringle'
, 'Grinwit'
, 'Gruwid'
, 'Gruwth'
, 'Gwestin'
, 'Mannog'
, 'Melnax'
, 'Orthax'
, 'Triunein'
, 'Wenlan'
, 'Yirmeor'
]

gen_data['surname'] = [
'Abernathy'
, 'Addercap'
, 'Burl'
, 'Candlewick'
, 'Cormick'
, 'Crumwaller'
, 'Dunswallow'
, 'Getri'
, 'Glass'
, 'Harkness'
, 'Harper'
, 'Loomer'
, 'Malksmilk'
, 'Smythe'
, 'Sunderman'
, 'Swinney'
, 'Thatcher'
, 'Tolmen'
, 'Weaver'
, 'Wolder'
]

gen_data['background'] = [
  'alchimiste'
,  'forgeron(ne)'
,  'boucher(ère)'
,  'cambrioleur(euse)'
,  'charpentier(e)'
,  'clerc'
,  'joueur(euse)'
,  'fossoyeur(euse)'
,  'herboriste'
,  'chasseur(euse)'
,  'magicien(ne)'
,  'mercenaire'
,  'marchand(e)'
,  'mineur(euse)'
, 'hors-la-loi'
,  'artiste'
,  'pickpocket'
,  'contrebandier(e)'
,  'serviteur'
,  'rôdeur(euse)'
]

gen_data['physique'] = [
  'athéltique'
,  'musclé'
,  'flasque'
,  'efflanqué'
,  'robuste'
,  'maigrichon'
,  'petit'
,  'statuesque'
,  'corpulent'
,  'gigantesque'
]

gen_data['skin'] = [
  'avec une tâche de naissance'
,  'foncée'
,  'sèche'
,  'grêlée (boutons)'
,  'rosée'
,  'lisse'
,  'douce'
,  'tannée'
,  'tatouée'
,  'vieillie'
]

gen_data['hair'] = [
  'chauve'
,  'les cheveux tressés'
,  'les cheveux bouclés'
,  'les cheveux sales'
,  'les cheveux crépus'
,  'les cheveux longs'
,  'les cheveux luxuriants'
,  'les cheveux gras'
,  'les cheveux ondulé'
,  'les cheveux épars'
]

gen_data['face'] = [
  'osseux'
,  'brisé'
,  'buriné'
,  'allongé'
,  'pâle'
,  'parfait'
,  'en tête de rat'
,  'pointu'
,  'carré'
,  'creusé'
]

gen_data['speech'] = [
  'avec franchise'
,  'avec le verbe haut'
,  'de manière énigmatique'
,  'd\'un ton monotone'
,  'de façon formel'
,  'avec un ton graveleux'
,  'en détaillant'
,  'de façon grinçante'
,  'en bégayant'
,  'à voix basse'
]

gen_data['clothing'] = [
  'anciens'
,  'ensanglantés'
,  'élégants'
,  'sales'
,  'exotiques'
,  'effilochés'
,  'bouffants'
,  'cérémonieux'
,  'malodorants'
,  'souillés'
]

gen_data['virtue'] = [
  'ambitieux'
,  'prudent'
,  'courageux'
,  'discipliné'
,  'grégaire'
,  'honorable'
,  'humble'
,  'miséricordieux'
,  'serein'
,  'tolérant'
]

gen_data['vice'] = [
  'agressif'
,  'aigri'
,  'fourbe'
,  'malhonnête'
,  'cupide'
,  'paresseux'
,  'nerveux'
,  'grossier'
,  'vaniteux'
,  'rancunier'
]

gen_data['reputation'] = [
  'ambitieux'
,  'rustre'
,  'dangereux'
,  'un saltimbanque'
,  'honnête'
,  'flâneur'
,  'farfelu'
,  'repoussant'
,  'a respecté'
,  'sage'
]

gen_data['misfortune'] = [
  'abandonné'
,  'toxicomane'
,  'victime de chantage'
,  'condamné'
,  'maudit'
,  'escroqué'
,  'déchu'
,  'discrédité'
,  'déshérité'
,  'exilé'
]

gen_data['equipment'] = [
  'Armure : {armor}<br>Casque/Bouclier: {helmet}<br>Armes : {weapons}<br>Items: {tool,gear,trinket}<br>Objets supplémentaires : {bonus}'
]
gen_data['armor'] = {
  '1-3': 'Aucune',
  '4-14': 'Brigandine (1 Armure, encombrant)',
  '15-19': 'Cotte de mailles (2 Armre, encombrant)',
  '20': 'Harnois (3 Armure, encombrant)'
}

gen_data['helmet'] = {
  '1-13': '',
  '14-16': ', un casque (+1 Armure)',
  '17-19': ', un bouclier (+1 Armure)',
  '20': ', un casque (+1 Armure) et un bouclier (+1 Armure)'
}

gen_data['weapons'] = {
'1-10':'{wgroup1}',
'11-14':'{wgroup2}',
'15-19':'{wgroup3}',
'20':'{wgroup4}'
}

gen_data['wgroup1'] = ['Dague (d6)', 'Gourdin (d6)', 'Bâton (d6)']
gen_data['wgroup2'] = ['Épée (d8)', 'Masse (d8)', 'Hache (d8)']
gen_data['wgroup3'] = ['Arc long (d8) (encombrant)', 'Arbalète (d8)(encombrant)', 'Fronde (d6)']
gen_data['wgroup4'] = ['Hallebarde (d10) (encombrant)', 'Marteau de guerre (d10) (encombrant)', 'Hache de guerre (d10) (encombrant)']

gen_data['armor_weapons'] = {
  '1-10':'{armor}',
  '11-20':'{weapons}'
}

gen_data['tool_trinket'] = {
  '1-10':'{tool}',
  '11-20':'{trinket}'
}

gen_data['bonus'] = {
  '1-6': '{tool_trinket}',
  '7-13': '{gear}',
  '14-17': '{armor_weapons}',
  '18-20': 'Livre de sort contenant : \'{spellbook}\''
}

gen_data['tool'] = [
  'Soufflet'
,'Seau (empilable)'
,'Chaussetrapes'
,'Craie'
,'Burin'
,'Marmite'
,'Pied-de-biche'
,'Perceuse (manuelle)'
,'Canne à pêche'
,'Colle (empilable)'
,'Graisse'
,'Marteau'
,'Sablier'
,'Lime à métaux (empilable)'
,'Clous (empilable)'
,'Filet (empilable)'
,'Filet'
,'Mastic'
,'Pelle'
,'Pinces'
]

gen_data['trinket'] = [
  'Bouteille'
,'Jeu de cartes (empilable)'
,'Jeu de dés (empilable)'
,'Maquillage'
,'Faux bijoux (empilable)'
,'Corne'
,'Encens (empilable)'
,'Instrument'
,'Lentille'
,'Billes (empilable)'
,'Miroir'
,'Parfum'
,'Plume & encre'
,'Paquet de sel (empilable)'
,'Petite cloche'
,'Savon (empilable)'
,'Éponge'
,'Pot de goudron'
,'Ficelle (empilable)'
,'Sifflet'
]

gen_data['gear'] = [
  'Vessie à air'
,'Antidote'
,'Charriot (+4 emplacements, encombrant)'
,'Chaine (3m)'
,'Bâton de sourcier'
,'Huile'
,'Grappin'
,'Grand sac'
,'Piège (grand)'
,'Outils de voleur'
,'Menottes'
,'Pioche'
,'Perche (3m)'
,'Poulie'
,'Répulsif'
,'Corde (10m)'
,'Amulette'
,'Longue-vue'
,'Boite à amadou'
,'Aconit tue-loup'
]

gen_data['spellbook'] = [
'Adhérer'
,'Ancrage'
,'Objet animé'
,'Anthropomorphiser'
,'Oeil arcanique'
,'Prison astrale'
,'Attirer'
,'Illusion sonore'
,'Babiller'
,'Fleur attirante'
,'Forme bestiale'
,'Brouiller'
,'Échange de corps'
,'Charme'
,'Ordre'
,'Comprendre'
,'Cône de mousse'
,'Contrôle des végétaux'
,'Contrôle de la météo'
,'Guérison des blessures'
,'Assourdir'
,'Détecter la magie'
,'Démonter'
,'Déguisement'
,'Déplacer'
,'Tremblement de terre'
,'Elasticité'
,'Mur élémentaire'
,'Chiper'
,'Signal lumineux'
,'Brouillard'
,'Frénésie'
,'Portail'
,'Changement de gravité'
,'Cupidité'
,'Hâte'
,'Haine'
,'Entendre les murmures'
,'Survol'
,'Hypnotiser'
,'Toucher glacial'
,'Identification du propriétaire'
,'Illuminer'
,'Attache invisible'
,'Toc-toc'
,'Bond'
,'Air liquide'
,'Amortisseur magique'
,'Maison'
,'Passion des billes'
,'Mascarade'
,'Miniaturiser'
,'Image miroir'
,'Passe-miroir'
,'Multibras'
,'Sphère nocturne'
,'Objectifier'
,'Forme suintante'
,'Pacifier'
,'Phobie'
,'Fosse'
,'Poussée primitive'
,'Pousser/Tirer'
,'Lever les morts'
,'Lever l\'esprit'
,'Lire l\'esprit'
,'Repousser'
,'Scruter'
,'Sculpter les éléments'
,'Sentir'
,'Bouclier antimissile'
,'Linceul'
,'Mélanger'
,'Sommeil'
,'Glissant'
,'Forme de fumée'
,'Renifler'
,'Souffler'
,'Trier'
,'Spectacle'
,'Magie-scie'
,'Escalade de l\'araignée'
,'Invocation de Cube'
,'Essaim'
,'Télékinésie'
,'Télépathie'
,'Téléportation'
,'Cible leurre'
,'Bosquet'
,'Invocation d\'Idole'
,'Contrôle du temps'
,'Vision réelle'
,'Marée haute'
,'Vision'
,'Illusion visuelle'
,'Garde'
,'Toile'
,'Gadget'
,'Marque du magicien'
,'Vision à rayons X'
]
