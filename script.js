






function changeColor(image) {
  // クリックされた画像に 'changed-color' クラスがなければ追加
  if (!image.classList.contains('changed-color')) {
      image.classList.add('changed-color');
  }
}
