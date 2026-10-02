const factCanvas = document.querySelector('#fact-canvas');

if (factCanvas) {
  const german = document.documentElement.lang === 'de';
  const facts = {
    pepper: {
      en: {
        title: 'Red bell peppers are rich in vitamin C.',
        detail: 'Vitamin C acts as an antioxidant and helps your body absorb iron from plant foods.',
        label: 'RED BELL PEPPER',
        alt: 'Shareable Jasmina nutrition fact graphic about red bell peppers'
      },
      de: {
        title: 'Rote Paprika enthält viel Vitamin C.',
        detail: 'Vitamin C wirkt als Antioxidans und verbessert die Aufnahme von Eisen aus pflanzlichen Lebensmitteln.',
        label: 'ROTE PAPRIKA',
        alt: 'Teilbare Jasmina-Ernährungsgrafik über rote Paprika'
      },
      source: 'https://ods.od.nih.gov/factsheets/VitaminC-Consumer/',
      background: ['#783f35', '#a7634c'],
      accent: '#f3be92',
      illustration: 'pepper'
    },
    spinach: {
      en: {
        title: 'Spinach naturally contains folate.',
        detail: 'Your body needs folate to make DNA and for cells to divide.',
        label: 'SPINACH',
        alt: 'Shareable Jasmina nutrition fact graphic about spinach'
      },
      de: {
        title: 'Spinat enthält von Natur aus Folat.',
        detail: 'Dein Körper braucht Folat, um DNA zu bilden und damit sich Zellen teilen können.',
        label: 'SPINAT',
        alt: 'Teilbare Jasmina-Ernährungsgrafik über Spinat'
      },
      source: 'https://ods.od.nih.gov/factsheets/Folate-Consumer/',
      background: ['#243c30', '#466c51'],
      accent: '#c9dea7',
      illustration: 'spinach'
    },
    walnuts: {
      en: {
        title: 'Walnuts provide plant-based omega-3s.',
        detail: 'They contain ALA, an essential fatty acid your body cannot make on its own.',
        label: 'WALNUTS',
        alt: 'Shareable Jasmina nutrition fact graphic about walnuts'
      },
      de: {
        title: 'Walnüsse liefern pflanzliches Omega-3.',
        detail: 'Sie enthalten ALA, eine essenzielle Fettsäure, die dein Körper nicht selbst herstellen kann.',
        label: 'WALNÜSSE',
        alt: 'Teilbare Jasmina-Ernährungsgrafik über Walnüsse'
      },
      source: 'https://ods.od.nih.gov/factsheets/Omega3FattyAcids-Consumer/',
      background: ['#514631', '#7d704d'],
      accent: '#e4d9a9',
      illustration: 'walnuts'
    }
  };

  const context = factCanvas.getContext('2d');
  const options = [...document.querySelectorAll('.fact-option')];
  const title = document.querySelector('[data-fact-title]');
  const description = document.querySelector('[data-fact-description]');
  const source = document.querySelector('[data-fact-source]');
  const status = document.querySelector('.fact-status');
  const download = document.querySelector('.fact-download');
  const share = document.querySelector('.fact-share');
  const shareHelp = document.querySelector('.fact-share-help');
  const copyCaption = document.querySelector('.fact-copy-caption');
  const copyImage = document.querySelector('.fact-copy-image');
  let active = 'pepper';
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

  function drawFood(kind, accent) {
    context.save();
    context.translate(780, 300);
    context.rotate(-0.17);
    context.lineJoin = 'round';

    if (kind === 'pepper') {
      context.fillStyle = '#d99876';
      context.beginPath();
      context.moveTo(-96, -53);
      context.bezierCurveTo(-174, -91, -194, 19, -127, 103);
      context.bezierCurveTo(-99, 150, -32, 110, -4, 112);
      context.bezierCurveTo(38, 134, 100, 111, 123, 64);
      context.bezierCurveTo(166, -23, 121, -107, 43, -67);
      context.bezierCurveTo(2, -99, -50, -95, -96, -53);
      context.fill();
      context.strokeStyle = '#f4c39e';
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
    } else if (kind === 'spinach') {
      context.fillStyle = '#9dbf8c';
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
    } else {
      context.fillStyle = '#cfb889';
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
    }
    context.strokeStyle = accent;
    context.lineWidth = 2;
    context.beginPath();
    context.arc(0, 0, 181, 0, Math.PI * 2);
    context.stroke();
    context.restore();
  }

  function render() {
    const fact = facts[active];
    const copy = fact[german ? 'de' : 'en'];
    const gradient = context.createLinearGradient(0, 0, 1080, 1350);
    gradient.addColorStop(0, fact.background[0]);
    gradient.addColorStop(1, fact.background[1]);
    context.fillStyle = gradient;
    context.fillRect(0, 0, 1080, 1350);

    context.strokeStyle = 'rgba(255, 250, 233, .26)';
    context.lineWidth = 2;
    context.strokeRect(51, 51, 978, 1248);
    context.beginPath();
    context.arc(780, 300, 275, 0, Math.PI * 2);
    context.stroke();
    context.beginPath();
    context.arc(780, 300, 235, 0, Math.PI * 2);
    context.stroke();
    drawFood(fact.illustration, fact.accent);

    context.fillStyle = '#fff8e9';
    context.font = 'bold 51px Georgia, serif';
    context.fillText('✳ jasmina.', 105, 151);
    context.font = 'bold 23px "Avenir Next", "Segoe UI", sans-serif';
    context.letterSpacing = '3px';
    context.fillStyle = fact.accent;
    context.fillText(german ? 'WISSENSWERTES ÜBER PFLANZEN' : 'PLANT-BASED FOOD FACTS', 105, 230);
    context.letterSpacing = '0px';

    context.fillStyle = fact.accent;
    context.font = 'bold 24px "Avenir Next", "Segoe UI", sans-serif';
    context.fillText(german ? 'GUT ZU WISSEN?' : 'DID YOU KNOW?', 105, 550);
    context.font = 'bold 24px "Avenir Next", "Segoe UI", sans-serif';
    context.fillText(copy.label, 105, 602);

    let headingSize = 85;
    let headingLines = wrapText(copy.title, 865, `${headingSize}px Georgia, serif`);
    while (headingLines.length > 3 && headingSize > 60) {
      headingSize -= 3;
      headingLines = wrapText(copy.title, 865, `${headingSize}px Georgia, serif`);
    }
    context.fillStyle = '#fff8e9';
    context.font = `${headingSize}px Georgia, serif`;
    headingLines.forEach((line, index) => context.fillText(line, 105, 715 + index * (headingSize + 14)));

    const detailTop = Math.max(900, 715 + headingLines.length * (headingSize + 14) + 35);
    const detailSize = 34;
    const detailLines = wrapText(copy.detail, 850, `${detailSize}px "Avenir Next", "Segoe UI", sans-serif`);
    context.font = `${detailSize}px "Avenir Next", "Segoe UI", sans-serif`;
    context.fillStyle = '#fff4e0';
    detailLines.forEach((line, index) => context.fillText(line, 105, detailTop + index * 47));

    context.strokeStyle = 'rgba(255, 250, 233, .55)';
    context.beginPath();
    context.moveTo(105, 1160);
    context.lineTo(975, 1160);
    context.stroke();
    context.font = 'bold 24px "Avenir Next", "Segoe UI", sans-serif';
    context.fillStyle = '#fff8e9';
    context.fillText(german ? 'QUELLE: NIH OFFICE OF DIETARY SUPPLEMENTS' : 'SOURCE: NIH OFFICE OF DIETARY SUPPLEMENTS', 105, 1211);
    context.fillStyle = fact.accent;
    context.fillText('jasmina.  /  apopovski.github.io/jasmina', 105, 1260);
    factCanvas.setAttribute('aria-label', copy.alt);

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

  function selectFact(key) {
    active = key;
    const fact = facts[key];
    const copy = fact[german ? 'de' : 'en'];
    options.forEach((option) => option.setAttribute('aria-pressed', String(option.dataset.fact === key)));
    title.textContent = copy.title;
    description.textContent = copy.detail;
    source.href = fact.source;
    status.textContent = '';
    shareHelp.hidden = true;
    share.setAttribute('aria-expanded', 'false');
    render();
  }

  options.forEach((option) => option.addEventListener('click', () => selectFact(option.dataset.fact)));

  download.addEventListener('click', () => {
    if (!exportBlob) {
      status.textContent = german ? 'Die Grafik wird vorbereitet. Bitte versuche es gleich noch einmal.' : 'Graphic is preparing. Please try again in a moment.';
      return;
    }
    const url = URL.createObjectURL(exportBlob);
    const link = document.createElement('a');
    link.download = `jasmina-${active}-${german ? 'de' : 'en'}.png`;
    link.href = url;
    document.body.append(link);
    link.click();
    link.remove();
    setTimeout(() => URL.revokeObjectURL(url), 60000);
    status.textContent = german ? 'PNG-Download gestartet.' : 'PNG download started.';
  });

  share.addEventListener('click', () => {
    if (!exportBlob) {
      status.textContent = german ? 'Die Grafik wird vorbereitet. Bitte versuche es gleich noch einmal.' : 'Graphic is preparing. Please try again in a moment.';
      return;
    }
    const file = new File([exportBlob], `jasmina-${active}-${german ? 'de' : 'en'}.png`, { type: 'image/png' });
    if (navigator.share && navigator.canShare?.({ files: [file] })) {
      try {
        const result = navigator.share({ files: [file], title: title.textContent });
        result.then(() => {
          status.textContent = german ? 'Grafik geteilt.' : 'Graphic shared.';
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
    const caption = `${title.textContent} ${description.textContent}\n\n${german ? 'Quelle' : 'Source'}: ${source.href}\nhttps://apopovski.github.io/jasmina/${german ? 'de/' : ''}`;
    try {
      await navigator.clipboard.writeText(caption);
      status.textContent = german ? 'Begleittext kopiert. Lade die Grafik herunter und teile beides in deiner App.' : 'Caption copied. Download the graphic and post both in your app.';
    } catch (error) {
      status.textContent = german ? 'Kopieren fehlgeschlagen. Du kannst den Text oben manuell markieren und kopieren.' : 'Could not copy the caption. You can select and copy the text above instead.';
      console.error('Could not copy food fact caption:', error);
    }
  });

  if (navigator.clipboard?.write && typeof ClipboardItem !== 'undefined') {
    copyImage.hidden = false;
    copyImage.addEventListener('click', async () => {
      if (!exportBlob) {
        status.textContent = german ? 'Die Grafik wird vorbereitet. Bitte versuche es gleich noch einmal.' : 'Graphic is preparing. Please try again in a moment.';
        return;
      }
      try {
        await navigator.clipboard.write([new ClipboardItem({ 'image/png': exportBlob })]);
        status.textContent = german ? 'Bild kopiert. Füge es in einen Beitrag ein.' : 'Image copied. Paste it into a post.';
      } catch (error) {
        status.textContent = german ? 'Kopieren fehlgeschlagen. Lade die Grafik stattdessen herunter.' : 'Could not copy the image. Please download it instead.';
        console.error('Could not copy food fact graphic:', error);
      }
    });
  }

  if (context) {
    render();
    document.fonts.ready.then(render);
  } else {
    options.forEach((option) => { option.disabled = true; });
    download.disabled = true;
    share.disabled = true;
    copyImage.hidden = true;
    status.textContent = german
      ? 'Dein Browser unterstützt die Grafikvorschau leider nicht.'
      : 'Your browser does not support the graphic preview.';
  }
}
