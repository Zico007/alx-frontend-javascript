
Certainly! Here's the code for the iterateThroughObject function as you described:

javascript
Copy code
export default function iterateThroughObject(reportWithIterator) {
  let result = '';

  for (const employee of reportWithIterator) {
    result += employee + ' | ';
  }

  // Remove the trailing ' | ' if there are employees
  if (result.length > 0) {
    result = result.slice(0, -3);
  }

  return result;
}
