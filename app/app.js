/* ---------- HELPERS ---------- */

const newEl = (el, text) => {
  const newEl = document.createElement(el);
  newEl.textContent = text;
  return newEl;
};

const getData = (url) => {
  return fetch(url).then((resp) => resp.json());
};

const idEl = (id) => document.getElementById(id)

/* ---------- RENDER USER ----------- */

const renderUser = (user) => {
  const studentInfo = document.querySelector(".student-info");
  studentInfo.textContent = ""

  const nameTitle = newEl("h3", "Student Name");
  const name = newEl("p", `${user.first_name} ${user.last_name}, ID: ${user.student_id}`);

  const programTitle = newEl("h3", "Program");
  const program = newEl("p", user.program);

  const cohortTitle = newEl("h3", "Cohort");
  const cohort = newEl("p", user.cohort);

  const githubTitle = newEl("h3", "Github Username");
  const githubUsername = newEl("p", user.github_username);

  const emailTitle = newEl("h3", "Email");
  const email = newEl("p", user.email);

  const ageTitle = newEl("h3", "Age");
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

/* ---------- FORM LISTENER ---------- */

// FORM EVENT LISTENER HERE





/* ---------- START APP ----------- */
const start = () => {
  getData("http://localhost:3000/users/1").then((user) => renderUser(user));
};

start();