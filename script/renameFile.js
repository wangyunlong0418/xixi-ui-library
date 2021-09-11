/* eslint-disable no-undef */
const path = require('path')
const fs = require('fs')

fs.rename(path.resolve(__dirname, '../es'), path.resolve(__dirname, '../dist'), (err) => {
  if (err) {
    console.log(err)
    return;
  }

  console.log('重命名成功');
})
