/**
 * Returns a user-friendly readable date string in dd/mm/yyyy format
 * @param date 
 * @param seperator 
 * @returns 
 */
export const getDateString = (date: Date, seperator?: string) => {
  const format = (seperator) ? seperator : '/';
  const day = date.getDate().toString().padStart(2, '0');
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const year = date.getFullYear().toString();
  return day + format + month + format + year;
}