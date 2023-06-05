export default function ISODate(date) {
  return date.split('/').reverse().join('-');
}