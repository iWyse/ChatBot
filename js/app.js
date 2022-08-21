(() => {
    "use strict";
//* Эмуляция первого сообщения
// const showDate = document.getElementById("showDate");
// const firstMessage = document.getElementById("firstMessage");
// setTimeout(() => {
//   firstMessage.style.display = "flex";
//   showDate.style.display = "block";
// }, 3000);

// const printDate = document.getElementById("todayDate");
// const spendTime = document.getElementById("spendTime");

// //* вывод времени суток в заголовок
// function printDay(todayHours) {
//   if (todayHours >= 6 && todayHours < 12) {
//     return "утра";
//   } else if (todayHours >= 12 && todayHours < 18) {
//     return "дня";
//   } else if (todayHours >= 18 && todayHours <= 23) {
//     return "вечера";
//   } else {
//     return "ночи";
//   }
// }

// //* вывод времени суток в сообщении
// function spendMyTime(todayHours) {
//   if (todayHours >= 6 && todayHours < 12) {
//     return "утро";
//   } else if (todayHours >= 12 && todayHours < 18) {
//     return "день";
//   } else if (todayHours >= 18 && todayHours <= 23) {
//     return "вечер";
//   } else {
//     return "ночь";
//   }
// }

// //* вывод текущего времени (часы + минуты)
// let logtime = document.querySelector('.logtime');
// let todayDate = new Date();
// let todayMinuts = (todayDate.getMinutes() < 10 ? "0" : "") + todayDate.getMinutes();
// let todayHours = todayDate.getHours();
// let todayDateNow = todayHours + ":" + todayMinuts + " " + printDay(todayHours);
// printDate.innerHTML = todayDateNow;  //* вывод часов в заголовок
// spendTime.innerHTML = spendMyTime(todayHours);  //* вывод времени суток в заголовок
// logtime.innerHTML = todayHours + ":" + todayMinuts; //* первый временной лог от собеседника


// //* Функционал чата
// const chat = document.querySelector(".chat");
// const chatWrapper = document.querySelector(".chat__wrapper");
// const sendMessage = document.querySelector(".send-message");
// let inputMessage = document.querySelector(".input-message");

// //* Скролл чата вниз
// function scrollToBottom() {
// let chatScroll = document.getElementsByClassName('chat__wrapper')[0];
// chatScroll.scrollTop = chatScroll.scrollHeight;
// }

// sendMessage.addEventListener("click", function (e) {
//   let presentMessage =  inputMessage.value;
//   if (inputMessage.value === "") {
//   e.preventDefault();
// } else {
//   let logMessage;
//   let sendDate = new Date();
//   let sendMinuts = (sendDate.getMinutes() < 10 ? "0" : "") + sendDate.getMinutes();
//   let sendHours = sendDate.getHours();
//   logMessage = sendHours + ":" + sendMinuts;
//   chatWrapper.insertAdjacentHTML(
//     "beforeend",
//     '<div class="chat-user chat-body"><div class="chat-user__image"><img src="img/person2.png" alt=""></div><div class="chat-user__message chat-message"><p class="chat-user__text">' +
//     presentMessage +
//       '</p><div class="chat-user__time chat-time">'+logMessage+'</div></div></div>'
//   );
 
//   presetLoading(); //* вызов эмуляции записи сообщения
//   setTimeout(() => {
//     let message;
//     if (presentMessage.toLowerCase() == "привет, смотрю сериал") {
//       message = `Здорово, я вот жду 3 сезон сериала "видеть"`;
//     } 
//     else if (presentMessage.toLowerCase() == "как твои дела?") {
//       message = "Недавно ходили на море, тебе нравится море?";
//     } 
//     else if (presentMessage.toLowerCase() == "нравится море, люблю плавать") {
//       message = "Вода щас очень теплая, людей правда много";
//     }
//     else if (presentMessage.toLowerCase() == "не фанат ходить на море") {
//       message = "А мне нравится";
//     }
//     else if (presentMessage.toLowerCase() == "что у тебя нового?") {
//       message = "Неделю назад приобрел машину";
//     }
//     else if (presentMessage.toLowerCase() == "что за машина?") {
//       message = "Toyota Soarer, люблю быстро ездить";
//     }
//     else if (presentMessage.toLowerCase() == "главное ездить с умом") {
//       message = "Обязательно";
//     }
//        else {
//       message = "Прости, появились срочные дела. До встречи!";
//     }
//     chatWrapper.insertAdjacentHTML(
//       "beforeend",
//       '<div class="chat-bot chat-body"><div class="chat-bot__image"><img src="img/person1.png" alt=""></div><div class="chat-bot__message chat-message"><p class="chat-bot__text">' +
//         message +
//         '</p><div class="chat-bot__time chat-time">'+logMessage+'</div></div></div>'
//     );
// scrollToBottom();
//   }, 1500);
// }
// inputMessage.value = "";
// });

// //* Эмуляция набора сообщения от собеседника
// let loadingChat = document.createElement("div");
// loadingChat.className = "chat-bot chat-body chat-loading";
// loadingChat.innerHTML =
//   '<div class="chat-bot__image"><img src="img/person1.png" alt=""></div><div class="chat-bot__loading chat-message"><span class="loading loading-1"></span><span class="loading loading-2"></span><span class="loading loading-3"></span></div>';
// function presetLoading() {
//   chatWrapper.append(loadingChat);
//   scrollToBottom();
//   setTimeout(() => {
//     loadingChat.remove();
//   }, 1500);
// }


// //* Изменение темы
// const themeSwitcher = document.querySelector('.theme-switcher input');

// document.querySelectorAll(".switcher").forEach(el => {
//   el.onchange = () => localStorage.setItem(el.id, el.checked);
//   el.checked = localStorage.getItem(el.id) === "true";
// })

// //* сохранение темы в localStorage
// let key = 'data-theme'; 
// let value = 'light';
// let theme = localStorage.getItem(key);

// if (theme) {
//    chat.setAttribute(key, theme);
//   }

// themeSwitcher.addEventListener('change', (e) => {
//     if (e.target.checked) {
//       value = "dark";
//       chat.setAttribute(key, value);
//       localStorage.setItem(key, value);
//     } else {
//       value = "light";
//       chat.setAttribute(key, value);
//       localStorage.setItem(key, value);
//     }
//   })

// gulp scripts 
    function isWebp() {
        function testWebP(callback) {
            let webP = new Image;
            webP.onload = webP.onerror = function() {
                callback(2 == webP.height);
            };
            webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
        }
        testWebP((function(support) {
            let className = true === support ? "webp" : "no-webp";
            document.documentElement.classList.add(className);
        }));
    }
    let addWindowScrollEvent = false;
    setTimeout((() => {
        if (addWindowScrollEvent) {
            let windowScroll = new Event("windowScroll");
            window.addEventListener("scroll", (function(e) {
                document.dispatchEvent(windowScroll);
            }));
        }
    }), 0);
    const showDate = document.getElementById("showDate");
    const firstMessage = document.getElementById("firstMessage");
    setTimeout((() => {
        firstMessage.style.display = "flex";
        showDate.style.display = "block";
    }), 3e3);
    const printDate = document.getElementById("todayDate");
    const spendTime = document.getElementById("spendTime");
    function printDay(todayHours) {
        if (todayHours >= 6 && todayHours < 12) return "утра"; else if (todayHours >= 12 && todayHours < 18) return "дня"; else if (todayHours >= 18 && todayHours <= 23) return "вечера"; else return "ночи";
    }
    function spendMyTime(todayHours) {
        if (todayHours >= 6 && todayHours < 12) return "утро"; else if (todayHours >= 12 && todayHours < 18) return "день"; else if (todayHours >= 18 && todayHours <= 23) return "вечер"; else return "ночь";
    }
    let logtime = document.querySelector(".logtime");
    let todayDate = new Date;
    let todayMinuts = (todayDate.getMinutes() < 10 ? "0" : "") + todayDate.getMinutes();
    let todayHours = todayDate.getHours();
    let todayDateNow = todayHours + ":" + todayMinuts + " " + printDay(todayHours);
    printDate.innerHTML = todayDateNow;
    spendTime.innerHTML = spendMyTime(todayHours);
    logtime.innerHTML = todayHours + ":" + todayMinuts;
    const chat = document.querySelector(".chat");
    const chatWrapper = document.querySelector(".chat__wrapper");
    const sendMessage = document.querySelector(".send-message");
    let inputMessage = document.querySelector(".input-message");
    function scrollToBottom() {
        let chatScroll = document.getElementsByClassName("chat__wrapper")[0];
        chatScroll.scrollTop = chatScroll.scrollHeight;
    }
    sendMessage.addEventListener("click", (function(e) {
        let presentMessage = inputMessage.value;
        if ("" === inputMessage.value) e.preventDefault(); else {
            let logMessage;
            let sendDate = new Date;
            let sendMinuts = (sendDate.getMinutes() < 10 ? "0" : "") + sendDate.getMinutes();
            let sendHours = sendDate.getHours();
            logMessage = sendHours + ":" + sendMinuts;
            chatWrapper.insertAdjacentHTML("beforeend", '<div class="chat-user chat-body"><div class="chat-user__image"><img src="img/person2.png" alt=""></div><div class="chat-user__message chat-message"><p class="chat-user__text">' + presentMessage + '</p><div class="chat-user__time chat-time">' + logMessage + "</div></div></div>");
            presetLoading();
            setTimeout((() => {
                let message;
                if ("привет, смотрю сериал" == presentMessage.toLowerCase()) message = `Здорово, я вот жду 3 сезон сериала "видеть"`; else if ("как твои дела?" == presentMessage.toLowerCase()) message = "Недавно ходили на море, тебе нравится море?"; else if ("нравится море, люблю плавать" == presentMessage.toLowerCase()) message = "Вода щас очень теплая, людей правда много"; else if ("не фанат ходить на море" == presentMessage.toLowerCase()) message = "А мне нравится"; else if ("что у тебя нового?" == presentMessage.toLowerCase()) message = "Неделю назад приобрел машину"; else if ("что за машина?" == presentMessage.toLowerCase()) message = "Toyota Soarer, люблю быстро ездить"; else if ("главное ездить с умом" == presentMessage.toLowerCase()) message = "Обязательно"; else message = "Прости, появились срочные дела. До встречи!";
                chatWrapper.insertAdjacentHTML("beforeend", '<div class="chat-bot chat-body"><div class="chat-bot__image"><img src="img/person1.png" alt=""></div><div class="chat-bot__message chat-message"><p class="chat-bot__text">' + message + '</p><div class="chat-bot__time chat-time">' + logMessage + "</div></div></div>");
                scrollToBottom();
            }), 1500);
        }
        inputMessage.value = "";
    }));
    let loadingChat = document.createElement("div");
    loadingChat.className = "chat-bot chat-body chat-loading";
    loadingChat.innerHTML = '<div class="chat-bot__image"><img src="img/person1.png" alt=""></div><div class="chat-bot__loading chat-message"><span class="loading loading-1"></span><span class="loading loading-2"></span><span class="loading loading-3"></span></div>';
    function presetLoading() {
        chatWrapper.append(loadingChat);
        scrollToBottom();
        setTimeout((() => {
            loadingChat.remove();
        }), 1500);
    }
    const themeSwitcher = document.querySelector(".theme-switcher input");
    document.querySelectorAll(".switcher").forEach((el => {
        el.onchange = () => localStorage.setItem(el.id, el.checked);
        el.checked = "true" === localStorage.getItem(el.id);
    }));
    let key = "data-theme";
    let value = "light";
    let theme = localStorage.getItem(key);
    if (theme) chat.setAttribute(key, theme);
    themeSwitcher.addEventListener("change", (e => {
        if (e.target.checked) {
            value = "dark";
            chat.setAttribute(key, value);
            localStorage.setItem(key, value);
        } else {
            value = "light";
            chat.setAttribute(key, value);
            localStorage.setItem(key, value);
        }
    }));
    window["FLS"] = false;
    isWebp();
})();