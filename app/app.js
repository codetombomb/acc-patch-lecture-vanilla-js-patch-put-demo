/* ---------- HELPERS ---------- */

const newEl = (el, text) => {
  const newEl = document.createElement(el);
  newEl.textContent = text;
  return newEl;
};

const getData = (url) => {
  return fetch(url).then((resp) => resp.json());
};

/* ---------- RENDER USER ----------- */

const renderUser = (user) => {
  const studentInfo = document.querySelector(".student-info");

  const nameTitle = newEl("h2", "Student Name");
  const name = newEl("p", `${user.first_name} ${user.last_name}`);

  const programTitle = newEl("h2", "Program");
  const program = newEl("p", user.program);

  const cohortTitle = newEl("h2", "Cohort");
  const cohort = newEl("p", user.cohort);

  const githubTitle = newEl("h2", "Github Username");
  const githubUsername = newEl("p", user.github_username);

  const emailTitle = newEl("h2", "Email");
  const email = newEl("p", user.email);

  const ageTitle = newEl("h2", "Age");
  const age = newEl("p", user.age);

  studentInfo.append(
    nameTitle,
    name,
    programTitle,
    program,
    cohortTitle,
    cohort,
    githubTitle,
    githubUsername,
    emailTitle,
    email,
    ageTitle,
    age
  );
};

/* ---------- START APP ----------- */
const start = () => {
  getData("http://localhost:3000/users/1").then((user) => renderUser(user));
};

start();