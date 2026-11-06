// Builds the contact address at runtime so scrapers reading the HTML don't find it.
document.querySelectorAll('a[data-contact]').forEach(function (a) {
  var addr = ['hello', 'humancode.uk'].join('@');
  a.href = 'mailto:' + addr;
  a.textContent = addr;
});
