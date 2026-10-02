const factCanvas = document.querySelector('#fact-canvas');

if (factCanvas) {
  const german = document.documentElement.lang === 'de';
  const facts = typeof foodFacts === 'undefined' ? [] : foodFacts;
  const foodVisuals = {
    'RED PEPPER': { icon: 'pepper', hue: 12 },
    ORANGE: { icon: 'orange', hue: 27 },
    KIWIFRUIT: { icon: 'kiwi', hue: 91 },
    'GREEN PEPPER': { icon: 'green-pepper', hue: 133 },
    BROCCOLI: { icon: 'broccoli', hue: 139 },
    STRAWBERRIES: { icon: 'strawberry', hue: 352 },
    'BRUSSELS SPROUTS': { icon: 'sprouts', hue: 111 },
    GRAPEFRUIT: { icon: 'citrus', hue: 347 },
    CANTALOUPE: { icon: 'melon', hue: 33 },
    CAULIFLOWER: { icon: 'cauliflower', hue: 42 },
    'SWEET POTATO': { icon: 'tuber', hue: 24, color: '#d27e56' },
    CARROTS: { icon: 'carrot', hue: 30 },
    SPINACH: { icon: 'spinach', hue: 147 },
    MANGO: { icon: 'mango', hue: 39 },
    'DRIED APRICOTS': { icon: 'dried-fruit', hue: 22, color: '#df823d' },
    'ACORN SQUASH': { icon: 'squash', hue: 40 },
    PRUNES: { icon: 'dried-fruit', hue: 276, color: '#68456e' },
    RAISINS: { icon: 'dried-fruit', hue: 288, color: '#82658b', small: true },
    POTATO: { icon: 'tuber', hue: 32, color: '#d5b782' },
    BANANA: { icon: 'banana', hue: 49 },
    ASPARAGUS: { icon: 'asparagus', hue: 124 },
    ROMAINE: { icon: 'leafy', hue: 105 },
    AVOCADO: { icon: 'avocado', hue: 85 },
    'MUSTARD GREENS': { icon: 'leafy', hue: 66 },
    'GREEN PEAS': { icon: 'pea-pod', hue: 106 },
    PAPAYA: { icon: 'papaya', hue: 16 },
    COLLARDS: { icon: 'leafy', hue: 135 },
    'TURNIP GREENS': { icon: 'leafy', hue: 159 },
    KALE: { icon: 'leafy', hue: 120 },
    BLUEBERRIES: { icon: 'blueberries', hue: 227 },
    'BOK CHOY': { icon: 'leafy', hue: 171 },
    PINEAPPLE: { icon: 'pineapple', hue: 53 },
    LENTILS: { icon: 'beans', hue: 25, color: '#bd9365', small: true },
    'WHITE BEANS': { icon: 'beans', hue: 45, color: '#efe2b8' },
    'KIDNEY BEANS': { icon: 'beans', hue: 5, color: '#ad615a' },
    'BLACK BEANS': { icon: 'beans', hue: 260, color: '#38303e' },
    'BLACK-EYED PEAS': { icon: 'beans', hue: 51, color: '#e5d4a6' },
    CHICKPEAS: { icon: 'beans', hue: 34, color: '#d8b77d' },
    SOYBEANS: { icon: 'beans', hue: 72, color: '#d8cf91' },
    TOFU: { icon: 'tofu', hue: 59 },
    EDAMAME: { icon: 'pea-pod', hue: 112 },
    NATTO: { icon: 'beans', hue: 55, color: '#b88a54' },
    PEANUTS: { icon: 'peanut', hue: 28 },
    'PINTO BEANS': { icon: 'beans', hue: 18, color: '#c89672' },
    'BAKED BEANS': { icon: 'beans', hue: 9, color: '#c67249' },
    'BROWN RICE': { icon: 'grains', hue: 36, color: '#ccb582' },
    'WHOLE WHEAT BREAD': { icon: 'bread', hue: 31 },
    OATMEAL: { icon: 'oatmeal', hue: 44 },
    'SHREDDED WHEAT': { icon: 'grains', hue: 48, color: '#cfb276' },
    'WHOLE WHEAT SPAGHETTI': { icon: 'pasta', hue: 19 },
    'WHOLE WHEAT PASTA': { icon: 'pasta', hue: 29 },
    'WHOLE WHEAT MACARONI': { icon: 'pasta', hue: 37 },
    MILLET: { icon: 'grains', hue: 63, color: '#e6d4a0' },
    BULGUR: { icon: 'grains', hue: 43, color: '#bbaa84' },
    'CORN TORTILLA': { icon: 'tortilla', hue: 50 },
    'WHEAT GERM': { icon: 'grains', hue: 35, color: '#b89561' },
    'PUMPKIN SEEDS': { icon: 'seeds', hue: 70, color: '#9faf75' },
    'CHIA SEEDS': { icon: 'seeds', hue: 115, color: '#484344', small: true },
    ALMONDS: { icon: 'nuts', hue: 23, color: '#bf8454' },
    CASHEWS: { icon: 'nuts', hue: 38, color: '#e0c596' },
    'SUNFLOWER SEEDS': { icon: 'seeds', hue: 47, color: '#b4a187' },
    HAZELNUTS: { icon: 'nuts', hue: 15, color: '#b77848' },
    PECANS: { icon: 'nuts', hue: 8, color: '#a1694c' },
    WALNUTS: { icon: 'walnuts', hue: 20 },
    FLAXSEED: { icon: 'seeds', hue: 69, color: '#a88151', small: true },
    'SESAME SEEDS': { icon: 'seeds', hue: 58, color: '#e8ddb4', small: true },
    'PINE NUTS': { icon: 'seeds', hue: 82, color: '#e5d3a5' }
  };

  const context = factCanvas.getContext('2d');
  const options = document.querySelector('.fact-options');
  const search = document.querySelector('#fact-search');
  const category = document.querySelector('#fact-category');
  const results = document.querySelector('.fact-results');
  const pageLabel = document.querySelector('.fact-page');
  const previous = document.querySelector('.fact-prev');
  const next = document.querySelector('.fact-next');
  const title = document.querySelector('[data-fact-title]');
  const description = document.querySelector('[data-fact-description]');
  const source = document.querySelector('[data-fact-source]');
  const status = document.querySelector('.fact-status');
  const download = document.querySelector('.fact-download');
  const share = document.querySelector('.fact-share');
  const shareHelp = document.querySelector('.fact-share-help');
  const copyCaption = document.querySelector('.fact-copy-caption');
  const copyImage = document.querySelector('.fact-copy-image');
  let active = facts[0] || null;
  let filtered = facts;
  let page = 0;
  const pageSize = 12;
  let exportBlob = null;
  let exportRevision = 0;

  function wrapText(text, maxWidth, font) {
    context.font = font;
    const lines = [];
    let line = '';
    for (const word of text.split(' ')) {
      const next = line ? `${line} ${word}` : word;
      if (line && context.measureText(next).width > maxWidth) {
        lines.push(line);
        line = word;
      } else {
        line = next;
      }
    }
    if (line) lines.push(line);
    return lines;
  }

  function drawPieces(visual) {
    const count = visual.small ? 35 : visual.icon === 'grains' ? 27 : 11;
    const size = visual.small ? 12 : visual.icon === 'seeds' || visual.icon === 'grains' ? 18 : 31;
    for (let index = 0; index < count; index++) {
      const angle = index * 2.4;
      const radius = Math.sqrt(index / count) * 137;
      context.save();
      context.translate(Math.cos(angle) * radius, Math.sin(angle) * radius * .72);
      context.rotate(angle);
      context.strokeStyle = 'rgba(255, 248, 233, .38)';
      context.lineWidth = 2;
      oval(0, 0, size * (visual.icon === 'nuts' ? 1.1 : .65), size, visual.color);
      context.stroke();
      context.restore();
    }
  }

  function oval(x, y, width, height, color, rotation = 0) {
    context.fillStyle = color;
    context.beginPath();
    context.ellipse(x, y, width, height, rotation, 0, Math.PI * 2);
    context.fill();
    context.save();
    context.clip();
    const light = context.createLinearGradient(x - width, y - height, x + width, y + height);
    light.addColorStop(0, 'rgba(255, 250, 225, .23)');
    light.addColorStop(.55, 'rgba(255, 250, 225, 0)');
    light.addColorStop(1, 'rgba(41, 34, 27, .16)');
    context.fillStyle = light;
    context.fillRect(x - width * 2, y - height * 2, width * 4, height * 4);
    context.restore();
  }

  function leaf(x, y, rotation, color = '#9cbd83') {
    context.save();
    context.translate(x, y);
    context.rotate(rotation);
    oval(0, -53, 33, 67, color, -.15);
    context.strokeStyle = '#e4edc1';
    context.lineWidth = 4;
    context.beginPath();
    context.moveTo(0, 23);
    context.quadraticCurveTo(5, -42, 0, -103);
    context.stroke();
    context.restore();
  }

  function drawProduce(visual) {
    const kind = visual.icon;
    context.lineCap = 'round';
    if (kind === 'banana') {
      context.rotate(-.31);
      const bananaSkin = context.createLinearGradient(-110, -100, 65, 120);
      bananaSkin.addColorStop(0, '#fff0ac');
      bananaSkin.addColorStop(.47, '#f8d76b');
      bananaSkin.addColorStop(1, '#d6ac50');
      context.fillStyle = bananaSkin;
      context.beginPath();
      context.moveTo(-116, -95);
      context.bezierCurveTo(-160, 25, -42, 141, 77, 116);
      context.bezierCurveTo(138, 105, 153, 70, 156, 41);
      context.bezierCurveTo(40, 88, -75, 28, -90, -104);
      context.closePath();
      context.fill();
      context.strokeStyle = '#fff2c0';
      context.lineWidth = 6;
      context.beginPath();
      context.moveTo(-99, -52);
      context.bezierCurveTo(-56, 55, 42, 121, 131, 79);
      context.stroke();
      context.strokeStyle = 'rgba(136, 99, 53, .28)';
      context.lineWidth = 3;
      for (const offset of [-8, 12]) {
        context.beginPath();
        context.moveTo(-87 + offset, -47);
        context.bezierCurveTo(-55 + offset, 23, 51, 105, 118, 84);
        context.stroke();
      }
      for (const [x, y] of [[-62, 24], [-24, 68], [13, 91], [43, 90], [75, 82]]) {
        oval(x, y, 3, 6, 'rgba(126, 89, 47, .35)', -.4);
      }
      oval(-105, -100, 17, 9, '#7c7950', -.3);
      oval(150, 42, 8, 13, '#8f7d50', -.2);
    } else if (kind === 'orange' || kind === 'kiwi') {
      oval(0, 5, 114, 111, kind === 'orange' ? '#e9a45b' : '#a8a073');
      oval(0, 5, 97, 95, kind === 'orange' ? '#f5bf77' : '#b8d088');
      if (kind === 'kiwi') {
        oval(0, 5, 35, 32, '#f6e6af');
        for (let seed = 0; seed < 19; seed++) {
          const angle = seed * Math.PI * 2 / 19;
          oval(Math.cos(angle) * 62, 5 + Math.sin(angle) * 58, 4, 8, '#526443', angle);
        }
      } else {
        context.strokeStyle = '#fff0c4';
        context.lineWidth = 4;
        for (let slice = 0; slice < 8; slice++) {
          const angle = slice * Math.PI / 4;
          context.beginPath();
          context.moveTo(0, 5);
          context.lineTo(Math.cos(angle) * 91, 5 + Math.sin(angle) * 91);
          context.stroke();
        }
        oval(0, 5, 9, 9, '#fff0c4');
      }
      leaf(11, -99, 1.3, '#91b67b');
    } else if (kind === 'mango' || kind === 'avocado') {
      context.rotate(-.3);
      oval(0, 5, 100, 130, kind === 'mango' ? '#db9d57' : '#72956e', -.3);
      oval(4, 8, 85, 112, kind === 'mango' ? '#efbc70' : '#c9d391', -.3);
      if (kind === 'avocado') oval(14, 43, 34, 36, '#a6774e');
      else {
        context.strokeStyle = '#f9d89a';
        context.lineWidth = 5;
        context.beginPath();
        context.moveTo(-40, -60);
        context.quadraticCurveTo(28, -85, 55, -24);
        context.stroke();
      }
      leaf(-12, -107, 1, '#9ab87b');
    } else if (kind === 'strawberry') {
      for (const [x, y, size] of [[-62, 7, .8], [57, -3, .9], [5, 36, 1]]) {
        context.save();
        context.translate(x, y);
        context.scale(size, size);
        context.fillStyle = '#d97e72';
        context.beginPath();
        context.moveTo(-57, -51);
        context.bezierCurveTo(-115, 8, -30, 114, 0, 121);
        context.bezierCurveTo(30, 114, 115, 8, 57, -51);
        context.quadraticCurveTo(0, -84, -57, -51);
        context.fill();
        for (let seed = 0; seed < 12; seed++) {
          oval((seed % 4 - 1.5) * 25, (Math.floor(seed / 4) - 1) * 33 + 7, 3, 6, '#f9d5a0');
        }
        leaf(0, -47, .9, '#94b580');
        context.restore();
      }
    } else if (kind === 'carrot') {
      for (const [x, tilt] of [[-55, -.35], [58, .25]]) {
        context.save();
        context.translate(x, 5);
        context.rotate(tilt);
        context.fillStyle = '#e9a36c';
        context.beginPath();
        context.moveTo(-48, -51);
        context.quadraticCurveTo(0, -94, 48, -51);
        context.quadraticCurveTo(28, 28, 0, 124);
        context.quadraticCurveTo(-32, 28, -48, -51);
        context.fill();
        leaf(-22, -80, -.7);
        leaf(19, -84, .7);
        context.restore();
      }
    } else if (kind === 'tuber') {
      context.rotate(-.35);
      oval(0, 0, 140, 86, visual.color);
      context.fillStyle = '#fff0cc';
      for (const [x, y] of [[-82, -24], [-43, 24], [29, -36], [83, 18]]) {
        oval(x, y, 5, 3, '#fff0cc');
      }
    } else if (kind === 'blueberries') {
      for (const [x, y] of [[-60, -37], [40, -68], [93, 18], [-98, 51], [-8, 60]]) {
        oval(x, y, 61, 59, '#7f90be');
        oval(x - 7, y - 9, 16, 12, '#a5b5d6');
        oval(x + 8, y + 9, 8, 6, '#526d9f');
      }
      leaf(40, -105, .8);
    } else if (kind === 'pineapple') {
      for (const angle of [-.8, -.35, .15, .6]) leaf(angle * 80, -94, angle, '#a4bd80');
      context.rotate(-.15);
      oval(0, 21, 91, 111, '#e6bb70');
      context.save();
      context.beginPath();
      context.ellipse(0, 21, 91, 111, 0, 0, Math.PI * 2);
      context.clip();
      context.strokeStyle = '#f6dea6';
      context.lineWidth = 5;
      for (let offset = -160; offset <= 160; offset += 40) {
        context.beginPath();
        context.moveTo(offset - 60, -80);
        context.lineTo(offset + 60, 115);
        context.moveTo(offset + 60, -80);
        context.lineTo(offset - 60, 115);
        context.stroke();
      }
      context.restore();
    } else if (kind === 'pea-pod') {
      context.rotate(-.4);
      oval(0, 0, 149, 57, '#9fbf81');
      oval(0, 12, 136, 34, '#c6dba0');
      for (let pea = -2; pea <= 2; pea++) oval(pea * 48, 9, 25, 25, '#8db470');
      context.strokeStyle = '#e3edbc';
      context.lineWidth = 5;
      context.beginPath();
      context.moveTo(-134, 16);
      context.quadraticCurveTo(0, 88, 136, 16);
      context.stroke();
    } else if (kind === 'sprouts') {
      for (const [x, y, radius] of [[-66, 21, 71], [64, 7, 76], [0, -53, 68]]) {
        oval(x, y, radius, radius * .86, '#9cba83');
        context.strokeStyle = '#d9e6b5';
        context.lineWidth = 5;
        context.beginPath();
        context.moveTo(x - radius * .5, y - 5);
        context.quadraticCurveTo(x, y - radius * .6, x + radius * .5, y + 14);
        context.stroke();
      }
    } else if (kind === 'leafy' || kind === 'broccoli') {
      if (kind === 'broccoli') {
        context.fillStyle = '#b9d3a0';
        context.fillRect(-26, 28, 52, 107);
        for (const [x, y, r] of [[-65, -12, 64], [7, -70, 74], [79, -1, 60], [1, 3, 76]]) {
          oval(x, y, r, r * .78, '#89ad82');
        }
      } else {
        for (const [x, rotation] of [[-78, -.8], [-28, -.25], [40, .35], [86, .8]]) {
          context.save();
          context.translate(x, 35);
          context.rotate(rotation);
          leaf(0, 0, 0, `hsl(${visual.hue} 31% 64%)`);
          context.restore();
        }
      }
    } else if (kind === 'peanut') {
      for (const [x, y, tilt] of [[-56, -29, -.4], [66, 29, .5]]) {
        context.save();
        context.translate(x, y);
        context.rotate(tilt);
        oval(0, -35, 47, 60, '#d7ab7c');
        oval(0, 35, 47, 60, '#d7ab7c');
        context.strokeStyle = '#f2d3a7';
        context.lineWidth = 4;
        for (const offset of [-25, 0, 25]) {
          context.beginPath();
          context.moveTo(-40, offset - 35);
          context.lineTo(40, offset + 35);
          context.stroke();
        }
        context.restore();
      }
    } else if (kind === 'bread' || kind === 'tortilla') {
      if (kind === 'bread') {
        context.fillStyle = '#ba8759';
        context.beginPath();
        context.moveTo(-120, 105);
        context.lineTo(-120, -37);
        context.bezierCurveTo(-133, -116, -31, -133, 0, -94);
        context.bezierCurveTo(52, -130, 137, -91, 120, -24);
        context.lineTo(120, 105);
        context.closePath();
        context.fill();
        context.fillStyle = '#efcf9c';
        context.fillRect(-99, -21, 198, 105);
      } else {
        context.rotate(-.26);
        oval(0, 0, 133, 99, '#e5c98d');
        for (const [x, y] of [[-56, -19], [52, -35], [19, 44]]) oval(x, y, 9, 5, '#c4a573');
      }
    } else if (kind === 'oatmeal' || kind === 'pasta') {
      context.fillStyle = '#efe2bb';
      context.beginPath();
      context.moveTo(-133, -34);
      context.lineTo(-111, 95);
      context.quadraticCurveTo(0, 142, 111, 95);
      context.lineTo(133, -34);
      context.closePath();
      context.fill();
      oval(0, -37, 130, 53, kind === 'oatmeal' ? '#caba91' : '#d8b479');
      if (kind === 'oatmeal') {
        for (let grain = 0; grain < 16; grain++) {
          const angle = grain * 2.4;
          const radius = Math.sqrt(grain) * 24;
          oval(Math.cos(angle) * radius, -37 + Math.sin(angle) * radius * .36, 10, 5, '#f3e3b7', angle);
        }
      } else {
        context.strokeStyle = '#f5d397';
        context.lineWidth = 9;
        for (const offset of [-65, -22, 22, 65]) {
          context.beginPath();
          context.moveTo(offset - 25, -53);
          context.bezierCurveTo(offset + 30, -105, offset - 30, -1, offset + 25, -28);
          context.stroke();
        }
      }
    } else {
      throw new Error(`No food illustration for ${kind}`);
    }
  }

  function drawFood(visual, label, accent) {
    context.save();
    context.translate(780, 288);
    const scale = visual.icon === 'banana' ? 1.35
      : ['beans', 'seeds', 'nuts', 'grains', 'dried-fruit'].includes(visual.icon) ? 1.28 : 1.2;
    context.scale(scale, scale);
    context.lineJoin = 'round';

    if (visual.icon === 'pepper' || visual.icon === 'green-pepper') {
      context.rotate(-0.17);
      const pepperSkin = context.createLinearGradient(-120, -110, 115, 130);
      if (visual.icon === 'green-pepper') {
        pepperSkin.addColorStop(0, '#d2e5a3');
        pepperSkin.addColorStop(.55, '#a6c987');
        pepperSkin.addColorStop(1, '#729a67');
      } else {
        pepperSkin.addColorStop(0, '#f3c09a');
        pepperSkin.addColorStop(.55, '#d99876');
        pepperSkin.addColorStop(1, '#b57461');
      }
      context.fillStyle = pepperSkin;
      context.beginPath();
      context.moveTo(-96, -53);
      context.bezierCurveTo(-174, -91, -194, 19, -127, 103);
      context.bezierCurveTo(-99, 150, -32, 110, -4, 112);
      context.bezierCurveTo(38, 134, 100, 111, 123, 64);
      context.bezierCurveTo(166, -23, 121, -107, 43, -67);
      context.bezierCurveTo(2, -99, -50, -95, -96, -53);
      context.fill();
      context.strokeStyle = visual.icon === 'green-pepper' ? '#d9e9ad' : '#f4c39e';
      context.lineWidth = 5;
      context.beginPath();
      context.moveTo(-58, -58);
      context.bezierCurveTo(-88, -12, -88, 70, -42, 103);
      context.moveTo(44, -68);
      context.bezierCurveTo(83, -18, 70, 72, 33, 109);
      context.stroke();
      context.strokeStyle = '#b7cf9b';
      context.lineWidth = 17;
      context.beginPath();
      context.moveTo(-8, -68);
      context.quadraticCurveTo(-5, -120, 31, -131);
      context.stroke();
    } else if (visual.icon === 'spinach') {
      context.rotate(-0.17);
      const leafColor = context.createLinearGradient(-110, -145, 85, 130);
      leafColor.addColorStop(0, '#d2e3ae');
      leafColor.addColorStop(.55, '#9dbf8c');
      leafColor.addColorStop(1, '#6d9c79');
      context.fillStyle = leafColor;
      context.beginPath();
      context.moveTo(-8, 135);
      context.bezierCurveTo(-226, 67, -171, -114, 47, -147);
      context.bezierCurveTo(189, -7, 126, 104, -8, 135);
      context.fill();
      context.strokeStyle = '#e2edc6';
      context.lineWidth = 5;
      context.beginPath();
      context.moveTo(-32, 172);
      context.quadraticCurveTo(5, 9, 47, -147);
      context.moveTo(-9, 83);
      context.lineTo(-107, -50);
      context.moveTo(16, 2);
      context.lineTo(100, -47);
      context.stroke();
    } else if (visual.icon === 'walnuts') {
      context.rotate(-0.17);
      const nutColor = context.createLinearGradient(-120, -115, 115, 115);
      nutColor.addColorStop(0, '#ecdbab');
      nutColor.addColorStop(.55, '#cfb889');
      nutColor.addColorStop(1, '#a88d65');
      context.fillStyle = nutColor;
      context.beginPath();
      context.ellipse(0, 0, 140, 112, -0.1, 0, Math.PI * 2);
      context.fill();
      context.strokeStyle = '#f2e3bd';
      context.lineWidth = 5;
      context.beginPath();
      context.moveTo(-12, -99);
      context.bezierCurveTo(-5, -47, -46, -39, -14, -7);
      context.bezierCurveTo(14, 25, -27, 41, -7, 104);
      context.moveTo(-69, -54);
      context.bezierCurveTo(-95, -6, -36, 18, -79, 51);
      context.moveTo(64, -59);
      context.bezierCurveTo(100, -11, 41, 21, 81, 54);
      context.stroke();
    } else if (['beans', 'seeds', 'nuts', 'grains', 'dried-fruit'].includes(visual.icon)) {
      drawPieces(visual);
    } else if (visual.icon === 'citrus' || visual.icon === 'melon') {
      const citrus = visual.icon === 'citrus';
      context.fillStyle = citrus ? '#f0a899' : '#9dbb77';
      context.beginPath();
      context.arc(0, 0, 115, 0, Math.PI * 2);
      context.fill();
      context.fillStyle = citrus ? '#e87482' : '#efaa68';
      context.beginPath();
      context.arc(0, 0, 101, 0, Math.PI * 2);
      context.fill();
      context.strokeStyle = '#fff0d2';
      context.lineWidth = 5;
      for (let wedge = 0; wedge < 9; wedge++) {
        const angle = wedge * Math.PI * 2 / 9;
        context.beginPath();
        context.moveTo(0, 0);
        context.lineTo(Math.cos(angle) * 97, Math.sin(angle) * 97);
        context.stroke();
      }
      context.fillStyle = '#fff0d2';
      context.beginPath();
      context.arc(0, 0, 12, 0, Math.PI * 2);
      context.fill();
    } else if (visual.icon === 'cauliflower') {
      context.fillStyle = '#91b78b';
      for (const side of [-1, 1]) {
        context.beginPath();
        context.ellipse(side * 72, 74, 60, 31, side * .6, 0, Math.PI * 2);
        context.fill();
      }
      context.fillStyle = '#f5e9d0';
      for (const [x, y, radius] of [[-65, 18, 49], [50, 11, 56], [0, -52, 62], [4, 31, 69]]) {
        context.beginPath();
        context.arc(x, y, radius, 0, Math.PI * 2);
        context.fill();
      }
    } else if (visual.icon === 'asparagus') {
      for (let spear = -2; spear <= 2; spear++) {
        const x = spear * 36;
        const top = -35 - Math.abs(spear) * 9;
        const stalk = context.createLinearGradient(x - 10, 0, x + 10, 0);
        stalk.addColorStop(0, '#749d70');
        stalk.addColorStop(.65, '#b8d397');
        stalk.addColorStop(1, '#789f70');
        context.fillStyle = stalk;
        context.fillRect(x - 10, top, 20, 170);
        context.fillStyle = spear % 2 ? '#91ba79' : '#b0cd8e';
        context.beginPath();
        context.moveTo(x - 13, top);
        context.bezierCurveTo(x - 24, top - 29, x - 13, top - 80, x, top - 100);
        context.bezierCurveTo(x + 13, top - 80, x + 24, top - 29, x + 13, top);
        context.closePath();
        context.fill();
        context.strokeStyle = '#d8e6b3';
        context.lineWidth = 3;
        for (const height of [26, 49, 70]) {
          context.beginPath();
          context.moveTo(x - 12, top - height);
          context.quadraticCurveTo(x, top - height + 8, x + 11, top - height - 3);
          context.stroke();
        }
      }
    } else if (visual.icon === 'papaya' || visual.icon === 'squash') {
      context.rotate(-.35);
      context.fillStyle = visual.icon === 'papaya' ? '#e6a154' : '#759866';
      context.beginPath();
      context.ellipse(0, 0, 143, 95, 0, 0, Math.PI * 2);
      context.fill();
      if (visual.icon === 'papaya') {
        context.fillStyle = '#f4bd72';
        context.beginPath();
        context.ellipse(0, 0, 126, 81, 0, 0, Math.PI * 2);
        context.fill();
        context.fillStyle = '#382b2b';
        for (let seed = 0; seed < 18; seed++) {
          context.beginPath();
          context.arc(Math.cos(seed * 2.4) * Math.sqrt(seed) * 10, Math.sin(seed * 2.4) * Math.sqrt(seed) * 6, 6, 0, Math.PI * 2);
          context.fill();
        }
      } else {
        context.strokeStyle = '#c8d39b';
        context.lineWidth = 5;
        for (const offset of [-65, -30, 30, 65]) {
          context.beginPath();
          context.moveTo(offset, -80);
          context.quadraticCurveTo(offset * 1.3, 0, offset, 80);
          context.stroke();
        }
      }
    } else if (visual.icon === 'tofu') {
      for (const [x, y] of [[-100, -80], [10, -25], [-80, 25]]) {
        context.fillStyle = '#fff4dc';
        context.fillRect(x, y, 96, 79);
        context.strokeStyle = '#dccba9';
        context.lineWidth = 4;
        context.strokeRect(x, y, 96, 79);
      }
    } else drawProduce(visual);
    context.restore();

    context.save();
    context.textAlign = 'center';
    context.fillStyle = '#fff8e9';
    context.font = 'bold 21px "Avenir Next", "Segoe UI", sans-serif';
    context.fillText(label, 780, 503, 330);
    context.restore();
  }

  function render() {
    const fact = active;
    const copy = fact[german ? 'de' : 'en'];
    const visual = foodVisuals[fact.en.label];
    const theme = {
      background: [`hsl(${visual.hue} 29% 24%)`, `hsl(${visual.hue} 29% 39%)`],
      accent: `hsl(${visual.hue} 66% 79%)`
    };
    const gradient = context.createLinearGradient(0, 0, 1080, 1350);
    gradient.addColorStop(0, theme.background[0]);
    gradient.addColorStop(1, theme.background[1]);
    context.fillStyle = gradient;
    context.fillRect(0, 0, 1080, 1350);

    context.strokeStyle = 'rgba(255, 250, 233, .26)';
    context.lineWidth = 2;
    context.strokeRect(51, 51, 978, 1248);
    context.beginPath();
    context.arc(780, 288, 262, 0, Math.PI * 2);
    context.stroke();
    context.beginPath();
    context.arc(780, 288, 236, 0, Math.PI * 2);
    context.stroke();
    drawFood(visual, copy.label, theme.accent);

    context.fillStyle = '#fff8e9';
    context.font = '42px Georgia, serif';
    context.fillText('✳', 105, 151);
    context.font = '76px "Allura", "Brush Script MT", cursive';
    context.fillText('Jasmina Klisch', 145, 161);
    context.font = 'bold 23px "Avenir Next", "Segoe UI", sans-serif';
    context.letterSpacing = '3px';
    context.fillStyle = theme.accent;
    context.fillText(german ? 'WISSENSWERTES ÜBER PFLANZEN' : 'PLANT-BASED FOOD FACTS', 105, 230);
    context.letterSpacing = '0px';

    context.fillStyle = theme.accent;
    context.font = 'bold 24px "Avenir Next", "Segoe UI", sans-serif';
    context.fillText(german ? 'GUT ZU WISSEN' : 'GOOD TO KNOW', 105, 550);
    context.font = 'bold 24px "Avenir Next", "Segoe UI", sans-serif';
    context.fillText(copy.label, 105, 602);

    let headingSize = 82;
    let headingLines = wrapText(copy.title, 865, `${headingSize}px Georgia, serif`);
    while (headingLines.length > 3 && headingSize > 48) {
      headingSize -= 3;
      headingLines = wrapText(copy.title, 865, `${headingSize}px Georgia, serif`);
    }
    context.fillStyle = '#fff8e9';
    context.font = `${headingSize}px Georgia, serif`;
    headingLines.forEach((line, index) => context.fillText(line, 105, 715 + index * (headingSize + 14)));

    const detailTop = Math.max(920, 715 + headingLines.length * (headingSize + 14) + 28);
    let detailSize = 34;
    let detailLines = wrapText(copy.detail, 850, `${detailSize}px "Avenir Next", "Segoe UI", sans-serif`);
    while (detailTop + detailLines.length * (detailSize + 8) > 1125 && detailSize > 25) {
      detailSize -= 2;
      detailLines = wrapText(copy.detail, 850, `${detailSize}px "Avenir Next", "Segoe UI", sans-serif`);
    }
    context.font = `${detailSize}px "Avenir Next", "Segoe UI", sans-serif`;
    context.fillStyle = '#fff4e0';
    detailLines.forEach((line, index) => context.fillText(line, 105, detailTop + index * (detailSize + 10)));

    context.strokeStyle = 'rgba(255, 250, 233, .55)';
    context.beginPath();
    context.moveTo(105, 1160);
    context.lineTo(975, 1160);
    context.stroke();
    context.font = 'bold 21px "Avenir Next", "Segoe UI", sans-serif';
    context.fillStyle = '#fff8e9';
    const sourceName = fact.source.includes('blsdb.de')
      ? 'MAX RUBNER-INSTITUT (2025), BLS 4.0'
      : fact.source.includes('ods.od.nih.gov') ? 'NIH OFFICE OF DIETARY SUPPLEMENTS' : 'USDA MYPLATE';
    context.fillText(`${german ? 'NÄHRSTOFFQUELLE' : 'NUTRIENT SOURCE'}: ${sourceName}`, 105, 1198);
    context.fillText(fact.source.includes('blsdb.de')
      ? `100 G ${german ? 'ROH' : 'RAW'} · CC BY 4.0 · DOI: 10.25826/Data20251217-134202-0`
      : `${german ? 'SEPARATER DE-DATENSATZ' : 'SEPARATE GERMAN DATASET'}: MRI BLS 4.0`, 105, 1230);
    context.fillStyle = theme.accent;
    context.fillText('Jasmina Klisch  /  apopovski.github.io/jasmina', 105, 1270);
    factCanvas.setAttribute('aria-label', german
      ? `Teilbare Jasmina-Klisch-Ernährungsgrafik: ${copy.title}`
      : `Shareable Jasmina Klisch nutrition graphic: ${copy.title}`);

    exportBlob = null;
    const revision = ++exportRevision;
    factCanvas.toBlob((blob) => {
      if (revision === exportRevision) {
        exportBlob = blob;
        if (!blob) {
          status.textContent = german
            ? 'Die Grafik konnte nicht erstellt werden. Bitte versuche es in einem anderen Browser.'
            : 'Could not create the graphic. Please try another browser.';
          console.error('Could not export food fact graphic: canvas produced no PNG.');
        }
      }
    }, 'image/png');
  }

  function showShareHelp() {
    shareHelp.hidden = false;
    share.setAttribute('aria-expanded', 'true');
  }

  function getCaption() {
    const label = active[german ? 'de' : 'en'].label;
    const regionalReference = active.source.includes('blsdb.de')
      ? `\nMax Rubner-Institut (2025), BLS 4.0 · CC BY 4.0: https://creativecommons.org/licenses/by/4.0/deed.de\nDOI: https://doi.org/10.25826/Data20251217-134202-0`
      : `\n${german ? 'Separater deutscher Referenzdatensatz' : 'Separate German reference dataset'}: https://blsdb.de/download`;
    return `${label} — ${title.textContent}\n${description.textContent}\n\n${german ? 'Nährstoffquelle' : 'Nutrient source'}: ${source.href}${regionalReference}\nhttps://apopovski.github.io/jasmina/${german ? 'de/' : ''}`;
  }

  function prepareGraphicNow() {
    if (exportBlob) return true;
    try {
      const encoded = factCanvas.toDataURL('image/png').split(',')[1];
      const bytes = Uint8Array.from(atob(encoded), (character) => character.charCodeAt(0));
      exportBlob = new Blob([bytes], { type: 'image/png' });
      return true;
    } catch (error) {
      status.textContent = german ? 'Die Grafik konnte nicht erstellt werden. Bitte versuche es in einem anderen Browser.' : 'Could not create the graphic. Please try another browser.';
      console.error('Could not export food fact graphic:', error);
      return false;
    }
  }

  function selectFact(fact) {
    active = fact;
    const copy = fact[german ? 'de' : 'en'];
    title.textContent = copy.title;
    description.textContent = copy.detail;
    source.href = fact.source;
    source.firstChild.textContent = fact.source.includes('blsdb.de')
      ? german ? 'Quelle: Max Rubner-Institut, BLS 4.0 ' : 'Source: Max Rubner Institute, BLS 4.0 '
      : fact.source.includes('ods.od.nih.gov')
        ? german ? 'Quelle: NIH Office of Dietary Supplements ' : 'Source: NIH Office of Dietary Supplements '
        : german ? 'Quelle: USDA MyPlate ' : 'Source: USDA MyPlate ';
    status.textContent = '';
    shareHelp.hidden = true;
    share.setAttribute('aria-expanded', 'false');
    options.querySelectorAll('.fact-option').forEach((option) => {
      option.setAttribute('aria-pressed', String(option.dataset.fact === fact.id));
    });
    render();
  }

  function renderList() {
    const start = page * pageSize;
    const slice = filtered.slice(start, start + pageSize);
    options.replaceChildren();
    slice.forEach((fact) => {
      const index = facts.indexOf(fact) + 1;
      const copy = fact[german ? 'de' : 'en'];
      const row = document.createElement('div');
      row.className = 'fact-row';
      const choose = document.createElement('button');
      choose.type = 'button';
      choose.className = 'fact-option';
      choose.dataset.fact = fact.id;
      choose.setAttribute('aria-pressed', String(active === fact));
      choose.textContent = `${String(index).padStart(2, '0')}  ${copy.label}: ${copy.title}`;
      choose.addEventListener('click', () => selectFact(fact));
      const quickShare = document.createElement('button');
      quickShare.type = 'button';
      quickShare.className = 'fact-option-share';
      quickShare.setAttribute('aria-label', german ? `Grafik teilen: ${copy.label} – ${copy.title}` : `Share graphic: ${copy.label} – ${copy.title}`);
      quickShare.title = german ? 'Grafik teilen' : 'Share graphic';
      quickShare.textContent = '↗';
      quickShare.addEventListener('click', () => {
        selectFact(fact);
        if (prepareGraphicNow()) share.click();
        if (shareHelp.hidden === false) {
          shareHelp.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }
      });
      row.append(choose, quickShare);
      options.append(row);
    });
    const maxPage = Math.max(1, Math.ceil(filtered.length / pageSize));
    results.textContent = german ? `${filtered.length} von ${facts.length} Fakten` : `${filtered.length} of ${facts.length} facts`;
    pageLabel.textContent = german ? `Seite ${page + 1} von ${maxPage}` : `Page ${page + 1} of ${maxPage}`;
    previous.disabled = page === 0;
    next.disabled = page + 1 >= maxPage;
    if (!filtered.length) {
      options.textContent = german ? 'Keine passenden Fakten. Versuche einen anderen Suchbegriff.' : 'No matching facts. Try another search.';
    }
  }

  function filterFacts() {
    const query = search.value.trim().toLocaleLowerCase(german ? 'de' : 'en');
    filtered = facts.filter((fact) => {
      if (category.value !== 'all' && fact.category !== category.value) return false;
      const copy = fact[german ? 'de' : 'en'];
      return `${copy.title} ${copy.detail} ${copy.label}`.toLocaleLowerCase(german ? 'de' : 'en').includes(query);
    });
    page = 0;
    if (filtered.length && !filtered.includes(active)) selectFact(filtered[0]);
    renderList();
  }

  search.addEventListener('input', filterFacts);
  category.addEventListener('change', filterFacts);
  previous.addEventListener('click', () => { page -= 1; renderList(); });
  next.addEventListener('click', () => { page += 1; renderList(); });

  download.addEventListener('click', () => {
    if (!prepareGraphicNow()) return;
    const url = URL.createObjectURL(exportBlob);
    const link = document.createElement('a');
    link.download = `jasmina-klisch-${active.id}-${german ? 'de' : 'en'}.png`;
    link.href = url;
    document.body.append(link);
    link.click();
    link.remove();
    setTimeout(() => URL.revokeObjectURL(url), 60000);
    status.textContent = german ? 'PNG-Download gestartet.' : 'PNG download started.';
  });

  share.addEventListener('click', () => {
    if (!prepareGraphicNow()) return;
    const file = new File([exportBlob], `jasmina-klisch-${active.id}-${german ? 'de' : 'en'}.png`, { type: 'image/png' });
    let canShareFile;
    try {
      canShareFile = navigator.share && navigator.canShare?.({ files: [file] });
    } catch (error) {
      showShareHelp();
      status.textContent = german ? 'Direktes Teilen ist fehlgeschlagen. Lade die Grafik herunter und teile sie in deiner App.' : 'Direct sharing failed. Download the graphic and post it in your app.';
      console.error('Could not check image sharing support:', error);
      return;
    }
    if (canShareFile) {
      try {
        const result = navigator.share({ files: [file], title: title.textContent, text: getCaption() });
        result.then(() => {
          status.textContent = german ? 'Grafik an die gewählte App übergeben.' : 'Graphic sent to the selected app.';
        }).catch((error) => {
          if (error.name !== 'AbortError') {
            showShareHelp();
            status.textContent = german ? 'Direktes Teilen ist fehlgeschlagen. Lade die Grafik herunter und teile sie in deiner App.' : 'Direct sharing failed. Download the graphic and post it in your app.';
            console.error('Could not share food fact graphic:', error);
          }
        });
      } catch (error) {
        showShareHelp();
        status.textContent = german ? 'Direktes Teilen ist fehlgeschlagen. Lade die Grafik herunter und teile sie in deiner App.' : 'Direct sharing failed. Download the graphic and post it in your app.';
        console.error('Could not share food fact graphic:', error);
      }
    } else {
      const opening = shareHelp.hidden;
      shareHelp.hidden = !opening;
      share.setAttribute('aria-expanded', String(opening));
    }
  });

  copyCaption.addEventListener('click', async () => {
    try {
      await navigator.clipboard.writeText(getCaption());
      status.textContent = german ? 'Begleittext kopiert. Lade die Grafik herunter und teile beides in deiner App.' : 'Caption copied. Download the graphic and post both in your app.';
    } catch (error) {
      status.textContent = german ? 'Kopieren fehlgeschlagen. Du kannst den Text oben manuell markieren und kopieren.' : 'Could not copy the caption. You can select and copy the text above instead.';
      console.error('Could not copy food fact caption:', error);
    }
  });

  if (navigator.clipboard?.write && typeof ClipboardItem !== 'undefined') {
    copyImage.hidden = false;
    copyImage.addEventListener('click', async () => {
      if (!prepareGraphicNow()) return;
      try {
        await navigator.clipboard.write([new ClipboardItem({ 'image/png': exportBlob })]);
        status.textContent = german ? 'Bild kopiert. Füge es in einen Beitrag ein.' : 'Image copied. Paste it into a post.';
      } catch (error) {
        status.textContent = german ? 'Kopieren fehlgeschlagen. Lade die Grafik stattdessen herunter.' : 'Could not copy the image. Please download it instead.';
        console.error('Could not copy food fact graphic:', error);
      }
    });
  }

  if (context && facts.length === 100 && facts.every((fact) =>
    fact.id && foodVisuals[fact.en?.label] && fact.source && fact.en?.title && fact.de?.title
  )) {
    renderList();
    render();
    document.fonts.ready.then(render);
  } else {
    search.disabled = true;
    category.disabled = true;
    previous.disabled = true;
    next.disabled = true;
    download.disabled = true;
    share.disabled = true;
    copyImage.hidden = true;
    const noCanvas = !context;
    status.textContent = german
      ? noCanvas ? 'Dein Browser unterstützt die Grafikvorschau leider nicht.' : 'Die Fakten konnten nicht geladen werden. Bitte lade die Seite erneut.'
      : noCanvas ? 'Your browser does not support the graphic preview.' : 'The facts could not be loaded. Please refresh the page.';
    if (!noCanvas) console.error('Nutrition facts data missing or invalid.');
  }
}
