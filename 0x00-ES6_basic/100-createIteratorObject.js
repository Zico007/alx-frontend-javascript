export default function createIteratorObject(report) {
  const employeesList = report.allEmployees;

  const iterator = {
    [Symbol.iterator]() {
      let departmentIndex = 0;
      let employeeIndex = 0;
      const departments = Object.keys(employeesList);

      return {
        next() {
          if (departmentIndex < departments.length) {
            const department = departments[departmentIndex];
            const employees = employeesList[department];

            if (employeeIndex < employees.length) {
              return {
                value: employees[employeeIndex++],
                done: false,
              };
            } else {
              departmentIndex++;
              employeeIndex = 0;
              return this.next();
            }
          }

          return { done: true };
        },
      };
    },
  };

  return iterator;
}
