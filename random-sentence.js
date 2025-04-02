// 文のリスト
const sentences = [
    "情報が先、物理が後",
    "トランス、同調、共感覚",
    "頭、心ではなく、肚‼",
    "失敗は宝物",
    "ふとが来たら、ノータイムで！"
];

// ランダムに文を表示する関数
function showRandomSentence() {
    const randomIndex = Math.floor(Math.random() * sentences.length);
    const randomSentence = sentences[randomIndex];
    document.getElementById('random-sentence').textContent = randomSentence;
}

// 初回表示
showRandomSentence();