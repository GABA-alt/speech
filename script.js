var rec = new webkitSpeechRecognition();
rec.continuous = true;
rec.interimResults = false; // trueにすると認識途中の結果も返す
rec.lang = 'ja-JP'; // 言語を指定する
rec.onresult = e => {
    const latestResult = e.results[e.results.length - 1][0]
    // 認識結果がSpeechRecognitionEventインスタンスとして渡されます
    document.querySelector('.results').innerHTML += latestResult.transcript + "<br />"
}
rec.start() // 認識を開始します