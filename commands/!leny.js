const lennys = [
    '( ͠° ͟ʖ ͡°)',
    '( ͡~ ͜ʖ ͡°)',
    '( ͡ʘ ͜ʖ ͡ʘ)',
    '(° ͜ʖ °)',
    '( ‾ʖ̫‾)',
    '( ͡o ͜ʖ ͡o)',
    '( ͡° ͜ʖ ͡°)',
    '( ͡ಥ ͜ʖ ͡ಥ)',
    '¯\\_(ツ)_/¯',
    'ʕ•ᴥ•ʔ',
    '(▀̿Ĺ̯▀̿ ̿)',
    '(ง ͠° ͟ل͜ ͡°)ง',
    'ಠ_ಠ',
    "̿'̿'\\̵͇̿̿\\з=( ͠° ͟ʖ ͡°)=ε/̵͇̿̿/'̿̿ ̿ ̿ ̿ ̿ ̿",
    '[̲̅$̲̅(̲̅5̲̅)̲̅$̲̅]',
    "﴾͡๏̯͡๏﴿ O'RLY?",
    '[̲̅$̲̅(̲̅ ͡° ͜ʖ ͡°̲̅)̲̅$̲̅]',
    '(ᵔᴥᵔ)',
    '(¬‿¬)',
    '(☞ﾟヮﾟ)☞ ☜(ﾟヮﾟ☜)',
    '(づ￣ ³￣)づ',
    'ლ(ಠ益ಠლ)',
    'ಠ╭╮ಠ',
    '♪~ ᕕ(ᐛ)ᕗ',
    'ヾ(⌐■_■)ノ♪',
    '◉_◉',
    '\\ (•◡•) /',
    '༼ʘ̚ل͜ʘ̚༽',
    '┬┴┬┴┤(･_├┬┴┬┴',
    '┻━┻ ︵ヽ(`Д´)ﾉ︵ ┻━┻',
    '（╯°□°）╯︵( .o.)',
    'ಠ‿↼',
    '◔ ⌣ ◔',
    '(ノಠ益ಠ)ノ彡┻━┻',
    '(☞ﾟヮﾟ)☞ ☜(ﾟヮﾟ☜)',
    "̿ ̿ ̿'̿'\̵͇̿̿\з=(•_•)=ε/̵͇̿̿/'̿'̿ ̿",
    '(;´༎ຶД༎ຶ`)',
    '♥‿♥',
    'ᕦ(ò_óˇ)ᕤ',
    '(•_•) ( •_•)>⌐■-■ (⌐■_■)',
    '⌐╦╦═─ ಠ_ಠ , (¬‿¬)',
    '˙ ͜ʟ˙',
    ":')",
    '(°ロ°)☝',
    'ಠ⌣ಠ',
    '(；一_一)',
    '( ⚆ _ ⚆ )',
    '☜(⌒▽⌒)☞',
    "(ʘᗩʘ')",
    '¯\\(°_o)/¯',
    'ლ,ᔑ•ﺪ͟͠•ᔐ.ლ',
    '(ʘ‿ʘ)',
    'ಠ~ಠ',
    'ಠ_ಥ',
    'ಠ‿↼',
    '(>ლ)',
    '(ღ˘⌣˘ღ)',
    'ಠoಠ',
    'ರ_ರ',
    '◔ ⌣ ◔',
    '(✿´‿`)',
    'ب_ب',
    '┬─┬﻿ ︵ /(.□. ）',
    '☼.☼',
    '^̮^',
    '(>人<)',
    '>_>',
    '(/) (°,,°) (/)',
    '(･.◤)',
    '=U',
    '~(˘▾˘~)',
    '| (• ◡•)| (❍ᴥ❍ʋ)'
  ]
  

module.exports.run = async (client, message, args) => {
    var rand_num = Math.floor(Math.random() * lennys.length);
    var rand_val = lennys[rand_num];

    return message.channel.send(rand_val);
}

module.exports.help = {
    name: "aquelacarinha",
    aliases: ["lenny"],
    descr: 'Lenny face.'
}