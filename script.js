var rec = new webkitSpeechRecognition();
rec.continuous = true;
rec.interimResults = false; // true�ɂ���ƔF���r���̌��ʂ��Ԃ�
rec.lang = 'ja-JP'; // ������w�肷��
rec.onresult = e => {
    const latestResult = e.results[e.results.length - 1][0]
    // �F�����ʂ�SpeechRecognitionEvent�C���X�^���X�Ƃ��ēn����܂�
    document.querySelector('.results').innerHTML += latestResult.transcript + "<br />"
}
rec.start() // �F�����J�n���܂�