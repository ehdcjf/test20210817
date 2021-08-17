const yymmdd = (date) => {
  const now = new Date(date);
  const y = now.getFullYear();
  let m = now.getMonth() + 1;
  let d = now.getDate();
  if (m < 10) m = '0' + m;
  if (d < 10) d = '0' + d;
  return `${y}-${m}-${d}`

}



const clearDate = (date) => {
  const now = new Date(date);

  const y = now.getFullYear();
  let m = now.getMonth() + 1;
  let d = now.getDate();
  let h = now.getHours()
  let mm = now.getMinutes();
  let s = now.getSeconds();

  if (m < 10) m = '0' + m;
  if (d < 10) d = '0' + d;
  if (h < 10) h = '0' + h;
  if (mm < 10) mm = '0' + mm;
  if (s < 10) s = '0' + s;

  return `${y}.${m}.${d} ${h}:${mm}:${s}`
}
const clearDateOnly = (date) => {
  const now = new Date(date);

  const y = now.getFullYear();
  let m = now.getMonth() + 1;
  let d = now.getDate();


  if (m < 10) m = '0' + m;
  if (d < 10) d = '0' + d;


  return `${y}.${m}.${d}`
}

module.exports = { yymmdd, clearDate, clearDateOnly }