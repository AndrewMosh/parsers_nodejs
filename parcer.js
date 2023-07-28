//для статитики
const request = require("request");
const cheerio = require("cheerio");

// URL, который хотите распарсить
const url = "https://test.theconf.ru/all";

// Получаем HTML страницы
request(
  {
    url,
    rejectUnauthorized: false,
  },
  (error, response, body) => {
    if (!error && response.statusCode === 200) {
      // Выводим содержимое HTML-страницы в консоль
      console.log(body);

      // Загружаем HTML в Cheerio
      const $ = cheerio.load(body);

      // Находим все элементы с определенным селектором и извлекаем информацию
      $(".conference__tags").each((index, element) => {
        const text = $(element).text();
        console.log(text);
      });
    } else {
      console.error(error);
    }
  }
);
