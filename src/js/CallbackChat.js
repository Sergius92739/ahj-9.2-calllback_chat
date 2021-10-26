export default class CallbackChat {
  constructor() {
    this.container = null;
    this.btnShow = null;
    this.btnClose = null;
    this.chat = null;

    this.onBtnShowClick = this.onBtnShowClick.bind(this);
    this.onBtnCloseClick = this.onBtnCloseClick.bind(this);
  }

  init() {
    this.checkBinding();
    this.container.insertAdjacentHTML('beforeend', CallbackChat.markUp);
    this.btnShow = this.container.querySelector('.btn__show-chat');
    this.btnClose = this.container.querySelector('.chat__btn-close');
    this.chat = this.container.querySelector('.chat__wrapper');
    this.btnShow.addEventListener('click', this.onBtnShowClick);
    this.btnClose.addEventListener('click', this.onBtnCloseClick);
  }

  onBtnShowClick() {
    this.chat.classList.add('open');
    this.btnShow.classList.add('hide');
  }

  onBtnCloseClick() {
    this.chat.classList.remove('open');
    this.btnShow.classList.remove('hide');
  }

  static get markUp() {
    return `<div class="chat__container">
    <div class="chat__wrapper">
      <form class="chat">
        <div class="chat__btn-close">&#10006;</div>
        <div class="chat__content">
          <h3 class="chat__title">Напишите нам</h3>
          <textarea class="chat__input"></textarea>
        </div>
        <button class="chat__btn-send">Отправить</button>
      </form>
    </div>
    <button class="btn__show-chat"></button>
  </div>`;
  }

  bindToDOM(container) {
    if (!(container instanceof HTMLElement)) {
      throw new Error('container is not HTMLElement');
    }
    this.container = container;
  }

  checkBinding() {
    if (this.container === null) {
      throw new Error('container not bind to DOM');
    }
  }
}
