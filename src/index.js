import { getUsers } from "./common/usersAPI";
import "./style.scss";

console.log("Hello webpack!");

const fancyFunc = () => {
  return [1, 2];
};

const [a, b] = fancyFunc();

getUsers().then(json => console.log(json));