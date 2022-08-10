(() => {
    "use strict";
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
    const printDate = document.getElementById("todayDate");
    const spendTime = document.getElementById("spendTime");
    function printDay(todayHours) {
        if (todayHours >= 6 && todayHours < 12) return "утра"; else if (todayHours >= 12 && todayHours < 18) return "дня"; else if (todayHours >= 18 && todayHours <= 23) return "вечера"; else return "ночи";
    }
    function spendMyTime(todayHours) {
        if (todayHours >= 6 && todayHours < 12) return "утро"; else if (todayHours >= 12 && todayHours < 18) return "день"; else if (todayHours >= 18 && todayHours <= 23) return "вечер"; else return "ночь";
    }
    let todayDate = new Date;
    let todayMinuts = (todayDate.getMinutes() < 10 ? "0" : "") + todayDate.getMinutes();
    let todayHours = todayDate.getHours();
    let todayDateNow = todayHours + ":" + todayMinuts + " " + printDay(todayHours);
    console.log(todayHours);
    printDate.innerHTML = todayDateNow;
    spendTime.innerHTML = spendMyTime(todayHours);
    const chatWrapper = document.querySelector(".chat__wrapper");
    let inputMessage = document.querySelector(".input-message");
    const sendMessage = document.querySelector(".send-message");
    sendMessage.addEventListener("click", (function(e) {
        chatWrapper.insertAdjacentHTML("beforeend", '<div class="chat-user chat-body"><div class="chat-user__image"><img src="img/person2.png" alt=""></div><div  class="chat-user__message chat-message"><p class="chat-user__text">' + inputMessage.value + '</p><div class="chat-user__time chat-time" id="timeAgo">8 minutes ago</div></div></div>');
        presetLoading();
        setTimeout((() => {
            if ("собираюсь на прогулку" == inputMessage.value.toLowerCase()) {
                chatWrapper.insertAdjacentElement("beforeend", botMessage);
                outputMessage.innerHTML = "Погода отличная, хорошей прогулки";
            }
            if ("привет" == inputMessage.value.toLowerCase()) {
                chatWrapper.insertAdjacentElement("beforeend", botMessage);
                outputMessage.innerHTML = "привет";
            }
        }), 1500);
    }));
    let botMessage = document.createElement("div");
    botMessage.className = "chat-bot chat-body";
    botMessage.innerHTML = '<div class="chat-bot__image"><img src="img/person1.png" alt=""></div><div class="chat-bot__message chat-message"><p class="chat-bot__text"></p><div class="chat-bot__time chat-time" id="timeAgo">8 minutes ago</div></div>';
    let outputMessage = botMessage.querySelector(".chat-bot__text");
    let loadingChat = document.createElement("div");
    loadingChat.className = "chat-bot chat-body chat-loading";
    loadingChat.innerHTML = '<div class="chat-bot__image"><img src="img/person1.png" alt=""></div><div class="chat-bot__loading chat-message"><span class="loading loading-1"></span><span class="loading loading-2"></span><span class="loading loading-3"></span></div>';
    function presetLoading() {
        chatWrapper.append(loadingChat);
        setTimeout((() => {
            loadingChat.remove();
        }), 1500);
    }
    window["FLS"] = false;
    isWebp();
})();