function transfer(start_text, trans_direction) {
    const key = [
      'я', 'q', 'ш', 'w', 'е', 'e', 'р', 'r', 'т', 't', 'ы', 'y', 'у', 'u', 'и', 'i', 'о', 'o', 'п', 'p', 'ю', '[', 'ж', ']', 'э',
      '\\', 'а', 'a', 'с', 's', 'д', 'd', 'ф', 'f', 'г', 'g', 'ч', 'h', 'й', 'j', 'к', 'k', 'л', 'l', 'з', 'z', 'х', 'x', 'ц', 'c',
      'в', 'v', 'б', 'b', 'н', 'n', 'м', 'm'
    ];
  
    let end_text = '';
    if (trans_direction === 'english') {
      for (let char of start_text) {
        if (key.includes(char)) {
          const position = key.indexOf(char);
          const new_position = position + 1;
          end_text += key[new_position];
        } else {
          end_text += char;
        }
      }
    }
    if (trans_direction === 'russian') {
      for (let char of start_text) {
        if (key.includes(char)) {
          const position = key.indexOf(char);
          const new_position = position - 1;
          end_text += key[new_position];
        } else {
          end_text += char;
        }
      }
    }
    return end_text;
  }
  
  const engToRusBtn = document.getElementById('eng-to-rus-btn');
  const rusToEngBtn = document.getElementById('rus-to-eng-btn');
  const engToArabicBtn = document.getElementById('eng-to-arabic-btn');
  const arabicToEngBtn = document.getElementById('arabic-to-eng-btn');
  
  const input = document.getElementById('input');
  const output = document.getElementById('output');
  
  engToRusBtn.addEventListener('click', () => {
    const text = input.value;
    const translatedText = transfer(text, 'russian');
    output.value = translatedText;
  });
  
  rusToEngBtn.addEventListener('click', () => {
    const text = input.value;
    const translatedText = transfer(text, 'english');
    output.value = translatedText;
  });
  
  engToArabicBtn.addEventListener('click', () => {
    alert('Sorry, this translation is not supported yet!');
  });
  
  arabicToEngBtn.addEventListener('click', () => {
    alert('Sorry, this translation is not supported yet!');
  });
  