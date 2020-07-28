const getLettersName = (name) => {
    console.log(name,'name')
    if (!name) return 'AW';
    const nameArr = name.split(' ');
  
    switch (nameArr.length) {
      case 0:
        return nameArr[0].charAt(0).toUpperCase();
      case 1:
        // return nameArr[0].charAt(0).toUpperCase() + nameArr[0].charAt(1).toUpperCase();
        return nameArr[0].charAt(0).toUpperCase();
      default:
        return nameArr
          .map((item) => item.charAt(0))
          .slice(0, 2)
          .join('');
    }
  };
  
const camelCase = (str = '') => {
    if (str === '') return '';
    var a = str
      .toLowerCase()
      .trim()
      .split(' ')
      .map((v) => v[0].toUpperCase() + v.substr(1).toLowerCase())
      .join(' ');
  
    return str
      .toLowerCase()
      .trim()
      .split(' ')
      .map((v) => v[0].toUpperCase() + v.substr(1).toLowerCase())
      .join(' ');
  }

  export {getLettersName, camelCase}