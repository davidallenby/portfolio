/**
 * This function will allow us to sort objects by values of a property.
 * It can work with deeply nested properties too. Just specify the nested key
 * property with a chain of properties to reach the target property
 * e.g. topLevelProperty.levelTwoProperty.levelThreeProperty
 * 
 * @param key
 * @param descending 
 * @returns 
 */
export const objectSort = (key: string, descending?: boolean) => {
  // Set the sort order based on the dev preference
  const sortOrder = (descending) ? -1 : 1;
  // Split the property chain into an array.
  const properties = key.split('.');
  // Get the length of the array, so we can iterate over later.
  const len = properties.length;
  // Sort function
  return function (a: any, b: any) {
    let i = 0;
    // Store the parent objects here
    let compareA = a;
    let compareB = b;
    // While the value of index is less than the length of the array...
    while (i < len) {
      // Update the stored objects with the child object at this index
      compareA = compareA[properties[i]];
      compareB = compareB[properties[i]];
      // Increment the index, and start again
      i++;
    }
    // Make the sort comparison
    const result = (compareA < compareB) ? -1 : (compareA > compareB) ? 1 : 0;
    // Multiply the result by sortOrder to get the desired ascending/descending
    // direction.
    return result * sortOrder;
  };
}