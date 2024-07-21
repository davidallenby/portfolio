/**
 * There are multiple instances through the app where I mention my years of
 * experience. Rather than 1.) having to keep updating this every year, 2.)
 * rewrite the same thing. I'll use this function to print out the years since I
 * started.
 * @returns {number}
 */
export const getYearsExperience = (): number => {
  const start = 2012;
  const current = new Date().getFullYear();
  return current - start;
}

export const getCurrentYear = (): number => {
  return new Date().getFullYear();
}

/**
 * Debounce function. Useful for search inputs and window resize events.
 * Will implement a delay between requests/events.
 * @param func 
 * @param delay 
 * @returns 
 */
export const debounce = (func: (...args: any[]) => void, delay: number)
: any => {
  let timeout: NodeJS.Timeout|null = null;
  // ...args will be the parameters passed in the callback, `func`
  return (...args: any[]) => {
    // The timeout is reset each time the debounce function is called.
    // And the user will need to wait for the delay to finish
    // This code checks if the timeout has previously been set.
    // if it has, it clears it...
    if (timeout) {
      clearTimeout(timeout)
    }
    // Here we set the new timeout, or reset the delay to the beginning
    timeout = setTimeout(() => {
      // Run the callback function (with passed params)
      func(...args)
      // After the callback function is complete, clear the timeout.
      timeout = null
    }, delay)
  }
}