//  1. localStorage.setItem("lastname", "Smith"); установить данные в localStorage по ключу lastName
//  2. localStorage.getItem("name"); получает данные из локал стордж по ключу нэйм
//  3. localStorage.removeItem("key"); удаляет данный из локал стродж по ключу
//  4. localStorage.clear(); удаляет все
//  5. метод работает только со строками, с помощью JSON.stringify(object) можно хранить к примеру объекты, но данные будут храниться все также в виде строки
//  6.   чтобы взять что то сложное типо объекта из локал стордж можно также вернуться к п.2 и затем JSON.parse(name)

export const setDataToLocalStorage = (value) => {
    localStorage.setItem("name", value);
}
