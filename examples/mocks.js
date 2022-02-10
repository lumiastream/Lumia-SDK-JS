module.exports = {
    retrieve: {
        premium: true,
        states: { on: 1, streamMode: 1, fuze: 0 },
        types: [
            'alert',
            'chat',
            'chat-command',
            'chatbot-message',
            'clear-queue',
            'hex-color',
            'lights-off',
            'rgb-color',
            'set-fuze',
            'set-lumia',
            'start-lumia',
            'start-stream-mode',
            'stop-lumia',
            'stop-stream-mode',
            'studio-animation',
            'studio-scene',
            'studio-theme',
            'to-default',
            'toggle-fuze',
            'toggle-stream-mode',
            'trovo-spells',
            'tts',
            'twitch-extension',
            'twitch-points',
        ],
        options: {
            alert: {
                values: [
                    'twitch-streamLive',
                    'twitch-streamOffline',
                    'twitch-follower',
                    'twitch-follower',
                    'twitch-subscriber',
                    'twitch-bits',
                    'twitch-host',
                    'twitch-raid',
                    'twitch-hypetrainStarted',
                    'twitch-hypetrainProgressed',
                    'twitch-hypetrainLevelProgressed',
                    'twitch-hypetrainEnded',
                    'youtube-subscriber',
                    'youtube-superchat',
                    'youtube-supersticker',
                    'youtube-member',
                    'facebook-follower',
                    'facebook-reaction',
                    'facebook-star',
                    'facebook-support',
                    'facebook-share',
                    'facebook-fan',
                    'trovo-follower',
                    'trovo-subscriber',
                    'streamlabs-donation',
                    'streamlabs-merch',
                    'streamlabs-redemption',
                    'streamlabs-primegift',
                    'streamelements-donation',
                    'obs-switchProfile',
                    'obs-switchScene',
                    'obs-switch-transition',
                    'obs-streamStarting',
                    'obs-streamStopping',
                    'slobs-switchScene',
                    'twitter-follower',
                    'twitter-like',
                    'woocommerce-order',
                    'spotify-switchSong',
                    'spotify-songPlayed',
                    'spotify-songPaused',
                    'vlc-switchSong',
                    'vlc-songPlayed',
                    'vlc-songPaused',
                    'treatstream-treat',
                    'pulse-heartrate',
                    'pulse-calories',
                ],
            },
            chat: {},
            'chat-command': {
                values: [
                    'Start-Pulse',
                    'add-to-level',
                    'aqua',
                    'aurora',
                    'avatar-test',
                    'bitcoin-alert',
                    'bl',
                    'blue',
                    'bot-test',
                    'breathe',
                    'circus',
                    'clipsend',
                    'color',
                    'color1',
                    'cool',
                    'cooltest',
                    'disco',
                    'discord',
                    'emerald',
                    'file',
                    'file-copy',
                    'file-pc',
                    'flash',
                    'flashbang',
                    'flashbang-2633',
                    'follow',
                    'gilfoyle-bitcoin',
                    'gr',
                    'green',
                    'hex',
                    'hex1',
                    'input-test',
                    'intro',
                    'keylight-flash',
                    'keylight-test',
                    'levelme',
                    'loong',
                    'mid-test',
                    'midi-test',
                    'modvar',
                    'mqtt',
                    'nemo',
                    'new-command',
                    'new-command-115200',
                    'new-command-147121',
                    'new-command-15251',
                    'new-command-237195',
                    'new-command-245252',
                    'new-command-44112',
                    'new-command-56192',
                    'new-command-92183',
                    'obs-scroll',
                    'obs-scroller',
                    'obtest',
                    'off',
                    'ok',
                    'orange',
                    'ost',
                    'pink',
                    'police',
                    'purple',
                    'que',
                    'rand',
                    'random',
                    'readfile',
                    'readme',
                    'readurl',
                    'red',
                    'remove-from-level',
                    'req',
                    'rgb',
                    'rgb-157222',
                    'rody',
                    'rtewtwre',
                    'sel',
                    'sele',
                    'skipqueue',
                    'slobs-test',
                    'snowing',
                    'snowy',
                    'so',
                    'special',
                    'squid-game-remix',
                    'start-fuze',
                    'subs',
                    'thunderstorm',
                    'tier3',
                    'tierall',
                    'tieronly1',
                    'tieronly2',
                    'transition-test',
                    'tsthue',
                    'tts',
                    'twitchosctest',
                    'var',
                    'views',
                    'water',
                    'white',
                    'wildcard',
                    'wildhex',
                    'yellow',
                ],
            },
            'chatbot-message': {},
            'clear-queue': null,
            'hex-color': {},
            'lights-off': null,
            'rgb-color': {},
            'set-fuze': null,
            'set-lumia': null,
            'start-lumia': null,
            'start-stream-mode': null,
            'stop-lumia': null,
            'stop-stream-mode': null,
            'studio-animation': {
                values: [
                    'Fireworks',
                    'Fireworks (Lumia Pack)',
                    'Flicker',
                    'Flicker (Lumia Pack)',
                    'Lava',
                    'Lava (Lumia Pack)',
                    'Light-Up-Intro',
                    'Water',
                    'Water (Lumia Pack)',
                    'breathe',
                    'flashbang',
                    'keylight-flash',
                    'midi-test',
                    'rainbow',
                    'thunderstorm',
                    'transition test',
                    'yinyang',
                ],
            },
            'studio-scene': {
                values: ['Blue Gradient', 'Candy Cane', 'Flame', 'Fruits', 'Green Gradient', 'Red Gradient', 'Sunset', 'Tropical', 'off', 'rgb', 'rtewtwre', 'snow', 'test-scen', 'tsthue'],
            },
            'studio-theme': {
                values: ['aurora', 'circus', 'nemo', 'nim', 'twink', 'twinkly-sunset'],
            },
            'to-default': null,
            'toggle-fuze': null,
            'toggle-stream-mode': null,
            'trovo-spells': {
                values: ['Bravo!', 'Cash Bang', 'Champion', 'EZ', 'GGWP', 'HYPE', 'Hand in Hand', 'Leon Lime', 'On Fire', 'Rose', 'Shint Uni', 'Stay Safe', 'Super Good', 'Top1', 'Torch', 'Winner'],
            },
            tts: {
                values: {
                    voices: [
                        {
                            id: 'Alex',
                            label: 'Alex',
                            language: 'en_US',
                        },
                        {
                            id: 'Alice',
                            label: 'Alice',
                            language: 'it_IT',
                        },
                        {
                            id: 'Alva',
                            label: 'Alva',
                            language: 'sv_SE',
                        },
                        {
                            id: 'Amelie',
                            label: 'Amelie',
                            language: 'fr_CA',
                        },
                        {
                            id: 'Anna',
                            label: 'Anna',
                            language: 'de_DE',
                        },
                        {
                            id: 'Carmit',
                            label: 'Carmit',
                            language: 'he_IL',
                        },
                        {
                            id: 'Damayanti',
                            label: 'Damayanti',
                            language: 'id_ID',
                        },
                        {
                            id: 'Daniel',
                            label: 'Daniel',
                            language: 'en_GB',
                        },
                        {
                            id: 'Diego',
                            label: 'Diego',
                            language: 'es_AR',
                        },
                        {
                            id: 'Ellen',
                            label: 'Ellen',
                            language: 'nl_BE',
                        },
                        {
                            id: 'Fiona',
                            label: 'Fiona',
                            language: 'en-scotland',
                        },
                        {
                            id: 'Fred',
                            label: 'Fred',
                            language: 'en_US',
                        },
                        {
                            id: 'Ioana',
                            label: 'Ioana',
                            language: 'ro_RO',
                        },
                        {
                            id: 'Joana',
                            label: 'Joana',
                            language: 'pt_PT',
                        },
                        {
                            id: 'Jorge',
                            label: 'Jorge',
                            language: 'es_ES',
                        },
                        {
                            id: 'Juan',
                            label: 'Juan',
                            language: 'es_MX',
                        },
                        {
                            id: 'Kanya',
                            label: 'Kanya',
                            language: 'th_TH',
                        },
                        {
                            id: 'Karen',
                            label: 'Karen',
                            language: 'en_AU',
                        },
                        {
                            id: 'Kyoko',
                            label: 'Kyoko',
                            language: 'ja_JP',
                        },
                        {
                            id: 'Laura',
                            label: 'Laura',
                            language: 'sk_SK',
                        },
                        {
                            id: 'Lekha',
                            label: 'Lekha',
                            language: 'hi_IN',
                        },
                        {
                            id: 'Luca',
                            label: 'Luca',
                            language: 'it_IT',
                        },
                        {
                            id: 'Luciana',
                            label: 'Luciana',
                            language: 'pt_BR',
                        },
                        {
                            id: 'Maged',
                            label: 'Maged',
                            language: 'ar_SA',
                        },
                        {
                            id: 'Mariska',
                            label: 'Mariska',
                            language: 'hu_HU',
                        },
                        {
                            id: 'Mei-Jia',
                            label: 'Mei-Jia',
                            language: 'zh_TW',
                        },
                        {
                            id: 'Melina',
                            label: 'Melina',
                            language: 'el_GR',
                        },
                        {
                            id: 'Milena',
                            label: 'Milena',
                            language: 'ru_RU',
                        },
                        {
                            id: 'Moira',
                            label: 'Moira',
                            language: 'en_IE',
                        },
                        {
                            id: 'Monica',
                            label: 'Monica',
                            language: 'es_ES',
                        },
                        {
                            id: 'Nora',
                            label: 'Nora',
                            language: 'nb_NO',
                        },
                        {
                            id: 'Paulina',
                            label: 'Paulina',
                            language: 'es_MX',
                        },
                        {
                            id: 'Rishi',
                            label: 'Rishi',
                            language: 'en_IN',
                        },
                        {
                            id: 'Samantha',
                            label: 'Samantha',
                            language: 'en_US',
                        },
                        {
                            id: 'Sara',
                            label: 'Sara',
                            language: 'da_DK',
                        },
                        {
                            id: 'Satu',
                            label: 'Satu',
                            language: 'fi_FI',
                        },
                        {
                            id: 'Sin-ji',
                            label: 'Sin-ji',
                            language: 'zh_HK',
                        },
                        {
                            id: 'Tessa',
                            label: 'Tessa',
                            language: 'en_ZA',
                        },
                        {
                            id: 'Thomas',
                            label: 'Thomas',
                            language: 'fr_FR',
                        },
                        {
                            id: 'Ting-Ting',
                            label: 'Ting-Ting',
                            language: 'zh_CN',
                        },
                        {
                            id: 'Veena',
                            label: 'Veena',
                            language: 'en_IN',
                        },
                        {
                            id: 'Victoria',
                            label: 'Victoria',
                            language: 'en_US',
                        },
                        {
                            id: 'Xander',
                            label: 'Xander',
                            language: 'nl_NL',
                        },
                        {
                            id: 'Yelda',
                            label: 'Yelda',
                            language: 'tr_TR',
                        },
                        {
                            id: 'Yuna',
                            label: 'Yuna',
                            language: 'ko_KR',
                        },
                        {
                            id: 'Yuri',
                            label: 'Yuri',
                            language: 'ru_RU',
                        },
                        {
                            id: 'Zosia',
                            label: 'Zosia',
                            language: 'pl_PL',
                        },
                        {
                            id: 'Zuzana',
                            label: 'Zuzana',
                            language: 'cs_CZ',
                        },
                    ],
                    devices: [
                        {
                            id: '80',
                            label: 'Hue Sync Audio',
                        },
                        {
                            id: '126',
                            label: 'Mac mini Speakers',
                        },
                        {
                            id: '109',
                            label: 'Microsoft Teams Audio',
                        },
                        {
                            id: '122',
                            label: 'NDI Audio',
                        },
                    ],
                    currentDevice: {
                        id: 'desktop',
                        label: 'desktop',
                    },
                },
            },
            'twitch-extension': {
                values: ['blue', 'chatbot-prompt', 'emerald', 'green', 'red'],
            },
            'twitch-points': {
                values: [
                    'blue',
                    'color',
                    'coolpoint',
                    'cooltest',
                    'emerald',
                    'green',
                    'nemo',
                    'new-command',
                    'red',
                    'snow',
                    'so',
                    'song-request',
                    'spoti-test',
                    'spotifoo',
                    'spotify toggle',
                    'subcomm',
                    'tweet',
                    'wildhex',
                    'wildpoints',
                ],
            },
        },
        lights: [
            {
                id: '2',
                name: 'Personal Light',
                type: 'hue',
            },
            {
                id: '19',
                name: 'Hue go',
                type: 'hue',
            },
            {
                id: 82,
                type: 'nanoleaf',
            },
            {
                id: 45,
                type: 'nanoleaf',
            },
            {
                id: 27151,
                type: 'nanoleaf2',
            },
            {
                id: 61687,
                type: 'nanoleaf2',
            },
            {
                id: 'd03jdk1nfs',
                name: 'LifX beam',
                type: 'lifx',
            },
            {
                id: 'fa:32:94:88',
                name: 'QUAN',
                type: 'cololight',
            },
            {
                id: 1,
                name: 'bar',
                type: 'overlay',
            },
        ],
    },
    stateUpdateMock: {
        event: undefined,
        origin: 'http://127.0.0.1:5080',
        type: 'states',
        data: { on: 1, streamMode: 0, fuze: 0 },
    },
    alertMock: {
        event: 'twitch-follower',
        origin: 'twitch',
        type: 'alert',
        data: { userId: '605116711', username: 'LumiaStream' },
        raw: { userId: '605116711', username: 'LumiaStream' },
    },
    chatCommand: {
        event: undefined,
        origin: 'twitch',
        type: 'command',
        data: { username: 'lumiacove', command: 'red' },
        raw: { username: 'lumiacove', command: 'red' },
    },
    chatMock: {
        event: undefined,
        origin: 'twitch',
        type: 'chat',
        data: {
            id: 'twitch_1643316945569',
            channel: '#lumiacove',
            message: 'I said I hope you love this',
            user: {
                'badge-info': [Object],
                badges: [Object],
                'client-nonce': '0946eaab36a578cfbfd072c679ec1b82',
                color: '#FF0000',
                'display-name': 'lumiacove',
                emotes: null,
                'first-msg': false,
                flags: null,
                id: '0dbb769e-53b2-4748-91d9-547aeb429f4d',
                mod: false,
                'room-id': '163366031',
                subscriber: true,
                'tmi-sent-ts': '1643316945142',
                turbo: false,
                'user-id': '163366031',
                'user-type': null,
                'emotes-raw': null,
                'badge-info-raw': 'subscriber/24',
                'badges-raw': 'broadcaster/1,subscriber/0',
                username: 'lumiacove',
                'message-type': 'chat',
                isSelf: false,
                vip: false,
                tier3: true,
                tier2: true,
                tier1: true,
                follower: false,
            },
            username: 'lumiacove',
            userId: '163366031',
            userColor: '#FF0000',
            userColorRgb: '255,0,0',
            platform: 'twitch',
            avatar: 'https://static-cdn.jtvnw.net/jtv_user_pictures/774c33a0-cc3d-40fb-9ab1-9e39007dde75-profile_image-300x300.png',
            badgesRaw: 'broadcaster/1,subscriber/0',
            hasEmotes: false,
            emotes: '',
            rawMessageWithoutEmotes: 'I said I hope you love this',
            emotesRaw: '',
        },
        raw: {
            id: 'twitch_1643316945569',
            channel: '#lumiacove',
            message: 'I said I hope you love this',
            user: {
                'badge-info': [Object],
                badges: [Object],
                'client-nonce': '0946eaab36a578cfbfd072c679ec1b82',
                color: '#FF0000',
                'display-name': 'lumiacove',
                emotes: null,
                'first-msg': false,
                flags: null,
                id: '0dbb769e-53b2-4748-91d9-547aeb429f4d',
                mod: false,
                'room-id': '163366031',
                subscriber: true,
                'tmi-sent-ts': '1643316945142',
                turbo: false,
                'user-id': '163366031',
                'user-type': null,
                'emotes-raw': null,
                'badge-info-raw': 'subscriber/24',
                'badges-raw': 'broadcaster/1,subscriber/0',
                username: 'lumiacove',
                'message-type': 'chat',
                isSelf: false,
                vip: false,
                tier3: true,
                tier2: true,
                tier1: true,
                follower: false,
            },
            username: 'lumiacove',
            userId: '163366031',
            userColor: '#FF0000',
            userColorRgb: '255,0,0',
            platform: 'twitch',
            avatar: 'https://static-cdn.jtvnw.net/jtv_user_pictures/774c33a0-cc3d-40fb-9ab1-9e39007dde75-profile_image-300x300.png',
            badgesRaw: 'broadcaster/1,subscriber/0',
            hasEmotes: false,
            emotes: '',
            rawMessageWithoutEmotes: 'I said I hope you love this',
            emotesRaw: '',
        },
    },
};