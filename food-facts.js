const factCanvas = document.querySelector('#fact-canvas');

if (factCanvas) {
  const german = document.documentElement.lang === 'de';
  const facts = typeof foodFacts === 'undefined' ? [] : foodFacts;
  const themes = {
    produce: { background: ['#783f35', '#a7634c'], accent: '#f3be92', illustration: 'pepper' },
    legumes: { background: ['#364735', '#607b58'], accent: '#d7dea9', illustration: 'walnuts' },
    grains: { background: ['#60513a', '#89764e'], accent: '#e4d9a9', illustration: 'spinach' },
    'nuts-seeds': { background: ['#4b3f32', '#756045'], accent: '#e4c49e', illustration: 'walnuts' }
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
    } else if (kind === 'walnuts') {
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
    } else {
      context.fillStyle = accent;
      for (let petal = 0; petal < 7; petal++) {
        context.save();
        context.rotate((petal * Math.PI * 2) / 7);
        context.beginPath();
        context.ellipse(0, -75, 38, 82, 0, 0, Math.PI * 2);
        context.fill();
        context.restore();
      }
      context.fillStyle = '#fff8e9';
      context.beginPath();
      context.arc(0, 0, 32, 0, Math.PI * 2);
      context.fill();
    }
    context.strokeStyle = accent;
    context.lineWidth = 2;
    context.beginPath();
    context.arc(0, 0, 181, 0, Math.PI * 2);
    context.stroke();
    context.restore();
  }

  function render() {
    const fact = active;
    const copy = fact[german ? 'de' : 'en'];
    const theme = themes[fact.category];
    const gradient = context.createLinearGradient(0, 0, 1080, 1350);
    gradient.addColorStop(0, theme.background[0]);
    gradient.addColorStop(1, theme.background[1]);
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
    const illustration = /pepper|paprika/.test(fact.id) ? 'pepper'
      : /spinach|spinat/.test(fact.id) ? 'spinach'
      : /walnut|walnuss/.test(fact.id) ? 'walnuts' : 'botanical';
    drawFood(illustration, theme.accent);

    context.fillStyle = '#fff8e9';
    context.font = 'bold 51px Georgia, serif';
    context.fillText('✳ jasmina.', 105, 151);
    context.font = 'bold 23px "Avenir Next", "Segoe UI", sans-serif';
    context.letterSpacing = '3px';
    context.fillStyle = theme.accent;
    context.fillText(german ? 'WISSENSWERTES ÜBER PFLANZEN' : 'PLANT-BASED FOOD FACTS', 105, 230);
    context.letterSpacing = '0px';

    context.fillStyle = theme.accent;
    context.font = 'bold 24px "Avenir Next", "Segoe UI", sans-serif';
    context.fillText(german ? 'GUT ZU WISSEN?' : 'DID YOU KNOW?', 105, 550);
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
    context.font = 'bold 24px "Avenir Next", "Segoe UI", sans-serif';
    context.fillStyle = '#fff8e9';
    const sourceName = fact.source.includes('ods.od.nih.gov') ? 'NIH OFFICE OF DIETARY SUPPLEMENTS' : 'USDA MYPLATE';
    context.fillText(`${german ? 'QUELLE' : 'SOURCE'}: ${sourceName}`, 105, 1211);
    context.fillStyle = theme.accent;
    context.fillText('jasmina.  /  apopovski.github.io/jasmina', 105, 1260);
    factCanvas.setAttribute('aria-label', german
      ? `Teilbare Jasmina-Ernährungsgrafik: ${copy.title}`
      : `Shareable Jasmina nutrition graphic: ${copy.title}`);

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
    source.firstChild.textContent = fact.source.includes('ods.od.nih.gov')
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
      choose.textContent = `${String(index).padStart(2, '0')}  ${copy.title}`;
      choose.addEventListener('click', () => selectFact(fact));
      const quickShare = document.createElement('button');
      quickShare.type = 'button';
      quickShare.className = 'fact-option-share';
      quickShare.setAttribute('aria-label', german ? `Grafik teilen: ${copy.title}` : `Share graphic: ${copy.title}`);
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
    link.download = `jasmina-${active.id}-${german ? 'de' : 'en'}.png`;
    link.href = url;
    document.body.append(link);
    link.click();
    link.remove();
    setTimeout(() => URL.revokeObjectURL(url), 60000);
    status.textContent = german ? 'PNG-Download gestartet.' : 'PNG download started.';
  });

  share.addEventListener('click', () => {
    if (!prepareGraphicNow()) return;
    const file = new File([exportBlob], `jasmina-${active.id}-${german ? 'de' : 'en'}.png`, { type: 'image/png' });
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
    fact.id && themes[fact.category] && fact.source && fact.en?.title && fact.de?.title
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
