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
        this.isPlaying = null;
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
                    this.snareAudio.currentTime = 0;
                    this.snareAudio.play();
                }
                if(bar.classList.contains('hihatclosed-pad')) {
                    this.hihatclosedAudio.currentTime = 0;
                    this.hihatclosedAudio.play();
                }
                if(bar.classList.contains('hihatopen-pad')) {
                    this.hihatopenAudio.currentTime = 0;
                    this.hihatopenAudio.play();
                }
                if(bar.classList.contains('ride-pad')) {
                    this.rideAudio.currentTime = 0;
                    this.rideAudio.play();
                }
                if(bar.classList.contains('toms-pad')) {
                    this.tomsAudio.currentTime = 0;
                    this.tomsAudio.play();
                }
                if(bar.classList.contains('crash-pad')) {
                    this.crashAudio.currentTime = 0;
                    this.crashAudio.play();
                }
                if(bar.classList.contains('clap-pad')) {
                    this.clapAudio.currentTime = 0;
                    this.clapAudio.play();
                }
                if(bar.classList.contains('shaker-pad')) {
                    this.shakerAudio.currentTime = 0;
                    this.shakerAudio.play();
                }
                if(bar.classList.contains('cowbell-pad')) {
                    this.cowbellAudio.currentTime = 0;
                    this.cowbellAudio.play();
                }
                if(bar.classList.contains('auxperc-pad')) {
                    this.auxpercAudio.currentTime = 0;
                    this.auxpercAudio.play();
                }
            }
        })
        this.index++;
    }
    start() {
        const interval = (60/this.bpm) * 1000;
        //check if it's playing
        if(!this.isPlaying) {
        this.isPlaying = setInterval(() => {
            this.repeat();
            }, interval);
        } else {
            //clear the interval
            clearInterval(this.isPlaying);
            this.isPlaying = null;
        }
    }
    updateBtn() {
        if(!this.isPlaying) {
            this.playBtn.innerText = 'Stop';
            this.playBtn.classList.add('active');
        } else {
            this.playBtn.innerText = 'Play';
            this.playBtn.classList.remove('active');
        }
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
    drumKit.updateBtn();
    drumKit.start();
})