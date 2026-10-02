// Plant-forward nutrition facts for social graphics.
// Amounts are taken from the "Selected Food Sources" tables of the linked NIH Office of Dietary Supplements
// Health Professional fact sheets; %DV values use the FDA Daily Values cited on those pages.
// Loaded before food-facts.js, which reads the global `foodFacts`.
const foodFacts = [
  // ---------- PRODUCE ----------
  {
    id: 'red-pepper-vitamin-c', category: 'produce',
    source: 'https://ods.od.nih.gov/factsheets/VitaminC-HealthProfessional/',
    en: { label: 'RED PEPPER', title: '½ cup raw sweet red pepper provides 95 mg of vitamin C.', detail: 'That is 106% of the Daily Value; vitamin C helps the body make collagen, a protein needed for wound healing.' },
    de: { label: 'ROTE PAPRIKA', title: '½ Tasse rohe rote Paprika liefert 95 mg Vitamin C.', detail: 'Das sind 106 % des US-Tageswerts; Vitamin C hilft beim Aufbau von Kollagen, das für die Wundheilung nötig ist.' }
  },
  {
    id: 'orange-vitamin-c', category: 'produce',
    source: 'https://ods.od.nih.gov/factsheets/VitaminC-HealthProfessional/',
    en: { label: 'ORANGE', title: 'One medium orange provides 70 mg of vitamin C.', detail: 'Vitamin C acts as an antioxidant that helps protect cells from damage caused by free radicals.' },
    de: { label: 'ORANGE', title: 'Eine mittelgroße Orange liefert 70 mg Vitamin C.', detail: 'Vitamin C wirkt als Antioxidans und hilft, Zellen vor Schäden durch freie Radikale zu schützen.' }
  },
  {
    id: 'kiwifruit-vitamin-c', category: 'produce',
    source: 'https://ods.od.nih.gov/factsheets/VitaminC-HealthProfessional/',
    en: { label: 'KIWIFRUIT', title: 'One medium kiwifruit provides 64 mg of vitamin C.', detail: 'Kiwifruit is usually eaten raw, which avoids the vitamin C losses that cooking can cause.' },
    de: { label: 'KIWI', title: 'Eine mittelgroße Kiwi liefert 64 mg Vitamin C.', detail: 'Kiwis werden meist roh gegessen – so entfallen Vitamin-C-Verluste, die beim Kochen entstehen können.' }
  },
  {
    id: 'green-pepper-vitamin-c', category: 'produce',
    source: 'https://ods.od.nih.gov/factsheets/VitaminC-HealthProfessional/',
    en: { label: 'GREEN PEPPER', title: '½ cup raw sweet green pepper provides 60 mg of vitamin C.', detail: 'That covers 67% of the Daily Value for vitamin C, which helps the immune system work properly.' },
    de: { label: 'GRÜNE PAPRIKA', title: '½ Tasse rohe grüne Paprika liefert 60 mg Vitamin C.', detail: 'Das deckt 67 % des US-Tageswerts für Vitamin C, das dem Immunsystem hilft, richtig zu arbeiten.' }
  },
  {
    id: 'broccoli-vitamin-c', category: 'produce',
    source: 'https://ods.od.nih.gov/factsheets/VitaminC-HealthProfessional/',
    en: { label: 'BROCCOLI', title: '½ cup cooked broccoli provides 51 mg of vitamin C.', detail: 'Steaming or microwaving can reduce the amount of vitamin C lost during cooking.' },
    de: { label: 'BROKKOLI', title: '½ Tasse gegarter Brokkoli liefert 51 mg Vitamin C.', detail: 'Dämpfen oder Garen in der Mikrowelle kann die Vitamin-C-Verluste beim Kochen verringern.' }
  },
  {
    id: 'strawberries-vitamin-c', category: 'produce',
    source: 'https://ods.od.nih.gov/factsheets/VitaminC-HealthProfessional/',
    en: { label: 'STRAWBERRIES', title: '½ cup sliced fresh strawberries provides 49 mg of vitamin C.', detail: 'Vitamin C improves the absorption of iron from plant-based foods eaten at the same meal.' },
    de: { label: 'ERDBEEREN', title: '½ Tasse frische Erdbeerscheiben liefert 49 mg Vitamin C.', detail: 'Vitamin C verbessert die Aufnahme von Eisen aus pflanzlichen Lebensmitteln derselben Mahlzeit.' }
  },
  {
    id: 'brussels-sprouts-vitamin-c', category: 'produce',
    source: 'https://ods.od.nih.gov/factsheets/VitaminC-HealthProfessional/',
    en: { label: 'BRUSSELS SPROUTS', title: '½ cup cooked Brussels sprouts provides 48 mg of vitamin C.', detail: 'That amount equals 53% of the 90 mg Daily Value for vitamin C.' },
    de: { label: 'ROSENKOHL', title: '½ Tasse gegarter Rosenkohl liefert 48 mg Vitamin C.', detail: 'Das entspricht 53 % des US-Tageswerts von 90 mg Vitamin C.' }
  },
  {
    id: 'grapefruit-vitamin-c', category: 'produce',
    source: 'https://ods.od.nih.gov/factsheets/VitaminC-HealthProfessional/',
    en: { label: 'GRAPEFRUIT', title: 'Half a medium grapefruit provides 39 mg of vitamin C.', detail: 'NIH names citrus fruits such as grapefruit among the foods that supply vitamin C.' },
    de: { label: 'GRAPEFRUIT', title: 'Eine halbe mittelgroße Grapefruit liefert 39 mg Vitamin C.', detail: 'Das NIH nennt Zitrusfrüchte wie Grapefruit unter den Lebensmitteln, die Vitamin C liefern.' }
  },
  {
    id: 'cantaloupe-vitamin-c', category: 'produce',
    source: 'https://ods.od.nih.gov/factsheets/VitaminC-HealthProfessional/',
    en: { label: 'CANTALOUPE', title: '½ cup cantaloupe provides 29 mg of vitamin C.', detail: 'That is 32% of the 90 mg Daily Value for vitamin C.' },
    de: { label: 'CANTALOUPE-MELONE', title: '½ Tasse Cantaloupe-Melone liefert 29 mg Vitamin C.', detail: 'Das sind 32 % des US-Tageswerts von 90 mg Vitamin C.' }
  },
  {
    id: 'cauliflower-vitamin-c', category: 'produce',
    source: 'https://ods.od.nih.gov/factsheets/VitaminC-HealthProfessional/',
    en: { label: 'CAULIFLOWER', title: '½ cup raw cauliflower provides 26 mg of vitamin C.', detail: 'Prolonged storage and cooking can reduce the vitamin C content of vegetables.' },
    de: { label: 'BLUMENKOHL', title: '½ Tasse roher Blumenkohl liefert 26 mg Vitamin C.', detail: 'Lange Lagerung und Kochen können den Vitamin-C-Gehalt von Gemüse verringern.' }
  },
  {
    id: 'sweet-potato-vitamin-a', category: 'produce',
    source: 'https://ods.od.nih.gov/factsheets/VitaminA-HealthProfessional/',
    en: { label: 'SWEET POTATO', title: 'A sweet potato baked in its skin has 1,403 mcg RAE vitamin A.', detail: 'Plants supply provitamin A carotenoids, such as beta-carotene, that the body converts to vitamin A.' },
    de: { label: 'SÜSSKARTOFFEL', title: 'Eine in der Schale gebackene Süßkartoffel hat 1.403 µg RAE Vitamin A.', detail: 'Pflanzen liefern Provitamin-A-Carotinoide wie Beta-Carotin, die der Körper in Vitamin A umwandelt.' }
  },
  {
    id: 'carrots-vitamin-a', category: 'produce',
    source: 'https://ods.od.nih.gov/factsheets/VitaminA-HealthProfessional/',
    en: { label: 'CARROTS', title: '½ cup raw carrots provides 459 mcg RAE of vitamin A.', detail: 'Vitamin A is important for normal vision and for the immune system.' },
    de: { label: 'KAROTTEN', title: '½ Tasse rohe Karotten liefert 459 µg RAE Vitamin A.', detail: 'Vitamin A ist wichtig für normales Sehen und für das Immunsystem.' }
  },
  {
    id: 'spinach-vitamin-a', category: 'produce',
    source: 'https://ods.od.nih.gov/factsheets/VitaminA-HealthProfessional/',
    en: { label: 'SPINACH', title: '½ cup boiled frozen spinach provides 573 mcg RAE of vitamin A.', detail: 'Green leafy vegetables are among the plant foods that supply provitamin A carotenoids.' },
    de: { label: 'SPINAT', title: '½ Tasse gekochter TK-Spinat liefert 573 µg RAE Vitamin A.', detail: 'Grünes Blattgemüse gehört zu den pflanzlichen Lebensmitteln mit Provitamin-A-Carotinoiden.' }
  },
  {
    id: 'mango-vitamin-a', category: 'produce',
    source: 'https://ods.od.nih.gov/factsheets/VitaminA-HealthProfessional/',
    en: { label: 'MANGO', title: 'One whole raw mango provides 112 mcg RAE of vitamin A.', detail: 'Carotenoids are pigments that give yellow, orange, and red fruits and vegetables their color.' },
    de: { label: 'MANGO', title: 'Eine ganze rohe Mango liefert 112 µg RAE Vitamin A.', detail: 'Carotinoide sind Pigmente, die gelbem, orangem und rotem Obst und Gemüse die Farbe geben.' }
  },
  {
    id: 'dried-apricots-vitamin-a', category: 'produce',
    source: 'https://ods.od.nih.gov/factsheets/VitaminA-HealthProfessional/',
    en: { label: 'DRIED APRICOTS', title: 'Five dried apricots provide 63 mcg RAE of vitamin A.', detail: 'Vitamin A is needed for normal growth and development.' },
    de: { label: 'GETROCKNETE APRIKOSEN', title: 'Fünf getrocknete Aprikosen liefern 63 µg RAE Vitamin A.', detail: 'Vitamin A wird für normales Wachstum und eine normale Entwicklung benötigt.' }
  },
  {
    id: 'dried-apricots-potassium', category: 'produce',
    source: 'https://ods.od.nih.gov/factsheets/Potassium-HealthProfessional/',
    en: { label: 'DRIED APRICOTS', title: '½ cup dried apricots provides 755 mg of potassium.', detail: 'Potassium is needed for normal kidney and heart function.' },
    de: { label: 'GETROCKNETE APRIKOSEN', title: '½ Tasse getrocknete Aprikosen liefert 755 mg Kalium.', detail: 'Kalium wird für eine normale Nieren- und Herzfunktion benötigt.' }
  },
  {
    id: 'acorn-squash-potassium', category: 'produce',
    source: 'https://ods.od.nih.gov/factsheets/Potassium-HealthProfessional/',
    en: { label: 'ACORN SQUASH', title: '1 cup mashed acorn squash provides 644 mg of potassium.', detail: 'Potassium supports muscle contraction and nerve transmission.' },
    de: { label: 'EICHELKÜRBIS', title: '1 Tasse pürierter Eichelkürbis liefert 644 mg Kalium.', detail: 'Kalium unterstützt Muskelkontraktion und Nervenübertragung.' }
  },
  {
    id: 'prunes-potassium', category: 'produce',
    source: 'https://ods.od.nih.gov/factsheets/Potassium-HealthProfessional/',
    en: { label: 'PRUNES', title: '½ cup dried prunes provides 635 mg of potassium.', detail: 'Many people in the United States get less potassium than recommended.' },
    de: { label: 'TROCKENPFLAUMEN', title: '½ Tasse Trockenpflaumen liefert 635 mg Kalium.', detail: 'Viele Menschen in den USA nehmen weniger Kalium auf als empfohlen.' }
  },
  {
    id: 'raisins-potassium', category: 'produce',
    source: 'https://ods.od.nih.gov/factsheets/Potassium-HealthProfessional/',
    en: { label: 'RAISINS', title: '½ cup raisins provides 618 mg of potassium.', detail: 'That equals 13% of the 4,700 mg Daily Value for potassium.' },
    de: { label: 'ROSINEN', title: '½ Tasse Rosinen liefert 618 mg Kalium.', detail: 'Das entspricht 13 % des US-Tageswerts von 4.700 mg Kalium.' }
  },
  {
    id: 'potato-potassium', category: 'produce',
    source: 'https://ods.od.nih.gov/factsheets/Potassium-HealthProfessional/',
    en: { label: 'POTATO', title: 'One medium baked potato (flesh only) has 610 mg of potassium.', detail: 'The body needs potassium for almost everything it does.' },
    de: { label: 'KARTOFFEL', title: 'Eine mittelgroße Ofenkartoffel (ohne Schale) hat 610 mg Kalium.', detail: 'Der Körper braucht Kalium für fast alles, was er tut.' }
  },
  {
    id: 'banana-potassium', category: 'produce',
    source: 'https://ods.od.nih.gov/factsheets/Potassium-HealthProfessional/',
    en: { label: 'BANANA', title: 'One medium banana provides 422 mg of potassium.', detail: 'Bananas appear alongside dried apricots, prunes, and raisins in NIH’s list of potassium fruits.' },
    de: { label: 'BANANE', title: 'Eine mittelgroße Banane liefert 422 mg Kalium.', detail: 'Bananen stehen neben Aprikosen, Pflaumen und Rosinen auf der NIH-Liste kaliumhaltiger Früchte.' }
  },
  {
    id: 'spinach-folate', category: 'produce',
    source: 'https://ods.od.nih.gov/factsheets/Folate-HealthProfessional/',
    en: { label: 'SPINACH', title: '½ cup boiled spinach provides 131 mcg DFE of folate.', detail: 'Folate is a B vitamin the body needs to make DNA and other genetic material.' },
    de: { label: 'SPINAT', title: '½ Tasse gekochter Spinat liefert 131 µg DFE Folat.', detail: 'Folat ist ein B-Vitamin, das der Körper zur Bildung von DNA und anderem Erbmaterial braucht.' }
  },
  {
    id: 'asparagus-folate', category: 'produce',
    source: 'https://ods.od.nih.gov/factsheets/Folate-HealthProfessional/',
    en: { label: 'ASPARAGUS', title: 'Four boiled asparagus spears provide 89 mcg DFE of folate.', detail: 'The body needs folate for cells to divide.' },
    de: { label: 'SPARGEL', title: 'Vier gekochte Spargelstangen liefern 89 µg DFE Folat.', detail: 'Der Körper braucht Folat, damit sich Zellen teilen können.' }
  },
  {
    id: 'romaine-folate', category: 'produce',
    source: 'https://ods.od.nih.gov/factsheets/Folate-HealthProfessional/',
    en: { label: 'ROMAINE', title: '1 cup shredded romaine lettuce provides 64 mcg DFE of folate.', detail: 'That is 16% of the 400 mcg DFE Daily Value for folate.' },
    de: { label: 'RÖMERSALAT', title: '1 Tasse geschnittener Römersalat liefert 64 µg DFE Folat.', detail: 'Das sind 16 % des US-Tageswerts von 400 µg DFE Folat.' }
  },
  {
    id: 'avocado-folate', category: 'produce',
    source: 'https://ods.od.nih.gov/factsheets/Folate-HealthProfessional/',
    en: { label: 'AVOCADO', title: '½ cup sliced raw avocado provides 59 mcg DFE of folate.', detail: 'Folate occurs naturally in foods; folic acid is the form added to fortified foods.' },
    de: { label: 'AVOCADO', title: '½ Tasse Avocadoscheiben liefert 59 µg DFE Folat.', detail: 'Folat kommt natürlich in Lebensmitteln vor; Folsäure ist die Form, die angereicherten Produkten zugesetzt wird.' }
  },
  {
    id: 'mustard-greens-folate', category: 'produce',
    source: 'https://ods.od.nih.gov/factsheets/Folate-HealthProfessional/',
    en: { label: 'MUSTARD GREENS', title: '½ cup boiled frozen mustard greens has 52 mcg DFE of folate.', detail: 'Dark green leafy vegetables are among the vegetables NIH highlights for natural folate.' },
    de: { label: 'SENFKOHL', title: '½ Tasse gekochter TK-Senfkohl liefert 52 µg DFE Folat.', detail: 'Dunkelgrünes Blattgemüse gehört laut NIH zu den Gemüsen mit natürlichem Folat.' }
  },
  {
    id: 'green-peas-folate', category: 'produce',
    source: 'https://ods.od.nih.gov/factsheets/Folate-HealthProfessional/',
    en: { label: 'GREEN PEAS', title: '½ cup boiled frozen green peas provides 47 mcg DFE of folate.', detail: 'DFE units account for the different absorption of food folate and added folic acid.' },
    de: { label: 'ERBSEN', title: '½ Tasse gekochte TK-Erbsen liefert 47 µg DFE Folat.', detail: 'DFE-Einheiten berücksichtigen, dass Nahrungsfolat und zugesetzte Folsäure unterschiedlich aufgenommen werden.' }
  },
  {
    id: 'papaya-folate', category: 'produce',
    source: 'https://ods.od.nih.gov/factsheets/Folate-HealthProfessional/',
    en: { label: 'PAPAYA', title: '½ cup cubed raw papaya provides 27 mcg DFE of folate.', detail: 'Fruits contribute folate too, alongside vegetables, beans, and nuts.' },
    de: { label: 'PAPAYA', title: '½ Tasse rohe Papayawürfel liefert 27 µg DFE Folat.', detail: 'Auch Obst trägt zur Folatzufuhr bei – neben Gemüse, Bohnen und Nüssen.' }
  },
  {
    id: 'collards-vitamin-k', category: 'produce',
    source: 'https://ods.od.nih.gov/factsheets/VitaminK-HealthProfessional/',
    en: { label: 'COLLARDS', title: '½ cup boiled frozen collards provides 530 mcg of vitamin K.', detail: 'Vitamin K is important for blood clotting and healthy bones.' },
    de: { label: 'BLATTKOHL', title: '½ Tasse gekochter TK-Blattkohl liefert 530 µg Vitamin K.', detail: 'Vitamin K ist wichtig für die Blutgerinnung und gesunde Knochen.' }
  },
  {
    id: 'turnip-greens-vitamin-k', category: 'produce',
    source: 'https://ods.od.nih.gov/factsheets/VitaminK-HealthProfessional/',
    en: { label: 'TURNIP GREENS', title: '½ cup boiled frozen turnip greens has 426 mcg of vitamin K.', detail: 'People taking warfarin are advised to keep their vitamin K intake consistent from day to day.' },
    de: { label: 'RÜBSTIEL', title: '½ Tasse gekochter TK-Rübstiel liefert 426 µg Vitamin K.', detail: 'Wer Warfarin einnimmt, sollte täglich etwa gleich viel Vitamin K aufnehmen.' }
  },
  {
    id: 'kale-vitamin-k', category: 'produce',
    source: 'https://ods.od.nih.gov/factsheets/VitaminK-HealthProfessional/',
    en: { label: 'KALE', title: '1 cup raw kale provides 113 mcg of vitamin K.', detail: 'That equals 94% of the 120 mcg Daily Value for vitamin K.' },
    de: { label: 'GRÜNKOHL', title: '1 Tasse roher Grünkohl liefert 113 µg Vitamin K.', detail: 'Das entspricht 94 % des US-Tageswerts von 120 µg Vitamin K.' }
  },
  {
    id: 'blueberries-vitamin-k', category: 'produce',
    source: 'https://ods.od.nih.gov/factsheets/VitaminK-HealthProfessional/',
    en: { label: 'BLUEBERRIES', title: '½ cup raw blueberries provides 14 mcg of vitamin K.', detail: 'NIH lists blueberries and figs among the fruits that supply vitamin K.' },
    de: { label: 'HEIDELBEEREN', title: '½ Tasse rohe Heidelbeeren liefert 14 µg Vitamin K.', detail: 'Das NIH nennt Heidelbeeren und Feigen unter den Früchten, die Vitamin K liefern.' }
  },
  {
    id: 'kale-calcium', category: 'produce',
    source: 'https://ods.od.nih.gov/factsheets/Calcium-HealthProfessional/',
    en: { label: 'KALE', title: '1 cup cooked fresh kale provides 94 mg of calcium.', detail: 'Calcium is needed for muscles to move and for nerves to carry messages.' },
    de: { label: 'GRÜNKOHL', title: '1 Tasse gegarter frischer Grünkohl liefert 94 mg Calcium.', detail: 'Calcium wird für Muskelbewegungen und die Signalübertragung der Nerven benötigt.' }
  },
  {
    id: 'bok-choy-calcium', category: 'produce',
    source: 'https://ods.od.nih.gov/factsheets/Calcium-HealthProfessional/',
    en: { label: 'BOK CHOY', title: '1 cup shredded raw bok choy provides 74 mg of calcium.', detail: 'Almost all calcium in the body is stored in bones and teeth, giving them structure.' },
    de: { label: 'PAK CHOI', title: '1 Tasse roher, geschnittener Pak Choi liefert 74 mg Calcium.', detail: 'Fast das gesamte Calcium im Körper steckt in Knochen und Zähnen und gibt ihnen Struktur.' }
  },
  {
    id: 'pineapple-manganese', category: 'produce',
    source: 'https://ods.od.nih.gov/factsheets/Manganese-HealthProfessional/',
    en: { label: 'PINEAPPLE', title: '½ cup raw pineapple chunks provides 0.8 mg of manganese.', detail: 'That is 35% of the 2.3 mg Daily Value; manganese is a cofactor for many enzymes.' },
    de: { label: 'ANANAS', title: '½ Tasse rohe Ananasstücke liefert 0,8 mg Mangan.', detail: 'Das sind 35 % des US-Tageswerts von 2,3 mg; Mangan ist Cofaktor vieler Enzyme.' }
  },
  {
    id: 'avocado-copper', category: 'produce',
    source: 'https://ods.od.nih.gov/factsheets/Copper-HealthProfessional/',
    en: { label: 'AVOCADO', title: '½ cup raw avocado provides 219 mcg of copper.', detail: 'Copper helps the body make energy, connective tissues, and blood vessels.' },
    de: { label: 'AVOCADO', title: '½ Tasse rohe Avocado liefert 219 µg Kupfer.', detail: 'Kupfer hilft dem Körper, Energie, Bindegewebe und Blutgefäße zu bilden.' }
  },
  {
    id: 'banana-vitamin-b6', category: 'produce',
    source: 'https://ods.od.nih.gov/factsheets/VitaminB6-HealthProfessional/',
    en: { label: 'BANANA', title: 'One medium banana provides 0.4 mg of vitamin B6.', detail: 'Vitamin B6 takes part in more than 100 enzyme reactions, mostly in protein metabolism.' },
    de: { label: 'BANANE', title: 'Eine mittelgroße Banane liefert 0,4 mg Vitamin B6.', detail: 'Vitamin B6 ist an über 100 Enzymreaktionen beteiligt, vor allem im Eiweißstoffwechsel.' }
  },
  {
    id: 'spinach-iron', category: 'produce',
    source: 'https://ods.od.nih.gov/factsheets/Iron-HealthProfessional/',
    en: { label: 'SPINACH', title: '½ cup boiled spinach provides 3 mg of iron.', detail: 'This is nonheme iron; eating it with vitamin C foods improves how much the body absorbs.' },
    de: { label: 'SPINAT', title: '½ Tasse gekochter Spinat liefert 3 mg Eisen.', detail: 'Es ist Nicht-Häm-Eisen; zusammen mit Vitamin-C-Lebensmitteln nimmt der Körper mehr davon auf.' }
  },

  // ---------- LEGUMES ----------
  {
    id: 'lentils-potassium', category: 'legumes',
    source: 'https://ods.od.nih.gov/factsheets/Potassium-HealthProfessional/',
    en: { label: 'LENTILS', title: '1 cup cooked lentils provides 731 mg of potassium.', detail: 'That is 16% of the Daily Value for a mineral many U.S. diets fall short on.' },
    de: { label: 'LINSEN', title: '1 Tasse gekochte Linsen liefert 731 mg Kalium.', detail: 'Das sind 16 % des US-Tageswerts für einen Mineralstoff, von dem viele in den USA zu wenig aufnehmen.' }
  },
  {
    id: 'lentils-iron', category: 'legumes',
    source: 'https://ods.od.nih.gov/factsheets/Iron-HealthProfessional/',
    en: { label: 'LENTILS', title: '½ cup boiled lentils provides 3 mg of iron.', detail: 'Iron helps make hemoglobin, the protein in red blood cells that carries oxygen.' },
    de: { label: 'LINSEN', title: '½ Tasse gekochte Linsen liefert 3 mg Eisen.', detail: 'Eisen wird für Hämoglobin gebraucht, das Protein in roten Blutkörperchen, das Sauerstoff transportiert.' }
  },
  {
    id: 'lentils-zinc', category: 'legumes',
    source: 'https://ods.od.nih.gov/factsheets/Zinc-HealthProfessional/',
    en: { label: 'LENTILS', title: '½ cup boiled lentils provides 1.3 mg of zinc.', detail: 'Zinc supports immune function, protein and DNA synthesis, and wound healing.' },
    de: { label: 'LINSEN', title: '½ Tasse gekochte Linsen liefert 1,3 mg Zink.', detail: 'Zink unterstützt das Immunsystem, den Aufbau von Proteinen und DNA sowie die Wundheilung.' }
  },
  {
    id: 'white-beans-iron', category: 'legumes',
    source: 'https://ods.od.nih.gov/factsheets/Iron-HealthProfessional/',
    en: { label: 'WHITE BEANS', title: '1 cup canned white beans provides 8 mg of iron.', detail: 'That is 44% of the 18 mg Daily Value for iron.' },
    de: { label: 'WEISSE BOHNEN', title: '1 Tasse weiße Bohnen (Dose) liefert 8 mg Eisen.', detail: 'Das sind 44 % des US-Tageswerts von 18 mg Eisen.' }
  },
  {
    id: 'kidney-beans-potassium', category: 'legumes',
    source: 'https://ods.od.nih.gov/factsheets/Potassium-HealthProfessional/',
    en: { label: 'KIDNEY BEANS', title: '1 cup canned kidney beans provides 607 mg of potassium.', detail: 'Potassium is a mineral the body uses for heart, kidney, muscle, and nerve function.' },
    de: { label: 'KIDNEYBOHNEN', title: '1 Tasse Kidneybohnen (Dose) liefert 607 mg Kalium.', detail: 'Kalium braucht der Körper für die Funktion von Herz, Nieren, Muskeln und Nerven.' }
  },
  {
    id: 'kidney-beans-folate', category: 'legumes',
    source: 'https://ods.od.nih.gov/factsheets/Folate-HealthProfessional/',
    en: { label: 'KIDNEY BEANS', title: '½ cup canned kidney beans provides 46 mcg DFE of folate.', detail: 'NIH lists beans and peas among the foods in which folate is naturally present.' },
    de: { label: 'KIDNEYBOHNEN', title: '½ Tasse Kidneybohnen (Dose) liefert 46 µg DFE Folat.', detail: 'Das NIH zählt Bohnen und Erbsen zu den Lebensmitteln mit natürlich enthaltenem Folat.' }
  },
  {
    id: 'black-beans-magnesium', category: 'legumes',
    source: 'https://ods.od.nih.gov/factsheets/Magnesium-HealthProfessional/',
    en: { label: 'BLACK BEANS', title: '½ cup cooked black beans provides 60 mg of magnesium.', detail: 'Magnesium is needed to make protein, bone, and DNA.' },
    de: { label: 'SCHWARZE BOHNEN', title: '½ Tasse gekochte schwarze Bohnen liefert 60 mg Magnesium.', detail: 'Magnesium wird für den Aufbau von Proteinen, Knochen und DNA benötigt.' }
  },
  {
    id: 'black-beans-thiamin', category: 'legumes',
    source: 'https://ods.od.nih.gov/factsheets/Thiamin-HealthProfessional/',
    en: { label: 'BLACK BEANS', title: '½ cup boiled black beans provides 0.4 mg of thiamin.', detail: 'That is 33% of the Daily Value for thiamin (vitamin B1), which helps turn food into energy.' },
    de: { label: 'SCHWARZE BOHNEN', title: '½ Tasse gekochte schwarze Bohnen liefert 0,4 mg Thiamin.', detail: 'Das sind 33 % des US-Tageswerts für Thiamin (Vitamin B1), das hilft, Nahrung in Energie umzuwandeln.' }
  },
  {
    id: 'black-eyed-peas-folate', category: 'legumes',
    source: 'https://ods.od.nih.gov/factsheets/Folate-HealthProfessional/',
    en: { label: 'BLACK-EYED PEAS', title: '½ cup boiled black-eyed peas provides 105 mcg DFE of folate.', detail: 'That covers 26% of the Daily Value for folate.' },
    de: { label: 'AUGENBOHNEN', title: '½ Tasse gekochte Augenbohnen liefert 105 µg DFE Folat.', detail: 'Das deckt 26 % des US-Tageswerts für Folat.' }
  },
  {
    id: 'chickpeas-vitamin-b6', category: 'legumes',
    source: 'https://ods.od.nih.gov/factsheets/VitaminB6-HealthProfessional/',
    en: { label: 'CHICKPEAS', title: '1 cup canned chickpeas provides 1.1 mg of vitamin B6.', detail: 'That is 65% of the 1.7 mg Daily Value for vitamin B6.' },
    de: { label: 'KICHERERBSEN', title: '1 Tasse Kichererbsen (Dose) liefert 1,1 mg Vitamin B6.', detail: 'Das sind 65 % des US-Tageswerts von 1,7 mg Vitamin B6.' }
  },
  {
    id: 'chickpeas-manganese', category: 'legumes',
    source: 'https://ods.od.nih.gov/factsheets/Manganese-HealthProfessional/',
    en: { label: 'CHICKPEAS', title: '½ cup cooked chickpeas provides 0.9 mg of manganese.', detail: 'Manganese helps the body metabolize amino acids, glucose, and carbohydrates.' },
    de: { label: 'KICHERERBSEN', title: '½ Tasse gekochte Kichererbsen liefert 0,9 mg Mangan.', detail: 'Mangan hilft dem Körper beim Stoffwechsel von Aminosäuren, Glukose und Kohlenhydraten.' }
  },
  {
    id: 'chickpeas-copper', category: 'legumes',
    source: 'https://ods.od.nih.gov/factsheets/Copper-HealthProfessional/',
    en: { label: 'CHICKPEAS', title: '½ cup chickpeas provides 289 mcg of copper.', detail: 'That is 32% of the 900 mcg Daily Value for copper.' },
    de: { label: 'KICHERERBSEN', title: '½ Tasse Kichererbsen liefert 289 µg Kupfer.', detail: 'Das sind 32 % des US-Tageswerts von 900 µg Kupfer.' }
  },
  {
    id: 'soybeans-potassium', category: 'legumes',
    source: 'https://ods.od.nih.gov/factsheets/Potassium-HealthProfessional/',
    en: { label: 'SOYBEANS', title: '½ cup boiled mature soybeans provides 443 mg of potassium.', detail: 'NIH names soybeans with lentils and kidney beans as legume sources of potassium.' },
    de: { label: 'SOJABOHNEN', title: '½ Tasse gekochte reife Sojabohnen liefert 443 mg Kalium.', detail: 'Das NIH nennt Sojabohnen neben Linsen und Kidneybohnen als kaliumhaltige Hülsenfrüchte.' }
  },
  {
    id: 'soybeans-calcium', category: 'legumes',
    source: 'https://ods.od.nih.gov/factsheets/Calcium-HealthProfessional/',
    en: { label: 'SOYBEANS', title: '½ cup cooked soybeans provides 131 mg of calcium.', detail: 'Calcium also helps blood vessels move blood and helps release hormones.' },
    de: { label: 'SOJABOHNEN', title: '½ Tasse gekochte Sojabohnen liefert 131 mg Calcium.', detail: 'Calcium hilft auch den Blutgefäßen beim Bluttransport und bei der Freisetzung von Hormonen.' }
  },
  {
    id: 'tofu-calcium', category: 'legumes',
    source: 'https://ods.od.nih.gov/factsheets/Calcium-HealthProfessional/',
    en: { label: 'TOFU', title: '½ cup firm tofu made with calcium sulfate has 253 mg calcium.', detail: 'Calcium content depends on how tofu is made, so check the label for calcium sulfate.' },
    de: { label: 'TOFU', title: '½ Tasse fester Tofu mit Calciumsulfat liefert 253 mg Calcium.', detail: 'Der Calciumgehalt hängt von der Herstellung ab – achten Sie auf Calciumsulfat auf dem Etikett.' }
  },
  {
    id: 'tofu-iron', category: 'legumes',
    source: 'https://ods.od.nih.gov/factsheets/Iron-HealthProfessional/',
    en: { label: 'TOFU', title: '½ cup firm tofu provides 3 mg of iron.', detail: 'Iron is also used to make myoglobin, a protein that provides oxygen to muscles.' },
    de: { label: 'TOFU', title: '½ Tasse fester Tofu liefert 3 mg Eisen.', detail: 'Eisen wird auch für Myoglobin gebraucht, ein Protein, das die Muskeln mit Sauerstoff versorgt.' }
  },
  {
    id: 'tofu-copper', category: 'legumes',
    source: 'https://ods.od.nih.gov/factsheets/Copper-HealthProfessional/',
    en: { label: 'TOFU', title: '½ cup raw firm tofu provides 476 mcg of copper.', detail: 'Copper helps maintain the nervous system and the immune system.' },
    de: { label: 'TOFU', title: '½ Tasse roher fester Tofu liefert 476 µg Kupfer.', detail: 'Kupfer trägt zum Erhalt von Nervensystem und Immunsystem bei.' }
  },
  {
    id: 'edamame-magnesium', category: 'legumes',
    source: 'https://ods.od.nih.gov/factsheets/Magnesium-HealthProfessional/',
    en: { label: 'EDAMAME', title: '½ cup shelled cooked edamame provides 50 mg of magnesium.', detail: 'Magnesium helps regulate blood sugar levels and blood pressure.' },
    de: { label: 'EDAMAME', title: '½ Tasse gegarte, geschälte Edamame liefert 50 mg Magnesium.', detail: 'Magnesium hilft, Blutzuckerspiegel und Blutdruck zu regulieren.' }
  },
  {
    id: 'edamame-ala', category: 'legumes',
    source: 'https://ods.od.nih.gov/factsheets/Omega3FattyAcids-HealthProfessional/',
    en: { label: 'EDAMAME', title: '½ cup prepared edamame provides 0.28 g of omega-3 ALA.', detail: 'ALA is the plant omega-3; the body converts only very small amounts of it into EPA and DHA.' },
    de: { label: 'EDAMAME', title: '½ Tasse zubereitete Edamame liefert 0,28 g Omega-3-ALA.', detail: 'ALA ist das pflanzliche Omega-3; der Körper wandelt nur sehr wenig davon in EPA und DHA um.' }
  },
  {
    id: 'natto-vitamin-k', category: 'legumes',
    source: 'https://ods.od.nih.gov/factsheets/VitaminK-HealthProfessional/',
    en: { label: 'NATTO', title: '3 oz natto provides 850 mcg of vitamin K as MK-7.', detail: 'Natto is fermented soybeans; its vitamin K is mainly menaquinone-7, a form of vitamin K2.' },
    de: { label: 'NATTO', title: '85 g Natto liefern 850 µg Vitamin K als MK-7.', detail: 'Natto sind fermentierte Sojabohnen; ihr Vitamin K ist vor allem Menachinon-7, eine Form von Vitamin K2.' }
  },
  {
    id: 'peanuts-folate', category: 'legumes',
    source: 'https://ods.od.nih.gov/factsheets/Folate-HealthProfessional/',
    en: { label: 'PEANUTS', title: '1 oz dry-roasted peanuts provides 27 mcg DFE of folate.', detail: 'Peanuts are legumes, and NIH lists them among nut and bean sources of folate.' },
    de: { label: 'ERDNÜSSE', title: '28 g trocken geröstete Erdnüsse liefern 27 µg DFE Folat.', detail: 'Erdnüsse sind Hülsenfrüchte; das NIH führt sie unter den Nuss- und Bohnenquellen für Folat.' }
  },
  {
    id: 'peanuts-vitamin-e', category: 'legumes',
    source: 'https://ods.od.nih.gov/factsheets/VitaminE-HealthProfessional/',
    en: { label: 'PEANUTS', title: '1 oz dry-roasted peanuts provides 2.2 mg of vitamin E.', detail: 'Vitamin E is fat-soluble and acts as an antioxidant in the body.' },
    de: { label: 'ERDNÜSSE', title: '28 g trocken geröstete Erdnüsse liefern 2,2 mg Vitamin E.', detail: 'Vitamin E ist fettlöslich und wirkt im Körper als Antioxidans.' }
  },
  {
    id: 'pinto-beans-calcium', category: 'legumes',
    source: 'https://ods.od.nih.gov/factsheets/Calcium-HealthProfessional/',
    en: { label: 'PINTO BEANS', title: '½ cup canned, drained pinto beans provides 54 mg of calcium.', detail: 'That is 4% of the Daily Value for calcium.' },
    de: { label: 'PINTOBOHNEN', title: '½ Tasse abgetropfte Pintobohnen (Dose) liefert 54 mg Calcium.', detail: 'Das sind 4 % des US-Tageswerts für Calcium.' }
  },
  {
    id: 'baked-beans-selenium', category: 'legumes',
    source: 'https://ods.od.nih.gov/factsheets/Selenium-HealthProfessional/',
    en: { label: 'BAKED BEANS', title: '1 cup canned vegetarian baked beans has 13 mcg of selenium.', detail: 'Selenium is important for reproduction, thyroid hormone metabolism, and DNA synthesis.' },
    de: { label: 'BAKED BEANS', title: '1 Tasse vegetarische Baked Beans (Dose) hat 13 µg Selen.', detail: 'Selen ist wichtig für Fortpflanzung, Schilddrüsenhormon-Stoffwechsel und DNA-Synthese.' }
  },

  // ---------- GRAINS ----------
  {
    id: 'brown-rice-magnesium', category: 'grains',
    source: 'https://ods.od.nih.gov/factsheets/Magnesium-HealthProfessional/',
    en: { label: 'BROWN RICE', title: '½ cup cooked brown rice provides 42 mg of magnesium.', detail: 'The same amount of cooked white rice provides 10 mg, as refining removes magnesium-rich germ and bran.' },
    de: { label: 'NATURREIS', title: '½ Tasse gekochter Naturreis liefert 42 mg Magnesium.', detail: 'Weißer Reis liefert 10 mg, da beim Raffinieren der magnesiumreiche Keim und die Kleie entfernt werden.' }
  },
  {
    id: 'brown-rice-manganese', category: 'grains',
    source: 'https://ods.od.nih.gov/factsheets/Manganese-HealthProfessional/',
    en: { label: 'BROWN RICE', title: '½ cup cooked brown rice provides 1.1 mg of manganese.', detail: 'That is 48% of the Daily Value; manganese plays a role in bone formation.' },
    de: { label: 'NATURREIS', title: '½ Tasse gekochter Naturreis liefert 1,1 mg Mangan.', detail: 'Das sind 48 % des US-Tageswerts; Mangan spielt eine Rolle bei der Knochenbildung.' }
  },
  {
    id: 'brown-rice-selenium', category: 'grains',
    source: 'https://ods.od.nih.gov/factsheets/Selenium-HealthProfessional/',
    en: { label: 'BROWN RICE', title: '1 cup cooked long-grain brown rice has 12 mcg of selenium.', detail: 'Selenium levels in grains vary with the selenium content of the soil where they grow.' },
    de: { label: 'NATURREIS', title: '1 Tasse gekochter Langkorn-Naturreis hat 12 µg Selen.', detail: 'Der Selengehalt von Getreide hängt vom Selengehalt des Bodens ab, auf dem es wächst.' }
  },
  {
    id: 'brown-rice-thiamin', category: 'grains',
    source: 'https://ods.od.nih.gov/factsheets/Thiamin-HealthProfessional/',
    en: { label: 'BROWN RICE', title: '½ cup cooked unenriched brown rice has 0.2 mg of thiamin.', detail: 'Thiamin is naturally present in whole grains and is added to many enriched grain products.' },
    de: { label: 'NATURREIS', title: '½ Tasse gekochter, nicht angereicherter Naturreis hat 0,2 mg Thiamin.', detail: 'Thiamin steckt natürlich in Vollkorn und wird vielen angereicherten Getreideprodukten zugesetzt.' }
  },
  {
    id: 'brown-rice-zinc', category: 'grains',
    source: 'https://ods.od.nih.gov/factsheets/Zinc-HealthProfessional/',
    en: { label: 'BROWN RICE', title: '½ cup cooked long-grain brown rice provides 0.7 mg of zinc.', detail: 'Phytates in whole grains and legumes can reduce how much zinc the body absorbs.' },
    de: { label: 'NATURREIS', title: '½ Tasse gekochter Langkorn-Naturreis liefert 0,7 mg Zink.', detail: 'Phytate in Vollkorn und Hülsenfrüchten können die Zinkaufnahme im Körper verringern.' }
  },
  {
    id: 'whole-wheat-bread-magnesium', category: 'grains',
    source: 'https://ods.od.nih.gov/factsheets/Magnesium-HealthProfessional/',
    en: { label: 'WHOLE WHEAT BREAD', title: 'One slice of whole wheat bread provides 23 mg of magnesium.', detail: 'NIH notes that foods containing dietary fiber generally provide magnesium.' },
    de: { label: 'VOLLKORNBROT', title: 'Eine Scheibe Vollkornbrot liefert 23 mg Magnesium.', detail: 'Laut NIH liefern ballaststoffhaltige Lebensmittel in der Regel auch Magnesium.' }
  },
  {
    id: 'whole-wheat-bread-manganese', category: 'grains',
    source: 'https://ods.od.nih.gov/factsheets/Manganese-HealthProfessional/',
    en: { label: 'WHOLE WHEAT BREAD', title: 'One slice of whole wheat bread provides 0.7 mg of manganese.', detail: 'That is 30% of the Daily Value; NIH lists whole grains among food sources of manganese.' },
    de: { label: 'VOLLKORNBROT', title: 'Eine Scheibe Vollkornbrot liefert 0,7 mg Mangan.', detail: 'Das sind 30 % des US-Tageswerts; das NIH nennt Vollkorn unter den Manganquellen.' }
  },
  {
    id: 'whole-wheat-bread-selenium', category: 'grains',
    source: 'https://ods.od.nih.gov/factsheets/Selenium-HealthProfessional/',
    en: { label: 'WHOLE WHEAT BREAD', title: 'One slice of whole wheat bread provides 8 mcg of selenium.', detail: 'That is 15% of the 55 mcg Daily Value for selenium.' },
    de: { label: 'VOLLKORNBROT', title: 'Eine Scheibe Vollkornbrot liefert 8 µg Selen.', detail: 'Das sind 15 % des US-Tageswerts von 55 µg Selen.' }
  },
  {
    id: 'oatmeal-manganese', category: 'grains',
    source: 'https://ods.od.nih.gov/factsheets/Manganese-HealthProfessional/',
    en: { label: 'OATMEAL', title: '½ cup cooked oatmeal provides 0.7 mg of manganese.', detail: 'Manganese supports enzymes involved in cholesterol and carbohydrate metabolism.' },
    de: { label: 'HAFERBREI', title: '½ Tasse gekochter Haferbrei liefert 0,7 mg Mangan.', detail: 'Mangan unterstützt Enzyme des Cholesterin- und Kohlenhydratstoffwechsels.' }
  },
  {
    id: 'oatmeal-selenium', category: 'grains',
    source: 'https://ods.od.nih.gov/factsheets/Selenium-HealthProfessional/',
    en: { label: 'OATMEAL', title: '1 cup unenriched oatmeal cooked in water has 13 mcg of selenium.', detail: 'Selenium helps protect the body from oxidative damage.' },
    de: { label: 'HAFERBREI', title: '1 Tasse in Wasser gekochter Haferbrei hat 13 µg Selen.', detail: 'Selen hilft, den Körper vor oxidativen Schäden zu schützen.' }
  },
  {
    id: 'oatmeal-magnesium', category: 'grains',
    source: 'https://ods.od.nih.gov/factsheets/Magnesium-HealthProfessional/',
    en: { label: 'OATMEAL', title: 'One packet of instant oatmeal provides 36 mg of magnesium.', detail: 'Whole grains are among the food groups NIH names as good magnesium sources.' },
    de: { label: 'HAFERBREI', title: 'Ein Päckchen Instant-Haferbrei liefert 36 mg Magnesium.', detail: 'Vollkorn zählt laut NIH zu den Lebensmittelgruppen, die gut Magnesium liefern.' }
  },
  {
    id: 'shredded-wheat-magnesium', category: 'grains',
    source: 'https://ods.od.nih.gov/factsheets/Magnesium-HealthProfessional/',
    en: { label: 'SHREDDED WHEAT', title: 'Two large shredded wheat biscuits provide 61 mg of magnesium.', detail: 'That is 15% of the 420 mg Daily Value for magnesium.' },
    de: { label: 'WEIZENKISSEN', title: 'Zwei große Shredded-Wheat-Kissen liefern 61 mg Magnesium.', detail: 'Das sind 15 % des US-Tageswerts von 420 mg Magnesium.' }
  },
  {
    id: 'whole-wheat-spaghetti-iron', category: 'grains',
    source: 'https://ods.od.nih.gov/factsheets/Iron-HealthProfessional/',
    en: { label: 'WHOLE WHEAT SPAGHETTI', title: '1 cup cooked whole wheat spaghetti provides 1 mg of iron.', detail: 'Plant foods supply nonheme iron; vegetarians need almost twice the usual recommendation.' },
    de: { label: 'VOLLKORNSPAGHETTI', title: '1 Tasse gekochte Vollkornspaghetti liefert 1 mg Eisen.', detail: 'Pflanzen liefern Nicht-Häm-Eisen; Vegetarier brauchen fast doppelt so viel wie sonst empfohlen.' }
  },
  {
    id: 'whole-wheat-pasta-copper', category: 'grains',
    source: 'https://ods.od.nih.gov/factsheets/Copper-HealthProfessional/',
    en: { label: 'WHOLE WHEAT PASTA', title: '1 cup cooked whole wheat pasta provides 263 mcg of copper.', detail: 'That is 29% of the Daily Value for copper.' },
    de: { label: 'VOLLKORNNUDELN', title: '1 Tasse gekochte Vollkornnudeln liefert 263 µg Kupfer.', detail: 'Das sind 29 % des US-Tageswerts für Kupfer.' }
  },
  {
    id: 'whole-wheat-macaroni-thiamin', category: 'grains',
    source: 'https://ods.od.nih.gov/factsheets/Thiamin-HealthProfessional/',
    en: { label: 'WHOLE WHEAT MACARONI', title: '1 cup cooked whole wheat macaroni provides 0.2 mg of thiamin.', detail: 'Thiamin plays a role in the growth, development, and function of cells.' },
    de: { label: 'VOLLKORNMAKKARONI', title: '1 Tasse gekochte Vollkornmakkaroni liefert 0,2 mg Thiamin.', detail: 'Thiamin spielt eine Rolle für Wachstum, Entwicklung und Funktion der Zellen.' }
  },
  {
    id: 'millet-copper', category: 'grains',
    source: 'https://ods.od.nih.gov/factsheets/Copper-HealthProfessional/',
    en: { label: 'MILLET', title: '1 cup cooked millet provides 280 mcg of copper.', detail: 'Copper is a cofactor for enzymes involved in energy production and iron metabolism.' },
    de: { label: 'HIRSE', title: '1 Tasse gekochte Hirse liefert 280 µg Kupfer.', detail: 'Kupfer ist Cofaktor von Enzymen für Energiegewinnung und Eisenstoffwechsel.' }
  },
  {
    id: 'bulgur-vitamin-b6', category: 'grains',
    source: 'https://ods.od.nih.gov/factsheets/VitaminB6-HealthProfessional/',
    en: { label: 'BULGUR', title: '1 cup cooked bulgur provides 0.2 mg of vitamin B6.', detail: 'Vitamin B6 plays a role in brain development and immune function.' },
    de: { label: 'BULGUR', title: '1 Tasse gekochter Bulgur liefert 0,2 mg Vitamin B6.', detail: 'Vitamin B6 spielt eine Rolle bei der Gehirnentwicklung und der Immunfunktion.' }
  },
  {
    id: 'corn-tortilla-calcium', category: 'grains',
    source: 'https://ods.od.nih.gov/factsheets/Calcium-HealthProfessional/',
    en: { label: 'CORN TORTILLA', title: 'One 6-inch corn tortilla provides 46 mg of calcium.', detail: 'Grains are eaten often, so their modest calcium contributions add up.' },
    de: { label: 'MAISTORTILLA', title: 'Eine Maistortilla (15 cm) liefert 46 mg Calcium.', detail: 'Getreide wird häufig gegessen, daher summieren sich seine kleinen Calciumbeiträge.' }
  },
  {
    id: 'wheat-germ-folate', category: 'grains',
    source: 'https://ods.od.nih.gov/factsheets/Folate-HealthProfessional/',
    en: { label: 'WHEAT GERM', title: '2 tablespoons of wheat germ provides 40 mcg DFE of folate.', detail: 'That is 10% of the Daily Value for folate.' },
    de: { label: 'WEIZENKEIME', title: '2 Esslöffel Weizenkeime liefern 40 µg DFE Folat.', detail: 'Das sind 10 % des US-Tageswerts für Folat.' }
  },

  // ---------- NUTS & SEEDS ----------
  {
    id: 'pumpkin-seeds-magnesium', category: 'nuts-seeds',
    source: 'https://ods.od.nih.gov/factsheets/Magnesium-HealthProfessional/',
    en: { label: 'PUMPKIN SEEDS', title: '1 oz roasted pumpkin seeds provides 156 mg of magnesium.', detail: 'That is 37% of the 420 mg Daily Value for magnesium.' },
    de: { label: 'KÜRBISKERNE', title: '28 g geröstete Kürbiskerne liefern 156 mg Magnesium.', detail: 'Das sind 37 % des US-Tageswerts von 420 mg Magnesium.' }
  },
  {
    id: 'pumpkin-seeds-zinc', category: 'nuts-seeds',
    source: 'https://ods.od.nih.gov/factsheets/Zinc-HealthProfessional/',
    en: { label: 'PUMPKIN SEEDS', title: '1 oz roasted pumpkin seeds provides 2.2 mg of zinc.', detail: 'Zinc is needed for a proper sense of taste and smell.' },
    de: { label: 'KÜRBISKERNE', title: '28 g geröstete Kürbiskerne liefern 2,2 mg Zink.', detail: 'Zink wird für einen normalen Geschmacks- und Geruchssinn benötigt.' }
  },
  {
    id: 'chia-seeds-magnesium', category: 'nuts-seeds',
    source: 'https://ods.od.nih.gov/factsheets/Magnesium-HealthProfessional/',
    en: { label: 'CHIA SEEDS', title: '1 oz chia seeds provides 111 mg of magnesium.', detail: 'That covers 26% of the Daily Value for magnesium.' },
    de: { label: 'CHIASAMEN', title: '28 g Chiasamen liefern 111 mg Magnesium.', detail: 'Das deckt 26 % des US-Tageswerts für Magnesium.' }
  },
  {
    id: 'chia-seeds-ala', category: 'nuts-seeds',
    source: 'https://ods.od.nih.gov/factsheets/Omega3FattyAcids-HealthProfessional/',
    en: { label: 'CHIA SEEDS', title: '1 oz chia seeds provides 5.06 g of omega-3 ALA.', detail: 'ALA is an essential fatty acid, so it must come from foods and beverages.' },
    de: { label: 'CHIASAMEN', title: '28 g Chiasamen liefern 5,06 g Omega-3-ALA.', detail: 'ALA ist eine essenzielle Fettsäure und muss daher über die Nahrung aufgenommen werden.' }
  },
  {
    id: 'chia-seeds-calcium', category: 'nuts-seeds',
    source: 'https://ods.od.nih.gov/factsheets/Calcium-HealthProfessional/',
    en: { label: 'CHIA SEEDS', title: '1 tablespoon of chia seeds provides 76 mg of calcium.', detail: 'Calcium is the most abundant mineral in the body.' },
    de: { label: 'CHIASAMEN', title: '1 Esslöffel Chiasamen liefert 76 mg Calcium.', detail: 'Calcium ist der häufigste Mineralstoff im Körper.' }
  },
  {
    id: 'almonds-magnesium', category: 'nuts-seeds',
    source: 'https://ods.od.nih.gov/factsheets/Magnesium-HealthProfessional/',
    en: { label: 'ALMONDS', title: '1 oz dry-roasted almonds provides 80 mg of magnesium.', detail: 'Magnesium takes part in more than 300 enzyme systems in the body.' },
    de: { label: 'MANDELN', title: '28 g trocken geröstete Mandeln liefern 80 mg Magnesium.', detail: 'Magnesium ist an über 300 Enzymsystemen im Körper beteiligt.' }
  },
  {
    id: 'almonds-vitamin-e', category: 'nuts-seeds',
    source: 'https://ods.od.nih.gov/factsheets/VitaminE-HealthProfessional/',
    en: { label: 'ALMONDS', title: '1 oz dry-roasted almonds provides 6.8 mg of vitamin E.', detail: 'That is 45% of the 15 mg Daily Value for vitamin E.' },
    de: { label: 'MANDELN', title: '28 g trocken geröstete Mandeln liefern 6,8 mg Vitamin E.', detail: 'Das sind 45 % des US-Tageswerts von 15 mg Vitamin E.' }
  },
  {
    id: 'cashews-magnesium', category: 'nuts-seeds',
    source: 'https://ods.od.nih.gov/factsheets/Magnesium-HealthProfessional/',
    en: { label: 'CASHEWS', title: '1 oz dry-roasted cashews provides 74 mg of magnesium.', detail: 'Magnesium also contributes to the structural development of bone.' },
    de: { label: 'CASHEWKERNE', title: '28 g trocken geröstete Cashewkerne liefern 74 mg Magnesium.', detail: 'Magnesium trägt auch zum strukturellen Aufbau der Knochen bei.' }
  },
  {
    id: 'cashews-copper', category: 'nuts-seeds',
    source: 'https://ods.od.nih.gov/factsheets/Copper-HealthProfessional/',
    en: { label: 'CASHEWS', title: '1 oz dry-roasted cashews provides 629 mcg of copper.', detail: 'That is 70% of the 900 mcg Daily Value for copper.' },
    de: { label: 'CASHEWKERNE', title: '28 g trocken geröstete Cashewkerne liefern 629 µg Kupfer.', detail: 'Das sind 70 % des US-Tageswerts von 900 µg Kupfer.' }
  },
  {
    id: 'cashews-iron', category: 'nuts-seeds',
    source: 'https://ods.od.nih.gov/factsheets/Iron-HealthProfessional/',
    en: { label: 'CASHEWS', title: '1 oz (18) oil-roasted cashews provides 2 mg of iron.', detail: 'Iron is also needed to make some hormones.' },
    de: { label: 'CASHEWKERNE', title: '28 g (18 Stück) in Öl geröstete Cashews liefern 2 mg Eisen.', detail: 'Eisen wird auch für die Bildung einiger Hormone benötigt.' }
  },
  {
    id: 'sunflower-seeds-vitamin-e', category: 'nuts-seeds',
    source: 'https://ods.od.nih.gov/factsheets/VitaminE-HealthProfessional/',
    en: { label: 'SUNFLOWER SEEDS', title: '1 oz dry-roasted sunflower seeds has 7.4 mg of vitamin E.', detail: 'Vitamin E helps the immune system fight off invading bacteria and viruses.' },
    de: { label: 'SONNENBLUMENKERNE', title: '28 g trocken geröstete Sonnenblumenkerne haben 7,4 mg Vitamin E.', detail: 'Vitamin E hilft dem Immunsystem, eindringende Bakterien und Viren abzuwehren.' }
  },
  {
    id: 'sunflower-seeds-copper', category: 'nuts-seeds',
    source: 'https://ods.od.nih.gov/factsheets/Copper-HealthProfessional/',
    en: { label: 'SUNFLOWER SEEDS', title: '¼ cup toasted sunflower seed kernels has 615 mcg of copper.', detail: 'Copper also plays a role in brain development.' },
    de: { label: 'SONNENBLUMENKERNE', title: '¼ Tasse geröstete Sonnenblumenkerne hat 615 µg Kupfer.', detail: 'Kupfer spielt auch bei der Gehirnentwicklung eine Rolle.' }
  },
  {
    id: 'hazelnuts-vitamin-e', category: 'nuts-seeds',
    source: 'https://ods.od.nih.gov/factsheets/VitaminE-HealthProfessional/',
    en: { label: 'HAZELNUTS', title: '1 oz dry-roasted hazelnuts provides 4.3 mg of vitamin E.', detail: 'Vitamin E helps widen blood vessels and keep blood from clotting within them.' },
    de: { label: 'HASELNÜSSE', title: '28 g trocken geröstete Haselnüsse liefern 4,3 mg Vitamin E.', detail: 'Vitamin E hilft, Blutgefäße zu weiten und Gerinnsel darin zu verhindern.' }
  },
  {
    id: 'hazelnuts-manganese', category: 'nuts-seeds',
    source: 'https://ods.od.nih.gov/factsheets/Manganese-HealthProfessional/',
    en: { label: 'HAZELNUTS', title: '1 oz dry-roasted hazelnuts provides 1.6 mg of manganese.', detail: 'That is 70% of the 2.3 mg Daily Value for manganese.' },
    de: { label: 'HASELNÜSSE', title: '28 g trocken geröstete Haselnüsse liefern 1,6 mg Mangan.', detail: 'Das sind 70 % des US-Tageswerts von 2,3 mg Mangan.' }
  },
  {
    id: 'pecans-manganese', category: 'nuts-seeds',
    source: 'https://ods.od.nih.gov/factsheets/Manganese-HealthProfessional/',
    en: { label: 'PECANS', title: '1 oz dry-roasted pecans provides 1.1 mg of manganese.', detail: 'Manganese is involved in immune response and blood clotting.' },
    de: { label: 'PEKANNÜSSE', title: '28 g trocken geröstete Pekannüsse liefern 1,1 mg Mangan.', detail: 'Mangan ist an der Immunantwort und der Blutgerinnung beteiligt.' }
  },
  {
    id: 'walnuts-ala', category: 'nuts-seeds',
    source: 'https://ods.od.nih.gov/factsheets/Omega3FattyAcids-HealthProfessional/',
    en: { label: 'WALNUTS', title: '1 oz English walnuts provides 2.57 g of omega-3 ALA.', detail: 'The daily ALA recommendation is 1.1 g for women and 1.6 g for men.' },
    de: { label: 'WALNÜSSE', title: '28 g Walnüsse liefern 2,57 g Omega-3-ALA.', detail: 'Die tägliche ALA-Empfehlung liegt bei 1,1 g für Frauen und 1,6 g für Männer.' }
  },
  {
    id: 'flaxseed-ala', category: 'nuts-seeds',
    source: 'https://ods.od.nih.gov/factsheets/Omega3FattyAcids-HealthProfessional/',
    en: { label: 'FLAXSEED', title: '1 tablespoon of whole flaxseed provides 2.35 g of omega-3 ALA.', detail: 'Omega-3s are important components of the membranes that surround every cell.' },
    de: { label: 'LEINSAMEN', title: '1 Esslöffel ganze Leinsamen liefert 2,35 g Omega-3-ALA.', detail: 'Omega-3-Fettsäuren sind wichtige Bestandteile der Membranen, die jede Zelle umgeben.' }
  },
  {
    id: 'sesame-seeds-copper', category: 'nuts-seeds',
    source: 'https://ods.od.nih.gov/factsheets/Copper-HealthProfessional/',
    en: { label: 'SESAME SEEDS', title: '¼ cup sesame seeds provides 147 mcg of copper.', detail: 'That is 16% of the Daily Value for copper.' },
    de: { label: 'SESAM', title: '¼ Tasse Sesam liefert 147 µg Kupfer.', detail: 'Das sind 16 % des US-Tageswerts für Kupfer.' }
  },
  {
    id: 'pine-nuts-vitamin-k', category: 'nuts-seeds',
    source: 'https://ods.od.nih.gov/factsheets/VitaminK-HealthProfessional/',
    en: { label: 'PINE NUTS', title: '1 oz dried pine nuts provides 15 mcg of vitamin K.', detail: 'Vitamin K is fat-soluble and is needed to make proteins for blood clotting and bone.' },
    de: { label: 'PINIENKERNE', title: '28 g getrocknete Pinienkerne liefern 15 µg Vitamin K.', detail: 'Vitamin K ist fettlöslich und wird für Proteine der Blutgerinnung und des Knochens gebraucht.' }
  }
];
