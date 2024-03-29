import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
  constructor(params) {
    super(params);
    this.setTitle("Контакты");
  }

  async getHtml() {
    return `
      <h1>Контакты</h1>

      <p>Здесь вы найдете мои контактные данные!</p>

        <a href="#"><i class="fa-brands fa-telegram"></i> Телеграм</a><br>
        <a href="#"><i class="fa-brands fa-discord"></i> Дискорд</a><br>
        <a href="#"><i class="fa-solid fa-envelope"></i> example@example.com</a><br>

      <p>
        <a href="/" data-link>Перейти на главную страницу</a>
      </p>
      `;
  }
}
