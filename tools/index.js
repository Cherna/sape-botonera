const fs = require('fs');
const path = require('path');

const audioPath = 'assets/audio/';

fs.readdir(audioPath, (err, files) => {
  if (err) {
    return err;
  }

  if (!files || !Array.isArray(files)) {
    console.log('no files to read or they are not an array.');
    return;
  }

  let listData = {};
  files.forEach(name => {
    const cleanName = name.replace(path.extname(name), '');
    listData[cleanName] = `${audioPath}${name}`;
  });

  fs.writeFile('audios.json', JSON.stringify(listData), (err) => {
    if (err) throw err;
    console.log('Saved audio data:');
    console.log(listData);
  });
});