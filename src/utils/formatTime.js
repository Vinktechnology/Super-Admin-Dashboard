// import { format, formatDistanceToNow } from 'date-fns';

// // ----------------------------------------------------------------------

// export function fDate(date) {
//   return format(new Date(date), 'dd MMMM yyyy');
// }

// export function fDateTime(date) {
//   return format(new Date(date), 'dd MMM yyyy HH:mm');
// }

// export function fDateTimeSuffix(date) {
//   return format(new Date(date), 'dd/MM/yyyy hh:mm p');
// }

// export function fToNow(date) {
//   return formatDistanceToNow(new Date(date), {
//     addSuffix: true
//   });
// }

export const globalFormatDate=(dateString)=> {
  // Parse the date string into a Date object
  const date = new Date(dateString);
  
  // Get the day, month, and year
  const day = date.getUTCDate();
  const month = date.toLocaleString('default', { month: 'short' });
  const year = date.getUTCFullYear();
  
  // Return the formatted date string
  return `${day} ${month} ${year}`;
}
