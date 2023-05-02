import github from "./github.js";

const username = process.argv[2];

github(username, (error, repos) => {
  if (error) return console.error(error.message);

  repos.forEach((repo) => console.log(repo.name));
});
