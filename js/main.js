const phrases=['Junior Game Programmer @ RIVRS','Unity / C# Developer','Roblox / Lua Developer','Multiplayer Systems Builder','SOLID Principles Advocate'];let pi=0,del=false,txt='';function type(){const full=phrases[pi];txt=del?full.slice(0,txt.length-1):full.slice(0,txt.length+1);document.getElementById('typed').textContent=txt;let speed=del?34:70;if(!del&&txt===full){speed=1500;del=true}else if(del&&txt===''){del=false;pi=(pi+1)%phrases.length;speed=350}setTimeout(type,speed)}type();
const html=document.documentElement, themeBtn=document.getElementById('themeBtn');themeBtn.onclick=()=>html.classList.toggle('light');document.getElementById('menuBtn').onclick=()=>document.getElementById('nav').classList.toggle('mobile-open');
const cur=document.getElementById('cursor'), ring=document.getElementById('cursor-ring');let mx=0,my=0,rx=0,ry=0;document.addEventListener('mousemove',e=>{mx=e.clientX;my=e.clientY;cur.style.left=mx+'px';cur.style.top=my+'px'});(function ringLoop(){rx+=(mx-rx)*.13;ry+=(my-ry)*.13;ring.style.left=rx+'px';ring.style.top=ry+'px';requestAnimationFrame(ringLoop)})();document.querySelectorAll('a,button,.glass').forEach(el=>{el.addEventListener('mouseenter',()=>{ring.style.width='58px';ring.style.height='58px'});el.addEventListener('mouseleave',()=>{ring.style.width='34px';ring.style.height='34px'})});
const c=document.getElementById('particle-canvas'),ctx=c.getContext('2d');let W,H,nodes=[],sparks=[];const cols=['rgba(0,245,212,','rgba(59,130,246,','rgba(167,139,250,','rgba(244,114,182,'];function resize(){W=c.width=innerWidth;H=c.height=innerHeight;init()}addEventListener('resize',resize);function init(){nodes=[];sparks=[];for(let i=0;i<Math.max(24,Math.floor(W*H/21000));i++)nodes.push({x:Math.random()*W,y:Math.random()*H,vx:(Math.random()-.5)*.25,vy:(Math.random()-.5)*.25,s:Math.random()*1.8+0.6,col:cols[Math.floor(Math.random()*cols.length)]});for(let i=0;i<Math.max(42,Math.floor(W*H/16000));i++)sparks.push({x:Math.random()*W,y:Math.random()*H,vx:(Math.random()-.5)*.35,vy:-(Math.random()*.45+.15),s:Math.random()*2+0.4,a:Math.random()*.45+.12,col:cols[Math.floor(Math.random()*cols.length)]})}function frame(){ctx.clearRect(0,0,W,H);let dark=!html.classList.contains('light'),ga=dark?1:.55;nodes.forEach(n=>{n.x+=n.vx;n.y+=n.vy;if(n.x<0||n.x>W)n.vx*=-1;if(n.y<0||n.y>H)n.vy*=-1});for(let i=0;i<nodes.length;i++){for(let j=i+1;j<nodes.length;j++){let dx=nodes[i].x-nodes[j].x,dy=nodes[i].y-nodes[j].y,d=Math.hypot(dx,dy);if(d<145){ctx.strokeStyle=`rgba(0,245,212,${(1-d/145)*.12*ga})`;ctx.lineWidth=.7;ctx.beginPath();ctx.moveTo(nodes[i].x,nodes[i].y);ctx.lineTo(nodes[j].x,nodes[j].y);ctx.stroke()}}}nodes.forEach(n=>{ctx.fillStyle=n.col+(.72*ga)+')';ctx.beginPath();ctx.arc(n.x,n.y,n.s,0,Math.PI*2);ctx.fill()});sparks.forEach(p=>{p.x+=p.vx;p.y+=p.vy;if(p.y<-20){p.y=H+10;p.x=Math.random()*W}ctx.globalAlpha=p.a*ga;ctx.fillStyle=p.col+'1)';ctx.beginPath();ctx.arc(p.x,p.y,p.s,0,Math.PI*2);ctx.fill();ctx.globalAlpha=1});requestAnimationFrame(frame)}resize();frame();
const obs=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting)e.target.classList.add('visible')}),{threshold:.12});document.querySelectorAll('.reveal').forEach((el,i)=>{el.style.transitionDelay=(i%5)*.05+'s';obs.observe(el)});

// Background music toggle. Put your audio file in /music as BgmWeb.mp3.
const bgMusic = document.getElementById('bgMusic');
const soundToggle = document.getElementById('soundToggle');
const soundIcon = document.getElementById('soundIcon');
const soundText = document.getElementById('soundText');

function setSoundUI(state) {
  if (!soundToggle) return;
  soundToggle.classList.toggle('is-playing', state === 'playing');
  soundToggle.classList.toggle('is-error', state === 'error');
  soundToggle.setAttribute('aria-pressed', state === 'playing' ? 'true' : 'false');

  if (state === 'playing') {
    soundIcon.textContent = '♫';
    soundText.textContent = 'Sound On';
  } else if (state === 'error') {
    soundIcon.textContent = '!';
    soundText.textContent = 'Add Audio';
  } else {
    soundIcon.textContent = '♪';
    soundText.textContent = 'Sound Off';
  }
}

if (bgMusic && soundToggle) {
  bgMusic.volume = 0.35;
  setSoundUI('off');

  soundToggle.addEventListener('click', async () => {
    try {
      if (bgMusic.paused) {
        await bgMusic.play();
        setSoundUI('playing');
      } else {
        bgMusic.pause();
        setSoundUI('off');
      }
    } catch (error) {
      console.warn('Background music could not be played. Make sure music/BgmWeb.mp3 exists.', error);
      setSoundUI('error');
    }
  });

  bgMusic.addEventListener('ended', () => setSoundUI('off'));
  bgMusic.addEventListener('error', () => setSoundUI('error'));
}

// Background music toggle.
// Put the audio file inside /music.
// Recommended filename: music/BgmWeb.mp3
const bgMusic = document.getElementById('bgMusic');
const soundToggle = document.getElementById('soundToggle');
const soundIcon = document.getElementById('soundIcon');
const soundText = document.getElementById('soundText');

const audioCandidates = [
  'music/BgmWeb.mp3',
  'music/BgmWeb.mpeg',
  'music/BgmWeb.wav',
  'music/BgmWeb.ogg',
  'music/BgmWeb'
];

let currentAudioIndex = 0;
let isMusicReady = false;

function setSoundUI(state) {
  if (!soundToggle) return;

  soundToggle.classList.toggle('is-playing', state === 'playing');
  soundToggle.classList.toggle('is-error', state === 'error');
  soundToggle.setAttribute('aria-pressed', state === 'playing' ? 'true' : 'false');

  if (state === 'playing') {
    soundIcon.textContent = '♫';
    soundText.textContent = 'Sound On';
  } else if (state === 'loading') {
    soundIcon.textContent = '…';
    soundText.textContent = 'Loading';
  } else if (state === 'error') {
    soundIcon.textContent = '!';
    soundText.textContent = 'No Audio';
  } else {
    soundIcon.textContent = '♪';
    soundText.textContent = 'Sound Off';
  }
}

function setAudioSource(index) {
  if (!bgMusic) return;

  currentAudioIndex = index;
  bgMusic.src = audioCandidates[currentAudioIndex];
  bgMusic.load();
}

function tryNextAudioSource() {
  if (!bgMusic) return false;

  currentAudioIndex += 1;

  if (currentAudioIndex >= audioCandidates.length) {
    setSoundUI('error');
    console.warn('No playable background music file found. Check /music/BgmWeb.mp3');
    return false;
  }

  setAudioSource(currentAudioIndex);
  return true;
}

async function playBackgroundMusic() {
  if (!bgMusic) return;

  setSoundUI('loading');

  try {
    bgMusic.volume = 0.35;

    if (!isMusicReady) {
      setAudioSource(currentAudioIndex);
      isMusicReady = true;
    }

    await bgMusic.play();
    setSoundUI('playing');
  } catch (error) {
    console.warn('Failed to play current audio source:', bgMusic.src, error);

    if (tryNextAudioSource()) {
      setTimeout(playBackgroundMusic, 150);
    } else {
      setSoundUI('error');
    }
  }
}

function pauseBackgroundMusic() {
  if (!bgMusic) return;

  bgMusic.pause();
  setSoundUI('off');
}

if (bgMusic && soundToggle) {
  setSoundUI('off');

  soundToggle.addEventListener('click', async () => {
    if (bgMusic.paused) {
      await playBackgroundMusic();
    } else {
      pauseBackgroundMusic();
    }
  });

  bgMusic.addEventListener('error', () => {
    console.warn('Audio source error:', bgMusic.src);

    if (tryNextAudioSource()) {
      if (!bgMusic.paused) {
        setTimeout(playBackgroundMusic, 150);
      }
    }
  });
}
