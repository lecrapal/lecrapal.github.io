gen_data['character'] = [
  'Je suis <i> {name} {surname}</i>, anciennement {background}. J\'ai un physique {physique}, la peau {skin}, {hair}, et un visage {face}. Je parle {speech} et porte des vêtements {clothing}. Je suis {vice} mais aussi {virtue}, et suis généralement considéré(e) comme {reputation}. J\'ai eu la malchance d\'avoir été {misfortune}.'
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
  '1-13': 'Aucun',
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

gen_data['wgroup1'] = ['Dague', 'Gourdin', 'Bâton']
gen_data['wgroup2'] = ['Épée', 'Masse', 'Hache']
gen_data['wgroup3'] = ['Arc long (encombrant)', 'Arbalète (encombrant)', 'Fronde']
gen_data['wgroup4'] = ['Hallebarde (encombrant)', 'Marteau de guerre (encombrant)', 'Hache de guerre (encombrant)']

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
  'Bellows'
  ,  'Bucket (stacks)'
  ,  'Caltrops'
  ,  'Chalk'
  ,  'Chisel'
  ,  'Cook Pots'
  ,  'Crowbar'
  ,  'Drill (Manual)'
  ,  'FishingRod'
  ,  'Glue (stacks)'
  ,  'Grease'
  ,  'Hammer'
  ,  'Hourglass'
  ,  'Metal File (stacks)'
  ,  'Nails (stacks)'
  ,  'Net (stacks)'
  ,  'Saw'
  ,  'Sealant'
  ,  'Shovel'
  ,  'Tongs'
]

gen_data['trinket'] = [
  'Bottle'
,  'Card Deck (stacks)'
,  'Dice Set (stacks)'
,  'Face Paint'
,  'Fake Jewels (stacks)'
,  'Horn'
,  'Incense (stacks)'
,  'Instrument'
,  'Lens'
,  'Marbles (stacks)'
,  'Mirror'
,  'Perfume'
,  'Quill &  Ink'
,  'Salt Pack (stacks)'
,  'Small Bell'
,  'Soap (stacks)'
,  'Sponge'
,  'Tar Pot'
,  'Twine (stacks)'
,  'Whistle'
]

gen_data['gear'] = [
  'Air Bladder'
,  'Antitoxin'
,  'Cart (+4 slots, bulky)'
,  'Chain (10ft)'
,  'Dowsing Rod'
,  'Fire Oil'
,  'Grappling Hook '
,  'Large Sack'
,  'Large Trap'
,  'Lockpicks'
,  'Manacles'
,  'Pick'
,  'Pole (10ft)'
,  'Pulley'
,  'Repellent'
,  'Rope (25ft)'
,  'Spirit Ward'
,  'Spyglass'
,  'Tinderbox'
,  'Wolfsbane '
]

gen_data['spellbook'] = [
  'Adhere'
,  'Anchor'
,  'Animate Object'
,  'Anthropomorphize'
,  'Arcane Eye'
,  'Astral Prison'
,  'Attract'
,  'Auditory Illusion'
,  'Babble'
,  'Bait Flower'
,  'Beast Form'
,  'Befuddle'
,  'Body Swap'
,  'Charm'
,  'Command'
,  'Comprehend'
,  'Cone of Foam'
,  'Control Plants'
,  'Control Weather'
,  'Cure Wounds'
,  'Deafen'
,  'Detect Magic'
,  'Disassemble'
,  'Disguise'
,  'Displace'
,  'Earthquake'
,  'Elasticity'
,  'Elemental Wall'
,  'Filch'
,  'Flare'
,  'Fog Cloud'
,  'Frenzy'
,  'Gate'
,  'Gravity Shift'
,  'Greed'
,  'Haste'
,  'Hatred'
,  'Hear Whispers'
,  'Hover'
,  'Hypnotize'
,  'Icy Touch'
,  'Identify Owner'
,  'Illuminate'
,  'Invisible Tether'
,  'Knock'
,  'Leap'
,  'Liquid Air'
,  'Magic Dampener'
,  'Manse'
,  'Marble Craze'
,  'Masquerade'
,  'Miniaturize'
,  'Mirror Image'
,  'Mirrorwalk'
,  'Multiarm'
,  'Night Sphere'
,  'Objectify'
,  'Ooze Form'
,  'Pacify'
,  'Phobia'
,  'Pit'
,  'Primal Surge'
,  'Push/Pull'
,  'Raise Dead'
,  'Raise Spirit'
,  'Read Mind'
,  'Repel'
,  'Scry'
,  'Sculpt Elements'
,  'Sense'
,  'Missile Shield'
,  'Shroud'
,  'Shuffle'
,  'Sleep'
,  'Slick'
,  'Smoke Form'
,  'Sniff'
,  'Snuff'
,  'Sort'
,  'Spectacle'
,  'Spellsaw'
,  'Spider Climb'
,  'Summon Cube'
,  'Swarm'
,  'Telekinesis'
,  'Telepathy'
,  'Teleport'
,  'Target Lure'
,  'Thicket'
,  'Summon Idol'
,  'Time Control'
,  'True Sight'
,  'Upwell'
,  'Vision'
,  'Visual Illusion'
,  'Ward'
,  'Web'
,  'Widget'
,  'Wizard Mark'
,  'X-Ray Vision'
]
