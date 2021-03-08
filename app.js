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
        this.bpm = 200;
    }
    activePad() {
        this.classList.toggle('active');
    }
    repeat() {
        let step = this.index % 8;
        const activeBars = document.querySelectorAll(`.b${step}`)
        //loop over the pads
        activeBars.forEach(bar => {
            bar.style.animation = `playTrack 0.3s alternate ease-in-out 2`;
            //check if pads are active
            if(bar.classList.contains('active')) {
                //check each sound
                if(bar.classList.contains('kick-pad')) {
                    this.kickAudio.currentTime = 0;
                    this.kickAudio.play();
                }
                if(bar.classList.contains('snare-pad')) {
                    // this.snareAudio.currentTime = 0;
                    this.snareAudio.play();
                }
                if(bar.classList.contains('hihatclosed-pad')) {
                    this.hihatclosedAudio.play();
                }
                if(bar.classList.contains('hihatopen-pad')) {
                    this.hihatopenAudio.play();
                }
                if(bar.classList.contains('ride-pad')) {
                    this.rideAudio.play();
                }
                if(bar.classList.contains('toms-pad')) {
                    this.tomsAudio.play();
                }
                if(bar.classList.contains('crash-pad')) {
                    this.crashAudio.play();
                }
                if(bar.classList.contains('clap-pad')) {
                    this.clapAudio.play();
                }
                if(bar.classList.contains('shaker-pad')) {
                    this.shakerAudio.play();
                }
                if(bar.classList.contains('cowbell-pad')) {
                    this.cowbellAudio.play();
                }
                if(bar.classList.contains('auxperc-pad')) {
                    this.auxpercAudio.play();
                }
            }
        })
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
    pad.addEventListener('animationend', function() {
        this.style.animation = "";
    })
})

drumKit.playBtn.addEventListener('click', function() {
    drumKit.start();
})