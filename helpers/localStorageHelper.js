//   localStorage.setItem("lastname", "Smith"); установить данные в localStorage по ключу lastName
//   localStorage.getItem("name"); получает данные из локал стордж по ключу нэйм

let value = prompt("add name");
console.log(localStorage.getItem("name"));
export const setDataToLocalStorage = (value) => {
    localStorage.setItem("name", value);
}
