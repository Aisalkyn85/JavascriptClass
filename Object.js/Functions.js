var stud = {
  firstName: "Bhushan",
  country: "India",
  marriageStatus: "Married",

  mark: {
    java: 10,
    rubi: 20,
    python: 49,
    subject: {
      API: "testing",
      Selenium: "UItesting",
      Jenkins: "CICD",
    },
  },
};
stud.firstName = "Aj";
stud.mark.java = 34;
console.log(stud["firstName"]);

console.log(stud.mark);
