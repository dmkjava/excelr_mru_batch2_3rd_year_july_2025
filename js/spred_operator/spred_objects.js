emp = {
    empNo: 101, 
    empName: "Anil", 
    job: "Business Analyst"
} 
console.log(emp);
// adding new element to object literal 
emp.salary = 56000;
console.log(emp);
// adding new element to object literal using spred 
emp = {...emp, salary: 58000, mobileNo: '7788445599'}
console.log(emp);