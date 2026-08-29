const I18N = {
  ru: {
    title: "Шкала откровенности",
    tests: "Тесты",
    photos: "Фото",
    coinsTab: "Монеты",
    back: "Назад",
    coins: "монет",
    hot: "Горячая",
    openFor: "Открыть за",
    watchAd: "Смотреть рекламу и открыть фото",
    watchAdCoins: "Смотреть рекламу и получить 50 монет",
    adLocal: "В Яндекс Играх здесь будет реклама. Для предпросмотра награда выдана.",
    adFail: "Реклама сейчас недоступна. Попробуйте позже.",
    rewardedHint: "Вы посмотрите рекламу и получите награду в игре.",
    testReward: "За тест: {n} вопросов · +{c} монет",
    startTest: "Начать тест",
    result: "Твой результат",
    again: "Пройти ещё раз",
    coinsGot: "+{c} монет",
    alreadyRewarded: "Повторно монеты не начисляются",
    how: "Как играть",
    howBody: "Проходите тесты — за первое прохождение каждого теста 20 монет. Смотрите рекламу — 50 монет за просмотр. Каждое фото стоит 50 монет или одну рекламу. Управление: нажимайте пальцем или мышью. На компьютере — стрелки, Enter, Escape. Прогресс сохраняется сам.",
    login: "Войти через Яндекс ID",
    loginHint: "Вход сохраняет прогресс в облаке на всех устройствах. Без входа тоже можно играть — прогресс останется на этом устройстве.",
    music: "Музыка",
    sfx: "Звуки",
    paused: "Пауза",
    pausedHint: "Игра на паузе, звук выключен",
    needCoins: "Не хватает монет. Пройдите тест или посмотрите рекламу.",
    opened: "Фото открыто",
    close: "Закрыть",
    continue: "Далее",
    ageNote: "Персонажи старше 21 года. Фото — стильные портреты.",
    coinsHelp: "1 реклама = 50 монет. 1 тест = 20 монет. 1 фото = 50 монет.",
    moreCoins: "Монеты за рекламу"
  },
  en: {
    title: "Candid Scale",
    tests: "Tests",
    photos: "Photos",
    coinsTab: "Coins",
    back: "Back",
    coins: "coins",
    hot: "Hot",
    openFor: "Unlock for",
    watchAd: "Watch an ad to unlock the photo",
    watchAdCoins: "Watch an ad and get 50 coins",
    adLocal: "On Yandex Games this shows an ad. Preview reward granted.",
    adFail: "Ads unavailable right now. Try later.",
    rewardedHint: "You will watch an ad and get an in-game reward.",
    testReward: "This test: {n} questions · +{c} coins",
    startTest: "Start test",
    result: "Your result",
    again: "Try again",
    coinsGot: "+{c} coins",
    alreadyRewarded: "Coins are awarded once",
    how: "How to play",
    howBody: "Complete tests — 20 coins for the first clear of each test. Watch an ad — 50 coins. Each photo costs 50 coins or one ad. Tap or click. On desktop: arrows, Enter, Escape. Progress saves automatically.",
    login: "Sign in with Yandex ID",
    loginHint: "Sign in to save cloud progress across devices. Guest play keeps progress on this device.",
    music: "Music",
    sfx: "Sounds",
    paused: "Paused",
    pausedHint: "The game is paused and muted",
    needCoins: "Not enough coins. Finish a test or watch an ad.",
    opened: "Photo unlocked",
    close: "Close",
    continue: "Next",
    ageNote: "Characters are over 21. Photos are stylish portraits.",
    coinsHelp: "1 ad = 50 coins. 1 test = 20 coins. 1 photo = 50 coins.",
    moreCoins: "Coins for an ad"
  }
};
function t(key, vars) {
  const lang = (window.Game && Game.lang) || "ru";
  let s = (I18N[lang] && I18N[lang][key]) || I18N.ru[key] || key;
  if (vars) Object.keys(vars).forEach((k) => { s = s.replace("{" + k + "}", vars[k]); });
  return s;
}
function tx(obj) {
  if (!obj) return "";
  if (typeof obj === "string") return obj;
  const lang = (window.Game && Game.lang) || "ru";
  return obj[lang] || obj.ru || obj.en || "";
}
