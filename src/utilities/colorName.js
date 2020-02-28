export default function colorName(colorID) {
  let colorName = '';
  switch (colorID) {
    case 1:
      colorName = 'grey';
      break;
    case 2:
      colorName = 'green';
      break;
    case 3:
      colorName = 'blue';
      break;
    case 4:
      colorName = 'pink';
      break;
    case 5:
      colorName = 'lime';
      break;
    case 6:
      colorName = 'purple';
      break;
    case 7:
      colorName = 'black';
      break;
    case 8:
      colorName = 'red';
      break;
      default:
        return '';
  }
  return colorName;
}