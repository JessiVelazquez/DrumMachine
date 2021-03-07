class DrumKit {
    constructor(){
        this.pads = document.querySelectorAll('.pad');
        this.playBtn = document.querySelector('.play');
        this.kickAudio = document.querySelector('.kick-sound');
        this.snareAudio = document.querySelector('.snare-sound');
        this.hihatclosedAudio = document.querySelector('.hihatclosed-sound');
        this.hihatopenAudio = document.querySelector('.hihatopen-sound');
        this.rideAudio = document.querySelector('.ride-sound');
        this.tomsAudio = document.querySelector('.toms-sound');
        this.crashAudio = document.querySelector('.crash-sound');
        this.clapAudio = document.querySelector('.clap-sound');
        this.shakerAudio = document.querySelector('.shaker-sound');
        this.cowbellAudio = document.querySelector('.cowbell-sound');
        this.auxpercAudio = document.querySelector('.auxperc-sound');
        this.index = 0;
        this.bpm = 120;
    }
    activePad() {
        this.classList.toggle('active');
    }
    repeat() {
        let step = this.index % 8;
        const activeBars = document.querySelectorAll(`.b${step}`)
        console.log(step);
        this.index++;
    }
    start() {
            const interval = (60/this.bpm) * 1000;
        setInterval(() => {
            this.repeat();
        }, interval);
    }
}

const drumKit = new DrumKit();

drumKit.pads.forEach(pad => {
    pad.addEventListener('click',drumKit.activePad);
})

drumKit.playBtn.addEventListener('click', function() {
    drumKit.start();
})