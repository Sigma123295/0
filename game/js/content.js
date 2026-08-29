const CONTENT = {
  "GAME_TITLE": {
    "ru": "Лунные переписки",
    "en": "Moonlit Messages"
  },
  "GIRLS": [
    {
      "id": "alisa",
      "age": 24,
      "avatar": "assets/img/avatars/alisa.jpg",
      "name": {
        "ru": "Алиса",
        "en": "Alisa"
      },
      "job": {
        "ru": "Бариста",
        "en": "Barista"
      },
      "preview": {
        "ru": "Я сейчас одна... напиши?",
        "en": "I'm free right now... write me?"
      }
    },
    {
      "id": "mira",
      "age": 26,
      "avatar": "assets/img/avatars/mira.jpg",
      "name": {
        "ru": "Мира",
        "en": "Mira"
      },
      "job": {
        "ru": "Фотограф",
        "en": "Photographer"
      },
      "preview": {
        "ru": "Поймала свет. Хочешь кадр?",
        "en": "Caught the light. Want a shot?"
      }
    },
    {
      "id": "kira",
      "age": 25,
      "avatar": "assets/img/avatars/kira.jpg",
      "name": {
        "ru": "Кира",
        "en": "Kira"
      },
      "job": {
        "ru": "Тренер",
        "en": "Coach"
      },
      "preview": {
        "ru": "После тренировки энергия бьёт ключом",
        "en": "Post-workout energy is wild"
      }
    },
    {
      "id": "lena",
      "age": 27,
      "avatar": "assets/img/avatars/lena.jpg",
      "name": {
        "ru": "Лена",
        "en": "Lena"
      },
      "job": {
        "ru": "Путешественница",
        "en": "Traveler"
      },
      "preview": {
        "ru": "Закат на море. Жаль, тебя нет рядом",
        "en": "Sunset by the sea. Wish you were here"
      }
    },
    {
      "id": "nina",
      "age": 23,
      "avatar": "assets/img/avatars/nina.jpg",
      "name": {
        "ru": "Нина",
        "en": "Nina"
      },
      "job": {
        "ru": "Диджей",
        "en": "DJ"
      },
      "preview": {
        "ru": "Ночной сет закончился. Не спится",
        "en": "Night set is over. Can't sleep"
      }
    },
    {
      "id": "eva",
      "age": 28,
      "avatar": "assets/img/avatars/eva.jpg",
      "name": {
        "ru": "Ева",
        "en": "Eva"
      },
      "job": {
        "ru": "Стилист",
        "en": "Stylist"
      },
      "preview": {
        "ru": "Примеряю платье. Оценишь?",
        "en": "Trying a dress. Rate it?"
      }
    },
    {
      "id": "dasha",
      "age": 25,
      "avatar": "assets/img/avatars/dasha.jpg",
      "name": {
        "ru": "Даша",
        "en": "Dasha"
      },
      "job": {
        "ru": "Дизайнер",
        "en": "Designer"
      },
      "preview": {
        "ru": "Дома тихо. Составишь компанию в чате?",
        "en": "It's quiet at home. Keep me company?"
      }
    },
    {
      "id": "sofia",
      "age": 26,
      "avatar": "assets/img/avatars/sofia.jpg",
      "name": {
        "ru": "София",
        "en": "Sofia"
      },
      "job": {
        "ru": "Йога-инструктор",
        "en": "Yoga instructor"
      },
      "preview": {
        "ru": "Рассвет у океана. Дыши со мной",
        "en": "Sunrise by the ocean. Breathe with me"
      }
    }
  ],
  "CHATS": {
    "alisa": [
      {
        "her": {
          "ru": "Привет. Сегодня смена короткая, я уже дома с какао.",
          "en": "Hey. Short shift today, I'm home with cocoa."
        }
      },
      {
        "opts": [
          {
            "t": {
              "ru": "Звучит уютно. Как прошёл день?",
              "en": "Sounds cozy. How was the day?"
            },
            "h": 2
          },
          {
            "t": {
              "ru": "Какао — серьёзный аргумент.",
              "en": "Cocoa is a strong argument."
            },
            "h": 1
          },
          {
            "t": {
              "ru": "Привет. Что нового?",
              "en": "Hi. What's new?"
            },
            "h": 0
          }
        ]
      },
      {
        "her": {
          "ru": "День был шумный, но вечером хочется тихого разговора. Ты из тех, кто пишет коротко или рассказывает?",
          "en": "It was noisy, but I want a quiet talk tonight. Short texts or stories?"
        }
      },
      {
        "opts": [
          {
            "t": {
              "ru": "Могу и так, и так — как тебе спокойнее.",
              "en": "I can do both — whatever feels easier."
            },
            "h": 2
          },
          {
            "t": {
              "ru": "Люблю подробности, если есть настроение.",
              "en": "I like details when the mood is right."
            },
            "h": 1
          },
          {
            "t": {
              "ru": "Коротко. Меньше шума.",
              "en": "Short. Less noise."
            },
            "h": 0
          }
        ]
      },
      {
        "her": {
          "ru": "Тогда секрет: я иногда оставляю сердечко на стаканчике постоянным гостям. Глупо?",
          "en": "Secret: I sometimes draw a heart on regulars' cups. Silly?"
        }
      },
      {
        "opts": [
          {
            "t": {
              "ru": "Мило. Я бы точно заметил.",
              "en": "Cute. I would notice."
            },
            "h": 2
          },
          {
            "t": {
              "ru": "Это маленький ритуал, мне нравится.",
              "en": "A tiny ritual. I like it."
            },
            "h": 1
          },
          {
            "t": {
              "ru": "Немного театрально.",
              "en": "A bit theatrical."
            },
            "h": 0
          }
        ]
      },
      {
        "her": {
          "ru": "А ты? Есть привычка, которую стесняешься рассказывать незнакомцам?",
          "en": "What about you? A habit you rarely tell strangers?"
        }
      },
      {
        "opts": [
          {
            "t": {
              "ru": "Слушаю один и тот же плейлист, когда хочу спокойствия.",
              "en": "I play the same playlist when I need calm."
            },
            "h": 2
          },
          {
            "t": {
              "ru": "Перечитываю старые сообщения, если день странный.",
              "en": "I reread old messages on odd days."
            },
            "h": 1
          },
          {
            "t": {
              "ru": "Пока держу в секрете.",
              "en": "I'll keep that one."
            },
            "h": 0
          }
        ]
      },
      {
        "her": {
          "ru": "Хорошо. Тогда ближе: если бы мы сидели за столиком у окна, о чём бы ты спросил первым?",
          "en": "Okay. Closer: if we sat by the window, what would you ask first?"
        }
      },
      {
        "opts": [
          {
            "t": {
              "ru": "Какой вечер тебя заряжает после смены.",
              "en": "What kind of evening recharges you after a shift."
            },
            "h": 2
          },
          {
            "t": {
              "ru": "Куда бы ты поехала на выходные без планов.",
              "en": "Where you'd go on a planless weekend."
            },
            "h": 1
          },
          {
            "t": {
              "ru": "Что вкуснее всего в твоём меню.",
              "en": "What's the best thing on your menu."
            },
            "h": 0
          }
        ]
      },
      {
        "her": {
          "ru": "Меня заряжает тёплый свет и человек, который не торопит. Ты умеешь не торопить?",
          "en": "Warm light and someone who doesn't rush. Can you slow down?"
        }
      },
      {
        "opts": [
          {
            "t": {
              "ru": "Умею. Можно просто писать и молчать паузами.",
              "en": "I can. We can text and leave pauses."
            },
            "h": 2
          },
          {
            "t": {
              "ru": "Постараюсь, если напомнишь.",
              "en": "I'll try if you remind me."
            },
            "h": 1
          },
          {
            "t": {
              "ru": "Иногда спешу, честно.",
              "en": "Sometimes I rush, honestly."
            },
            "h": 0
          }
        ]
      },
      {
        "her": {
          "ru": "Тогда ещё один вопрос без подвоха: комплимент в чате — про глаза, про голос или про характер?",
          "en": "No trick: a chat compliment — eyes, voice, or character?"
        }
      },
      {
        "opts": [
          {
            "t": {
              "ru": "Про то, какая ты живая в мелочах.",
              "en": "How alive you are in small things."
            },
            "h": 2
          },
          {
            "t": {
              "ru": "Про взгляд. У тебя тёплый.",
              "en": "The look. Yours is warm."
            },
            "h": 1
          },
          {
            "t": {
              "ru": "Про характер — он дольше держится.",
              "en": "Character. It lasts longer."
            },
            "h": 1
          }
        ]
      },
      {
        "her": {
          "ru": "Ты милый, когда не играешь. Если бы я прислала фото с веранды кафе, ты бы написал честно?",
          "en": "You're sweet when you aren't performing. If I send a cafe terrace photo, would you be honest?"
        }
      },
      {
        "opts": [
          {
            "t": {
              "ru": "Честно и мягко. Красиво — скажу красиво.",
              "en": "Honest and kind. If it's lovely, I'll say so."
            },
            "h": 2
          },
          {
            "t": {
              "ru": "Сначала смущусь, потом напишу.",
              "en": "I'd get shy, then write."
            },
            "h": 1
          },
          {
            "t": {
              "ru": "Коротко: огонь.",
              "en": "Short: fire."
            },
            "h": 0
          }
        ]
      },
      {
        "her": {
          "ru": "Ха. Ладно, держи настроение: я сегодня без спешки. Напиши, как бы ты закончил этот вечер, если бы мы были в одном городе.",
          "en": "Ha. Okay — no rush tonight. How would you end the evening if we were in the same city?"
        }
      },
      {
        "opts": [
          {
            "t": {
              "ru": "Прогулка домой длинной дорогой и чай.",
              "en": "A long way home and tea."
            },
            "h": 2
          },
          {
            "t": {
              "ru": "Ещё час разговоров на веранде.",
              "en": "Another hour of talk on the terrace."
            },
            "h": 2
          },
          {
            "t": {
              "ru": "Кино и плед, без лишнего шума.",
              "en": "A movie and a blanket, no extra noise."
            },
            "h": 1
          }
        ]
      },
      {
        "her": {
          "ru": "Мне это подходит. Сохраняю тебя в особых. Завтра напишу первой, если не против.",
          "en": "That works. You're in my specials. I'll text first tomorrow if that's okay."
        }
      },
      {
        "opts": [
          {
            "t": {
              "ru": "Только да. Буду ждать.",
              "en": "Yes. I'll be waiting."
            },
            "h": 2
          },
          {
            "t": {
              "ru": "Я могу написать сам утром.",
              "en": "I can text in the morning."
            },
            "h": 1
          },
          {
            "t": {
              "ru": "Ок. Спокойной ночи.",
              "en": "Okay. Good night."
            },
            "h": 0
          }
        ]
      },
      {
        "her": {
          "ru": "Спокойной. И спасибо, что выбрал тёплые ответы — это чувствуется даже в чате.",
          "en": "Night. Thanks for the warm replies — it shows even in chat."
        }
      }
    ],
    "mira": [
      {
        "her": {
          "ru": "Снимала витрины и случайно поймала своё отражение. Странно нравится.",
          "en": "I shot storefronts and caught my reflection. Weirdly like it."
        }
      },
      {
        "opts": [
          {
            "t": {
              "ru": "Покажи. Хочу понять твой взгляд.",
              "en": "Show me. I want your angle."
            },
            "h": 2
          },
          {
            "t": {
              "ru": "Отражения — честная магия.",
              "en": "Reflections are honest magic."
            },
            "h": 1
          },
          {
            "t": {
              "ru": "Звучит красиво.",
              "en": "Sounds pretty."
            },
            "h": 0
          }
        ]
      },
      {
        "her": {
          "ru": "Люди думают, фотограф всегда хочет позу. А я хочу паузу. Ты умеешь быть в кадре спокойным?",
          "en": "People think a photographer wants a pose. I want a pause. Can you be still in frame?"
        }
      },
      {
        "opts": [
          {
            "t": {
              "ru": "Могу молчать и смотреть.",
              "en": "I can stay quiet and look."
            },
            "h": 2
          },
          {
            "t": {
              "ru": "Немного стесняюсь камер.",
              "en": "Cameras make me shy."
            },
            "h": 1
          },
          {
            "t": {
              "ru": "Буду шутить, пока не получится.",
              "en": "I'd joke until it works."
            },
            "h": 0
          }
        ]
      },
      {
        "her": {
          "ru": "Хорошо. Если бы я снимала тебя на крыше, какой свет выберешь: закат или ночные огни?",
          "en": "If I shot you on a roof, sunset or night lights?"
        }
      },
      {
        "opts": [
          {
            "t": {
              "ru": "Закат. Он делает голос тише.",
              "en": "Sunset. It makes voices quieter."
            },
            "h": 2
          },
          {
            "t": {
              "ru": "Ночь. Больше тайны.",
              "en": "Night. More mystery."
            },
            "h": 1
          },
          {
            "t": {
              "ru": "Как скажешь — ты видишь лучше.",
              "en": "Your call — you see better."
            },
            "h": 1
          }
        ]
      },
      {
        "her": {
          "ru": "Мне нравится, когда человек не спорит с тишиной. Расскажи город, который тебе кажется фильмом.",
          "en": "I like when someone doesn't fight the silence. Name a city that feels like a film."
        }
      },
      {
        "opts": [
          {
            "t": {
              "ru": "Любой приморский вечером.",
              "en": "Any seaside town at night."
            },
            "h": 2
          },
          {
            "t": {
              "ru": "Старый центр после дождя.",
              "en": "An old downtown after rain."
            },
            "h": 1
          },
          {
            "t": {
              "ru": "Не знаю. Подскажи свой.",
              "en": "Not sure. Tell me yours."
            },
            "h": 0
          }
        ]
      },
      {
        "her": {
          "ru": "Мой — тот, где неон отражается в лужах. Если я пришлю такой кадр, напишешь не «класс», а что-то живое?",
          "en": "Mine is neon in puddles. If I send that shot, write something alive, not just “cool”?"
        }
      },
      {
        "opts": [
          {
            "t": {
              "ru": "Напишу, какой в нём воздух.",
              "en": "I'll write about the air in it."
            },
            "h": 2
          },
          {
            "t": {
              "ru": "Попробую без шаблона.",
              "en": "I'll skip the template."
            },
            "h": 1
          },
          {
            "t": {
              "ru": "Класс запрещён, принято.",
              "en": "No “cool”. Got it."
            },
            "h": 0
          }
        ]
      },
      {
        "her": {
          "ru": "Ещё секрет: я иногда снимаю пустые стулья. Они честнее людей. Ты бы сел на такой стул рядом?",
          "en": "Secret: I shoot empty chairs. They're more honest than people. Would you sit beside one?"
        }
      },
      {
        "opts": [
          {
            "t": {
              "ru": "Сел бы. И не заполнял паузу словами.",
              "en": "I would. And I wouldn't fill the pause."
            },
            "h": 2
          },
          {
            "t": {
              "ru": "Сел бы и спросил, кого ты ждёшь.",
              "en": "I'd sit and ask who you're waiting for."
            },
            "h": 1
          },
          {
            "t": {
              "ru": "Странная романтика, но ок.",
              "en": "Strange romance, but okay."
            },
            "h": 0
          }
        ]
      },
      {
        "her": {
          "ru": "Ты внимательный. Это редкость. Если бы у нас была одна плёнка на двоих, что снимем первым?",
          "en": "You're attentive. Rare. If we shared one film roll, first frame?"
        }
      },
      {
        "opts": [
          {
            "t": {
              "ru": "Твои руки и чашку.",
              "en": "Your hands and a cup."
            },
            "h": 2
          },
          {
            "t": {
              "ru": "Улицу под дождём.",
              "en": "The street in the rain."
            },
            "h": 1
          },
          {
            "t": {
              "ru": "Нас в отражении окна.",
              "en": "Us in a window reflection."
            },
            "h": 2
          }
        ]
      },
      {
        "her": {
          "ru": "Сохраняю это. Спокойной ночи. Если не спится — напиши, я тоже ещё с камерой.",
          "en": "Saving that. Good night. If you can't sleep, write — I'm still with the camera."
        }
      },
      {
        "opts": [
          {
            "t": {
              "ru": "Напишу. Не пропадай.",
              "en": "I will. Don't vanish."
            },
            "h": 2
          },
          {
            "t": {
              "ru": "Спокойной. Пусть кадры будут мягкими.",
              "en": "Night. May the frames stay soft."
            },
            "h": 1
          },
          {
            "t": {
              "ru": "Ок.",
              "en": "Okay."
            },
            "h": 0
          }
        ]
      },
      {
        "her": {
          "ru": "Мягкими и будут. Ты хороший собеседник для ночи.",
          "en": "They will. You're a good night conversation."
        }
      }
    ],
    "kira": [
      {
        "her": {
          "ru": "Только с тренировки. Пульс ещё высокий, а в чате почему-то хочется писать тебе.",
          "en": "Just finished training. Heart rate's up, and I still want to text you."
        }
      },
      {
        "opts": [
          {
            "t": {
              "ru": "Пиши. Я на линии.",
              "en": "Write. I'm here."
            },
            "h": 2
          },
          {
            "t": {
              "ru": "Как самочувствие?",
              "en": "How do you feel?"
            },
            "h": 1
          },
          {
            "t": {
              "ru": "Круто, что не забыла.",
              "en": "Nice you didn't forget."
            },
            "h": 0
          }
        ]
      },
      {
        "her": {
          "ru": "Нормально. Иногда после спорта я резкая. Если скажу «давай честно» — выдержишь?",
          "en": "Fine. After sport I get blunt. If I say “be honest” — can you take it?"
        }
      },
      {
        "opts": [
          {
            "t": {
              "ru": "Выдержу. Лучше правда.",
              "en": "I can. Truth is better."
            },
            "h": 2
          },
          {
            "t": {
              "ru": "Попробую без обиды.",
              "en": "I'll try not to take it personally."
            },
            "h": 1
          },
          {
            "t": {
              "ru": "Зависит от темы.",
              "en": "Depends on the topic."
            },
            "h": 0
          }
        ]
      },
      {
        "her": {
          "ru": "Тема простая: свидание после зала. Кофе, прогулка или домашняя еда?",
          "en": "Simple: a date after the gym. Coffee, a walk, or home food?"
        }
      },
      {
        "opts": [
          {
            "t": {
              "ru": "Прогулка, пока город остывает.",
              "en": "A walk while the city cools."
            },
            "h": 2
          },
          {
            "t": {
              "ru": "Еда. Ты заслужила спокойный стол.",
              "en": "Food. You earned a quiet table."
            },
            "h": 1
          },
          {
            "t": {
              "ru": "Кофе и короткие шутки.",
              "en": "Coffee and short jokes."
            },
            "h": 0
          }
        ]
      },
      {
        "her": {
          "ru": "Мне нравится движение. Но вечером — чтобы кто-то заметил, что я устала, без лекции. Ты так умеешь?",
          "en": "I like movement. At night I want someone who notices I'm tired, no lecture. Can you?"
        }
      },
      {
        "opts": [
          {
            "t": {
              "ru": "Умею. «Давай сядем» — и всё.",
              "en": "Yes. “Let's sit” — that's it."
            },
            "h": 2
          },
          {
            "t": {
              "ru": "Могу принести воду и заткнуться.",
              "en": "I can bring water and stay quiet."
            },
            "h": 2
          },
          {
            "t": {
              "ru": "Обычно советую восстановиться.",
              "en": "I usually suggest recovery."
            },
            "h": 0
          }
        ]
      },
      {
        "her": {
          "ru": "Почти идеально. А комплимент: про силу или про то, как я смеюсь, когда сдаю темп?",
          "en": "Almost perfect. Compliment: my strength, or how I laugh when I slow down?"
        }
      },
      {
        "opts": [
          {
            "t": {
              "ru": "Про смех. Он честнее медалей.",
              "en": "The laugh. It's more honest than medals."
            },
            "h": 2
          },
          {
            "t": {
              "ru": "Про силу и мягкость сразу.",
              "en": "Strength and softness together."
            },
            "h": 1
          },
          {
            "t": {
              "ru": "Про дисциплину. Это красиво.",
              "en": "Discipline. That's attractive."
            },
            "h": 1
          }
        ]
      },
      {
        "her": {
          "ru": "Ого. Ладно, ближе: если я пришлю фото с зала, без фильтров, ты не начнёшь про идеальность?",
          "en": "Okay, closer: if I send a gym photo, no filters, you won't start about perfection?"
        }
      },
      {
        "opts": [
          {
            "t": {
              "ru": "Напишу, что живое лучше идеального.",
              "en": "I'll say alive beats perfect."
            },
            "h": 2
          },
          {
            "t": {
              "ru": "Просто скажу, что ты в своём месте.",
              "en": "I'll say you look in your element."
            },
            "h": 1
          },
          {
            "t": {
              "ru": "Скажу «мощно» и не буду умничать.",
              "en": "I'll say “powerful” and stop there."
            },
            "h": 0
          }
        ]
      },
      {
        "her": {
          "ru": "Договорились. Завтра утренний бег. Составишь компанию хотя бы текстом — «не сдавайся на третьем круге»?",
          "en": "Deal. Morning run tomorrow. Keep me company in text — “don't quit on lap three”?"
        }
      },
      {
        "opts": [
          {
            "t": {
              "ru": "Напишу ещё до будильника.",
              "en": "I'll text before your alarm."
            },
            "h": 2
          },
          {
            "t": {
              "ru": "Могу быть твоим темпом в чате.",
              "en": "I can be your pace in chat."
            },
            "h": 1
          },
          {
            "t": {
              "ru": "Ок, напомню.",
              "en": "Okay, I'll remind you."
            },
            "h": 0
          }
        ]
      },
      {
        "her": {
          "ru": "Тогда ты в команде. Мне с тобой легко, хотя мы только в переписке. Это редкий вид спорта.",
          "en": "You're on the team. This is easy, even in texts. Rare sport."
        }
      },
      {
        "opts": [
          {
            "t": {
              "ru": "Тогда не сходим с дистанции.",
              "en": "Then we don't drop the distance."
            },
            "h": 2
          },
          {
            "t": {
              "ru": "Мне тоже легко. Это важно.",
              "en": "It's easy for me too. That matters."
            },
            "h": 1
          },
          {
            "t": {
              "ru": "Продолжим завтра.",
              "en": "Let's continue tomorrow."
            },
            "h": 0
          }
        ]
      },
      {
        "her": {
          "ru": "Продолжим. И да — можешь писать не только про спорт.",
          "en": "We will. And yes — you can write about more than sport."
        }
      }
    ],
    "lena": [
      {
        "her": {
          "ru": "Пишу с набережной. Ветер тёплый, сумка полная магнитов, которых я никогда не вешаю.",
          "en": "Writing from the promenade. Warm wind, a bag of magnets I never hang."
        }
      },
      {
        "opts": [
          {
            "t": {
              "ru": "Зато есть повод вспоминать города.",
              "en": "At least the cities stay with you."
            },
            "h": 2
          },
          {
            "t": {
              "ru": "Пришли вид, если не лень.",
              "en": "Send the view if you want."
            },
            "h": 1
          },
          {
            "t": {
              "ru": "Куда дальше?",
              "en": "Where next?"
            },
            "h": 0
          }
        ]
      },
      {
        "her": {
          "ru": "Дальше — неизвестно. Люблю билеты без жёсткого плана. Ты бы выдержал такое путешествие рядом?",
          "en": "Unknown. I like tickets without a hard plan. Could you travel like that beside me?"
        }
      },
      {
        "opts": [
          {
            "t": {
              "ru": "Да. Главное — не терять друг друга на вокзале.",
              "en": "Yes. Just don't lose each other at the station."
            },
            "h": 2
          },
          {
            "t": {
              "ru": "Нужен один якорь: утро с кофе.",
              "en": "I'd need one anchor: morning coffee."
            },
            "h": 1
          },
          {
            "t": {
              "ru": "Я больше по маршрутам.",
              "en": "I prefer itineraries."
            },
            "h": 0
          }
        ]
      },
      {
        "her": {
          "ru": "Кофе можно. А вечер? Море, крыша отеля или ночной рынок?",
          "en": "Coffee is fine. Evening: sea, hotel roof, or night market?"
        }
      },
      {
        "opts": [
          {
            "t": {
              "ru": "Море. Чтобы разговаривать почти шёпотом.",
              "en": "Sea. Almost whispering."
            },
            "h": 2
          },
          {
            "t": {
              "ru": "Рынок. Чтобы смеяться над специями.",
              "en": "Market. Laughing at spices."
            },
            "h": 1
          },
          {
            "t": {
              "ru": "Крыша. Город как карта.",
              "en": "Roof. The city as a map."
            },
            "h": 1
          }
        ]
      },
      {
        "her": {
          "ru": "Ты романтик с чемоданом. Если бы я прислала пляж на закате, что напишешь вместо «красиво»?",
          "en": "You're a romantic with a suitcase. If I send a sunset beach, what instead of “pretty”?"
        }
      },
      {
        "opts": [
          {
            "t": {
              "ru": "Что воздух, кажется, пахнет каникулами.",
              "en": "That the air smells like a holiday."
            },
            "h": 2
          },
          {
            "t": {
              "ru": "Что хочется быть в кадре, но не портить его.",
              "en": "That I'd want to be in frame without ruining it."
            },
            "h": 2
          },
          {
            "t": {
              "ru": "Что этот свет тебе идёт.",
              "en": "That this light suits you."
            },
            "h": 1
          }
        ]
      },
      {
        "her": {
          "ru": "Идёт. Иногда слишком. Люди пялятся, я надеваю шляпу. Ты бы защитил или пошутил?",
          "en": "It does. Sometimes too much. People stare, I put a hat on. Protect or joke?"
        }
      },
      {
        "opts": [
          {
            "t": {
              "ru": "Встал бы так, чтобы тебе было спокойно.",
              "en": "I'd stand so you feel easy."
            },
            "h": 2
          },
          {
            "t": {
              "ru": "Шляпа + шутка, чтобы снять напряжение.",
              "en": "Hat plus a joke to ease it."
            },
            "h": 1
          },
          {
            "t": {
              "ru": "Ты справишься сама, я рядом.",
              "en": "You can handle it, I'm nearby."
            },
            "h": 0
          }
        ]
      },
      {
        "her": {
          "ru": "Рядом — ключевое. Знаешь, в поездках я редко пишу кому-то перед сном. Сегодня вот пишу.",
          "en": "Nearby is the key. I rarely text anyone before sleep on trips. Today I am."
        }
      },
      {
        "opts": [
          {
            "t": {
              "ru": "Тогда я буду твоей тихой станцией.",
              "en": "Then I'll be your quiet station."
            },
            "h": 2
          },
          {
            "t": {
              "ru": "Пиши, даже если это три слова.",
              "en": "Write even if it's three words."
            },
            "h": 1
          },
          {
            "t": {
              "ru": "Приятно быть исключением.",
              "en": "Nice to be the exception."
            },
            "h": 1
          }
        ]
      },
      {
        "her": {
          "ru": "Три слова: не пропадай, ладно? Завтра паром, связь может моргать.",
          "en": "Three words: don't disappear, okay? Ferry tomorrow, signal may blink."
        }
      },
      {
        "opts": [
          {
            "t": {
              "ru": "Не пропаду. Напиши, как ступишь на берег.",
              "en": "I won't. Text when you step on shore."
            },
            "h": 2
          },
          {
            "t": {
              "ru": "Буду ждать, даже если сообщения придут пачкой.",
              "en": "I'll wait even if texts arrive in a bunch."
            },
            "h": 1
          },
          {
            "t": {
              "ru": "Ок, удачной дороги.",
              "en": "Okay, safe trip."
            },
            "h": 0
          }
        ]
      },
      {
        "her": {
          "ru": "Удачной нам переписке. Ты сделал этот закат теплее, чем он был.",
          "en": "Safe messages to us. You made this sunset warmer than it was."
        }
      }
    ],
    "nina": [
      {
        "her": {
          "ru": "Свет выключили, зал ещё гудит в ушах. Пишу тебе, потому что тишина резко слишком большая.",
          "en": "Lights off, the hall still buzzing in my ears. Texting you because the silence got too big."
        }
      },
      {
        "opts": [
          {
            "t": {
              "ru": "Я тут. Можно без темы.",
              "en": "I'm here. No topic needed."
            },
            "h": 2
          },
          {
            "t": {
              "ru": "Как прошёл сет?",
              "en": "How was the set?"
            },
            "h": 1
          },
          {
            "t": {
              "ru": "Добро пожаловать в тишину.",
              "en": "Welcome to the quiet."
            },
            "h": 0
          }
        ]
      },
      {
        "her": {
          "ru": "Сет огонь, но я не хочу быть «диджеем» в чате. Хочу быть просто Ниной, которая ест картошку в три ночи.",
          "en": "The set slapped, but I don't want to be “the DJ” here. Just Nina eating fries at 3 a.m."
        }
      },
      {
        "opts": [
          {
            "t": {
              "ru": "Привет, Нина с картошкой. Как вкус?",
              "en": "Hi, Nina with fries. How's the taste?"
            },
            "h": 2
          },
          {
            "t": {
              "ru": "Это самый честный статус.",
              "en": "That's the most honest status."
            },
            "h": 1
          },
          {
            "t": {
              "ru": "В три ночи всё вкуснее.",
              "en": "At 3 a.m. everything tastes better."
            },
            "h": 0
          }
        ]
      },
      {
        "her": {
          "ru": "Солёная и идеальная. Если бы ты заехал после концерта, что привёз бы — плед, чай или тишину?",
          "en": "Salty and perfect. If you came after a gig, what would you bring — a blanket, tea, or silence?"
        }
      },
      {
        "opts": [
          {
            "t": {
              "ru": "Тишину и чай. Плед само собой.",
              "en": "Silence and tea. Blanket included."
            },
            "h": 2
          },
          {
            "t": {
              "ru": "Чай и глупые мемы, если устала от крутого.",
              "en": "Tea and silly memes if you're tired of cool."
            },
            "h": 1
          },
          {
            "t": {
              "ru": "Просто себя и наушники.",
              "en": "Just me and headphones."
            },
            "h": 0
          }
        ]
      },
      {
        "her": {
          "ru": "Мемы принимаются. А комплимент без сцены: что тебе во мне слышно, когда нет баса?",
          "en": "Memes accepted. A compliment offstage: what do you hear in me when the bass is gone?"
        }
      },
      {
        "opts": [
          {
            "t": {
              "ru": "Тёплый голос, который не орёт.",
              "en": "A warm voice that doesn't shout."
            },
            "h": 2
          },
          {
            "t": {
              "ru": "Любопытство. Ты всё ещё ищешь трек.",
              "en": "Curiosity. You're still hunting a track."
            },
            "h": 1
          },
          {
            "t": {
              "ru": "Усталость и блеск сразу.",
              "en": "Tiredness and sparkle at once."
            },
            "h": 1
          }
        ]
      },
      {
        "her": {
          "ru": "Блеск можно выключить. Иногда хочется, чтобы меня не фотографировали. Ты бы убрал телефон?",
          "en": "Sparkle can switch off. Sometimes I don't want photos. Would you put the phone away?"
        }
      },
      {
        "opts": [
          {
            "t": {
              "ru": "Убрал бы. Ты не контент.",
              "en": "I would. You're not content."
            },
            "h": 2
          },
          {
            "t": {
              "ru": "Спросил бы. Без «можно кадр».",
              "en": "I'd ask. No “one shot” pressure."
            },
            "h": 1
          },
          {
            "t": {
              "ru": "Один кадр для тебя, не для ленты.",
              "en": "One frame for you, not the feed."
            },
            "h": 0
          }
        ]
      },
      {
        "her": {
          "ru": "За это можно даже поделиться плейлистом. Если я пришлю ночной трек, послушаешь до конца?",
          "en": "That earns a playlist. If I send a night track, will you listen to the end?"
        }
      },
      {
        "opts": [
          {
            "t": {
              "ru": "До последнего затухания.",
              "en": "Until the last fade."
            },
            "h": 2
          },
          {
            "t": {
              "ru": "И напишу, где мурашки.",
              "en": "And I'll mark the goosebumps."
            },
            "h": 2
          },
          {
            "t": {
              "ru": "Попробую, если не усну.",
              "en": "I'll try if I don't fall asleep."
            },
            "h": 0
          }
        ]
      },
      {
        "her": {
          "ru": "Не засни сразу. Мне сегодня нужна переписка как afterparty. Ты остаёшься?",
          "en": "Don't sleep yet. I need chat as afterparty. Staying?"
        }
      },
      {
        "opts": [
          {
            "t": {
              "ru": "Остаюсь. Ещё один круг.",
              "en": "Staying. One more round."
            },
            "h": 2
          },
          {
            "t": {
              "ru": "На два сообщения точно.",
              "en": "For two more messages at least."
            },
            "h": 1
          },
          {
            "t": {
              "ru": "Чуть-чуть и спать.",
              "en": "A little, then sleep."
            },
            "h": 0
          }
        ]
      },
      {
        "her": {
          "ru": "Тогда добро пожаловать в мой тихий клуб. Здесь только мы и картошка.",
          "en": "Welcome to my quiet club. Just us and the fries."
        }
      }
    ],
    "eva": [
      {
        "her": {
          "ru": "Стою у зеркала в бордовом платье и понимаю, что хочу мнение не коллеги, а твоё.",
          "en": "Standing at the mirror in a burgundy dress, wanting your opinion, not a coworker's."
        }
      },
      {
        "opts": [
          {
            "t": {
              "ru": "Пришли. Скажу как человек, не как критик.",
              "en": "Send it. I'll speak as a person, not a critic."
            },
            "h": 2
          },
          {
            "t": {
              "ru": "Бордовый тебе идёт уже в воображении.",
              "en": "Burgundy already suits you in my head."
            },
            "h": 1
          },
          {
            "t": {
              "ru": "Какой повод?",
              "en": "What's the occasion?"
            },
            "h": 0
          }
        ]
      },
      {
        "her": {
          "ru": "Повод — я. Иногда наряжаюсь без выхода. Ты бы понял такую странность?",
          "en": "The occasion is me. I dress up with nowhere to go. Would you get that?"
        }
      },
      {
        "opts": [
          {
            "t": {
              "ru": "Понял. Красота не обязана быть для зала.",
              "en": "I would. Beauty doesn't need an audience."
            },
            "h": 2
          },
          {
            "t": {
              "ru": "Это свидание с собой. Уважаю.",
              "en": "A date with yourself. Respect."
            },
            "h": 1
          },
          {
            "t": {
              "ru": "Я бы предложил выйти хотя бы в парк.",
              "en": "I'd suggest at least a park walk."
            },
            "h": 0
          }
        ]
      },
      {
        "her": {
          "ru": "Парк можно. Только без оценки «дорого/дёшево». Говори про настроение ткани.",
          "en": "A park is fine. No “expensive/cheap”. Talk about the mood of the fabric."
        }
      },
      {
        "opts": [
          {
            "t": {
              "ru": "Тогда: платье звучит как вечер без спешки.",
              "en": "Then: the dress sounds like an unhurried evening."
            },
            "h": 2
          },
          {
            "t": {
              "ru": "Бордо — как низкий голос.",
              "en": "Burgundy is a low voice."
            },
            "h": 1
          },
          {
            "t": {
              "ru": "Звучит уверенно.",
              "en": "It sounds confident."
            },
            "h": 0
          }
        ]
      },
      {
        "her": {
          "ru": "Низкий голос — попал. Если бы ты выбирал комплимент: осанка, взгляд или то, как я поправляю волосы?",
          "en": "Low voice — bullseye. Compliment: posture, gaze, or how I fix my hair?"
        }
      },
      {
        "opts": [
          {
            "t": {
              "ru": "Как поправляешь волосы. Живая деталь.",
              "en": "How you fix your hair. A living detail."
            },
            "h": 2
          },
          {
            "t": {
              "ru": "Взгляд. Он держит зал без слов.",
              "en": "The gaze. It holds a room."
            },
            "h": 1
          },
          {
            "t": {
              "ru": "Осанка. В ней характер.",
              "en": "Posture. Character lives there."
            },
            "h": 1
          }
        ]
      },
      {
        "her": {
          "ru": "Ты опасный стилист слов. Ладно, ближе: балкон ночью, шёлковый халат, город внизу. Напишешь что-то тёплое, не липкое?",
          "en": "You're a dangerous word-stylist. Closer: night balcony, silk robe, city below. Warm, not clingy?"
        }
      },
      {
        "opts": [
          {
            "t": {
              "ru": "Ты выглядишь как пауза, которую хочется сохранить.",
              "en": "You look like a pause worth keeping."
            },
            "h": 2
          },
          {
            "t": {
              "ru": "Городу повезло с видом наверх.",
              "en": "The city is lucky with the view up there."
            },
            "h": 1
          },
          {
            "t": {
              "ru": "Осторожно красиво. Я рядом в чате.",
              "en": "Carefully beautiful. I'm here in chat."
            },
            "h": 1
          }
        ]
      },
      {
        "her": {
          "ru": "Пауза — хорошее слово. Я редко кому даю право на паузу. Не злоупотребляй.",
          "en": "Pause is a good word. I rarely give that right. Don't overuse it."
        }
      },
      {
        "opts": [
          {
            "t": {
              "ru": "Не буду. Буду точным.",
              "en": "I won't. I'll be precise."
            },
            "h": 2
          },
          {
            "t": {
              "ru": "Тогда буду спрашивать, когда много.",
              "en": "Then I'll ask when it's too much."
            },
            "h": 1
          },
          {
            "t": {
              "ru": "Понял границы.",
              "en": "Got the boundary."
            },
            "h": 0
          }
        ]
      },
      {
        "her": {
          "ru": "Границы есть, интерес тоже. Завтра примерочная. Напишешь «удачной ткани» утром?",
          "en": "Boundaries exist, interest too. Fitting tomorrow. Text “good fabric” in the morning?"
        }
      },
      {
        "opts": [
          {
            "t": {
              "ru": "Напишу. И спрошу, какое настроение выберешь.",
              "en": "I will. And I'll ask which mood you pick."
            },
            "h": 2
          },
          {
            "t": {
              "ru": "Удачной ткани. Заранее.",
              "en": "Good fabric. In advance."
            },
            "h": 1
          },
          {
            "t": {
              "ru": "Ок.",
              "en": "Okay."
            },
            "h": 0
          }
        ]
      },
      {
        "her": {
          "ru": "Заранее принято. Ты умеешь быть парой к платью, даже из чата.",
          "en": "Advance accepted. You match a dress even from chat."
        }
      }
    ],
    "dasha": [
      {
        "her": {
          "ru": "Переставляю вазу третий раз. Это либо дизайн, либо я жду, пока ты напишешь.",
          "en": "Moving the vase a third time. Either design, or I'm waiting for you to text."
        }
      },
      {
        "opts": [
          {
            "t": {
              "ru": "Написал. Вазу можно оставить.",
              "en": "I did. The vase can stay."
            },
            "h": 2
          },
          {
            "t": {
              "ru": "Покажи комнату, я «посмотрю свет».",
              "en": "Show the room, I'll “check the light”."
            },
            "h": 1
          },
          {
            "t": {
              "ru": "Привет. Как вечер?",
              "en": "Hi. How's the evening?"
            },
            "h": 0
          }
        ]
      },
      {
        "her": {
          "ru": "Вечер мягкий. Дома пахнет чаем и карандашами. Ты бы выдержал такой тихий быт?",
          "en": "Soft evening. Tea and pencils in the air. Could you handle that quiet life?"
        }
      },
      {
        "opts": [
          {
            "t": {
              "ru": "Да. Тишина — тоже свидание.",
              "en": "Yes. Quiet is also a date."
            },
            "h": 2
          },
          {
            "t": {
              "ru": "Если можно сидеть рядом и читать.",
              "en": "If I can sit nearby and read."
            },
            "h": 1
          },
          {
            "t": {
              "ru": "Иногда мне нужно больше шума.",
              "en": "Sometimes I need more noise."
            },
            "h": 0
          }
        ]
      },
      {
        "her": {
          "ru": "Шум можно дозированно. А сейчас вопрос: плед, сериал или разговор без экрана?",
          "en": "Noise in doses. Right now: blanket, a series, or a talk with no screen?"
        }
      },
      {
        "opts": [
          {
            "t": {
              "ru": "Разговор. Экрану сегодня выходной.",
              "en": "Talk. The screen gets a night off."
            },
            "h": 2
          },
          {
            "t": {
              "ru": "Плед и голоса. Сериал фоном.",
              "en": "Blanket and voices. Series as background."
            },
            "h": 1
          },
          {
            "t": {
              "ru": "Сериал, но с комментариями.",
              "en": "A series, but with comments."
            },
            "h": 0
          }
        ]
      },
      {
        "her": {
          "ru": "Без экрана победил. Расскажи, какую мелочь в человеке ты замечаешь первой дома.",
          "en": "No-screen wins. What tiny thing do you notice first in someone at home?"
        }
      },
      {
        "opts": [
          {
            "t": {
              "ru": "Как ставит кружку. Честно.",
              "en": "How they set the mug. Honestly."
            },
            "h": 2
          },
          {
            "t": {
              "ru": "Смех, когда никто не снимает.",
              "en": "A laugh when nobody is filming."
            },
            "h": 2
          },
          {
            "t": {
              "ru": "Порядок или творческий хаос.",
              "en": "Order or creative mess."
            },
            "h": 1
          }
        ]
      },
      {
        "her": {
          "ru": "Кружка — попал в дизайнера. Если пришлю фото с цветами у окна, не говори «миленько». Скажи точнее.",
          "en": "The mug hit the designer. If I send flowers by the window, don't say “cute”. Be precise."
        }
      },
      {
        "opts": [
          {
            "t": {
              "ru": "Свет падает так, будто комната выдыхает.",
              "en": "The light falls like the room is exhaling."
            },
            "h": 2
          },
          {
            "t": {
              "ru": "Цветы делают тишину цветной.",
              "en": "The flowers color the quiet."
            },
            "h": 1
          },
          {
            "t": {
              "ru": "Хочется быть в этом кадре аккуратно.",
              "en": "I'd want to step into that frame carefully."
            },
            "h": 1
          }
        ]
      },
      {
        "her": {
          "ru": "Аккуратно — да. Я не люблю, когда врываются. Ты стучишься в чат или вваливаешься?",
          "en": "Carefully — yes. I dislike bursting in. Do you knock in chat or barge?"
        }
      },
      {
        "opts": [
          {
            "t": {
              "ru": "Стучусь. «Как ты?» — и жду.",
              "en": "I knock. “How are you?” — and wait."
            },
            "h": 2
          },
          {
            "t": {
              "ru": "Иногда вваливаюсь от радости. Могу учиться.",
              "en": "Sometimes I barge from joy. I can learn."
            },
            "h": 1
          },
          {
            "t": {
              "ru": "Пишу сразу по делу.",
              "en": "I text straight to the point."
            },
            "h": 0
          }
        ]
      },
      {
        "her": {
          "ru": "Учись. Тогда ты можешь быть человеком, которому я присылаю домашние кадры. Это уровень доверия.",
          "en": "Learn. Then you can be the person who gets home photos. That's trust."
        }
      },
      {
        "opts": [
          {
            "t": {
              "ru": "Храню. Не разнесу.",
              "en": "I'll keep them. I won't scatter them."
            },
            "h": 2
          },
          {
            "t": {
              "ru": "Значит, буду бережным.",
              "en": "Then I'll be careful."
            },
            "h": 1
          },
          {
            "t": {
              "ru": "Спасибо за доверие.",
              "en": "Thanks for the trust."
            },
            "h": 1
          }
        ]
      },
      {
        "her": {
          "ru": "Бережность принята. Спокойной ночи. Ваза остаётся где стоит.",
          "en": "Carefulness accepted. Good night. The vase stays where it is."
        }
      }
    ],
    "sofia": [
      {
        "her": {
          "ru": "Сейчас рассвет. Песок ещё холодный, чай горячий. Дыши со мной: четыре на вдохе.",
          "en": "It's sunrise. Sand still cold, tea hot. Breathe with me: four on the inhale."
        }
      },
      {
        "opts": [
          {
            "t": {
              "ru": "Вдох. Я здесь.",
              "en": "Inhale. I'm here."
            },
            "h": 2
          },
          {
            "t": {
              "ru": "Четыре. И выдох длиннее.",
              "en": "Four. And a longer exhale."
            },
            "h": 1
          },
          {
            "t": {
              "ru": "Слишком рано, но для тебя можно.",
              "en": "Too early, but for you okay."
            },
            "h": 0
          }
        ]
      },
      {
        "her": {
          "ru": "Для меня можно — опасная фраза. Я не хочу, чтобы меня выбирали вместо сна. Хочу, чтобы хотели этот ритм.",
          "en": "“For you” is a dangerous phrase. I don't want to replace sleep. I want someone who wants this rhythm."
        }
      },
      {
        "opts": [
          {
            "t": {
              "ru": "Хочу ритм. Не жертву.",
              "en": "I want the rhythm. Not a sacrifice."
            },
            "h": 2
          },
          {
            "t": {
              "ru": "Тогда разбужу себя сам.",
              "en": "Then I'll wake myself."
            },
            "h": 1
          },
          {
            "t": {
              "ru": "Иногда сон победит, честно.",
              "en": "Sometimes sleep will win, honestly."
            },
            "h": 0
          }
        ]
      },
      {
        "her": {
          "ru": "Честность — уже йога. Если бы мы встретились после практики, куда пойдём: чай, море или молчание?",
          "en": "Honesty is already yoga. After practice: tea, sea, or silence?"
        }
      },
      {
        "opts": [
          {
            "t": {
              "ru": "Море и молчание. Чай можно взять с собой.",
              "en": "Sea and silence. Tea can come along."
            },
            "h": 2
          },
          {
            "t": {
              "ru": "Чай и мягкий разговор.",
              "en": "Tea and a soft talk."
            },
            "h": 1
          },
          {
            "t": {
              "ru": "Молчание, если ты не против компании.",
              "en": "Silence, if you don't mind company."
            },
            "h": 1
          }
        ]
      },
      {
        "her": {
          "ru": "Не против. Люди думают, что я всегда спокойная. А я просто хорошо выдыхаю. Ты заметишь, когда мне шумно внутри?",
          "en": "I don't mind. People think I'm always calm. I just exhale well. Would you notice noise inside me?"
        }
      },
      {
        "opts": [
          {
            "t": {
              "ru": "Замечу по коротким сообщениям.",
              "en": "I'd notice shorter messages."
            },
            "h": 2
          },
          {
            "t": {
              "ru": "Спрошу прямо и тихо.",
              "en": "I'd ask directly and quietly."
            },
            "h": 2
          },
          {
            "t": {
              "ru": "Могу не заметить сразу.",
              "en": "I might miss it at first."
            },
            "h": 0
          }
        ]
      },
      {
        "her": {
          "ru": "Прямо и тихо — идеально. Если пришлю фото заката на берегу, не пиши «вау». Напиши, куда ушёл день.",
          "en": "Direct and quiet is perfect. If I send a shore sunset, don't write “wow”. Write where the day went."
        }
      },
      {
        "opts": [
          {
            "t": {
              "ru": "День ушёл в воду и стал спокойнее.",
              "en": "The day went into the water and got calmer."
            },
            "h": 2
          },
          {
            "t": {
              "ru": "День остался в твоих волосах на ветру.",
              "en": "The day stayed in your hair in the wind."
            },
            "h": 1
          },
          {
            "t": {
              "ru": "День закончился правильно.",
              "en": "The day ended the right way."
            },
            "h": 0
          }
        ]
      },
      {
        "her": {
          "ru": "Нравится. Оставь меня в избранных не как «спокойную девушку», а как человека, с которым можно молчать.",
          "en": "I like that. Keep me in favorites not as “the calm girl”, but as someone you can be silent with."
        }
      },
      {
        "opts": [
          {
            "t": {
              "ru": "Оставляю. Молчание тоже связь.",
              "en": "I will. Silence is also a bond."
            },
            "h": 2
          },
          {
            "t": {
              "ru": "Буду писать, когда тишина тёплая.",
              "en": "I'll write when the quiet is warm."
            },
            "h": 1
          },
          {
            "t": {
              "ru": "Ок. Ты в особом списке.",
              "en": "Okay. You're on a special list."
            },
            "h": 1
          }
        ]
      },
      {
        "her": {
          "ru": "Тогда до вечерней практики. Если не напишешь — я всё равно пожелаю тебе ровного дыхания.",
          "en": "Until evening practice. If you don't text, I'll still wish you an even breath."
        }
      },
      {
        "opts": [
          {
            "t": {
              "ru": "Напишу. Дыши спокойно.",
              "en": "I'll write. Breathe easy."
            },
            "h": 2
          },
          {
            "t": {
              "ru": "И тебе ровного дня.",
              "en": "An even day to you too."
            },
            "h": 1
          },
          {
            "t": {
              "ru": "До вечера.",
              "en": "Until evening."
            },
            "h": 0
          }
        ]
      },
      {
        "her": {
          "ru": "До вечера. Ты приятно присутствуешь.",
          "en": "Until evening. Your presence is pleasant."
        }
      }
    ]
  },
  "PHOTOS": [
    {
      "id": "alisa-01",
      "girl": "alisa",
      "price": 25,
      "title": {
        "ru": "Утро в кафе",
        "en": "Morning cafe"
      },
      "src": "assets/img/photos/alisa-01.jpg",
      "hot": true
    },
    {
      "id": "alisa-02",
      "girl": "alisa",
      "price": 40,
      "title": {
        "ru": "Вечер на балконе",
        "en": "Evening balcony"
      },
      "src": "assets/img/photos/alisa-02.jpg",
      "hot": true
    },
    {
      "id": "alisa-03",
      "girl": "alisa",
      "price": 55,
      "title": {
        "ru": "Пляж и океан",
        "en": "Beach and ocean"
      },
      "src": "assets/img/photos/alisa-03.jpg",
      "hot": true
    },
    {
      "id": "mira-01",
      "girl": "mira",
      "price": 30,
      "title": {
        "ru": "Студия и камера",
        "en": "Studio and camera"
      },
      "src": "assets/img/photos/mira-01.jpg",
      "hot": true
    },
    {
      "id": "mira-02",
      "girl": "mira",
      "price": 50,
      "title": {
        "ru": "Крыша ночью",
        "en": "Night rooftop"
      },
      "src": "assets/img/photos/mira-02.jpg",
      "hot": true
    },
    {
      "id": "mira-03",
      "girl": "mira",
      "price": 45,
      "title": {
        "ru": "Лофт и свет",
        "en": "Loft light"
      },
      "src": "assets/img/photos/mira-03.jpg",
      "hot": true
    },
    {
      "id": "kira-01",
      "girl": "kira",
      "price": 35,
      "title": {
        "ru": "После тренировки",
        "en": "After training"
      },
      "src": "assets/img/photos/kira-01.jpg",
      "hot": true
    },
    {
      "id": "kira-02",
      "girl": "kira",
      "price": 70,
      "title": {
        "ru": "У бассейна",
        "en": "By the pool"
      },
      "src": "assets/img/photos/kira-02.jpg",
      "hot": true
    },
    {
      "id": "kira-03",
      "girl": "kira",
      "price": 40,
      "title": {
        "ru": "Закат в парке",
        "en": "Park sunset"
      },
      "src": "assets/img/photos/kira-03.jpg",
      "hot": true
    },
    {
      "id": "lena-01",
      "girl": "lena",
      "price": 50,
      "title": {
        "ru": "Платье у моря",
        "en": "Dress by the sea"
      },
      "src": "assets/img/photos/lena-01.jpg",
      "hot": true
    },
    {
      "id": "lena-02",
      "girl": "lena",
      "price": 35,
      "title": {
        "ru": "Терраса у воды",
        "en": "Terrace by water"
      },
      "src": "assets/img/photos/lena-02.jpg",
      "hot": true
    },
    {
      "id": "lena-03",
      "girl": "lena",
      "price": 80,
      "title": {
        "ru": "Палуба на закате",
        "en": "Deck at sunset"
      },
      "src": "assets/img/photos/lena-03.jpg",
      "hot": true
    },
    {
      "id": "nina-01",
      "girl": "nina",
      "price": 45,
      "title": {
        "ru": "Неон и сцена",
        "en": "Neon stage"
      },
      "src": "assets/img/photos/nina-01.jpg",
      "hot": true
    },
    {
      "id": "nina-02",
      "girl": "nina",
      "price": 55,
      "title": {
        "ru": "Ночная крыша",
        "en": "Night roof"
      },
      "src": "assets/img/photos/nina-02.jpg",
      "hot": true
    },
    {
      "id": "nina-03",
      "girl": "nina",
      "price": 30,
      "title": {
        "ru": "Тихий дом",
        "en": "Quiet home"
      },
      "src": "assets/img/photos/nina-03.jpg",
      "hot": true
    },
    {
      "id": "eva-01",
      "girl": "eva",
      "price": 60,
      "title": {
        "ru": "Бордовое платье",
        "en": "Burgundy dress"
      },
      "src": "assets/img/photos/eva-01.jpg",
      "hot": true
    },
    {
      "id": "eva-02",
      "girl": "eva",
      "price": 75,
      "title": {
        "ru": "Ночной балкон",
        "en": "Night balcony"
      },
      "src": "assets/img/photos/eva-02.jpg",
      "hot": true
    },
    {
      "id": "eva-03",
      "girl": "eva",
      "price": 65,
      "title": {
        "ru": "Красный вечер",
        "en": "Red evening"
      },
      "src": "assets/img/photos/eva-03.jpg",
      "hot": true
    },
    {
      "id": "dasha-01",
      "girl": "dasha",
      "price": 25,
      "title": {
        "ru": "Цветы и свет",
        "en": "Flowers and light"
      },
      "src": "assets/img/photos/dasha-01.jpg",
      "hot": true
    },
    {
      "id": "dasha-02",
      "girl": "dasha",
      "price": 40,
      "title": {
        "ru": "Домашний вечер",
        "en": "Home evening"
      },
      "src": "assets/img/photos/dasha-02.jpg",
      "hot": true
    },
    {
      "id": "dasha-03",
      "girl": "dasha",
      "price": 35,
      "title": {
        "ru": "Летний пикник",
        "en": "Summer picnic"
      },
      "src": "assets/img/photos/dasha-03.jpg",
      "hot": true
    },
    {
      "id": "sofia-01",
      "girl": "sofia",
      "price": 40,
      "title": {
        "ru": "Йога у моря",
        "en": "Yoga by the sea"
      },
      "src": "assets/img/photos/sofia-01.jpg",
      "hot": true
    },
    {
      "id": "sofia-02",
      "girl": "sofia",
      "price": 30,
      "title": {
        "ru": "Спа и чай",
        "en": "Spa and tea"
      },
      "src": "assets/img/photos/sofia-02.jpg",
      "hot": true
    },
    {
      "id": "sofia-03",
      "girl": "sofia",
      "price": 50,
      "title": {
        "ru": "Сумерки на берегу",
        "en": "Dusk on the shore"
      },
      "src": "assets/img/photos/sofia-03.jpg",
      "hot": true
    }
  ],
  "QUIZZES": [
    {
      "id": "flirt",
      "title": {
        "ru": "Насколько ты смелый во флирте?",
        "en": "How bold is your flirt?"
      },
      "cover": "assets/img/avatars/nina.jpg",
      "reward": 20,
      "questions": 15,
      "results": [
        {
          "min": 0,
          "title": {
            "ru": "Тихий старт",
            "en": "Quiet start"
          },
          "text": {
            "ru": "Ты осторожен и выбираешь безопасные шаги. Это уважение, но иногда стоит добавить искру.",
            "en": "You are careful and pick safe steps. That's respect, but a spark wouldn't hurt."
          }
        },
        {
          "min": 16,
          "title": {
            "ru": "Тёплый флирт",
            "en": "Warm flirt"
          },
          "text": {
            "ru": "Ты умеешь быть милым без давления. С тобой легко начинать разговор.",
            "en": "You stay kind without pressure. Talking to you is easy."
          }
        },
        {
          "min": 28,
          "title": {
            "ru": "Искра в чате",
            "en": "Chat spark"
          },
          "text": {
            "ru": "Ты чувствуешь момент и не боишься комплимента. Главное — не терять такт.",
            "en": "You feel the moment and aren't afraid of a compliment. Keep the tact."
          }
        },
        {
          "min": 38,
          "title": {
            "ru": "Смелый ритм",
            "en": "Bold rhythm"
          },
          "text": {
            "ru": "Ты играешь ярко и уверенно. Следи, чтобы партнёр успевал за темпом.",
            "en": "You play bright and sure. Make sure the other person can keep up."
          }
        }
      ],
      "qs": [
        {
          "q": {
            "ru": "Как начнёшь переписку с интересным человеком?",
            "en": "How do you start chatting with someone interesting?"
          },
          "a": [
            {
              "t": {
                "ru": "Привет. Как день?",
                "en": "Hi. How's the day?"
              },
              "s": 0
            },
            {
              "t": {
                "ru": "Увидел деталь и написал про неё.",
                "en": "I notice a detail and mention it."
              },
              "s": 2
            },
            {
              "t": {
                "ru": "Сразу комплимент внешности.",
                "en": "A look compliment right away."
              },
              "s": 3
            },
            {
              "t": {
                "ru": "Мем и проверка реакции.",
                "en": "A meme to test the reaction."
              },
              "s": 1
            }
          ]
        },
        {
          "q": {
            "ru": "Тебе написали поздно вечером «не спится». Что ответишь?",
            "en": "They text at night “can't sleep”. Your reply?"
          },
          "a": [
            {
              "t": {
                "ru": "Спи. Завтра напишешь.",
                "en": "Sleep. Text tomorrow."
              },
              "s": 0
            },
            {
              "t": {
                "ru": "Я тоже тут. О чём думаешь?",
                "en": "I'm here too. What's on your mind?"
              },
              "s": 2
            },
            {
              "t": {
                "ru": "Значит, вселенная даёт нам чат.",
                "en": "Then the universe gave us a chat."
              },
              "s": 3
            },
            {
              "t": {
                "ru": "Могу скинуть плейлист.",
                "en": "I can send a playlist."
              },
              "s": 1
            }
          ]
        },
        {
          "q": {
            "ru": "Комплимент в первом часе общения:",
            "en": "A compliment in the first hour:"
          },
          "a": [
            {
              "t": {
                "ru": "Не даю. Рано.",
                "en": "I don't. Too soon."
              },
              "s": 0
            },
            {
              "t": {
                "ru": "Про характер или юмор.",
                "en": "About character or humor."
              },
              "s": 2
            },
            {
              "t": {
                "ru": "Про взгляд и сразу «огонь».",
                "en": "About the look, then “fire”."
              },
              "s": 3
            },
            {
              "t": {
                "ru": "Про работу или хобби.",
                "en": "About work or a hobby."
              },
              "s": 1
            }
          ]
        },
        {
          "q": {
            "ru": "Тебя попросили оценить фото. Ты:",
            "en": "They ask you to rate a photo. You:"
          },
          "a": [
            {
              "t": {
                "ru": "Коротко: нормально.",
                "en": "Short: it's fine."
              },
              "s": 0
            },
            {
              "t": {
                "ru": "Говоришь, что именно цепляет.",
                "en": "You say what exactly catches you."
              },
              "s": 2
            },
            {
              "t": {
                "ru": "Пишешь, что засмотрелся.",
                "en": "You admit you stared."
              },
              "s": 3
            },
            {
              "t": {
                "ru": "Шутишь, чтобы не смутить.",
                "en": "You joke so nobody feels awkward."
              },
              "s": 1
            }
          ]
        },
        {
          "q": {
            "ru": "Кто делает шаг к созвону?",
            "en": "Who suggests a call?"
          },
          "a": [
            {
              "t": {
                "ru": "Жду инициативы.",
                "en": "I wait for them."
              },
              "s": 0
            },
            {
              "t": {
                "ru": "Предлагаю, если разговор уже тёплый.",
                "en": "I suggest once the chat is warm."
              },
              "s": 2
            },
            {
              "t": {
                "ru": "Предлагаю быстро, пока есть искра.",
                "en": "I suggest fast while the spark is there."
              },
              "s": 3
            },
            {
              "t": {
                "ru": "Сначала ещё пару дней текста.",
                "en": "A couple more days of text first."
              },
              "s": 1
            }
          ]
        },
        {
          "q": {
            "ru": "Флирт на грани шутки. Ты:",
            "en": "Flirting on the edge of a joke. You:"
          },
          "a": [
            {
              "t": {
                "ru": "Уходишь в безопасную тему.",
                "en": "You switch to a safe topic."
              },
              "s": 0
            },
            {
              "t": {
                "ru": "Отвечаешь в том же тоне чуть мягче.",
                "en": "You match the tone a bit softer."
              },
              "s": 2
            },
            {
              "t": {
                "ru": "Поднимаешь ставки шуткой.",
                "en": "You raise the stakes with a joke."
              },
              "s": 3
            },
            {
              "t": {
                "ru": "Ставишь смайл и наблюдаешь.",
                "en": "You send an emoji and watch."
              },
              "s": 1
            }
          ]
        },
        {
          "q": {
            "ru": "Как реагируешь на «скучаю»?",
            "en": "How do you answer “I miss you”?"
          },
          "a": [
            {
              "t": {
                "ru": "Я тоже.",
                "en": "Me too."
              },
              "s": 1
            },
            {
              "t": {
                "ru": "Спрашиваешь, чего именно не хватает.",
                "en": "You ask what they miss exactly."
              },
              "s": 2
            },
            {
              "t": {
                "ru": "Пишешь, что уже идёшь в чат как на свидание.",
                "en": "You say the chat already feels like a date."
              },
              "s": 3
            },
            {
              "t": {
                "ru": "Меняешь тему, чтобы не давить.",
                "en": "You change topic so it isn't heavy."
              },
              "s": 0
            }
          ]
        },
        {
          "q": {
            "ru": "Эмодзи в серьёзном чате:",
            "en": "Emoji in a serious chat:"
          },
          "a": [
            {
              "t": {
                "ru": "Почти не использую.",
                "en": "I almost never use them."
              },
              "s": 0
            },
            {
              "t": {
                "ru": "Одно точное.",
                "en": "One precise one."
              },
              "s": 2
            },
            {
              "t": {
                "ru": "Россыпь сердец.",
                "en": "A handful of hearts."
              },
              "s": 3
            },
            {
              "t": {
                "ru": "Только стикеры.",
                "en": "Stickers only."
              },
              "s": 1
            }
          ]
        },
        {
          "q": {
            "ru": "Человек ставит границы. Ты:",
            "en": "They set a boundary. You:"
          },
          "a": [
            {
              "t": {
                "ru": "Сразу отходишь навсегда.",
                "en": "You back off forever."
              },
              "s": 0
            },
            {
              "t": {
                "ru": "Благодаришь и продолжаешь уважительно.",
                "en": "You thank them and stay respectful."
              },
              "s": 2
            },
            {
              "t": {
                "ru": "Чуть шутишь, но принимаешь.",
                "en": "You joke a little, then accept."
              },
              "s": 1
            },
            {
              "t": {
                "ru": "Проверяешь, твёрдая ли граница.",
                "en": "You test if the boundary is firm."
              },
              "s": 3
            }
          ]
        },
        {
          "q": {
            "ru": "Идеальный темп сообщений:",
            "en": "Ideal message pace:"
          },
          "a": [
            {
              "t": {
                "ru": "Раз в день.",
                "en": "Once a day."
              },
              "s": 0
            },
            {
              "t": {
                "ru": "Волнами, когда есть настроение.",
                "en": "In waves, when the mood is there."
              },
              "s": 2
            },
            {
              "t": {
                "ru": "Почти сразу, пока горячо.",
                "en": "Almost instantly while it's hot."
              },
              "s": 3
            },
            {
              "t": {
                "ru": "Паузы специально, чтобы интрига.",
                "en": "Planned pauses for intrigue."
              },
              "s": 1
            }
          ]
        },
        {
          "q": {
            "ru": "Свидание предложишь:",
            "en": "You'd suggest a date:"
          },
          "a": [
            {
              "t": {
                "ru": "После долгой переписки.",
                "en": "After a long chat period."
              },
              "s": 0
            },
            {
              "t": {
                "ru": "Когда появилась общая шутка.",
                "en": "Once you share an inside joke."
              },
              "s": 2
            },
            {
              "t": {
                "ru": "Как только поймал интерес.",
                "en": "As soon as interest is clear."
              },
              "s": 3
            },
            {
              "t": {
                "ru": "Пусть предложат сами.",
                "en": "Let them suggest it."
              },
              "s": 1
            }
          ]
        },
        {
          "q": {
            "ru": "Что для тебя смелый шаг в чате?",
            "en": "A bold chat move for you is:"
          },
          "a": [
            {
              "t": {
                "ru": "Написать первым утром.",
                "en": "Texting first in the morning."
              },
              "s": 1
            },
            {
              "t": {
                "ru": "Признаться, что человек нравится.",
                "en": "Admitting you like them."
              },
              "s": 2
            },
            {
              "t": {
                "ru": "Попросить голосовое.",
                "en": "Asking for a voice note."
              },
              "s": 3
            },
            {
              "t": {
                "ru": "Отправить песню без пояснений.",
                "en": "Sending a song with no caption."
              },
              "s": 0
            }
          ]
        },
        {
          "q": {
            "ru": "Если разговор затих:",
            "en": "If the chat goes quiet:"
          },
          "a": [
            {
              "t": {
                "ru": "Исчезаю.",
                "en": "I disappear."
              },
              "s": 0
            },
            {
              "t": {
                "ru": "Возвращаюсь с новой живой темой.",
                "en": "I return with a lively topic."
              },
              "s": 2
            },
            {
              "t": {
                "ru": "Пишу прямое «скучал по чату».",
                "en": "I write a direct “missed this chat”."
              },
              "s": 3
            },
            {
              "t": {
                "ru": "Ставлю реакцию на старое сообщение.",
                "en": "I react to an old message."
              },
              "s": 1
            }
          ]
        },
        {
          "q": {
            "ru": "Ревность к чужим лайкам:",
            "en": "Jealousy about someone else's likes:"
          },
          "a": [
            {
              "t": {
                "ru": "Не моё дело.",
                "en": "Not my business."
              },
              "s": 1
            },
            {
              "t": {
                "ru": "Спрошу спокойно, если уже близко.",
                "en": "I'll ask calmly if we're close."
              },
              "s": 2
            },
            {
              "t": {
                "ru": "Пошучу, но мне важно.",
                "en": "I'll joke, but it matters."
              },
              "s": 3
            },
            {
              "t": {
                "ru": "Промолчу и отойду.",
                "en": "I'll stay quiet and step back."
              },
              "s": 0
            }
          ]
        },
        {
          "q": {
            "ru": "Финал вечера в переписке:",
            "en": "How you end a night of chatting:"
          },
          "a": [
            {
              "t": {
                "ru": "Спокойной ночи. Точка.",
                "en": "Good night. Period."
              },
              "s": 0
            },
            {
              "t": {
                "ru": "Тёплое пожелание и маленький комплимент.",
                "en": "A warm wish and a small compliment."
              },
              "s": 2
            },
            {
              "t": {
                "ru": "«Не хочу отпускать чат».",
                "en": "“I don't want to let the chat go”."
              },
              "s": 3
            },
            {
              "t": {
                "ru": "Стикер и всё.",
                "en": "A sticker and that's it."
              },
              "s": 1
            }
          ]
        }
      ]
    },
    {
      "id": "dates",
      "title": {
        "ru": "Твой стиль свиданий",
        "en": "Your dating style"
      },
      "cover": "assets/img/avatars/lena.jpg",
      "reward": 20,
      "questions": 15,
      "results": [
        {
          "min": 0,
          "title": {
            "ru": "Классика",
            "en": "Classic"
          },
          "text": {
            "ru": "Тебе важны понятные форматы: кафе, прогулка, спокойный разговор.",
            "en": "You like clear formats: a cafe, a walk, a calm talk."
          }
        },
        {
          "min": 16,
          "title": {
            "ru": "Уютный сценарист",
            "en": "Cozy planner"
          },
          "text": {
            "ru": "Ты строишь вечер как маленький фильм: свет, маршрут, настроение.",
            "en": "You build the evening like a short film: light, route, mood."
          }
        },
        {
          "min": 28,
          "title": {
            "ru": "Импровизатор",
            "en": "Improviser"
          },
          "text": {
            "ru": "План есть, но ты легко меняешь его ради живого момента.",
            "en": "You have a plan, but you'll change it for a live moment."
          }
        },
        {
          "min": 38,
          "title": {
            "ru": "Автор вечеров",
            "en": "Evening author"
          },
          "text": {
            "ru": "Ты создаёшь впечатление. Главное — не забыть спросить, комфортно ли другому.",
            "en": "You create an impression. Just remember to ask if the other person is comfortable."
          }
        }
      ],
      "qs": [
        {
          "q": {
            "ru": "Первое свидание — где?",
            "en": "First date — where?"
          },
          "a": [
            {
              "t": {
                "ru": "Тихое кафе.",
                "en": "A quiet cafe."
              },
              "s": 1
            },
            {
              "t": {
                "ru": "Прогулка без жёсткой цели.",
                "en": "A walk with no hard goal."
              },
              "s": 2
            },
            {
              "t": {
                "ru": "Необычная локация: крыша, рынок, выставка.",
                "en": "An unusual spot: roof, market, exhibit."
              },
              "s": 3
            },
            {
              "t": {
                "ru": "Онлайн ещё немного.",
                "en": "Stay online a bit more."
              },
              "s": 0
            }
          ]
        },
        {
          "q": {
            "ru": "Кто платит?",
            "en": "Who pays?"
          },
          "a": [
            {
              "t": {
                "ru": "Кто пригласил.",
                "en": "Whoever invited."
              },
              "s": 2
            },
            {
              "t": {
                "ru": "Всегда я.",
                "en": "Always me."
              },
              "s": 3
            },
            {
              "t": {
                "ru": "Пополам.",
                "en": "Split."
              },
              "s": 1
            },
            {
              "t": {
                "ru": "Как получится, без темы.",
                "en": "Whatever happens, no talk."
              },
              "s": 0
            }
          ]
        },
        {
          "q": {
            "ru": "Опоздание на 15 минут. Ты:",
            "en": "They're 15 minutes late. You:"
          },
          "a": [
            {
              "t": {
                "ru": "Уходишь.",
                "en": "You leave."
              },
              "s": 0
            },
            {
              "t": {
                "ru": "Пишешь «я на месте, без спешки».",
                "en": "You text “I'm here, no rush”."
              },
              "s": 2
            },
            {
              "t": {
                "ru": "Заказываешь себе что-то и ждёшь спокойно.",
                "en": "You order something and wait calmly."
              },
              "s": 1
            },
            {
              "t": {
                "ru": "Встречаешь шуткой про драму.",
                "en": "You greet them with a drama joke."
              },
              "s": 3
            }
          ]
        },
        {
          "q": {
            "ru": "Подарки на втором свидании:",
            "en": "A gift on the second date:"
          },
          "a": [
            {
              "t": {
                "ru": "Не нужно.",
                "en": "No need."
              },
              "s": 0
            },
            {
              "t": {
                "ru": "Мелочь по смыслу разговора.",
                "en": "A small thing tied to your talks."
              },
              "s": 2
            },
            {
              "t": {
                "ru": "Цветы всегда.",
                "en": "Flowers always."
              },
              "s": 1
            },
            {
              "t": {
                "ru": "Билеты или впечатление.",
                "en": "Tickets or an experience."
              },
              "s": 3
            }
          ]
        },
        {
          "q": {
            "ru": "Разговор за столом. Ты больше:",
            "en": "Talk at the table. You mostly:"
          },
          "a": [
            {
              "t": {
                "ru": "Слушаешь.",
                "en": "Listen."
              },
              "s": 1
            },
            {
              "t": {
                "ru": "Задаёшь живые вопросы.",
                "en": "Ask living questions."
              },
              "s": 2
            },
            {
              "t": {
                "ru": "Рассказываешь истории.",
                "en": "Tell stories."
              },
              "s": 3
            },
            {
              "t": {
                "ru": "Шутишь, чтобы не было пауз.",
                "en": "Joke so there are no pauses."
              },
              "s": 0
            }
          ]
        },
        {
          "q": {
            "ru": "Если химии мало:",
            "en": "If there's little chemistry:"
          },
          "a": [
            {
              "t": {
                "ru": "Терплю вечер до конца молча.",
                "en": "You endure the evening in silence."
              },
              "s": 0
            },
            {
              "t": {
                "ru": "Честно и мягко завершаешь.",
                "en": "You end it honestly and kindly."
              },
              "s": 2
            },
            {
              "t": {
                "ru": "Пытаешься «зажечь» любой ценой.",
                "en": "You try to spark it at any cost."
              },
              "s": 3
            },
            {
              "t": {
                "ru": "Предлагаешь дружеский формат.",
                "en": "You suggest a friendly format."
              },
              "s": 1
            }
          ]
        },
        {
          "q": {
            "ru": "Идеальная длина первой встречи:",
            "en": "Ideal length of a first meeting:"
          },
          "a": [
            {
              "t": {
                "ru": "40 минут.",
                "en": "40 minutes."
              },
              "s": 0
            },
            {
              "t": {
                "ru": "Пара часов.",
                "en": "A couple of hours."
              },
              "s": 2
            },
            {
              "t": {
                "ru": "Весь вечер, если идёт.",
                "en": "The whole evening if it flows."
              },
              "s": 3
            },
            {
              "t": {
                "ru": "Коротко и ещё созвон.",
                "en": "Short plus a later call."
              },
              "s": 1
            }
          ]
        },
        {
          "q": {
            "ru": "Погода испортилась. План:",
            "en": "Weather ruins the plan. You:"
          },
          "a": [
            {
              "t": {
                "ru": "Отмена.",
                "en": "Cancel."
              },
              "s": 0
            },
            {
              "t": {
                "ru": "Музей, чай, новый маршрут.",
                "en": "Museum, tea, a new route."
              },
              "s": 2
            },
            {
              "t": {
                "ru": "Всё равно гулять под дождём.",
                "en": "Walk in the rain anyway."
              },
              "s": 3
            },
            {
              "t": {
                "ru": "Перенос на сообщение.",
                "en": "Reschedule by text."
              },
              "s": 1
            }
          ]
        },
        {
          "q": {
            "ru": "Фото вместе:",
            "en": "A photo together:"
          },
          "a": [
            {
              "t": {
                "ru": "Не надо.",
                "en": "No thanks."
              },
              "s": 0
            },
            {
              "t": {
                "ru": "Если обоим ок — одно.",
                "en": "One, if both are okay."
              },
              "s": 2
            },
            {
              "t": {
                "ru": "Серия, пока свет хороший.",
                "en": "A series while the light is good."
              },
              "s": 3
            },
            {
              "t": {
                "ru": "Пусть сделает кто-то ещё.",
                "en": "Let someone else take it."
              },
              "s": 1
            }
          ]
        },
        {
          "q": {
            "ru": "Что важнее на свидании?",
            "en": "What matters more on a date?"
          },
          "a": [
            {
              "t": {
                "ru": "Пунктуальность.",
                "en": "Punctuality."
              },
              "s": 0
            },
            {
              "t": {
                "ru": "Внимание.",
                "en": "Attention."
              },
              "s": 2
            },
            {
              "t": {
                "ru": "Вау-локация.",
                "en": "A wow location."
              },
              "s": 3
            },
            {
              "t": {
                "ru": "Вкусная еда.",
                "en": "Good food."
              },
              "s": 1
            }
          ]
        },
        {
          "q": {
            "ru": "После встречи пишешь:",
            "en": "After the date you text:"
          },
          "a": [
            {
              "t": {
                "ru": "На следующий день.",
                "en": "The next day."
              },
              "s": 1
            },
            {
              "t": {
                "ru": "По дороге домой.",
                "en": "On the way home."
              },
              "s": 2
            },
            {
              "t": {
                "ru": "Сразу «это было здорово».",
                "en": "Right away “that was great”."
              },
              "s": 3
            },
            {
              "t": {
                "ru": "Жду их сообщение.",
                "en": "You wait for theirs."
              },
              "s": 0
            }
          ]
        },
        {
          "q": {
            "ru": "Тема прошлого:",
            "en": "Talking about the past:"
          },
          "a": [
            {
              "t": {
                "ru": "Табу на первом.",
                "en": "Taboo on the first date."
              },
              "s": 0
            },
            {
              "t": {
                "ru": "Коротко, без деталей ран.",
                "en": "Briefly, no wound details."
              },
              "s": 2
            },
            {
              "t": {
                "ru": "Честный разговор, если спросили.",
                "en": "An honest talk if asked."
              },
              "s": 1
            },
            {
              "t": {
                "ru": "Сам поднимаю, чтобы очистить поле.",
                "en": "I bring it up to clear the field."
              },
              "s": 3
            }
          ]
        },
        {
          "q": {
            "ru": "Сюрприз:",
            "en": "A surprise:"
          },
          "a": [
            {
              "t": {
                "ru": "Не люблю.",
                "en": "I dislike them."
              },
              "s": 0
            },
            {
              "t": {
                "ru": "Маленький и безопасный.",
                "en": "Small and safe."
              },
              "s": 2
            },
            {
              "t": {
                "ru": "Большой жест.",
                "en": "A big gesture."
              },
              "s": 3
            },
            {
              "t": {
                "ru": "Только если уверен на 100%.",
                "en": "Only if I'm 100% sure."
              },
              "s": 1
            }
          ]
        },
        {
          "q": {
            "ru": "Когда знакомить с друзьями?",
            "en": "When to introduce friends?"
          },
          "a": [
            {
              "t": {
                "ru": "Очень нескоро.",
                "en": "Much later."
              },
              "s": 0
            },
            {
              "t": {
                "ru": "Когда появилось доверие.",
                "en": "Once trust is there."
              },
              "s": 2
            },
            {
              "t": {
                "ru": "Быстро, чтобы проверить совместимость.",
                "en": "Soon, to test the mix."
              },
              "s": 3
            },
            {
              "t": {
                "ru": "Пусть само случится.",
                "en": "Let it happen by itself."
              },
              "s": 1
            }
          ]
        },
        {
          "q": {
            "ru": "Идеальный финал вечера:",
            "en": "Ideal end of the evening:"
          },
          "a": [
            {
              "t": {
                "ru": "Чёткое «до связи».",
                "en": "A clear “talk later”."
              },
              "s": 0
            },
            {
              "t": {
                "ru": "Прогулка до транспорта.",
                "en": "A walk to their ride."
              },
              "s": 2
            },
            {
              "t": {
                "ru": "Ещё час на набережной.",
                "en": "Another hour by the water."
              },
              "s": 3
            },
            {
              "t": {
                "ru": "Сообщение с порога.",
                "en": "A text from the doorway."
              },
              "s": 1
            }
          ]
        }
      ]
    },
    {
      "id": "romantic",
      "title": {
        "ru": "Насколько ты романтик",
        "en": "How romantic are you"
      },
      "cover": "assets/img/avatars/sofia.jpg",
      "reward": 20,
      "questions": 15,
      "results": [
        {
          "min": 0,
          "title": {
            "ru": "Практик",
            "en": "Practical"
          },
          "text": {
            "ru": "Тебе важнее дела, чем декорации. Романтика для тебя — надёжность.",
            "en": "Actions beat decorations. Romance for you is reliability."
          }
        },
        {
          "min": 16,
          "title": {
            "ru": "Тёплый реалист",
            "en": "Warm realist"
          },
          "text": {
            "ru": "Ты замечаешь мелочи и не строишь замок из облаков.",
            "en": "You notice small things and don't build castles on clouds."
          }
        },
        {
          "min": 28,
          "title": {
            "ru": "Лиричный тип",
            "en": "Lyrical type"
          },
          "text": {
            "ru": "Тебе нужны закаты, слова и смысл касаний взглядом.",
            "en": "You need sunsets, words, and meaningful looks."
          }
        },
        {
          "min": 38,
          "title": {
            "ru": "Поэт в чате",
            "en": "Chat poet"
          },
          "text": {
            "ru": "Ты создаёшь атмосферу из воздуха. Не забывай про землю — быт тоже любовь.",
            "en": "You make atmosphere out of air. Don't forget the ground — daily life is love too."
          }
        }
      ],
      "qs": [
        {
          "q": {
            "ru": "Закат на свидании:",
            "en": "A sunset on a date:"
          },
          "a": [
            {
              "t": {
                "ru": "Просто свет.",
                "en": "Just light."
              },
              "s": 0
            },
            {
              "t": {
                "ru": "Повод замолчать вместе.",
                "en": "A reason to go quiet together."
              },
              "s": 2
            },
            {
              "t": {
                "ru": "Обязательный пункт маршрута.",
                "en": "A required stop on the route."
              },
              "s": 3
            },
            {
              "t": {
                "ru": "Хороший фон для фото.",
                "en": "A nice photo background."
              },
              "s": 1
            }
          ]
        },
        {
          "q": {
            "ru": "Письмо от руки:",
            "en": "A handwritten letter:"
          },
          "a": [
            {
              "t": {
                "ru": "Архаика.",
                "en": "Old-fashioned."
              },
              "s": 0
            },
            {
              "t": {
                "ru": "Иногда сильнее чата.",
                "en": "Sometimes stronger than chat."
              },
              "s": 2
            },
            {
              "t": {
                "ru": "Мечтаю получить.",
                "en": "I dream of receiving one."
              },
              "s": 3
            },
            {
              "t": {
                "ru": "Мило, но не обязательно.",
                "en": "Cute, not required."
              },
              "s": 1
            }
          ]
        },
        {
          "q": {
            "ru": "Песня «про нас»:",
            "en": "A song “about us”:"
          },
          "a": [
            {
              "t": {
                "ru": "Не собираю такие.",
                "en": "I don't collect those."
              },
              "s": 0
            },
            {
              "t": {
                "ru": "Одна может засесть.",
                "en": "One can stick."
              },
              "s": 2
            },
            {
              "t": {
                "ru": "Весь плейлист строится вокруг.",
                "en": "A whole playlist grows around it."
              },
              "s": 3
            },
            {
              "t": {
                "ru": "Пришлю ссылку без слов.",
                "en": "I'll send a link with no words."
              },
              "s": 1
            }
          ]
        },
        {
          "q": {
            "ru": "Случайный дождь:",
            "en": "Sudden rain:"
          },
          "a": [
            {
              "t": {
                "ru": "Ищем крышу.",
                "en": "We find a roof."
              },
              "s": 0
            },
            {
              "t": {
                "ru": "Можно постоять под навесом и говорить.",
                "en": "Stand under a shelter and talk."
              },
              "s": 2
            },
            {
              "t": {
                "ru": "Идём под дождём, если тепло.",
                "en": "Walk in it if it's warm."
              },
              "s": 3
            },
            {
              "t": {
                "ru": "Такси и чай.",
                "en": "A cab and tea."
              },
              "s": 1
            }
          ]
        },
        {
          "q": {
            "ru": "Комплимент важнее:",
            "en": "The more important compliment:"
          },
          "a": [
            {
              "t": {
                "ru": "Про ум.",
                "en": "About intelligence."
              },
              "s": 1
            },
            {
              "t": {
                "ru": "Про то, как человек делает день легче.",
                "en": "How they make the day easier."
              },
              "s": 2
            },
            {
              "t": {
                "ru": "Про красоту без стеснения.",
                "en": "Beauty without shyness."
              },
              "s": 3
            },
            {
              "t": {
                "ru": "Про достижения.",
                "en": "About achievements."
              },
              "s": 0
            }
          ]
        },
        {
          "q": {
            "ru": "Годовщина месяца:",
            "en": "A one-month mark:"
          },
          "a": [
            {
              "t": {
                "ru": "Не отмечаю.",
                "en": "I don't mark it."
              },
              "s": 0
            },
            {
              "t": {
                "ru": "Сообщение с деталью.",
                "en": "A text with a detail."
              },
              "s": 2
            },
            {
              "t": {
                "ru": "Маленький ритуал.",
                "en": "A small ritual."
              },
              "s": 3
            },
            {
              "t": {
                "ru": "Ужин, если оба хотят.",
                "en": "Dinner if both want it."
              },
              "s": 1
            }
          ]
        },
        {
          "q": {
            "ru": "Цветы без повода:",
            "en": "Flowers with no occasion:"
          },
          "a": [
            {
              "t": {
                "ru": "Не понимаю.",
                "en": "I don't get it."
              },
              "s": 0
            },
            {
              "t": {
                "ru": "Редкая точность попадание.",
                "en": "A rare perfect hit."
              },
              "s": 2
            },
            {
              "t": {
                "ru": "Люблю дарить и получать.",
                "en": "I like giving and getting them."
              },
              "s": 3
            },
            {
              "t": {
                "ru": "Лучше растение в горшке.",
                "en": "A potted plant is better."
              },
              "s": 1
            }
          ]
        },
        {
          "q": {
            "ru": "Ночной звонок «просто голос»:",
            "en": "A night call “just for the voice”:"
          },
          "a": [
            {
              "t": {
                "ru": "Лучше текст.",
                "en": "Text is better."
              },
              "s": 0
            },
            {
              "t": {
                "ru": "Иногда да, если оба не спят.",
                "en": "Sometimes, if both are awake."
              },
              "s": 2
            },
            {
              "t": {
                "ru": "Это моя слабость.",
                "en": "That's my weakness."
              },
              "s": 3
            },
            {
              "t": {
                "ru": "Коротко и спать.",
                "en": "Short, then sleep."
              },
              "s": 1
            }
          ]
        },
        {
          "q": {
            "ru": "Место силы вдвоём:",
            "en": "A shared special place:"
          },
          "a": [
            {
              "t": {
                "ru": "Нет такого.",
                "en": "There isn't one."
              },
              "s": 0
            },
            {
              "t": {
                "ru": "Появится само.",
                "en": "It will appear on its own."
              },
              "s": 1
            },
            {
              "t": {
                "ru": "Хочу одно «наше» кафе.",
                "en": "I want one “our” cafe."
              },
              "s": 2
            },
            {
              "t": {
                "ru": "Хочу маршрут-секрет.",
                "en": "I want a secret route."
              },
              "s": 3
            }
          ]
        },
        {
          "q": {
            "ru": "Слова «ты мне важен»:",
            "en": "The words “you matter to me”:"
          },
          "a": [
            {
              "t": {
                "ru": "Показываю делами, не говорю.",
                "en": "I show it, I don't say it."
              },
              "s": 1
            },
            {
              "t": {
                "ru": "Говорю, когда точно.",
                "en": "I say it when I'm sure."
              },
              "s": 2
            },
            {
              "t": {
                "ru": "Говорю часто, чтобы человек слышал.",
                "en": "I say it often so they hear it."
              },
              "s": 3
            },
            {
              "t": {
                "ru": "Сложно произнести.",
                "en": "Hard to say."
              },
              "s": 0
            }
          ]
        },
        {
          "q": {
            "ru": "Кино под пледом:",
            "en": "A movie under a blanket:"
          },
          "a": [
            {
              "t": {
                "ru": "Можно и без романтики.",
                "en": "Fine without romance."
              },
              "s": 1
            },
            {
              "t": {
                "ru": "Важна компания, не фильм.",
                "en": "Company matters more than the film."
              },
              "s": 2
            },
            {
              "t": {
                "ru": "Почти идеальный вечер.",
                "en": "Almost a perfect evening."
              },
              "s": 3
            },
            {
              "t": {
                "ru": "Лучше выйти в город.",
                "en": "Better to go out."
              },
              "s": 0
            }
          ]
        },
        {
          "q": {
            "ru": "Рассвет специально:",
            "en": "Waking for a sunrise on purpose:"
          },
          "a": [
            {
              "t": {
                "ru": "Нет.",
                "en": "No."
              },
              "s": 0
            },
            {
              "t": {
                "ru": "Раз в год.",
                "en": "Once a year."
              },
              "s": 1
            },
            {
              "t": {
                "ru": "Если человек рядом — да.",
                "en": "Yes if that person is there."
              },
              "s": 2
            },
            {
              "t": {
                "ru": "Сам предложу.",
                "en": "I'll suggest it myself."
              },
              "s": 3
            }
          ]
        },
        {
          "q": {
            "ru": "Имена в телефоне:",
            "en": "Names in the phone:"
          },
          "a": [
            {
              "t": {
                "ru": "Как есть.",
                "en": "As they are."
              },
              "s": 0
            },
            {
              "t": {
                "ru": "Маленькая пометка.",
                "en": "A small note."
              },
              "s": 1
            },
            {
              "t": {
                "ru": "Тёплое прозвище.",
                "en": "A warm nickname."
              },
              "s": 2
            },
            {
              "t": {
                "ru": "Целая история в скобках.",
                "en": "A whole story in brackets."
              },
              "s": 3
            }
          ]
        },
        {
          "q": {
            "ru": "Молчание вдвоём:",
            "en": "Silence together:"
          },
          "a": [
            {
              "t": {
                "ru": "Неловко.",
                "en": "Awkward."
              },
              "s": 0
            },
            {
              "t": {
                "ru": "Нормально.",
                "en": "Normal."
              },
              "s": 1
            },
            {
              "t": {
                "ru": "Признак близости.",
                "en": "A sign of closeness."
              },
              "s": 2
            },
            {
              "t": {
                "ru": "Ищу такие моменты.",
                "en": "I look for those moments."
              },
              "s": 3
            }
          ]
        },
        {
          "q": {
            "ru": "Любовь для тебя — это:",
            "en": "Love for you is:"
          },
          "a": [
            {
              "t": {
                "ru": "Союз и быт.",
                "en": "A partnership and daily life."
              },
              "s": 1
            },
            {
              "t": {
                "ru": "Выбор каждый день.",
                "en": "A daily choice."
              },
              "s": 2
            },
            {
              "t": {
                "ru": "Состояние, похожее на музыку.",
                "en": "A state that feels like music."
              },
              "s": 3
            },
            {
              "t": {
                "ru": "Редкое совпадение.",
                "en": "A rare coincidence."
              },
              "s": 0
            }
          ]
        }
      ]
    },
    {
      "id": "chatstyle",
      "title": {
        "ru": "Какой ты в переписке",
        "en": "What you're like in chat"
      },
      "cover": "assets/img/avatars/alisa.jpg",
      "reward": 20,
      "questions": 15,
      "results": [
        {
          "min": 0,
          "title": {
            "ru": "Лаконичный",
            "en": "Laconic"
          },
          "text": {
            "ru": "Мало букв, много смысла. Иногда людям не хватает тепла в количестве знаков.",
            "en": "Few letters, lots of meaning. Sometimes people want more warmth in the word count."
          }
        },
        {
          "min": 16,
          "title": {
            "ru": "Живой собеседник",
            "en": "Lively talker"
          },
          "text": {
            "ru": "Ты держишь ритм и не бросаешь диалог на полуслове.",
            "en": "You keep a rhythm and don't drop a dialogue mid-sentence."
          }
        },
        {
          "min": 28,
          "title": {
            "ru": "Мастер атмосферы",
            "en": "Atmosphere maker"
          },
          "text": {
            "ru": "Твои сообщения похожи на сцены. С тобой хочется открывать чат.",
            "en": "Your messages feel like scenes. People want to open your chat."
          }
        },
        {
          "min": 38,
          "title": {
            "ru": "Роман в пузырях",
            "en": "A novel in bubbles"
          },
          "text": {
            "ru": "Ты пишешь щедро и ярко. Следи, чтобы второму хватало воздуха.",
            "en": "You write generously and bright. Make sure the other person can breathe."
          }
        }
      ],
      "qs": [
        {
          "q": {
            "ru": "Средняя длина сообщения:",
            "en": "Average message length:"
          },
          "a": [
            {
              "t": {
                "ru": "Одно предложение.",
                "en": "One sentence."
              },
              "s": 0
            },
            {
              "t": {
                "ru": "Короткий абзац.",
                "en": "A short paragraph."
              },
              "s": 2
            },
            {
              "t": {
                "ru": "Простыня с деталями.",
                "en": "A long detailed text."
              },
              "s": 3
            },
            {
              "t": {
                "ru": "Голосовые.",
                "en": "Voice notes."
              },
              "s": 1
            }
          ]
        },
        {
          "q": {
            "ru": "Точки и скобки:",
            "en": "Periods and parentheses:"
          },
          "a": [
            {
              "t": {
                "ru": "Точка = серьёзно.",
                "en": "A period means serious."
              },
              "s": 1
            },
            {
              "t": {
                "ru": "Пишу как говорю.",
                "en": "I write as I speak."
              },
              "s": 2
            },
            {
              "t": {
                "ru": "Много «)))» для тепла.",
                "en": "Lots of “)))” for warmth."
              },
              "s": 3
            },
            {
              "t": {
                "ru": "Без знаков, на бегу.",
                "en": "No punctuation, on the run."
              },
              "s": 0
            }
          ]
        },
        {
          "q": {
            "ru": "Ответ задерживается на час. Ты:",
            "en": "A reply is an hour late. You:"
          },
          "a": [
            {
              "t": {
                "ru": "Думаешь, что всё кончено.",
                "en": "You think it's over."
              },
              "s": 0
            },
            {
              "t": {
                "ru": "Занят — бывает.",
                "en": "They're busy — it happens."
              },
              "s": 2
            },
            {
              "t": {
                "ru": "Пишешь ещё одно «ну как».",
                "en": "You send another “so?”."
              },
              "s": 3
            },
            {
              "t": {
                "ru": "Ставишь прочитано и ждёшь.",
                "en": "You leave it read and wait."
              },
              "s": 1
            }
          ]
        },
        {
          "q": {
            "ru": "Голосовые:",
            "en": "Voice notes:"
          },
          "a": [
            {
              "t": {
                "ru": "Не слушаю.",
                "en": "I don't listen."
              },
              "s": 0
            },
            {
              "t": {
                "ru": "Короткие люблю.",
                "en": "I like short ones."
              },
              "s": 2
            },
            {
              "t": {
                "ru": "Могу наговорить прогулку.",
                "en": "I can narrate a whole walk."
              },
              "s": 3
            },
            {
              "t": {
                "ru": "Только в ответ.",
                "en": "Only in reply."
              },
              "s": 1
            }
          ]
        },
        {
          "q": {
            "ru": "Реакции вместо текста:",
            "en": "Reactions instead of text:"
          },
          "a": [
            {
              "t": {
                "ru": "Экономия.",
                "en": "Saves time."
              },
              "s": 1
            },
            {
              "t": {
                "ru": "Иногда ок, но не вместо разговора.",
                "en": "Sometimes okay, not instead of a talk."
              },
              "s": 2
            },
            {
              "t": {
                "ru": "Мало, хочу слов.",
                "en": "Not enough, I want words."
              },
              "s": 3
            },
            {
              "t": {
                "ru": "Мой основной жанр.",
                "en": "My main genre."
              },
              "s": 0
            }
          ]
        },
        {
          "q": {
            "ru": "Ночной чат:",
            "en": "Night chat:"
          },
          "a": [
            {
              "t": {
                "ru": "Сон важнее.",
                "en": "Sleep comes first."
              },
              "s": 0
            },
            {
              "t": {
                "ru": "Если оба не спите — да.",
                "en": "If both are awake — yes."
              },
              "s": 2
            },
            {
              "t": {
                "ru": "Лучшее время для честности.",
                "en": "The best time for honesty."
              },
              "s": 3
            },
            {
              "t": {
                "ru": "Только мемы.",
                "en": "Memes only."
              },
              "s": 1
            }
          ]
        },
        {
          "q": {
            "ru": "Конфликт в переписке:",
            "en": "A conflict in chat:"
          },
          "a": [
            {
              "t": {
                "ru": "Молчу до остывания.",
                "en": "I go quiet until it cools."
              },
              "s": 1
            },
            {
              "t": {
                "ru": "Пишу спокойно по пунктам.",
                "en": "I write calmly, point by point."
              },
              "s": 2
            },
            {
              "t": {
                "ru": "Предлагаю голос.",
                "en": "I suggest a call."
              },
              "s": 3
            },
            {
              "t": {
                "ru": "Ирония в защиту.",
                "en": "Irony as a shield."
              },
              "s": 0
            }
          ]
        },
        {
          "q": {
            "ru": "Как хранишь важные чаты:",
            "en": "How you keep important chats:"
          },
          "a": [
            {
              "t": {
                "ru": "Никак.",
                "en": "I don't."
              },
              "s": 0
            },
            {
              "t": {
                "ru": "Закрепляю.",
                "en": "I pin them."
              },
              "s": 2
            },
            {
              "t": {
                "ru": "Перечитываю избранное.",
                "en": "I reread favorites."
              },
              "s": 3
            },
            {
              "t": {
                "ru": "Скрин важных фраз.",
                "en": "Screenshots of key lines."
              },
              "s": 1
            }
          ]
        },
        {
          "q": {
            "ru": "Юмор в чате:",
            "en": "Humor in chat:"
          },
          "a": [
            {
              "t": {
                "ru": "Редко.",
                "en": "Rarely."
              },
              "s": 0
            },
            {
              "t": {
                "ru": "Лёгкий, без яда.",
                "en": "Light, no venom."
              },
              "s": 2
            },
            {
              "t": {
                "ru": "Сарказм — мой спорт.",
                "en": "Sarcasm is my sport."
              },
              "s": 1
            },
            {
              "t": {
                "ru": "Флирт-шутки постоянно.",
                "en": "Flirty jokes constantly."
              },
              "s": 3
            }
          ]
        },
        {
          "q": {
            "ru": "Ты пишешь первым:",
            "en": "You text first:"
          },
          "a": [
            {
              "t": {
                "ru": "Почти никогда.",
                "en": "Almost never."
              },
              "s": 0
            },
            {
              "t": {
                "ru": "Когда есть повод.",
                "en": "When there's a reason."
              },
              "s": 1
            },
            {
              "t": {
                "ru": "Когда просто подумал о человеке.",
                "en": "When I simply thought of them."
              },
              "s": 2
            },
            {
              "t": {
                "ru": "Каждое утро.",
                "en": "Every morning."
              },
              "s": 3
            }
          ]
        },
        {
          "q": {
            "ru": "Опечатки:",
            "en": "Typos:"
          },
          "a": [
            {
              "t": {
                "ru": "Бесят, правлю.",
                "en": "They annoy me, I edit."
              },
              "s": 1
            },
            {
              "t": {
                "ru": "Живые, оставляю.",
                "en": "They're alive, I leave them."
              },
              "s": 2
            },
            {
              "t": {
                "ru": "Играю с ними.",
                "en": "I play with them."
              },
              "s": 3
            },
            {
              "t": {
                "ru": "Не замечаю.",
                "en": "I don't notice."
              },
              "s": 0
            }
          ]
        },
        {
          "q": {
            "ru": "Секреты в чате:",
            "en": "Secrets in chat:"
          },
          "a": [
            {
              "t": {
                "ru": "Не пишу.",
                "en": "I don't write them."
              },
              "s": 0
            },
            {
              "t": {
                "ru": "Постепенно.",
                "en": "Gradually."
              },
              "s": 2
            },
            {
              "t": {
                "ru": "Ночью легче сказать.",
                "en": "Easier to say at night."
              },
              "s": 3
            },
            {
              "t": {
                "ru": "Только при встрече.",
                "en": "Only in person."
              },
              "s": 1
            }
          ]
        },
        {
          "q": {
            "ru": "Индикатор «печатает»:",
            "en": "The “typing” indicator:"
          },
          "a": [
            {
              "t": {
                "ru": "Не смотрю.",
                "en": "I don't watch it."
              },
              "s": 0
            },
            {
              "t": {
                "ru": "Немного волнуюсь.",
                "en": "I get a little nervous."
              },
              "s": 2
            },
            {
              "t": {
                "ru": "Жду как событие.",
                "en": "I wait like it's an event."
              },
              "s": 3
            },
            {
              "t": {
                "ru": "Сам включаю и стираю.",
                "en": "I type and delete on purpose."
              },
              "s": 1
            }
          ]
        },
        {
          "q": {
            "ru": "Конец диалога:",
            "en": "Ending a dialogue:"
          },
          "a": [
            {
              "t": {
                "ru": "Просто не отвечаю.",
                "en": "I just don't reply."
              },
              "s": 0
            },
            {
              "t": {
                "ru": "«Пойду, напиши позже».",
                "en": "“I'll go, text later”."
              },
              "s": 2
            },
            {
              "t": {
                "ru": "Тёплый ритуал прощания.",
                "en": "A warm goodbye ritual."
              },
              "s": 3
            },
            {
              "t": {
                "ru": "Стикер.",
                "en": "A sticker."
              },
              "s": 1
            }
          ]
        },
        {
          "q": {
            "ru": "Идеальный чат для тебя:",
            "en": "Your ideal chat:"
          },
          "a": [
            {
              "t": {
                "ru": "По делу.",
                "en": "To the point."
              },
              "s": 0
            },
            {
              "t": {
                "ru": "Дело + тепло.",
                "en": "Point plus warmth."
              },
              "s": 1
            },
            {
              "t": {
                "ru": "Как сериал с сериями.",
                "en": "Like a show with episodes."
              },
              "s": 2
            },
            {
              "t": {
                "ru": "Как секретный дневник на двоих.",
                "en": "Like a secret diary for two."
              },
              "s": 3
            }
          ]
        }
      ]
    },
    {
      "id": "care",
      "title": {
        "ru": "Твой язык заботы",
        "en": "Your care language"
      },
      "cover": "assets/img/avatars/dasha.jpg",
      "reward": 20,
      "questions": 15,
      "results": [
        {
          "min": 0,
          "title": {
            "ru": "Делами",
            "en": "Through actions"
          },
          "text": {
            "ru": "Ты помогаешь руками и фактами. Слова можешь добавить — они тоже греют.",
            "en": "You help with hands and facts. Words can be added — they warm too."
          }
        },
        {
          "min": 16,
          "title": {
            "ru": "Внимательный",
            "en": "Attentive"
          },
          "text": {
            "ru": "Ты помнишь мелочи: чай, паузу, настроение.",
            "en": "You remember small things: tea, a pause, a mood."
          }
        },
        {
          "min": 28,
          "title": {
            "ru": "Тёплый контакт",
            "en": "Warm contact"
          },
          "text": {
            "ru": "Тебе важны слова, присутствие и маленькие ритуалы.",
            "en": "Words, presence, and small rituals matter to you."
          }
        },
        {
          "min": 38,
          "title": {
            "ru": "Забота на максимум",
            "en": "Care on max"
          },
          "text": {
            "ru": "Ты готов оборачивать человека вниманием. Спроси, сколько ему комфортно.",
            "en": "You wrap a person in attention. Ask how much feels comfortable."
          }
        }
      ],
      "qs": [
        {
          "q": {
            "ru": "Человек заболел. Ты:",
            "en": "They're sick. You:"
          },
          "a": [
            {
              "t": {
                "ru": "Напишешь «поправляйся».",
                "en": "Text “get well”."
              },
              "s": 0
            },
            {
              "t": {
                "ru": "Спросишь, что принести.",
                "en": "Ask what to bring."
              },
              "s": 2
            },
            {
              "t": {
                "ru": "Составишь список заботы.",
                "en": "Make a care list."
              },
              "s": 3
            },
            {
              "t": {
                "ru": "Кинешь мем для настроения.",
                "en": "Send a meme for the mood."
              },
              "s": 1
            }
          ]
        },
        {
          "q": {
            "ru": "Важнее получить:",
            "en": "More important to receive:"
          },
          "a": [
            {
              "t": {
                "ru": "Помощь по делу.",
                "en": "Practical help."
              },
              "s": 1
            },
            {
              "t": {
                "ru": "Сообщение «я рядом».",
                "en": "A “I'm here” text."
              },
              "s": 2
            },
            {
              "t": {
                "ru": "Неожиданный комплимент.",
                "en": "An unexpected compliment."
              },
              "s": 3
            },
            {
              "t": {
                "ru": "Время вдвоём без телефона.",
                "en": "Time together with no phone."
              },
              "s": 2
            }
          ]
        },
        {
          "q": {
            "ru": "Как поддерживаешь в стрессе:",
            "en": "How you support stress:"
          },
          "a": [
            {
              "t": {
                "ru": "Советы.",
                "en": "Advice."
              },
              "s": 1
            },
            {
              "t": {
                "ru": "Слушаю без решений.",
                "en": "I listen with no solutions."
              },
              "s": 2
            },
            {
              "t": {
                "ru": "Отвлекаю прогулкой.",
                "en": "I distract with a walk."
              },
              "s": 3
            },
            {
              "t": {
                "ru": "Даю пространство.",
                "en": "I give space."
              },
              "s": 0
            }
          ]
        },
        {
          "q": {
            "ru": "Памятные даты:",
            "en": "Important dates:"
          },
          "a": [
            {
              "t": {
                "ru": "Календарь напоминает.",
                "en": "The calendar reminds me."
              },
              "s": 1
            },
            {
              "t": {
                "ru": "Помню сам.",
                "en": "I remember myself."
              },
              "s": 3
            },
            {
              "t": {
                "ru": "Спрашиваю заранее.",
                "en": "I ask in advance."
              },
              "s": 2
            },
            {
              "t": {
                "ru": "Не акцентирую.",
                "en": "I don't focus on them."
              },
              "s": 0
            }
          ]
        },
        {
          "q": {
            "ru": "Еда как забота:",
            "en": "Food as care:"
          },
          "a": [
            {
              "t": {
                "ru": "Не мой язык.",
                "en": "Not my language."
              },
              "s": 0
            },
            {
              "t": {
                "ru": "Заказать любимое.",
                "en": "Order their favorite."
              },
              "s": 2
            },
            {
              "t": {
                "ru": "Приготовить.",
                "en": "Cook."
              },
              "s": 3
            },
            {
              "t": {
                "ru": "Прислать фото блюда.",
                "en": "Send a food photo."
              },
              "s": 1
            }
          ]
        },
        {
          "q": {
            "ru": "Когда человек молчит день:",
            "en": "If they go quiet for a day:"
          },
          "a": [
            {
              "t": {
                "ru": "Не трогаю.",
                "en": "I don't touch it."
              },
              "s": 0
            },
            {
              "t": {
                "ru": "Короткое «ты как?».",
                "en": "A short “you okay?”."
              },
              "s": 2
            },
            {
              "t": {
                "ru": "Пишу цепочку поддержки.",
                "en": "I send a support chain."
              },
              "s": 3
            },
            {
              "t": {
                "ru": "Жду, сам занят.",
                "en": "I wait, I'm busy too."
              },
              "s": 1
            }
          ]
        },
        {
          "q": {
            "ru": "Подарок лучше:",
            "en": "A better gift:"
          },
          "a": [
            {
              "t": {
                "ru": "Полезный.",
                "en": "Useful."
              },
              "s": 1
            },
            {
              "t": {
                "ru": "С историей.",
                "en": "With a story."
              },
              "s": 2
            },
            {
              "t": {
                "ru": "Впечатление.",
                "en": "An experience."
              },
              "s": 3
            },
            {
              "t": {
                "ru": "Без подарков, лучше время.",
                "en": "No gifts, time instead."
              },
              "s": 0
            }
          ]
        },
        {
          "q": {
            "ru": "Ревность к чужому вниманию:",
            "en": "Jealousy of someone else's attention:"
          },
          "a": [
            {
              "t": {
                "ru": "Работаю с собой.",
                "en": "I work on myself."
              },
              "s": 1
            },
            {
              "t": {
                "ru": "Говорю о потребности.",
                "en": "I talk about the need."
              },
              "s": 2
            },
            {
              "t": {
                "ru": "Прошу больше знаков.",
                "en": "I ask for more signs."
              },
              "s": 3
            },
            {
              "t": {
                "ru": "Делаю вид, что всё ок.",
                "en": "I pretend it's fine."
              },
              "s": 0
            }
          ]
        },
        {
          "q": {
            "ru": "Утро: как проявляешь тепло?",
            "en": "Morning: how do you show warmth?"
          },
          "a": [
            {
              "t": {
                "ru": "Не пишу до обеда.",
                "en": "I don't text until afternoon."
              },
              "s": 0
            },
            {
              "t": {
                "ru": "Короткое доброе.",
                "en": "A short kind note."
              },
              "s": 2
            },
            {
              "t": {
                "ru": "Голосовое с кофе.",
                "en": "A voice note with coffee."
              },
              "s": 3
            },
            {
              "t": {
                "ru": "Стикер.",
                "en": "A sticker."
              },
              "s": 1
            }
          ]
        },
        {
          "q": {
            "ru": "Ссора. Первый шаг к миру:",
            "en": "After a fight, first step to peace:"
          },
          "a": [
            {
              "t": {
                "ru": "Жду их шаг.",
                "en": "I wait for theirs."
              },
              "s": 0
            },
            {
              "t": {
                "ru": "Пишу «давай спокойно».",
                "en": "I write “let's do this calmly”."
              },
              "s": 2
            },
            {
              "t": {
                "ru": "Прихожу с жестом примирения.",
                "en": "I arrive with a peace gesture."
              },
              "s": 3
            },
            {
              "t": {
                "ru": "Делаю вид, что ничего не было.",
                "en": "I pretend nothing happened."
              },
              "s": 1
            }
          ]
        },
        {
          "q": {
            "ru": "Твоя фраза заботы:",
            "en": "Your care phrase:"
          },
          "a": [
            {
              "t": {
                "ru": "Напиши, если что.",
                "en": "Text if you need anything."
              },
              "s": 0
            },
            {
              "t": {
                "ru": "Я рядом, без условий.",
                "en": "I'm here, no conditions."
              },
              "s": 2
            },
            {
              "t": {
                "ru": "Ты важнее расписания.",
                "en": "You're more important than the schedule."
              },
              "s": 3
            },
            {
              "t": {
                "ru": "Держись.",
                "en": "Hang in there."
              },
              "s": 1
            }
          ]
        },
        {
          "q": {
            "ru": "Физическое присутствие vs чат:",
            "en": "Being there vs chat:"
          },
          "a": [
            {
              "t": {
                "ru": "Чата достаточно.",
                "en": "Chat is enough."
              },
              "s": 0
            },
            {
              "t": {
                "ru": "Чат держит, встреча лечит.",
                "en": "Chat holds, meeting heals."
              },
              "s": 2
            },
            {
              "t": {
                "ru": "Только рядом.",
                "en": "Only in person."
              },
              "s": 3
            },
            {
              "t": {
                "ru": "Зависит от недели.",
                "en": "Depends on the week."
              },
              "s": 1
            }
          ]
        },
        {
          "q": {
            "ru": "Тайные знаки «я думал о тебе»:",
            "en": "Secret “I thought of you” signs:"
          },
          "a": [
            {
              "t": {
                "ru": "Не делаю.",
                "en": "I don't do them."
              },
              "s": 0
            },
            {
              "t": {
                "ru": "Сохранённый мем в тему.",
                "en": "A saved on-theme meme."
              },
              "s": 1
            },
            {
              "t": {
                "ru": "Песня или кадр.",
                "en": "A song or a frame."
              },
              "s": 2
            },
            {
              "t": {
                "ru": "Маленькая посылка.",
                "en": "A small parcel."
              },
              "s": 3
            }
          ]
        },
        {
          "q": {
            "ru": "Когда человеку плохо на людях:",
            "en": "When they're low in public:"
          },
          "a": [
            {
              "t": {
                "ru": "Не вмешиваюсь.",
                "en": "I don't step in."
              },
              "s": 0
            },
            {
              "t": {
                "ru": "Тихо встаю рядом.",
                "en": "I quietly stand nearby."
              },
              "s": 2
            },
            {
              "t": {
                "ru": "Увожу в спокойное место.",
                "en": "I take them somewhere calm."
              },
              "s": 3
            },
            {
              "t": {
                "ru": "Потом напишу.",
                "en": "I'll text later."
              },
              "s": 1
            }
          ]
        },
        {
          "q": {
            "ru": "Забота о себе в паре:",
            "en": "Self-care in a couple:"
          },
          "a": [
            {
              "t": {
                "ru": "Сначала другой.",
                "en": "The other person first."
              },
              "s": 3
            },
            {
              "t": {
                "ru": "Баланс.",
                "en": "Balance."
              },
              "s": 2
            },
            {
              "t": {
                "ru": "Сначала я, иначе не смогу.",
                "en": "Me first, or I can't help."
              },
              "s": 1
            },
            {
              "t": {
                "ru": "Не думал об этом.",
                "en": "I haven't thought about it."
              },
              "s": 0
            }
          ]
        }
      ]
    },
    {
      "id": "jealous",
      "title": {
        "ru": "Насколько ты ревнивый",
        "en": "How jealous are you"
      },
      "cover": "assets/img/avatars/eva.jpg",
      "reward": 20,
      "questions": 15,
      "results": [
        {
          "min": 0,
          "title": {
            "ru": "Спокойный контур",
            "en": "Calm outline"
          },
          "text": {
            "ru": "Ты мало цепляешься. Иногда стоит проговорить чувства, чтобы они не копились.",
            "en": "You don't catch easily. Sometimes feelings still need words so they don't pile up."
          }
        },
        {
          "min": 16,
          "title": {
            "ru": "Чувствительный",
            "en": "Sensitive"
          },
          "text": {
            "ru": "Тебе важно внимание, но ты умеешь дышать.",
            "en": "Attention matters, but you can breathe."
          }
        },
        {
          "min": 28,
          "title": {
            "ru": "Сигнал тревоги",
            "en": "Alarm signal"
          },
          "text": {
            "ru": "Ревность для тебя — про ценность связи. Говори раньше, чем строить сценарии.",
            "en": "Jealousy is about the value of the bond. Speak before you build scenarios."
          }
        },
        {
          "min": 38,
          "title": {
            "ru": "Буря в чате",
            "en": "Storm in chat"
          },
          "text": {
            "ru": "Эмоции яркие. Научись паузе: вопрос лучше допроса.",
            "en": "Emotions run bright. Learn a pause: a question beats an interrogation."
          }
        }
      ],
      "qs": [
        {
          "q": {
            "ru": "Партнёр смеётся с кем-то в кафе. Ты:",
            "en": "Your partner laughs with someone in a cafe. You:"
          },
          "a": [
            {
              "t": {
                "ru": "Рад, что им весело.",
                "en": "Glad they're having fun."
              },
              "s": 0
            },
            {
              "t": {
                "ru": "Подойдёшь и поздороваешься.",
                "en": "You walk over and say hi."
              },
              "s": 2
            },
            {
              "t": {
                "ru": "Потом спросишь, кто это.",
                "en": "You ask later who that was."
              },
              "s": 3
            },
            {
              "t": {
                "ru": "Сделаешь вид, что не заметил.",
                "en": "You pretend you didn't notice."
              },
              "s": 1
            }
          ]
        },
        {
          "q": {
            "ru": "Лайк на чужое пляжное фото:",
            "en": "A like on someone else's beach photo:"
          },
          "a": [
            {
              "t": {
                "ru": "Не важно.",
                "en": "Doesn't matter."
              },
              "s": 0
            },
            {
              "t": {
                "ru": "Зависит от подписи.",
                "en": "Depends on the caption."
              },
              "s": 2
            },
            {
              "t": {
                "ru": "Колет.",
                "en": "It stings."
              },
              "s": 3
            },
            {
              "t": {
                "ru": "Сам так делаю.",
                "en": "I do the same."
              },
              "s": 1
            }
          ]
        },
        {
          "q": {
            "ru": "Телефон лежит экраном вверх:",
            "en": "Phone face up:"
          },
          "a": [
            {
              "t": {
                "ru": "Мне всё равно.",
                "en": "I don't care."
              },
              "s": 0
            },
            {
              "t": {
                "ru": "Не читаю чужое.",
                "en": "I don't read others' screens."
              },
              "s": 1
            },
            {
              "t": {
                "ru": "Глаз цепляется сам.",
                "en": "My eye catches it anyway."
              },
              "s": 2
            },
            {
              "t": {
                "ru": "Прошу не оставлять так.",
                "en": "I ask them not to leave it like that."
              },
              "s": 3
            }
          ]
        },
        {
          "q": {
            "ru": "Бывший написал. Идеальная реакция партнёра:",
            "en": "An ex texts. Ideal partner reaction:"
          },
          "a": [
            {
              "t": {
                "ru": "Не рассказывать.",
                "en": "Don't tell me."
              },
              "s": 1
            },
            {
              "t": {
                "ru": "Коротко сообщить.",
                "en": "Tell me briefly."
              },
              "s": 2
            },
            {
              "t": {
                "ru": "Показать переписку.",
                "en": "Show the chat."
              },
              "s": 3
            },
            {
              "t": {
                "ru": "Заблокировать при мне.",
                "en": "Block them in front of me."
              },
              "s": 3
            }
          ]
        },
        {
          "q": {
            "ru": "Комплимент партнёру от другого:",
            "en": "Someone else compliments your partner:"
          },
          "a": [
            {
              "t": {
                "ru": "Приятно за них.",
                "en": "I'm happy for them."
              },
              "s": 0
            },
            {
              "t": {
                "ru": "Улыбаюсь и добавляю свой.",
                "en": "I smile and add mine."
              },
              "s": 1
            },
            {
              "t": {
                "ru": "Чуть напрягаюсь.",
                "en": "I tense a bit."
              },
              "s": 2
            },
            {
              "t": {
                "ru": "Хочу уйти.",
                "en": "I want to leave."
              },
              "s": 3
            }
          ]
        },
        {
          "q": {
            "ru": "Скрытые переписки:",
            "en": "Hidden chats:"
          },
          "a": [
            {
              "t": {
                "ru": "Красная линия.",
                "en": "A red line."
              },
              "s": 3
            },
            {
              "t": {
                "ru": "Спрошу причину.",
                "en": "I'll ask why."
              },
              "s": 2
            },
            {
              "t": {
                "ru": "Может, просто порядок.",
                "en": "Maybe it's just tidiness."
              },
              "s": 1
            },
            {
              "t": {
                "ru": "Не лезу.",
                "en": "I don't pry."
              },
              "s": 0
            }
          ]
        },
        {
          "q": {
            "ru": "Вечеринка без тебя:",
            "en": "A party without you:"
          },
          "a": [
            {
              "t": {
                "ru": "Отлично, пусть отдыхают.",
                "en": "Great, let them rest."
              },
              "s": 0
            },
            {
              "t": {
                "ru": "Попрошу написать на ночь.",
                "en": "I'll ask for a night text."
              },
              "s": 2
            },
            {
              "t": {
                "ru": "Буду на связи пачкой сообщений.",
                "en": "I'll stay in a burst of messages."
              },
              "s": 3
            },
            {
              "t": {
                "ru": "Предложу встретиться после.",
                "en": "I'll suggest meeting after."
              },
              "s": 1
            }
          ]
        },
        {
          "q": {
            "ru": "Ревность — это:",
            "en": "Jealousy is:"
          },
          "a": [
            {
              "t": {
                "ru": "Слабость.",
                "en": "A weakness."
              },
              "s": 0
            },
            {
              "t": {
                "ru": "Сигнал потребности.",
                "en": "A need signal."
              },
              "s": 2
            },
            {
              "t": {
                "ru": "Доказательство чувств.",
                "en": "Proof of feeling."
              },
              "s": 3
            },
            {
              "t": {
                "ru": "Привычка из прошлого.",
                "en": "A habit from the past."
              },
              "s": 1
            }
          ]
        },
        {
          "q": {
            "ru": "Как гасишь вспышку:",
            "en": "How you cool a flare:"
          },
          "a": [
            {
              "t": {
                "ru": "Дышу и не пишу сразу.",
                "en": "I breathe and don't text yet."
              },
              "s": 2
            },
            {
              "t": {
                "ru": "Пишу всё как есть.",
                "en": "I write everything as is."
              },
              "s": 3
            },
            {
              "t": {
                "ru": "Спорт или душ.",
                "en": "Sport or a shower."
              },
              "s": 1
            },
            {
              "t": {
                "ru": "Игнор.",
                "en": "I ignore it."
              },
              "s": 0
            }
          ]
        },
        {
          "q": {
            "ru": "Флирт партнёра как стиль общения:",
            "en": "Partner flirts as a social style:"
          },
          "a": [
            {
              "t": {
                "ru": "Ок, если границы ясны.",
                "en": "Okay if boundaries are clear."
              },
              "s": 1
            },
            {
              "t": {
                "ru": "Неприятно.",
                "en": "Unpleasant."
              },
              "s": 2
            },
            {
              "t": {
                "ru": "Неприемлемо.",
                "en": "Unacceptable."
              },
              "s": 3
            },
            {
              "t": {
                "ru": "Мне всё равно.",
                "en": "I don't care."
              },
              "s": 0
            }
          ]
        },
        {
          "q": {
            "ru": "Ты проверяешь соцсети:",
            "en": "You check socials:"
          },
          "a": [
            {
              "t": {
                "ru": "Нет.",
                "en": "No."
              },
              "s": 0
            },
            {
              "t": {
                "ru": "Редко, из любопытства.",
                "en": "Rarely, out of curiosity."
              },
              "s": 1
            },
            {
              "t": {
                "ru": "Когда тревожно.",
                "en": "When I'm anxious."
              },
              "s": 2
            },
            {
              "t": {
                "ru": "Регулярно.",
                "en": "Regularly."
              },
              "s": 3
            }
          ]
        },
        {
          "q": {
            "ru": "Лучший антидот ревности:",
            "en": "Best antidote to jealousy:"
          },
          "a": [
            {
              "t": {
                "ru": "Доверие и факты.",
                "en": "Trust and facts."
              },
              "s": 1
            },
            {
              "t": {
                "ru": "Больше тёплых слов.",
                "en": "More warm words."
              },
              "s": 2
            },
            {
              "t": {
                "ru": "Контроль.",
                "en": "Control."
              },
              "s": 3
            },
            {
              "t": {
                "ru": "Расстояние.",
                "en": "Distance."
              },
              "s": 0
            }
          ]
        },
        {
          "q": {
            "ru": "Если партнёр популярен:",
            "en": "If your partner is popular:"
          },
          "a": [
            {
              "t": {
                "ru": "Горжусь.",
                "en": "I'm proud."
              },
              "s": 0
            },
            {
              "t": {
                "ru": "Нужны ритуалы «только мы».",
                "en": "We need “just us” rituals."
              },
              "s": 2
            },
            {
              "t": {
                "ru": "Хочу меньше публичности.",
                "en": "I want less publicity."
              },
              "s": 3
            },
            {
              "t": {
                "ru": "Мне некомфортно, но терплю.",
                "en": "I'm uncomfortable, but I endure."
              },
              "s": 1
            }
          ]
        },
        {
          "q": {
            "ru": "Сообщение незнакомого человека партнёру:",
            "en": "A stranger messages your partner:"
          },
          "a": [
            {
              "t": {
                "ru": "Их дело.",
                "en": "Their business."
              },
              "s": 0
            },
            {
              "t": {
                "ru": "Пусть расскажет, если важно.",
                "en": "They can tell me if it matters."
              },
              "s": 1
            },
            {
              "t": {
                "ru": "Хочу знать содержание.",
                "en": "I want to know the content."
              },
              "s": 2
            },
            {
              "t": {
                "ru": "Пусть покажет сразу.",
                "en": "They should show it right away."
              },
              "s": 3
            }
          ]
        },
        {
          "q": {
            "ru": "После приступа ревности ты:",
            "en": "After a jealousy spike you:"
          },
          "a": [
            {
              "t": {
                "ru": "Извиняюсь, если хватил.",
                "en": "I apologize if I overdid it."
              },
              "s": 2
            },
            {
              "t": {
                "ru": "Жду, пока забудется.",
                "en": "I wait for it to be forgotten."
              },
              "s": 0
            },
            {
              "t": {
                "ru": "Прошу гарантий.",
                "en": "I ask for guarantees."
              },
              "s": 3
            },
            {
              "t": {
                "ru": "Обсуждаю правило на будущее.",
                "en": "I discuss a future rule."
              },
              "s": 1
            }
          ]
        }
      ]
    },
    {
      "id": "evening",
      "title": {
        "ru": "Идеальный вечер вдвоём",
        "en": "The ideal evening together"
      },
      "cover": "assets/img/avatars/mira.jpg",
      "reward": 20,
      "questions": 15,
      "results": [
        {
          "min": 0,
          "title": {
            "ru": "Домашний минимализм",
            "en": "Home minimalism"
          },
          "text": {
            "ru": "Тебе хватает дивана и честного разговора.",
            "en": "A sofa and an honest talk are enough."
          }
        },
        {
          "min": 16,
          "title": {
            "ru": "Мягкий сценарий",
            "en": "Soft scenario"
          },
          "text": {
            "ru": "Свет, еда, плейлист — ты собираешь уют как конструктор.",
            "en": "Light, food, a playlist — you build coziness like a kit."
          }
        },
        {
          "min": 28,
          "title": {
            "ru": "Город как декорация",
            "en": "City as a set"
          },
          "text": {
            "ru": "Тебе нужен воздух улиц и ощущение, что ночь ваша.",
            "en": "You need street air and the feeling that the night is yours."
          }
        },
        {
          "min": 38,
          "title": {
            "ru": "Режиссёр ночи",
            "en": "Night director"
          },
          "text": {
            "ru": "Ты ставишь вечер как сцену. Спроси партнёра, хочет ли он главную роль.",
            "en": "You stage the evening. Ask if they want the lead role."
          }
        }
      ],
      "qs": [
        {
          "q": {
            "ru": "Свет вечером:",
            "en": "Evening light:"
          },
          "a": [
            {
              "t": {
                "ru": "Люстра ярко.",
                "en": "Bright ceiling light."
              },
              "s": 0
            },
            {
              "t": {
                "ru": "Тёплый торшер.",
                "en": "A warm lamp."
              },
              "s": 2
            },
            {
              "t": {
                "ru": "Свечи.",
                "en": "Candles."
              },
              "s": 3
            },
            {
              "t": {
                "ru": "Неон и город.",
                "en": "Neon and the city."
              },
              "s": 1
            }
          ]
        },
        {
          "q": {
            "ru": "Еда:",
            "en": "Food:"
          },
          "a": [
            {
              "t": {
                "ru": "Что есть в холодильнике.",
                "en": "Whatever is in the fridge."
              },
              "s": 0
            },
            {
              "t": {
                "ru": "Заказ любимого.",
                "en": "Order a favorite."
              },
              "s": 1
            },
            {
              "t": {
                "ru": "Готовим вместе.",
                "en": "Cook together."
              },
              "s": 3
            },
            {
              "t": {
                "ru": "Новой ресторан.",
                "en": "A new restaurant."
              },
              "s": 2
            }
          ]
        },
        {
          "q": {
            "ru": "Музыка:",
            "en": "Music:"
          },
          "a": [
            {
              "t": {
                "ru": "Тишина.",
                "en": "Silence."
              },
              "s": 0
            },
            {
              "t": {
                "ru": "Спокойный плейлист.",
                "en": "A calm playlist."
              },
              "s": 2
            },
            {
              "t": {
                "ru": "Живой концерт.",
                "en": "A live concert."
              },
              "s": 3
            },
            {
              "t": {
                "ru": "Что попадётся.",
                "en": "Whatever plays."
              },
              "s": 1
            }
          ]
        },
        {
          "q": {
            "ru": "Разговор или фильм?",
            "en": "Talk or a film?"
          },
          "a": [
            {
              "t": {
                "ru": "Фильм, меньше напряжения.",
                "en": "A film, less pressure."
              },
              "s": 1
            },
            {
              "t": {
                "ru": "Сначала разговор.",
                "en": "Talk first."
              },
              "s": 2
            },
            {
              "t": {
                "ru": "Только разговор.",
                "en": "Talk only."
              },
              "s": 3
            },
            {
              "t": {
                "ru": "Параллельно оба.",
                "en": "Both in parallel."
              },
              "s": 0
            }
          ]
        },
        {
          "q": {
            "ru": "Идеальный напиток:",
            "en": "Ideal drink:"
          },
          "a": [
            {
              "t": {
                "ru": "Вода.",
                "en": "Water."
              },
              "s": 0
            },
            {
              "t": {
                "ru": "Чай.",
                "en": "Tea."
              },
              "s": 2
            },
            {
              "t": {
                "ru": "Какао.",
                "en": "Cocoa."
              },
              "s": 1
            },
            {
              "t": {
                "ru": "Что-то «особенное» в бокале.",
                "en": "Something “special” in a glass."
              },
              "s": 3
            }
          ]
        },
        {
          "q": {
            "ru": "Прогулка:",
            "en": "A walk:"
          },
          "a": [
            {
              "t": {
                "ru": "Не нужна.",
                "en": "Not needed."
              },
              "s": 0
            },
            {
              "t": {
                "ru": "Короткий круг.",
                "en": "A short loop."
              },
              "s": 1
            },
            {
              "t": {
                "ru": "Долгая, без цели.",
                "en": "A long one with no goal."
              },
              "s": 3
            },
            {
              "t": {
                "ru": "К воде.",
                "en": "Toward water."
              },
              "s": 2
            }
          ]
        },
        {
          "q": {
            "ru": "Телефоны:",
            "en": "Phones:"
          },
          "a": [
            {
              "t": {
                "ru": "Можно листать рядом.",
                "en": "Fine to scroll nearby."
              },
              "s": 0
            },
            {
              "t": {
                "ru": "Не в лицо друг другу.",
                "en": "Not in each other's faces."
              },
              "s": 1
            },
            {
              "t": {
                "ru": "Режим «не беспокоить».",
                "en": "Do not disturb."
              },
              "s": 2
            },
            {
              "t": {
                "ru": "В другой комнате.",
                "en": "In another room."
              },
              "s": 3
            }
          ]
        },
        {
          "q": {
            "ru": "Игры:",
            "en": "Games:"
          },
          "a": [
            {
              "t": {
                "ru": "Не мой формат.",
                "en": "Not my format."
              },
              "s": 0
            },
            {
              "t": {
                "ru": "Карты или вопрос-ответ.",
                "en": "Cards or Q&A."
              },
              "s": 2
            },
            {
              "t": {
                "ru": "Сложные настолки.",
                "en": "Heavy board games."
              },
              "s": 1
            },
            {
              "t": {
                "ru": "Правда или желание без пошлости.",
                "en": "Truth or dare, kept tasteful."
              },
              "s": 3
            }
          ]
        },
        {
          "q": {
            "ru": "Сюрприз вечера:",
            "en": "An evening surprise:"
          },
          "a": [
            {
              "t": {
                "ru": "Без сюрпризов.",
                "en": "No surprises."
              },
              "s": 0
            },
            {
              "t": {
                "ru": "Плейлист.",
                "en": "A playlist."
              },
              "s": 1
            },
            {
              "t": {
                "ru": "Десерт.",
                "en": "Dessert."
              },
              "s": 2
            },
            {
              "t": {
                "ru": "Маршрут, о котором не знали.",
                "en": "A route they didn't know."
              },
              "s": 3
            }
          ]
        },
        {
          "q": {
            "ru": "Гости:",
            "en": "Guests:"
          },
          "a": [
            {
              "t": {
                "ru": "Вечер только вдвоём.",
                "en": "The evening is just for two."
              },
              "s": 3
            },
            {
              "t": {
                "ru": "Можно одного друга.",
                "en": "One friend is okay."
              },
              "s": 1
            },
            {
              "t": {
                "ru": "Компания — энергия.",
                "en": "A group is energy."
              },
              "s": 2
            },
            {
              "t": {
                "ru": "Чем больше, тем лучше.",
                "en": "The more the better."
              },
              "s": 0
            }
          ]
        },
        {
          "q": {
            "ru": "Конец вечера:",
            "en": "End of the evening:"
          },
          "a": [
            {
              "t": {
                "ru": "Пора спать чётко.",
                "en": "Sleep on schedule."
              },
              "s": 0
            },
            {
              "t": {
                "ru": "Ещё немного на кухне.",
                "en": "A little more in the kitchen."
              },
              "s": 2
            },
            {
              "t": {
                "ru": "Пока не кончатся слова.",
                "en": "Until the words run out."
              },
              "s": 3
            },
            {
              "t": {
                "ru": "Сериал до титров.",
                "en": "A series until the credits."
              },
              "s": 1
            }
          ]
        },
        {
          "q": {
            "ru": "Одежда дома:",
            "en": "Clothes at home:"
          },
          "a": [
            {
              "t": {
                "ru": "Что удобно.",
                "en": "Whatever is comfy."
              },
              "s": 1
            },
            {
              "t": {
                "ru": "Чуть красивее обычного.",
                "en": "A bit nicer than usual."
              },
              "s": 2
            },
            {
              "t": {
                "ru": "Как на свидание дома.",
                "en": "Like a date at home."
              },
              "s": 3
            },
            {
              "t": {
                "ru": "Не думаю.",
                "en": "I don't think about it."
              },
              "s": 0
            }
          ]
        },
        {
          "q": {
            "ru": "Запах вечера:",
            "en": "Evening scent:"
          },
          "a": [
            {
              "t": {
                "ru": "Нейтрально.",
                "en": "Neutral."
              },
              "s": 0
            },
            {
              "t": {
                "ru": "Чай и выпечка.",
                "en": "Tea and baking."
              },
              "s": 2
            },
            {
              "t": {
                "ru": "Духи и дерево.",
                "en": "Perfume and wood."
              },
              "s": 3
            },
            {
              "t": {
                "ru": "Свежий воздух с балкона.",
                "en": "Fresh balcony air."
              },
              "s": 1
            }
          ]
        },
        {
          "q": {
            "ru": "Если устали оба:",
            "en": "If both are tired:"
          },
          "a": [
            {
              "t": {
                "ru": "Отмена.",
                "en": "Cancel."
              },
              "s": 0
            },
            {
              "t": {
                "ru": "Тихий параллельный отдых.",
                "en": "Quiet parallel rest."
              },
              "s": 2
            },
            {
              "t": {
                "ru": "Всё равно встреча, но короче.",
                "en": "Meet anyway, but shorter."
              },
              "s": 1
            },
            {
              "t": {
                "ru": "Забота вместо развлечения.",
                "en": "Care instead of entertainment."
              },
              "s": 3
            }
          ]
        },
        {
          "q": {
            "ru": "Главное ощущение утра после:",
            "en": "The main morning feeling after:"
          },
          "a": [
            {
              "t": {
                "ru": "Выспался.",
                "en": "Well slept."
              },
              "s": 0
            },
            {
              "t": {
                "ru": "Тепло в чате.",
                "en": "Warmth in chat."
              },
              "s": 2
            },
            {
              "t": {
                "ru": "Хочется ещё одну главу.",
                "en": "Wanting another chapter."
              },
              "s": 3
            },
            {
              "t": {
                "ru": "Спокойная ясность.",
                "en": "Calm clarity."
              },
              "s": 1
            }
          ]
        }
      ]
    },
    {
      "id": "chemistry",
      "title": {
        "ru": "Какая химия тебе ближе",
        "en": "Which chemistry fits you"
      },
      "cover": "assets/img/avatars/kira.jpg",
      "reward": 20,
      "questions": 15,
      "results": [
        {
          "min": 0,
          "title": {
            "ru": "Медленный огонь",
            "en": "Slow fire"
          },
          "text": {
            "ru": "Ты разогреваешься временем. Настоящее для тебя не вспышка, а тление.",
            "en": "You warm up with time. The real thing isn't a flash, it's a glow."
          }
        },
        {
          "min": 16,
          "title": {
            "ru": "Тёплая искра",
            "en": "Warm spark"
          },
          "text": {
            "ru": "Нужна симпатия и юмор. Без давления, но с движением.",
            "en": "You need liking and humor. No pressure, but there is motion."
          }
        },
        {
          "min": 28,
          "title": {
            "ru": "Яркий отклик",
            "en": "Bright response"
          },
          "text": {
            "ru": "Ты быстро понимаешь «свой/не свой». Доверяй, но проверяй характером.",
            "en": "You quickly sense a match. Trust it, then check the character."
          }
        },
        {
          "min": 38,
          "title": {
            "ru": "Молния",
            "en": "Lightning"
          },
          "text": {
            "ru": "Ты живёшь вспышками. Добавь паузы — так искра становится связью.",
            "en": "You live in flashes. Add pauses — that's how a spark becomes a bond."
          }
        }
      ],
      "qs": [
        {
          "q": {
            "ru": "Химия начинается с:",
            "en": "Chemistry starts with:"
          },
          "a": [
            {
              "t": {
                "ru": "Разговора по делу.",
                "en": "A practical talk."
              },
              "s": 0
            },
            {
              "t": {
                "ru": "Смеха.",
                "en": "Laughter."
              },
              "s": 2
            },
            {
              "t": {
                "ru": "Взгляда.",
                "en": "A look."
              },
              "s": 3
            },
            {
              "t": {
                "ru": "Общего плейлиста.",
                "en": "A shared playlist."
              },
              "s": 1
            }
          ]
        },
        {
          "q": {
            "ru": "Темп сближения:",
            "en": "Pace of getting closer:"
          },
          "a": [
            {
              "t": {
                "ru": "Месяцами.",
                "en": "Over months."
              },
              "s": 0
            },
            {
              "t": {
                "ru": "Неделями.",
                "en": "Over weeks."
              },
              "s": 1
            },
            {
              "t": {
                "ru": "Когда щёлкнуло — быстрее.",
                "en": "Faster once it clicks."
              },
              "s": 3
            },
            {
              "t": {
                "ru": "Как пойдёт.",
                "en": "However it goes."
              },
              "s": 2
            }
          ]
        },
        {
          "q": {
            "ru": "Первое «мне хорошо с тобой» говоришь:",
            "en": "You say “I feel good with you”:"
          },
          "a": [
            {
              "t": {
                "ru": "Не говоришь, показываешь.",
                "en": "You don't say it, you show it."
              },
              "s": 1
            },
            {
              "t": {
                "ru": "Когда точно.",
                "en": "When you're sure."
              },
              "s": 2
            },
            {
              "t": {
                "ru": "Довольно рано.",
                "en": "Quite early."
              },
              "s": 3
            },
            {
              "t": {
                "ru": "Сложно.",
                "en": "It's hard."
              },
              "s": 0
            }
          ]
        },
        {
          "q": {
            "ru": "Ссора в начале:",
            "en": "A fight early on:"
          },
          "a": [
            {
              "t": {
                "ru": "Конец.",
                "en": "The end."
              },
              "s": 0
            },
            {
              "t": {
                "ru": "Проверка зрелости.",
                "en": "A maturity test."
              },
              "s": 2
            },
            {
              "t": {
                "ru": "Топливо страсти.",
                "en": "Passion fuel."
              },
              "s": 3
            },
            {
              "t": {
                "ru": "Неприятно, но переживём.",
                "en": "Unpleasant, but we'll live."
              },
              "s": 1
            }
          ]
        },
        {
          "q": {
            "ru": "Общие друзья:",
            "en": "Shared friends:"
          },
          "a": [
            {
              "t": {
                "ru": "Не важно.",
                "en": "Doesn't matter."
              },
              "s": 0
            },
            {
              "t": {
                "ru": "Приятный бонус.",
                "en": "A nice bonus."
              },
              "s": 1
            },
            {
              "t": {
                "ru": "Ускоряет доверие.",
                "en": "Speeds up trust."
              },
              "s": 2
            },
            {
              "t": {
                "ru": "Хочу свой круг вдвоём.",
                "en": "I want a circle of two."
              },
              "s": 3
            }
          ]
        },
        {
          "q": {
            "ru": "Молчание после сильного вечера:",
            "en": "Silence after a strong evening:"
          },
          "a": [
            {
              "t": {
                "ru": "Паника.",
                "en": "Panic."
              },
              "s": 3
            },
            {
              "t": {
                "ru": "Пишу сам.",
                "en": "I text first."
              },
              "s": 2
            },
            {
              "t": {
                "ru": "Даю день.",
                "en": "I give a day."
              },
              "s": 1
            },
            {
              "t": {
                "ru": "Нормально.",
                "en": "Normal."
              },
              "s": 0
            }
          ]
        },
        {
          "q": {
            "ru": "Что убивает химию:",
            "en": "What kills chemistry:"
          },
          "a": [
            {
              "t": {
                "ru": "Грубость.",
                "en": "Rudeness."
              },
              "s": 2
            },
            {
              "t": {
                "ru": "Скука.",
                "en": "Boredom."
              },
              "s": 1
            },
            {
              "t": {
                "ru": "Контроль.",
                "en": "Control."
              },
              "s": 3
            },
            {
              "t": {
                "ru": "Разный ритм жизни.",
                "en": "Different life rhythms."
              },
              "s": 0
            }
          ]
        },
        {
          "q": {
            "ru": "Физическая симпатия без разговора:",
            "en": "Physical liking without conversation:"
          },
          "a": [
            {
              "t": {
                "ru": "Мало.",
                "en": "Not enough."
              },
              "s": 1
            },
            {
              "t": {
                "ru": "Старт, но не финиш.",
                "en": "A start, not a finish."
              },
              "s": 2
            },
            {
              "t": {
                "ru": "Уже многое.",
                "en": "Already a lot."
              },
              "s": 3
            },
            {
              "t": {
                "ru": "Не замечаю такое.",
                "en": "I don't notice that."
              },
              "s": 0
            }
          ]
        },
        {
          "q": {
            "ru": "Совместный риск:",
            "en": "A shared risk:"
          },
          "a": [
            {
              "t": {
                "ru": "Не нужен.",
                "en": "Not needed."
              },
              "s": 0
            },
            {
              "t": {
                "ru": "Поездка без плана.",
                "en": "A trip with no plan."
              },
              "s": 2
            },
            {
              "t": {
                "ru": "Импровизация в тот же вечер.",
                "en": "The same-night improvisation."
              },
              "s": 3
            },
            {
              "t": {
                "ru": "Новый ресторан.",
                "en": "A new restaurant."
              },
              "s": 1
            }
          ]
        },
        {
          "q": {
            "ru": "Ревность как часть химии:",
            "en": "Jealousy as part of chemistry:"
          },
          "a": [
            {
              "t": {
                "ru": "Нет, это шум.",
                "en": "No, that's noise."
              },
              "s": 0
            },
            {
              "t": {
                "ru": "Капля может говорить о ценности.",
                "en": "A drop can mean value."
              },
              "s": 2
            },
            {
              "t": {
                "ru": "Без неё скучно.",
                "en": "Boring without it."
              },
              "s": 3
            },
            {
              "t": {
                "ru": "Только в сериалах.",
                "en": "Only in shows."
              },
              "s": 1
            }
          ]
        },
        {
          "q": {
            "ru": "Голос человека:",
            "en": "Someone's voice:"
          },
          "a": [
            {
              "t": {
                "ru": "Не ключ.",
                "en": "Not a key."
              },
              "s": 0
            },
            {
              "t": {
                "ru": "Может зацепить.",
                "en": "It can catch me."
              },
              "s": 2
            },
            {
              "t": {
                "ru": "Решает многое.",
                "en": "It decides a lot."
              },
              "s": 3
            },
            {
              "t": {
                "ru": "Важнее тексты.",
                "en": "Texts matter more."
              },
              "s": 1
            }
          ]
        },
        {
          "q": {
            "ru": "Совпавшие вкусы:",
            "en": "Matching tastes:"
          },
          "a": [
            {
              "t": {
                "ru": "Удобно.",
                "en": "Convenient."
              },
              "s": 1
            },
            {
              "t": {
                "ru": "Ускоряет «мы».",
                "en": "Speeds up “we”."
              },
              "s": 2
            },
            {
              "t": {
                "ru": "Почти судьба.",
                "en": "Almost fate."
              },
              "s": 3
            },
            {
              "t": {
                "ru": "Не обязательно.",
                "en": "Not required."
              },
              "s": 0
            }
          ]
        },
        {
          "q": {
            "ru": "Пауза в неделю:",
            "en": "A one-week pause:"
          },
          "a": [
            {
              "t": {
                "ru": "Связь умерла.",
                "en": "The bond died."
              },
              "s": 3
            },
            {
              "t": {
                "ru": "Проверю сообщением.",
                "en": "I'll check with a text."
              },
              "s": 2
            },
            {
              "t": {
                "ru": "Бывает.",
                "en": "It happens."
              },
              "s": 1
            },
            {
              "t": {
                "ru": "Даже полезно.",
                "en": "Even useful."
              },
              "s": 0
            }
          ]
        },
        {
          "q": {
            "ru": "Идеальный знак «есть химия»:",
            "en": "The ideal “there's chemistry” sign:"
          },
          "a": [
            {
              "t": {
                "ru": "Легко молчать.",
                "en": "Easy silence."
              },
              "s": 1
            },
            {
              "t": {
                "ru": "Хочется ещё одну историю.",
                "en": "Wanting one more story."
              },
              "s": 2
            },
            {
              "t": {
                "ru": "Время сжимается.",
                "en": "Time compresses."
              },
              "s": 3
            },
            {
              "t": {
                "ru": "Нет желания проверять телефон.",
                "en": "No urge to check the phone."
              },
              "s": 2
            }
          ]
        },
        {
          "q": {
            "ru": "Если химия есть, а взгляды разные:",
            "en": "If chemistry is there but views differ:"
          },
          "a": [
            {
              "t": {
                "ru": "Химии мало.",
                "en": "Chemistry isn't enough."
              },
              "s": 1
            },
            {
              "t": {
                "ru": "Можно расти.",
                "en": "You can grow."
              },
              "s": 2
            },
            {
              "t": {
                "ru": "Химия важнее.",
                "en": "Chemistry matters more."
              },
              "s": 3
            },
            {
              "t": {
                "ru": "Лучше не начинать.",
                "en": "Better not to start."
              },
              "s": 0
            }
          ]
        }
      ]
    }
  ],
  "TEST_REWARD": 20,
  "AD_COINS": 25,
  "START_COINS": 40
};
