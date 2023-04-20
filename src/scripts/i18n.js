import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      "about_me": "About me",
      "hello": "Hello, I'm Ildar – designer from Moscow.",
      "interest": "I'm interested in design and everything connected with it.",
      "work": "I have worked in companies such as LG, Samsung and have extensive experience in design.",
      "ready": "Ready to implement excellent projects with wonderful people.",
      "surname": "Murdashev",
      "name": "Ildar",
      "job": "Designer",
      "info": "53 years old, Moscow",
      "contacts": "Contacts",
      "want": "Want to know more or just chat?",
      "welcome": "You are welcome!",
      "send_message": "Send message",
      "like_me_on": "Like me on",
      "portfolio": "Portfolio",
      "online_fashion_store": "Online fashion store - Homepage",
      "reebok_store": "Reebok Store - Concept",
      "braun_landing": "Braun Landing Page - Concept",
      "skills": "Skills",
      "i_work_in": "I work in such programs as",
      "home_link": "Home"
    }
  },
  ru: {
    translation: {
      "about_me": "Обо мне",
      "hello": "Здравствуйте! Меня зовут Ильдар, я - дизайнер из Москвы.",
      "interest": "Уже много лет я увлекаюсь дизайном и всем, что с ним связано.",
      "work": "У меня большой опыт работы в этой сфере, я работал в таких компаниях как LG и Samsung.",
      "ready": "Готов реализовывать дизайнерские проекты под любые идеи.",
      "surname": "Мурдашев",
      "name": "Ильдар",
      "job": "Дизайнер",
      "info": "53 года, Москва",
      "contacts": "Контакты",
      "want": "Хотите знать больше или просто пообщаться?",
      "welcome": "Нажмите на кнопку ниже!",
      "send_message": "Отправить сообщение",
      "like_me_on": "Подписывайтесь на меня в социальных сетях: ",
      "portfolio": "Портфолио",
      "online_fashion_store": "Онлайн магазин одежды - Главная страница",
      "reebok_store": "Магазин Reebok - Концепт",
      "braun_landing": "Лендинг для компании Braun - Концепт",
      "skills": "Навыки",
      "i_work_in": "Я имею опыт работы в таких программах как:",
      "home_link": "Главная"
    }
  },
};

i18n
  .use(initReactI18next) 
  .init({
    resources,
    lng: "en", 
    interpolation: {
      escapeValue: false 
    }
  });

  export default i18n;