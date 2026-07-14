/** Populate option list. */
function populateOptions() {
  const optList = document.querySelector('.options');
  const optInsert = (name, id, tooltip, checked = false, disabled = false) => {
    return `<div><label class="option-label" title="${tooltip?tooltip:name}"><input id="cb-${id}" type="checkbox" ${checked?'checked':''} ${disabled?'disabled':''}> ${name}</label></div>`;
  };
  const optInsertLarge = (name, id, tooltip, checked = false) => {
    return `<div class="large option"><label title="${tooltip?tooltip:name}"><input id="cbgroup-${id}" type="checkbox" ${checked?'checked':''}> ${name}</label></div>`;
  };

  /** Clear out any previous options. */
  optList.innerHTML = '';

  /** Insert sorter options and set grouped option behavior. */
  options.forEach(opt => {
    if ('sub' in opt) {
      optList.insertAdjacentHTML('beforeend', optInsertLarge(opt.name, opt.key, opt.tooltip, opt.checked));
      opt.sub.forEach((subopt, subindex) => {
        optList.insertAdjacentHTML('beforeend', optInsert(subopt.name, `${opt.key}-${subindex}`, subopt.tooltip, subopt.checked, opt.checked === false));
      });
      optList.insertAdjacentHTML('beforeend', '<hr>');

      const groupbox = document.getElementById(`cbgroup-${opt.key}`);

      groupbox.parentElement.addEventListener('click', () => {
        opt.sub.forEach((subopt, subindex) => {
          document.getElementById(`cb-${opt.key}-${subindex}`).disabled = !groupbox.checked;
          if (groupbox.checked) { document.getElementById(`cb-${opt.key}-${subindex}`).checked = true; }
        });
      });
    } else {
      optList.insertAdjacentHTML('beforeend', optInsert(opt.name, opt.key, opt.tooltip, opt.checked));
    }
  });
}

/** 
 * Preloads images in the filtered character data and converts to base64 representation.
*/
function preloadImages() {
  const totalLength = characterDataToSort.length;
  let imagesLoaded = 0;

  const loadImage = async (src) => {
    const blob = await fetch(src).then(res => res.blob());
    return new Promise((res, rej) => {
      const reader = new FileReader();
      reader.onload = ev => {
        progressBar(`Loading Image ${++imagesLoaded}`, Math.floor(imagesLoaded * 100 / totalLength));
        res(ev.target.result);
      };
      reader.onerror = rej;
      reader.readAsDataURL(blob);
    });
  };

  return Promise.all(characterDataToSort.map(async (char, idx) => {
    characterDataToSort[idx].img = await loadImage(imageRoot + char.img);
  }));
}

/**
 * Reduces text to a certain rendered width.
 *
 * @param {string} text Text to reduce.
 * @param {string} font Font applied to text. Example "12px Arial".
 * @param {number} width Width of desired width in px.
 */
function reduceTextWidth(text, font, width) {
  const canvas = reduceTextWidth.canvas || (reduceTextWidth.canvas = document.createElement("canvas"));
  const context = canvas.getContext("2d");
  context.font = font;
  if (context.measureText(text).width < width * 0.8) {
    return text;
  } else {
    let reducedText = text;
    while (context.measureText(reducedText).width + context.measureText('..').width > width * 0.8) {
      reducedText = reducedText.slice(0, -1);
    }
    return reducedText + '..';
  }
}

window.onload = init;
