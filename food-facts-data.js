// Plant-forward food facts for social graphics.
// NIH links substantiate U.S. serving-based entries; MRI BLS 4.0 entries cite raw food per 100 g.
// Serving suggestions are editorial, not recommendations from the data providers.
// Loaded before food-facts.js, which reads the global `foodFacts`.
const foodFacts = [
  // ---------- PRODUCE ----------
  {
    id: 'red-pepper-vitamin-c', category: 'produce',
    source: 'https://blsdb.de/download',
    en: { label: 'RED PEPPER', title: 'Serve with a dip or tuck into a sandwich for a crisp bite', detail: 'MRI BLS 4.0 (G543100): 159.8 mg vitamin C per 100 g raw red pepper (rounded).' },
    de: { label: 'ROTE PAPRIKA', title: 'Mit Dip servieren oder für einen knackigen Biss ins Sandwich legen', detail: 'MRI BLS 4.0 (G543100): 159,8 mg Vitamin C je 100 g rohe rote Paprika (gerundet).' }
  },
  {
    id: 'orange-vitamin-c', category: 'produce',
    source: 'https://blsdb.de/download',
    en: { label: 'ORANGE', title: 'Peel at the table or add segments to a simple fruit bowl', detail: 'MRI BLS 4.0 (F603100): 62.4 mg vitamin C per 100 g raw orange (rounded).' },
    de: { label: 'ORANGE', title: 'Am Tisch schälen oder die Stücke in eine einfache Obstschale geben', detail: 'MRI BLS 4.0 (F603100): 62,4 mg Vitamin C je 100 g rohe Orange (gerundet).' }
  },
  {
    id: 'kiwifruit-vitamin-c', category: 'produce',
    source: 'https://blsdb.de/download',
    en: { label: 'KIWIFRUIT', title: 'Spoon out a kiwi for a quick snack.', detail: 'MRI BLS 4.0 (F514100): 71 mg vitamin C per 100 g raw kiwi.' },
    de: { label: 'KIWI', title: 'Kiwi halbieren und auslöffeln oder fürs Frühstück schneiden.', detail: 'MRI BLS 4.0 (F514100): 71 mg Vitamin C je 100 g rohe Kiwi.' }
  },
  {
    id: 'green-pepper-vitamin-c', category: 'produce',
    source: 'https://blsdb.de/download',
    en: { label: 'GREEN PEPPER', title: 'Keep ready in the fridge for a snack or sandwich filling', detail: 'MRI BLS 4.0 (G541100): 117 mg vitamin C per 100 g raw green pepper.' },
    de: { label: 'GRÜNE PAPRIKA', title: 'Im Kühlschrank für einen Snack oder Sandwichbelag bereithalten', detail: 'MRI BLS 4.0 (G541100): 117 mg Vitamin C je 100 g rohe grüne Paprika.' }
  },
  {
    id: 'broccoli-vitamin-c', category: 'produce',
    source: 'https://ods.od.nih.gov/factsheets/VitaminC-HealthProfessional/',
    en: { label: 'BROCCOLI', title: 'Serve with rice or pasta, or stir into soup before serving', detail: 'NIH U.S. table avg.: 51 mg vitamin C per ½ cup cooked broccoli.' },
    de: { label: 'BROKKOLI', title: 'Zu Reis oder Nudeln servieren oder vor dem Servieren in Suppe rühren', detail: 'NIH-US-Tabellenmittel: 51 mg Vitamin C je ½ Tasse gegarter Brokkoli.' }
  },
  {
    id: 'strawberries-vitamin-c', category: 'produce',
    source: 'https://blsdb.de/download',
    en: { label: 'STRAWBERRIES', title: 'Add to porridge, yoghurt or cereal just before eating', detail: 'MRI BLS 4.0 (F301100): 56.9 mg vitamin C per 100 g raw strawberries (rounded).' },
    de: { label: 'ERDBEEREN', title: 'Kurz vor dem Essen ins Porridge, in Joghurt oder Müsli geben', detail: 'MRI BLS 4.0 (F301100): 56,9 mg Vitamin C je 100 g rohe Erdbeeren (gerundet).' }
  },
  {
    id: 'brussels-sprouts-vitamin-c', category: 'produce',
    source: 'https://ods.od.nih.gov/factsheets/VitaminC-HealthProfessional/',
    en: { label: 'BRUSSELS SPROUTS', title: 'Halve larger sprouts before cooking for easier portions', detail: 'NIH U.S. table avg.: 48 mg vitamin C per ½ cup cooked Brussels sprouts.' },
    de: { label: 'ROSENKOHL', title: 'Größere Röschen vor dem Garen für handliche Portionen halbieren', detail: 'NIH-US-Tabellenmittel: 48 mg Vitamin C je ½ Tasse gegarter Rosenkohl.' }
  },
  {
    id: 'grapefruit-vitamin-c', category: 'produce',
    source: 'https://blsdb.de/download',
    en: { label: 'GRAPEFRUIT', title: 'Separate segments over a bowl to catch juice, then serve chilled', detail: 'MRI BLS 4.0 (F604100): 40 mg vitamin C per 100 g raw grapefruit.' },
    de: { label: 'GRAPEFRUIT', title: 'Die Stücke über einer Schüssel auslösen und gekühlt servieren', detail: 'MRI BLS 4.0 (F604100): 40 mg Vitamin C je 100 g rohe Grapefruit.' }
  },
  {
    id: 'cantaloupe-vitamin-c', category: 'produce',
    source: 'https://ods.od.nih.gov/factsheets/VitaminC-HealthProfessional/',
    en: { label: 'CANTALOUPE', title: 'Cut bite-size and serve plain or alongside breakfast', detail: 'NIH U.S. table avg.: 29 mg vitamin C per ½ cup cantaloupe.' },
    de: { label: 'CANTALOUPE-MELONE', title: 'Mundgerecht schneiden und pur oder zum Frühstück servieren', detail: 'NIH-US-Tabellenmittel: 29 mg Vitamin C je ½ Tasse Cantaloupe-Melone.' }
  },
  {
    id: 'cauliflower-vitamin-c', category: 'produce',
    source: 'https://blsdb.de/download',
    en: { label: 'CAULIFLOWER', title: 'Cut into small pieces for a snack plate or lunchbox', detail: 'MRI BLS 4.0 (G311100): 64 mg vitamin C per 100 g raw cauliflower.' },
    de: { label: 'BLUMENKOHL', title: 'In kleine Stücke für eine Snackplatte oder Lunchbox teilen', detail: 'MRI BLS 4.0 (G311100): 64 mg Vitamin C je 100 g roher Blumenkohl.' }
  },
  {
    id: 'sweet-potato-vitamin-a', category: 'produce',
    source: 'https://ods.od.nih.gov/factsheets/VitaminA-HealthProfessional/',
    en: { label: 'SWEET POTATO', title: 'Split it open and add a spoonful of topping you like', detail: 'NIH vitamin A table lists: 1 sweet potato baked in its skin.' },
    de: { label: 'SÜSSKARTOFFEL', title: 'Aufschneiden und mit einem Löffel Belag nach Wahl servieren', detail: 'NIH-Tabelle Vitamin A: 1 ganze, in der Schale gebackene Süßkartoffel.' }
  },
  {
    id: 'carrots-vitamin-a', category: 'produce',
    source: 'https://ods.od.nih.gov/factsheets/VitaminA-HealthProfessional/',
    en: { label: 'CARROTS', title: 'Pair raw sticks with dip or add them to a packed lunch', detail: 'NIH vitamin A table lists: ½ cup raw carrots.' },
    de: { label: 'KAROTTEN', title: 'Rohe Stifte mit Dip servieren oder in die Lunchbox packen', detail: 'NIH-Tabelle Vitamin A: ½ Tasse rohe Karotten.' }
  },
  {
    id: 'spinach-vitamin-a', category: 'produce',
    source: 'https://ods.od.nih.gov/factsheets/VitaminA-HealthProfessional/',
    en: { label: 'SPINACH', title: 'Fold into soup, pasta sauce or a grain bowl before serving', detail: 'NIH vitamin A table lists: ½ cup boiled frozen spinach.' },
    de: { label: 'SPINAT', title: 'Vor dem Servieren in Suppe, Pastasauce oder eine Getreide-Bowl geben', detail: 'NIH-Tabelle Vitamin A: ½ Tasse gekochter TK-Spinat.' }
  },
  {
    id: 'mango-vitamin-a', category: 'produce',
    source: 'https://ods.od.nih.gov/factsheets/VitaminA-HealthProfessional/',
    en: { label: 'MANGO', title: 'Serve the cubes on their own or spoon over breakfast', detail: 'NIH vitamin A table lists: 1 whole raw mango.' },
    de: { label: 'MANGO', title: 'Die Würfel pur servieren oder über das Frühstück geben', detail: 'NIH-Tabelle Vitamin A: 1 ganze rohe Mango.' }
  },
  {
    id: 'dried-apricots-vitamin-a', category: 'produce',
    source: 'https://ods.od.nih.gov/factsheets/VitaminA-HealthProfessional/',
    en: { label: 'DRIED APRICOTS', title: 'Pack a few for the commute or chop into breakfast cereal', detail: 'NIH vitamin A table lists: 5 dried apricots.' },
    de: { label: 'GETROCKNETE APRIKOSEN', title: 'Einige für unterwegs einpacken oder ins Frühstücksmüsli schneiden', detail: 'NIH-Tabelle Vitamin A: 5 getrocknete Aprikosen.' }
  },
  {
    id: 'dried-apricots-potassium', category: 'produce',
    source: 'https://ods.od.nih.gov/factsheets/Potassium-HealthProfessional/',
    en: { label: 'DRIED APRICOTS', title: 'Combine with a few nuts or chop over porridge as a chewy topping', detail: 'NIH U.S. table avg.: 755 mg potassium per ½ cup dried apricots.' },
    de: { label: 'GETROCKNETE APRIKOSEN', title: 'Mit einigen Nüssen kombinieren oder als Porridge-Belag klein schneiden', detail: 'NIH-US-Tabellenmittel: 755 mg Kalium je ½ Tasse getrocknete Aprikosen.' }
  },
  {
    id: 'acorn-squash-potassium', category: 'produce',
    source: 'https://ods.od.nih.gov/factsheets/Potassium-HealthProfessional/',
    en: { label: 'ACORN SQUASH', title: 'Serve cooked squash with grains or beans.', detail: 'NIH U.S. table avg.: 644 mg potassium per 1 cup mashed acorn squash.' },
    de: { label: 'EICHELKÜRBIS', title: 'Gegarten Kürbis zu Getreide oder Bohnen servieren.', detail: 'NIH-US-Tabellenmittel: 644 mg Kalium je 1 Tasse pürierter Eichelkürbis.' }
  },
  {
    id: 'prunes-potassium', category: 'produce',
    source: 'https://ods.od.nih.gov/factsheets/Potassium-HealthProfessional/',
    en: { label: 'PRUNES', title: 'Stir prunes into oats or yoghurt.', detail: 'NIH U.S. table avg.: 635 mg potassium per ½ cup dried prunes.' },
    de: { label: 'TROCKENPFLAUMEN', title: 'Backpflaumen in Haferflocken oder Joghurt rühren.', detail: 'NIH-US-Tabellenmittel: 635 mg Kalium je ½ Tasse Trockenpflaumen.' }
  },
  {
    id: 'raisins-potassium', category: 'produce',
    source: 'https://ods.od.nih.gov/factsheets/Potassium-HealthProfessional/',
    en: { label: 'RAISINS', title: 'Pack a small portion in a reusable container for a snack', detail: 'NIH U.S. table avg.: 618 mg potassium per ½ cup raisins.' },
    de: { label: 'ROSINEN', title: 'Eine kleine Portion in einer Dose als Snack mitnehmen', detail: 'NIH-US-Tabellenmittel: 618 mg Kalium je ½ Tasse Rosinen.' }
  },
  {
    id: 'potato-potassium', category: 'produce',
    source: 'https://ods.od.nih.gov/factsheets/Potassium-HealthProfessional/',
    en: { label: 'POTATO', title: 'Top a baked potato with beans or vegetables.', detail: 'NIH U.S. table avg.: 610 mg potassium per 1 medium baked potato (flesh only).' },
    de: { label: 'KARTOFFEL', title: 'Ofenkartoffel aufschneiden und mit Bohnen oder Gemüse belegen.', detail: 'NIH-US-Tabellenmittel: 610 mg Kalium je 1 mittelgroße Ofenkartoffel (ohne Schale).' }
  },
  {
    id: 'banana-potassium', category: 'produce',
    source: 'https://blsdb.de/download',
    en: { label: 'BANANA', title: 'Slice over toast or cereal as a quick breakfast topping', detail: 'MRI BLS 4.0 (F503100): 334 mg potassium per 100 g raw banana.' },
    de: { label: 'BANANE', title: 'Für ein schnelles Frühstück auf Toast oder ins Müsli schneiden', detail: 'MRI BLS 4.0 (F503100): 334 mg Kalium je 100 g rohe Banane.' }
  },
  {
    id: 'spinach-folate', category: 'produce',
    source: 'https://ods.od.nih.gov/factsheets/Folate-HealthProfessional/',
    en: { label: 'SPINACH', title: 'Stir the leaves through hot pasta just before serving', detail: 'NIH folate table lists: ½ cup boiled spinach.' },
    de: { label: 'SPINAT', title: 'Die Blätter kurz vor dem Servieren unter heiße Pasta rühren', detail: 'NIH-Tabelle Folat: ½ Tasse gekochter Spinat.' }
  },
  {
    id: 'asparagus-folate', category: 'produce',
    source: 'https://ods.od.nih.gov/factsheets/Folate-HealthProfessional/',
    en: { label: 'ASPARAGUS', title: 'Arrange beside potatoes or grains and serve with lemon', detail: 'NIH folate table lists: 4 boiled asparagus spears.' },
    de: { label: 'SPARGEL', title: 'Zu Kartoffeln oder Getreide anrichten und mit Zitrone servieren', detail: 'NIH-Tabelle Folat: 4 gekochte Spargelstangen.' }
  },
  {
    id: 'romaine-folate', category: 'produce',
    source: 'https://blsdb.de/download',
    en: { label: 'ROMAINE', title: 'Use the large leaves as wraps for your favourite fillings', detail: 'MRI BLS 4.0 (G107100): 56.6 µg folate per 100 g raw romaine lettuce.' },
    de: { label: 'RÖMERSALAT', title: 'Große Blätter als Wraps für deine Lieblingsfüllung nutzen', detail: 'MRI BLS 4.0 (G107100): 56,6 µg Folat je 100 g roher Römersalat.' }
  },
  {
    id: 'avocado-folate', category: 'produce',
    source: 'https://ods.od.nih.gov/factsheets/Folate-HealthProfessional/',
    en: { label: 'AVOCADO', title: 'Season to taste and spread over toast or add to a sandwich', detail: 'NIH folate table lists: ½ cup sliced raw avocado.' },
    de: { label: 'AVOCADO', title: 'Nach Geschmack würzen und auf Toast streichen oder ins Sandwich geben', detail: 'NIH-Tabelle Folat: ½ Tasse Avocadoscheiben.' }
  },
  {
    id: 'mustard-greens-folate', category: 'produce',
    source: 'https://ods.od.nih.gov/factsheets/Folate-HealthProfessional/',
    en: { label: 'MUSTARD GREENS', title: 'Serve with grains or stir into a bean dish before serving', detail: 'NIH folate table lists: ½ cup boiled frozen mustard greens.' },
    de: { label: 'SENFKOHL', title: 'Zu Getreide servieren oder vor dem Anrichten in Bohnen rühren', detail: 'NIH-Tabelle Folat: ½ Tasse gekochter TK-Senfkohl.' }
  },
  {
    id: 'green-peas-folate', category: 'produce',
    source: 'https://ods.od.nih.gov/factsheets/Folate-HealthProfessional/',
    en: { label: 'GREEN PEAS', title: 'Add near the end, warm through and serve', detail: 'NIH folate table lists: ½ cup boiled frozen green peas.' },
    de: { label: 'ERBSEN', title: 'Gegen Ende dazugeben, erwärmen und servieren', detail: 'NIH-Tabelle Folat: ½ Tasse gekochte TK-Erbsen.' }
  },
  {
    id: 'papaya-folate', category: 'produce',
    source: 'https://ods.od.nih.gov/factsheets/Folate-HealthProfessional/',
    en: { label: 'PAPAYA', title: 'Serve chilled or spoon over yoghurt at breakfast', detail: 'NIH folate table lists: ½ cup cubed raw papaya.' },
    de: { label: 'PAPAYA', title: 'Gekühlt servieren oder zum Frühstück über Joghurt geben', detail: 'NIH-Tabelle Folat: ½ Tasse rohe Papayawürfel.' }
  },
  {
    id: 'collards-vitamin-k', category: 'produce',
    source: 'https://ods.od.nih.gov/factsheets/VitaminK-HealthProfessional/',
    en: { label: 'COLLARDS', title: 'Spoon alongside grains or beans for an easy plate', detail: 'NIH U.S. table avg.: 530 µg vitamin K per ½ cup boiled frozen collards.' },
    de: { label: 'BLATTKOHL', title: 'Als einfache Kombination neben Getreide oder Bohnen anrichten', detail: 'NIH-US-Tabellenmittel: 530 µg Vitamin K je ½ Tasse gekochter TK-Blattkohl.' }
  },
  {
    id: 'turnip-greens-vitamin-k', category: 'produce',
    source: 'https://ods.od.nih.gov/factsheets/VitaminK-HealthProfessional/',
    en: { label: 'TURNIP GREENS', title: 'Serve as a side with potatoes, grains or beans', detail: 'NIH U.S. table avg.: 426 µg vitamin K per ½ cup boiled frozen turnip greens.' },
    de: { label: 'RÜBSTIEL', title: 'Als Beilage zu Kartoffeln, Getreide oder Bohnen anrichten', detail: 'NIH-US-Tabellenmittel: 426 µg Vitamin K je ½ Tasse gekochter TK-Rübstiel.' }
  },
  {
    id: 'kale-vitamin-k', category: 'produce',
    source: 'https://ods.od.nih.gov/factsheets/VitaminK-HealthProfessional/',
    en: { label: 'KALE', title: 'Toss the ribbons with dressing, then add your favorite toppings', detail: 'NIH U.S. table avg.: 113 µg vitamin K per 1 cup raw kale.' },
    de: { label: 'GRÜNKOHL', title: 'Die Streifen mit Dressing vermengen und nach Wunsch garnieren', detail: 'NIH-US-Tabellenmittel: 113 µg Vitamin K je 1 Tasse roher Grünkohl.' }
  },
  {
    id: 'blueberries-vitamin-k', category: 'produce',
    source: 'https://ods.od.nih.gov/factsheets/VitaminK-HealthProfessional/',
    en: { label: 'BLUEBERRIES', title: 'Add to cereal, yoghurt or porridge just before serving', detail: 'NIH U.S. table avg.: 14 µg vitamin K per ½ cup raw blueberries.' },
    de: { label: 'HEIDELBEEREN', title: 'Kurz vor dem Servieren ins Müsli, in Joghurt oder Porridge geben', detail: 'NIH-US-Tabellenmittel: 14 µg Vitamin K je ½ Tasse rohe Heidelbeeren.' }
  },
  {
    id: 'kale-calcium', category: 'produce',
    source: 'https://ods.od.nih.gov/factsheets/Calcium-HealthProfessional/',
    en: { label: 'KALE', title: 'Pair the greens with grains and dressing for an easy lunch', detail: 'NIH U.S. table avg.: 94 mg calcium per 1 cup cooked fresh kale.' },
    de: { label: 'GRÜNKOHL', title: 'Mit Getreide und Dressing zu einem einfachen Mittagessen kombinieren', detail: 'NIH-US-Tabellenmittel: 94 mg Calcium je 1 Tasse gegarter frischer Grünkohl.' }
  },
  {
    id: 'bok-choy-calcium', category: 'produce',
    source: 'https://ods.od.nih.gov/factsheets/Calcium-HealthProfessional/',
    en: { label: 'BOK CHOY', title: 'Keep pieces bite-size and serve with rice or noodles', detail: 'NIH U.S. table avg.: 74 mg calcium per 1 cup shredded raw bok choy.' },
    de: { label: 'PAK CHOI', title: 'Mundgerecht schneiden und mit Reis oder Nudeln servieren', detail: 'NIH-US-Tabellenmittel: 74 mg Calcium je 1 Tasse roher, geschnittener Pak Choi.' }
  },
  {
    id: 'pineapple-manganese', category: 'produce',
    source: 'https://ods.od.nih.gov/factsheets/Manganese-HealthProfessional/',
    en: { label: 'PINEAPPLE', title: 'Serve chilled or pair with yoghurt for a sweet bite', detail: 'NIH U.S. table avg.: 0.8 mg manganese per ½ cup raw pineapple chunks.' },
    de: { label: 'ANANAS', title: 'Gekühlt oder mit Joghurt als süßen Snack reichen', detail: 'NIH-US-Tabellenmittel: 0,8 mg Mangan je ½ Tasse rohe Ananasstücke.' }
  },
  {
    id: 'avocado-copper', category: 'produce',
    source: 'https://ods.od.nih.gov/factsheets/Copper-HealthProfessional/',
    en: { label: 'AVOCADO', title: 'Mash or slice and layer with other sandwich ingredients', detail: 'NIH U.S. table avg.: 219 µg copper per ½ cup raw avocado.' },
    de: { label: 'AVOCADO', title: 'Zerdrücken oder in Scheiben mit weiteren Zutaten ins Sandwich legen', detail: 'NIH-US-Tabellenmittel: 219 µg Kupfer je ½ Tasse rohe Avocado.' }
  },
  {
    id: 'banana-vitamin-b6', category: 'produce',
    source: 'https://ods.od.nih.gov/factsheets/VitaminB6-HealthProfessional/',
    en: { label: 'BANANA', title: 'Add to porridge or yoghurt, or enjoy as a cold snack', detail: 'NIH U.S. table avg.: 0.4 mg vitamin B6 per 1 medium banana.' },
    de: { label: 'BANANE', title: 'In Porridge oder Joghurt geben oder als kalten Snack genießen', detail: 'NIH-US-Tabellenmittel: 0,4 mg Vitamin B6 je 1 mittelgroße Banane.' }
  },
  {
    id: 'spinach-iron', category: 'produce',
    source: 'https://ods.od.nih.gov/factsheets/Iron-HealthProfessional/',
    en: { label: 'SPINACH', title: 'Serve cooked spinach with pepper or citrus alongside', detail: 'NIH U.S. table avg.: 3 mg iron per ½ cup boiled spinach.' },
    de: { label: 'SPINAT', title: 'Gegarten Spinat mit Paprika oder Zitrusfrucht servieren', detail: 'NIH-US-Tabellenmittel: 3 mg Eisen je ½ Tasse gekochter Spinat.' }
  },

  // ---------- LEGUMES ----------
  {
    id: 'lentils-potassium', category: 'legumes',
    source: 'https://ods.od.nih.gov/factsheets/Potassium-HealthProfessional/',
    en: { label: 'LENTILS', title: 'Add lentils to soup, salad or a grain bowl.', detail: 'NIH U.S. table avg.: 731 mg potassium per 1 cup cooked lentils.' },
    de: { label: 'LINSEN', title: 'Linsen in Suppe, Salat oder eine Getreide-Bowl geben.', detail: 'NIH-US-Tabellenmittel: 731 mg Kalium je 1 Tasse gekochte Linsen.' }
  },
  {
    id: 'lentils-iron', category: 'legumes',
    source: 'https://ods.od.nih.gov/factsheets/Iron-HealthProfessional/',
    en: { label: 'LENTILS', title: 'Spoon cooked lentils over grains and finish with chopped vegetables', detail: 'NIH U.S. table avg.: 3 mg iron per ½ cup boiled lentils.' },
    de: { label: 'LINSEN', title: 'Gekochte Linsen auf Getreide geben und mit gehacktem Gemüse ergänzen', detail: 'NIH-US-Tabellenmittel: 3 mg Eisen je ½ Tasse gekochte Linsen.' }
  },
  {
    id: 'lentils-zinc', category: 'legumes',
    source: 'https://ods.od.nih.gov/factsheets/Zinc-HealthProfessional/',
    en: { label: 'LENTILS', title: 'Add broth and vegetables, then warm through for a simple meal', detail: 'NIH U.S. table avg.: 1.3 mg zinc per ½ cup boiled lentils.' },
    de: { label: 'LINSEN', title: 'Brühe und Gemüse dazugeben und für eine einfache Mahlzeit erwärmen', detail: 'NIH-US-Tabellenmittel: 1,3 mg Zink je ½ Tasse gekochte Linsen.' }
  },
  {
    id: 'white-beans-iron', category: 'legumes',
    source: 'https://ods.od.nih.gov/factsheets/Iron-HealthProfessional/',
    en: { label: 'WHITE BEANS', title: 'Add white beans to salad or mash for a spread.', detail: 'NIH U.S. table avg.: 8 mg iron per 1 cup canned white beans.' },
    de: { label: 'WEISSE BOHNEN', title: 'Weiße Bohnen in Salat geben oder als Aufstrich zerdrücken.', detail: 'NIH-US-Tabellenmittel: 8 mg Eisen je 1 Tasse weiße Bohnen (Dose).' }
  },
  {
    id: 'kidney-beans-potassium', category: 'legumes',
    source: 'https://ods.od.nih.gov/factsheets/Potassium-HealthProfessional/',
    en: { label: 'KIDNEY BEANS', title: 'Combine with grains and chopped vegetables for lunch', detail: 'NIH U.S. table avg.: 607 mg potassium per 1 cup canned kidney beans.' },
    de: { label: 'KIDNEYBOHNEN', title: 'Mit Getreide und gehacktem Gemüse zum Mittagessen kombinieren', detail: 'NIH-US-Tabellenmittel: 607 mg Kalium je 1 Tasse Kidneybohnen (Dose).' }
  },
  {
    id: 'kidney-beans-folate', category: 'legumes',
    source: 'https://ods.od.nih.gov/factsheets/Folate-HealthProfessional/',
    en: { label: 'KIDNEY BEANS', title: 'Mix drained beans with chopped vegetables and chill until serving', detail: 'NIH folate table lists: ½ cup canned kidney beans.' },
    de: { label: 'KIDNEYBOHNEN', title: 'Abgetropfte Bohnen mit Gemüse mischen und bis zum Servieren kühlen', detail: 'NIH-Tabelle Folat: ½ Tasse Kidneybohnen (Dose).' }
  },
  {
    id: 'black-beans-magnesium', category: 'legumes',
    source: 'https://ods.od.nih.gov/factsheets/Magnesium-HealthProfessional/',
    en: { label: 'BLACK BEANS', title: 'Spoon into tortillas and add crunchy vegetables to finish', detail: 'NIH U.S. table avg.: 60 mg magnesium per ½ cup cooked black beans.' },
    de: { label: 'SCHWARZE BOHNEN', title: 'In Tortillas geben und mit knackigem Gemüse ergänzen', detail: 'NIH-US-Tabellenmittel: 60 mg Magnesium je ½ Tasse gekochte schwarze Bohnen.' }
  },
  {
    id: 'black-beans-thiamin', category: 'legumes',
    source: 'https://ods.od.nih.gov/factsheets/Thiamin-HealthProfessional/',
    en: { label: 'BLACK BEANS', title: 'Top cooked rice with beans and a spoonful of salsa', detail: 'NIH U.S. table avg.: 0.4 mg thiamin per ½ cup boiled black beans.' },
    de: { label: 'SCHWARZE BOHNEN', title: 'Gekochten Reis mit Bohnen und einem Löffel Salsa garnieren', detail: 'NIH-US-Tabellenmittel: 0,4 mg Thiamin je ½ Tasse gekochte schwarze Bohnen.' }
  },
  {
    id: 'black-eyed-peas-folate', category: 'legumes',
    source: 'https://ods.od.nih.gov/factsheets/Folate-HealthProfessional/',
    en: { label: 'BLACK-EYED PEAS', title: 'Combine with cooked grains and chopped herbs before serving', detail: 'NIH folate table lists: ½ cup boiled black-eyed peas.' },
    de: { label: 'AUGENBOHNEN', title: 'Vor dem Servieren mit Getreide und gehackten Kräutern kombinieren', detail: 'NIH-Tabelle Folat: ½ Tasse gekochte Augenbohnen.' }
  },
  {
    id: 'chickpeas-vitamin-b6', category: 'legumes',
    source: 'https://ods.od.nih.gov/factsheets/VitaminB6-HealthProfessional/',
    en: { label: 'CHICKPEAS', title: 'Rinse and add to a salad, wrap or grain bowl', detail: 'NIH U.S. table avg.: 1.1 mg vitamin B6 per 1 cup canned chickpeas.' },
    de: { label: 'KICHERERBSEN', title: 'Abspülen und in Salat, Wrap oder Getreide-Bowl geben', detail: 'NIH-US-Tabellenmittel: 1,1 mg Vitamin B6 je 1 Tasse Kichererbsen (Dose).' }
  },
  {
    id: 'chickpeas-manganese', category: 'legumes',
    source: 'https://ods.od.nih.gov/factsheets/Manganese-HealthProfessional/',
    en: { label: 'CHICKPEAS', title: 'Rinse, drain and toss into salad with chopped vegetables', detail: 'NIH U.S. table avg.: 0.9 mg manganese per ½ cup cooked chickpeas.' },
    de: { label: 'KICHERERBSEN', title: 'Abspülen, abtropfen lassen und mit gehacktem Gemüse in den Salat geben', detail: 'NIH-US-Tabellenmittel: 0,9 mg Mangan je ½ Tasse gekochte Kichererbsen.' }
  },
  {
    id: 'chickpeas-copper', category: 'legumes',
    source: 'https://ods.od.nih.gov/factsheets/Copper-HealthProfessional/',
    en: { label: 'CHICKPEAS', title: 'Season and spread onto bread or fill a wrap', detail: 'NIH U.S. table avg.: 289 µg copper per ½ cup chickpeas.' },
    de: { label: 'KICHERERBSEN', title: 'Würzen und auf Brot streichen oder in einen Wrap füllen', detail: 'NIH-US-Tabellenmittel: 289 µg Kupfer je ½ Tasse Kichererbsen.' }
  },
  {
    id: 'soybeans-potassium', category: 'legumes',
    source: 'https://ods.od.nih.gov/factsheets/Potassium-HealthProfessional/',
    en: { label: 'SOYBEANS', title: 'Add to grains and vegetables for lunch or a side', detail: 'NIH U.S. table avg.: 443 mg potassium per ½ cup boiled mature soybeans.' },
    de: { label: 'SOJABOHNEN', title: 'Für Mittagessen oder Beilage mit Getreide und Gemüse kombinieren', detail: 'NIH-US-Tabellenmittel: 443 mg Kalium je ½ Tasse gekochte reife Sojabohnen.' }
  },
  {
    id: 'soybeans-calcium', category: 'legumes',
    source: 'https://ods.od.nih.gov/factsheets/Calcium-HealthProfessional/',
    en: { label: 'SOYBEANS', title: 'Spoon into a salad or combine with cooked grains', detail: 'NIH U.S. table avg.: 131 mg calcium per ½ cup cooked soybeans.' },
    de: { label: 'SOJABOHNEN', title: 'In Salat füllen oder mit gekochtem Getreide kombinieren', detail: 'NIH-US-Tabellenmittel: 131 mg Calcium je ½ Tasse gekochte Sojabohnen.' }
  },
  {
    id: 'tofu-calcium', category: 'legumes',
    source: 'https://ods.od.nih.gov/factsheets/Calcium-HealthProfessional/',
    en: { label: 'TOFU', title: 'Look for calcium sulfate in the ingredients, then use in a stir-fry', detail: 'NIH U.S. table avg.: 253 mg calcium per ½ cup firm tofu made with calcium sulfate.' },
    de: { label: 'TOFU', title: 'Der Calciumgehalt hängt von der Herstellung ab; Zutatenliste prüfen', detail: 'NIH-US-Tabellenmittel: 253 mg Calcium je ½ Tasse fester Tofu mit Calciumsulfat.' }
  },
  {
    id: 'tofu-iron', category: 'legumes',
    source: 'https://ods.od.nih.gov/factsheets/Iron-HealthProfessional/',
    en: { label: 'TOFU', title: 'Serve tofu cubes with vegetables and rice or noodles.', detail: 'NIH U.S. table avg.: 3 mg iron per ½ cup firm tofu.' },
    de: { label: 'TOFU', title: 'Tofuwürfel mit Gemüse und Reis oder Nudeln servieren.', detail: 'NIH-US-Tabellenmittel: 3 mg Eisen je ½ Tasse fester Tofu.' }
  },
  {
    id: 'tofu-copper', category: 'legumes',
    source: 'https://ods.od.nih.gov/factsheets/Copper-HealthProfessional/',
    en: { label: 'TOFU', title: 'Slice and add to bread with crunchy vegetables and a spread', detail: 'NIH U.S. table avg.: 476 µg copper per ½ cup raw firm tofu.' },
    de: { label: 'TOFU', title: 'In Scheiben mit knackigem Gemüse und Aufstrich aufs Brot legen', detail: 'NIH-US-Tabellenmittel: 476 µg Kupfer je ½ Tasse roher fester Tofu.' }
  },
  {
    id: 'edamame-magnesium', category: 'legumes',
    source: 'https://ods.od.nih.gov/factsheets/Magnesium-HealthProfessional/',
    en: { label: 'EDAMAME', title: 'Add prepared beans to a rice bowl or serve in a small dish', detail: 'NIH U.S. table avg.: 50 mg magnesium per ½ cup shelled cooked edamame.' },
    de: { label: 'EDAMAME', title: 'Zubereitete Bohnen in eine Reisschale geben oder separat reichen', detail: 'NIH-US-Tabellenmittel: 50 mg Magnesium je ½ Tasse gegarte, geschälte Edamame.' }
  },
  {
    id: 'edamame-ala', category: 'legumes',
    source: 'https://ods.od.nih.gov/factsheets/Omega3FattyAcids-HealthProfessional/',
    en: { label: 'EDAMAME', title: 'Combine with grains and vegetables for a quick meal', detail: 'NIH U.S. table avg.: 0.28 g omega-3 ALA per ½ cup prepared edamame.' },
    de: { label: 'EDAMAME', title: 'Für eine schnelle Mahlzeit mit Getreide und Gemüse kombinieren', detail: 'NIH-US-Tabellenmittel: 0,28 g Omega-3-ALA je ½ Tasse zubereitete Edamame.' }
  },
  {
    id: 'natto-vitamin-k', category: 'legumes',
    source: 'https://ods.od.nih.gov/factsheets/VitaminK-HealthProfessional/',
    en: { label: 'NATTO', title: 'Spoon over rice and add accompaniments you usually enjoy', detail: 'NIH U.S. table avg.: 850 µg vitamin K per 3 oz natto.' },
    de: { label: 'NATTO', title: 'Über Reis geben und mit den üblichen Beilagen servieren', detail: 'NIH-US-Tabellenmittel: 850 µg Vitamin K je 85 g Natto.' }
  },
  {
    id: 'peanuts-folate', category: 'legumes',
    source: 'https://ods.od.nih.gov/factsheets/Folate-HealthProfessional/',
    en: { label: 'PEANUTS', title: 'Portion into a small container or sprinkle over noodles', detail: 'NIH folate table lists: 1 oz dry-roasted peanuts.' },
    de: { label: 'ERDNÜSSE', title: 'In eine kleine Dose füllen oder über Nudeln streuen', detail: 'NIH-Tabelle Folat: 28 g trocken geröstete Erdnüsse.' }
  },
  {
    id: 'peanuts-vitamin-e', category: 'legumes',
    source: 'https://ods.od.nih.gov/factsheets/VitaminE-HealthProfessional/',
    en: { label: 'PEANUTS', title: 'Chop and scatter over oats or yoghurt for crunch', detail: 'NIH U.S. table avg.: 2.2 mg vitamin E per 1 oz dry-roasted peanuts.' },
    de: { label: 'ERDNÜSSE', title: 'Hacken und für etwas Biss über Haferflocken oder Joghurt streuen', detail: 'NIH-US-Tabellenmittel: 2,2 mg Vitamin E je 28 g trocken geröstete Erdnüsse.' }
  },
  {
    id: 'pinto-beans-calcium', category: 'legumes',
    source: 'https://ods.od.nih.gov/factsheets/Calcium-HealthProfessional/',
    en: { label: 'PINTO BEANS', title: 'Pair with chopped vegetables and a familiar sauce', detail: 'NIH U.S. table avg.: 54 mg calcium per ½ cup canned, drained pinto beans.' },
    de: { label: 'PINTOBOHNEN', title: 'Mit gehacktem Gemüse und einer vertrauten Sauce kombinieren', detail: 'NIH-US-Tabellenmittel: 54 mg Calcium je ½ Tasse abgetropfte Pintobohnen (Dose).' }
  },
  {
    id: 'baked-beans-selenium', category: 'legumes',
    source: 'https://ods.od.nih.gov/factsheets/Selenium-HealthProfessional/',
    en: { label: 'BAKED BEANS', title: 'Warm according to the pack instructions and spoon over toast', detail: 'NIH U.S. table avg.: 13 µg selenium per 1 cup canned vegetarian baked beans.' },
    de: { label: 'BAKED BEANS', title: 'Nach Packungsangabe erwärmen und auf Toast geben', detail: 'NIH-US-Tabellenmittel: 13 µg Selen je 1 Tasse vegetarische Baked Beans (Dose).' }
  },

  // ---------- GRAINS ----------
  {
    id: 'brown-rice-magnesium', category: 'grains',
    source: 'https://ods.od.nih.gov/factsheets/Magnesium-HealthProfessional/',
    en: { label: 'BROWN RICE', title: 'Serve with beans or vegetables for an easy bowl', detail: 'NIH U.S. table avg.: 42 mg magnesium per ½ cup cooked brown rice.' },
    de: { label: 'NATURREIS', title: 'Mit Bohnen oder Gemüse zu einer einfachen Bowl servieren', detail: 'NIH-US-Tabellenmittel: 42 mg Magnesium je ½ Tasse gekochter Naturreis.' }
  },
  {
    id: 'brown-rice-manganese', category: 'grains',
    source: 'https://ods.od.nih.gov/factsheets/Manganese-HealthProfessional/',
    en: { label: 'BROWN RICE', title: 'Top with beans and vegetables for an adaptable lunch bowl', detail: 'NIH U.S. table avg.: 1.1 mg manganese per ½ cup cooked brown rice.' },
    de: { label: 'NATURREIS', title: 'Für eine vielseitige Lunch-Bowl mit Bohnen und Gemüse belegen', detail: 'NIH-US-Tabellenmittel: 1,1 mg Mangan je ½ Tasse gekochter Naturreis.' }
  },
  {
    id: 'brown-rice-selenium', category: 'grains',
    source: 'https://ods.od.nih.gov/factsheets/Selenium-HealthProfessional/',
    en: { label: 'BROWN RICE', title: 'Cook according to pack directions and use as a simple side', detail: 'NIH U.S. table avg.: 12 µg selenium per 1 cup cooked long-grain brown rice.' },
    de: { label: 'NATURREIS', title: 'Nach Packungsangabe garen und als einfache Beilage verwenden', detail: 'NIH-US-Tabellenmittel: 12 µg Selen je 1 Tasse gekochter Langkorn-Naturreis.' }
  },
  {
    id: 'brown-rice-thiamin', category: 'grains',
    source: 'https://ods.od.nih.gov/factsheets/Thiamin-HealthProfessional/',
    en: { label: 'BROWN RICE', title: 'Portion the cooked rice to pair with vegetables or beans', detail: 'NIH U.S. table avg.: 0.2 mg thiamin per ½ cup cooked unenriched brown rice.' },
    de: { label: 'NATURREIS', title: 'Den gekochten Reis portionieren und mit Gemüse oder Bohnen servieren', detail: 'NIH-US-Tabellenmittel: 0,2 mg Thiamin je ½ Tasse gekochter, nicht angereicherter Naturreis.' }
  },
  {
    id: 'brown-rice-zinc', category: 'grains',
    source: 'https://ods.od.nih.gov/factsheets/Zinc-HealthProfessional/',
    en: { label: 'BROWN RICE', title: 'Add prepared vegetables and a sauce you have on hand', detail: 'NIH U.S. table avg.: 0.7 mg zinc per ½ cup cooked long-grain brown rice.' },
    de: { label: 'NATURREIS', title: 'Vorbereitetes Gemüse und eine vorhandene Sauce dazugeben', detail: 'NIH-US-Tabellenmittel: 0,7 mg Zink je ½ Tasse gekochter Langkorn-Naturreis.' }
  },
  {
    id: 'whole-wheat-bread-magnesium', category: 'grains',
    source: 'https://ods.od.nih.gov/factsheets/Magnesium-HealthProfessional/',
    en: { label: 'WHOLE WHEAT BREAD', title: 'Use for an open sandwich with vegetables or savory spread', detail: 'NIH U.S. table avg.: 23 mg magnesium per 1 slice of whole wheat bread.' },
    de: { label: 'VOLLKORNBROT', title: 'Mit Gemüse oder herzhaftem Aufstrich als belegtes Brot servieren', detail: 'NIH-US-Tabellenmittel: 23 mg Magnesium je 1 Scheibe Vollkornbrot.' }
  },
  {
    id: 'whole-wheat-bread-manganese', category: 'grains',
    source: 'https://ods.od.nih.gov/factsheets/Manganese-HealthProfessional/',
    en: { label: 'WHOLE WHEAT BREAD', title: 'Top a slice with avocado, beans or another everyday favorite', detail: 'NIH U.S. table avg.: 0.7 mg manganese per 1 slice of whole wheat bread.' },
    de: { label: 'VOLLKORNBROT', title: 'Eine Scheibe mit Avocado, Bohnen oder einem Alltagsbelag garnieren', detail: 'NIH-US-Tabellenmittel: 0,7 mg Mangan je 1 Scheibe Vollkornbrot.' }
  },
  {
    id: 'whole-wheat-bread-selenium', category: 'grains',
    source: 'https://ods.od.nih.gov/factsheets/Selenium-HealthProfessional/',
    en: { label: 'WHOLE WHEAT BREAD', title: 'Add a filling and crunchy vegetables for an easy meal on the go', detail: 'NIH U.S. table avg.: 8 µg selenium per 1 slice of whole wheat bread.' },
    de: { label: 'VOLLKORNBROT', title: 'Mit Füllung und knackigem Gemüse als einfache Mahlzeit belegen', detail: 'NIH-US-Tabellenmittel: 8 µg Selen je 1 Scheibe Vollkornbrot.' }
  },
  {
    id: 'oatmeal-manganese', category: 'grains',
    source: 'https://ods.od.nih.gov/factsheets/Manganese-HealthProfessional/',
    en: { label: 'OATMEAL', title: 'Stir in fruit or seeds just before serving', detail: 'NIH U.S. table avg.: 0.7 mg manganese per ½ cup cooked oatmeal.' },
    de: { label: 'HAFERBREI', title: 'Kurz vor dem Servieren Obst oder Samen einrühren', detail: 'NIH-US-Tabellenmittel: 0,7 mg Mangan je ½ Tasse gekochter Haferbrei.' }
  },
  {
    id: 'oatmeal-selenium', category: 'grains',
    source: 'https://ods.od.nih.gov/factsheets/Selenium-HealthProfessional/',
    en: { label: 'OATMEAL', title: 'Add fruit or a little cinnamon at the table if you like', detail: 'NIH U.S. table avg.: 13 µg selenium per 1 cup unenriched oatmeal cooked in water.' },
    de: { label: 'HAFERBREI', title: 'Nach Wunsch am Tisch mit Obst oder etwas Zimt ergänzen', detail: 'NIH-US-Tabellenmittel: 13 µg Selen je 1 Tasse in Wasser gekochter Haferbrei.' }
  },
  {
    id: 'oatmeal-magnesium', category: 'grains',
    source: 'https://ods.od.nih.gov/factsheets/Magnesium-HealthProfessional/',
    en: { label: 'OATMEAL', title: 'Prepare as directed on the pack and add your usual toppings', detail: 'NIH U.S. table avg.: 36 mg magnesium per 1 packet of instant oatmeal.' },
    de: { label: 'HAFERBREI', title: 'Nach Packungsangabe zubereiten und mit den üblichen Zutaten garnieren', detail: 'NIH-US-Tabellenmittel: 36 mg Magnesium je 1 Päckchen Instant-Haferbrei.' }
  },
  {
    id: 'shredded-wheat-magnesium', category: 'grains',
    source: 'https://ods.od.nih.gov/factsheets/Magnesium-HealthProfessional/',
    en: { label: 'SHREDDED WHEAT', title: 'Add milk or an alternative and top with sliced fruit', detail: 'NIH U.S. table avg.: 61 mg magnesium per 2 large shredded wheat biscuits.' },
    de: { label: 'WEIZENKISSEN', title: 'Mit Milch oder einer Alternative anrichten und mit Obst garnieren', detail: 'NIH-US-Tabellenmittel: 61 mg Magnesium je 2 große Shredded-Wheat-Kissen.' }
  },
  {
    id: 'whole-wheat-spaghetti-iron', category: 'grains',
    source: 'https://ods.od.nih.gov/factsheets/Iron-HealthProfessional/',
    en: { label: 'WHOLE WHEAT SPAGHETTI', title: 'Serve with your favorite vegetable sauce for an everyday meal', detail: 'NIH U.S. table avg.: 1 mg iron per 1 cup cooked whole wheat spaghetti.' },
    de: { label: 'VOLLKORNSPAGHETTI', title: 'Mit einer Gemüsesauce nach Wahl als Alltagsmahlzeit servieren', detail: 'NIH-US-Tabellenmittel: 1 mg Eisen je 1 Tasse gekochte Vollkornspaghetti.' }
  },
  {
    id: 'whole-wheat-pasta-copper', category: 'grains',
    source: 'https://ods.od.nih.gov/factsheets/Copper-HealthProfessional/',
    en: { label: 'WHOLE WHEAT PASTA', title: 'Toss with vegetables and a simple dressing or sauce', detail: 'NIH U.S. table avg.: 263 µg copper per 1 cup cooked whole wheat pasta.' },
    de: { label: 'VOLLKORNNUDELN', title: 'Mit Gemüse und einem einfachen Dressing oder einer Sauce vermengen', detail: 'NIH-US-Tabellenmittel: 263 µg Kupfer je 1 Tasse gekochte Vollkornnudeln.' }
  },
  {
    id: 'whole-wheat-macaroni-thiamin', category: 'grains',
    source: 'https://ods.od.nih.gov/factsheets/Thiamin-HealthProfessional/',
    en: { label: 'WHOLE WHEAT MACARONI', title: 'Cook as directed on the pack and combine with sauce before baking', detail: 'NIH U.S. table avg.: 0.2 mg thiamin per 1 cup cooked whole wheat macaroni.' },
    de: { label: 'VOLLKORNMAKKARONI', title: 'Nach Packungsangabe garen und vor dem Backen mit Sauce vermengen', detail: 'NIH-US-Tabellenmittel: 0,2 mg Thiamin je 1 Tasse gekochte Vollkornmakkaroni.' }
  },
  {
    id: 'millet-copper', category: 'grains',
    source: 'https://ods.od.nih.gov/factsheets/Copper-HealthProfessional/',
    en: { label: 'MILLET', title: 'Spoon beside vegetables or use as a warm bowl base', detail: 'NIH U.S. table avg.: 280 µg copper per 1 cup cooked millet.' },
    de: { label: 'HIRSE', title: 'Zu Gemüse reichen oder als Grundlage für eine warme Bowl verwenden', detail: 'NIH-US-Tabellenmittel: 280 µg Kupfer je 1 Tasse gekochte Hirse.' }
  },
  {
    id: 'bulgur-vitamin-b6', category: 'grains',
    source: 'https://ods.od.nih.gov/factsheets/VitaminB6-HealthProfessional/',
    en: { label: 'BULGUR', title: 'Fluff the cooked grains and top with chopped vegetables and herbs', detail: 'NIH U.S. table avg.: 0.2 mg vitamin B6 per 1 cup cooked bulgur.' },
    de: { label: 'BULGUR', title: 'Gegartes Getreide auflockern und mit Gemüse und Kräutern garnieren', detail: 'NIH-US-Tabellenmittel: 0,2 mg Vitamin B6 je 1 Tasse gekochter Bulgur.' }
  },
  {
    id: 'corn-tortilla-calcium', category: 'grains',
    source: 'https://ods.od.nih.gov/factsheets/Calcium-HealthProfessional/',
    en: { label: 'CORN TORTILLA', title: 'Fill with beans and chopped vegetables, fold and serve', detail: 'NIH U.S. table avg.: 46 mg calcium per 1 6-inch corn tortilla.' },
    de: { label: 'MAISTORTILLA', title: 'Mit Bohnen und gehacktem Gemüse füllen, zusammenklappen und servieren', detail: 'NIH-US-Tabellenmittel: 46 mg Calcium je 1 Maistortilla (15 cm).' }
  },
  {
    id: 'wheat-germ-folate', category: 'grains',
    source: 'https://ods.od.nih.gov/factsheets/Folate-HealthProfessional/',
    en: { label: 'WHEAT GERM', title: 'Add a spoonful to cereal, porridge or yoghurt before eating', detail: 'NIH folate table lists: 2 tbsp wheat germ.' },
    de: { label: 'WEIZENKEIME', title: 'Vor dem Essen einen Löffel ins Müsli, Porridge oder den Joghurt geben', detail: 'NIH-Tabelle Folat: 2 Esslöffel Weizenkeime.' }
  },

  // ---------- NUTS & SEEDS ----------
  {
    id: 'pumpkin-seeds-magnesium', category: 'nuts-seeds',
    source: 'https://ods.od.nih.gov/factsheets/Magnesium-HealthProfessional/',
    en: { label: 'PUMPKIN SEEDS', title: 'Sprinkle pumpkin seeds over soup for crunch.', detail: 'NIH U.S. table avg.: 156 mg magnesium per 1 oz roasted pumpkin seeds.' },
    de: { label: 'KÜRBISKERNE', title: 'Kürbiskerne für mehr Biss über die Suppe streuen.', detail: 'NIH-US-Tabellenmittel: 156 mg Magnesium je 28 g geröstete Kürbiskerne.' }
  },
  {
    id: 'pumpkin-seeds-zinc', category: 'nuts-seeds',
    source: 'https://ods.od.nih.gov/factsheets/Zinc-HealthProfessional/',
    en: { label: 'PUMPKIN SEEDS', title: 'Portion the roasted seeds into a small container to take along', detail: 'NIH U.S. table avg.: 2.2 mg zinc per 1 oz roasted pumpkin seeds.' },
    de: { label: 'KÜRBISKERNE', title: 'Geröstete Kerne in eine kleine Dose für unterwegs portionieren', detail: 'NIH-US-Tabellenmittel: 2,2 mg Zink je 28 g geröstete Kürbiskerne.' }
  },
  {
    id: 'chia-seeds-magnesium', category: 'nuts-seeds',
    source: 'https://ods.od.nih.gov/factsheets/Magnesium-HealthProfessional/',
    en: { label: 'CHIA SEEDS', title: 'Mix in before eating and adjust the texture to your liking', detail: 'NIH U.S. table avg.: 111 mg magnesium per 1 oz chia seeds.' },
    de: { label: 'CHIASAMEN', title: 'Vor dem Essen einrühren und die Konsistenz nach Wunsch anpassen', detail: 'NIH-US-Tabellenmittel: 111 mg Magnesium je 28 g Chiasamen.' }
  },
  {
    id: 'chia-seeds-ala', category: 'nuts-seeds',
    source: 'https://ods.od.nih.gov/factsheets/Omega3FattyAcids-HealthProfessional/',
    en: { label: 'CHIA SEEDS', title: 'Stir chia into oats and liquid; chill overnight.', detail: 'NIH U.S. table avg.: 5.06 g omega-3 ALA per 1 oz chia seeds.' },
    de: { label: 'CHIASAMEN', title: 'Chia in Haferflocken und Flüssigkeit rühren, über Nacht kühlen.', detail: 'NIH-US-Tabellenmittel: 5,06 g Omega-3-ALA je 28 g Chiasamen.' }
  },
  {
    id: 'chia-seeds-calcium', category: 'nuts-seeds',
    source: 'https://ods.od.nih.gov/factsheets/Calcium-HealthProfessional/',
    en: { label: 'CHIA SEEDS', title: 'Scatter over fruit, yoghurt or porridge just before serving', detail: 'NIH U.S. table avg.: 76 mg calcium per 1 tbsp chia seeds.' },
    de: { label: 'CHIASAMEN', title: 'Kurz vor dem Servieren über Obst, Joghurt oder Porridge streuen', detail: 'NIH-US-Tabellenmittel: 76 mg Calcium je 1 Esslöffel Chiasamen.' }
  },
  {
    id: 'almonds-magnesium', category: 'nuts-seeds',
    source: 'https://ods.od.nih.gov/factsheets/Magnesium-HealthProfessional/',
    en: { label: 'ALMONDS', title: 'Pack almonds for a snack or chop over breakfast.', detail: 'NIH U.S. table avg.: 80 mg magnesium per 1 oz dry-roasted almonds.' },
    de: { label: 'MANDELN', title: 'Mandeln als Snack einpacken oder gehackt ins Frühstück geben.', detail: 'NIH-US-Tabellenmittel: 80 mg Magnesium je 28 g trocken geröstete Mandeln.' }
  },
  {
    id: 'almonds-vitamin-e', category: 'nuts-seeds',
    source: 'https://ods.od.nih.gov/factsheets/VitaminE-HealthProfessional/',
    en: { label: 'ALMONDS', title: 'Sprinkle almonds over oats or yoghurt.', detail: 'NIH U.S. table avg.: 6.8 mg vitamin E per 1 oz dry-roasted almonds.' },
    de: { label: 'MANDELN', title: 'Mandeln über Haferflocken oder Joghurt streuen.', detail: 'NIH-US-Tabellenmittel: 6,8 mg Vitamin E je 28 g trocken geröstete Mandeln.' }
  },
  {
    id: 'cashews-magnesium', category: 'nuts-seeds',
    source: 'https://ods.od.nih.gov/factsheets/Magnesium-HealthProfessional/',
    en: { label: 'CASHEWS', title: 'Chop a small portion and scatter over the finished dish', detail: 'NIH U.S. table avg.: 74 mg magnesium per 1 oz dry-roasted cashews.' },
    de: { label: 'CASHEWKERNE', title: 'Eine kleine Portion hacken und über das fertige Gericht streuen', detail: 'NIH-US-Tabellenmittel: 74 mg Magnesium je 28 g trocken geröstete Cashewkerne.' }
  },
  {
    id: 'cashews-copper', category: 'nuts-seeds',
    source: 'https://ods.od.nih.gov/factsheets/Copper-HealthProfessional/',
    en: { label: 'CASHEWS', title: 'Portion cashews into a small container to take along.', detail: 'NIH U.S. table avg.: 629 µg copper per 1 oz dry-roasted cashews.' },
    de: { label: 'CASHEWKERNE', title: 'Cashewkerne für unterwegs in eine kleine Dose füllen.', detail: 'NIH-US-Tabellenmittel: 629 µg Kupfer je 28 g trocken geröstete Cashewkerne.' }
  },
  {
    id: 'cashews-iron', category: 'nuts-seeds',
    source: 'https://ods.od.nih.gov/factsheets/Iron-HealthProfessional/',
    en: { label: 'CASHEWS', title: 'Add near serving time for a crunchy contrast', detail: 'NIH U.S. table avg.: 2 mg iron per 1 oz (18) oil-roasted cashews.' },
    de: { label: 'CASHEWKERNE', title: 'Kurz vor dem Servieren für einen knackigen Kontrast hinzufügen', detail: 'NIH-US-Tabellenmittel: 2 mg Eisen je 28 g (18 Stück) in Öl geröstete Cashews.' }
  },
  {
    id: 'sunflower-seeds-vitamin-e', category: 'nuts-seeds',
    source: 'https://ods.od.nih.gov/factsheets/VitaminE-HealthProfessional/',
    en: { label: 'SUNFLOWER SEEDS', title: 'Sprinkle over salad or portion separately for a crunchy snack', detail: 'NIH U.S. table avg.: 7.4 mg vitamin E per 1 oz dry-roasted sunflower seeds.' },
    de: { label: 'SONNENBLUMENKERNE', title: 'Über Salat streuen oder separat als knackigen Snack portionieren', detail: 'NIH-US-Tabellenmittel: 7,4 mg Vitamin E je 28 g trocken geröstete Sonnenblumenkerne.' }
  },
  {
    id: 'sunflower-seeds-copper', category: 'nuts-seeds',
    source: 'https://ods.od.nih.gov/factsheets/Copper-HealthProfessional/',
    en: { label: 'SUNFLOWER SEEDS', title: 'Add just before serving for a little crunch', detail: 'NIH U.S. table avg.: 615 µg copper per ¼ cup toasted sunflower seed kernels.' },
    de: { label: 'SONNENBLUMENKERNE', title: 'Für etwas Biss erst kurz vor dem Servieren hinzufügen', detail: 'NIH-US-Tabellenmittel: 615 µg Kupfer je ¼ Tasse geröstete Sonnenblumenkerne.' }
  },
  {
    id: 'hazelnuts-vitamin-e', category: 'nuts-seeds',
    source: 'https://ods.od.nih.gov/factsheets/VitaminE-HealthProfessional/',
    en: { label: 'HAZELNUTS', title: 'Sprinkle over cereal or yoghurt for a quick nutty finish', detail: 'NIH U.S. table avg.: 4.3 mg vitamin E per 1 oz dry-roasted hazelnuts.' },
    de: { label: 'HASELNÜSSE', title: 'Für eine schnelle nussige Note über Müsli oder Joghurt streuen', detail: 'NIH-US-Tabellenmittel: 4,3 mg Vitamin E je 28 g trocken geröstete Haselnüsse.' }
  },
  {
    id: 'hazelnuts-manganese', category: 'nuts-seeds',
    source: 'https://ods.od.nih.gov/factsheets/Manganese-HealthProfessional/',
    en: { label: 'HAZELNUTS', title: 'Serve a small portion with fruit for an easy bite', detail: 'NIH U.S. table avg.: 1.6 mg manganese per 1 oz dry-roasted hazelnuts.' },
    de: { label: 'HASELNÜSSE', title: 'Eine kleine Portion mit Obst als unkomplizierten Snack reichen', detail: 'NIH-US-Tabellenmittel: 1,6 mg Mangan je 28 g trocken geröstete Haselnüsse.' }
  },
  {
    id: 'pecans-manganese', category: 'nuts-seeds',
    source: 'https://ods.od.nih.gov/factsheets/Manganese-HealthProfessional/',
    en: { label: 'PECANS', title: 'Chop and scatter over oats or fruit before serving', detail: 'NIH U.S. table avg.: 1.1 mg manganese per 1 oz dry-roasted pecans.' },
    de: { label: 'PEKANNÜSSE', title: 'Vor dem Servieren hacken und über Haferflocken oder Obst streuen', detail: 'NIH-US-Tabellenmittel: 1,1 mg Mangan je 28 g trocken geröstete Pekannüsse.' }
  },
  {
    id: 'walnuts-ala', category: 'nuts-seeds',
    source: 'https://ods.od.nih.gov/factsheets/Omega3FattyAcids-HealthProfessional/',
    en: { label: 'WALNUTS', title: 'Keep pieces large enough to add a satisfying crunch', detail: 'NIH U.S. table avg.: 2.57 g omega-3 ALA per 1 oz English walnuts.' },
    de: { label: 'WALNÜSSE', title: 'Die Stücke für angenehmen Biss groß genug lassen', detail: 'NIH-US-Tabellenmittel: 2,57 g Omega-3-ALA je 28 g Walnüsse.' }
  },
  {
    id: 'flaxseed-ala', category: 'nuts-seeds',
    source: 'https://ods.od.nih.gov/factsheets/Omega3FattyAcids-HealthProfessional/',
    en: { label: 'FLAXSEED', title: 'Add to porridge or yoghurt for a simple change of texture', detail: 'NIH U.S. table avg.: 2.35 g omega-3 ALA per 1 tbsp whole flaxseed.' },
    de: { label: 'LEINSAMEN', title: 'Für eine andere Konsistenz in Porridge oder Joghurt geben', detail: 'NIH-US-Tabellenmittel: 2,35 g Omega-3-ALA je 1 Esslöffel ganze Leinsamen.' }
  },
  {
    id: 'sesame-seeds-copper', category: 'nuts-seeds',
    source: 'https://ods.od.nih.gov/factsheets/Copper-HealthProfessional/',
    en: { label: 'SESAME SEEDS', title: 'Add a pinch to vegetables, noodles or rice before serving', detail: 'NIH U.S. table avg.: 147 µg copper per ¼ cup sesame seeds.' },
    de: { label: 'SESAM', title: 'Vor dem Servieren eine Prise über Gemüse, Nudeln oder Reis geben', detail: 'NIH-US-Tabellenmittel: 147 µg Kupfer je ¼ Tasse Sesam.' }
  },
  {
    id: 'pine-nuts-vitamin-k', category: 'nuts-seeds',
    source: 'https://ods.od.nih.gov/factsheets/VitaminK-HealthProfessional/',
    en: { label: 'PINE NUTS', title: 'Scatter over the assembled salad just before serving', detail: 'NIH U.S. table avg.: 15 µg vitamin K per 1 oz dried pine nuts.' },
    de: { label: 'PINIENKERNE', title: 'Kurz vor dem Servieren über den angerichteten Salat streuen', detail: 'NIH-US-Tabellenmittel: 15 µg Vitamin K je 28 g getrocknete Pinienkerne.' }
  }
];
