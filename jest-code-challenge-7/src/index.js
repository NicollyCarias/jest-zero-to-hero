module.exports = class Index {
  example1(status=true, type=true) {
    if (status && type) return 'HOJE TALVEZ';
    if (!status && type) return 'HOJE SIM';
    if (!type  && status) return 'HOJE NÃO';
    return '';
  }

  example2(link) {
    if (link != null && link.includes('AAA')) {
      return true;
    }
    return false;
  }
}