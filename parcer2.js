//для динамических
const puppeteer = require("puppeteer");

(async () => {
  // Запускаем браузер в фоновом режиме
  const browser = await puppeteer.launch({ headless: "new" });

  // Создаем новую страницу
  const page = await browser.newPage();

  // Загружаем страницу
  await page.goto("https://test.theconf.ru/all");

  // Используем селекторы, чтобы найти нужные элементы
  const elements = await page.$$(".conference__container");
  for (const element of elements) {
    // Извлекаем информацию из элементов
    const text = await element.evaluate((el) => el.textContent);
    console.log(text);
  }

  // Закрываем браузер
  await browser.close();
})();
