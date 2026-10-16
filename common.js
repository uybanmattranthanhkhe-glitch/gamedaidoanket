const $=s=>document.querySelector(s);
const NM={bac:"MIỀN BẮC",trung:"MIỀN TRUNG",nam:"MIỀN NAM"},COL={bac:"#e0679a",trung:"#e8872a",nam:"#2d8fd0"};
const esc=s=>String(s).replace(/[&<>"]/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));
const shuf=a=>{a=a.slice();for(let i=a.length-1;i>0;i--){const j=Math.random()*(i+1)|0;[a[i],a[j]]=[a[j],a[i]]}return a};
let S=null,OFF=0;
async function api(a,p={}){const u=new URL(window.API);u.searchParams.set("a",a);
 for(const k in p)u.searchParams.set(k,p[k]);
 const s=await (await fetch(u)).json();OFF=s.now-Date.now();return s}
function poll(cb,ms=1500){const f=async()=>{try{S=await api("state");cb()}catch(e){}};f();setInterval(f,ms)}
const ease=t=>1-Math.pow(1-t,3);
const angleOf=S=>{const t=S&&S.turn;return t?t.a0+t.d*ease(Math.min(1,Math.max(0,(Date.now()+OFF-t.t0)/S.dur))):0};
const spinDone=S=>{const t=S&&S.turn;return !!t&&t.t0>0&&Date.now()+OFF>=t.t0+S.dur};
function fit(){const w=$("#wrap").getBoundingClientRect(),s=Math.max(100,Math.min(w.width,w.height)-16),b=$("#board");
 b.style.width=b.style.height=s+"px";b.style.setProperty("--s",s+"px")}
addEventListener("resize",()=>$("#wrap")&&fit());
function loop(){(function f(){const a=angleOf(S),t=a*Math.PI/180,c=$("#car");
 c.style.left=50+44.5*Math.sin(t)+"%";c.style.top=50-44.5*Math.cos(t)+"%";
 c.style.transform=`translate(-50%,-50%) rotate(${a}deg)`;requestAnimationFrame(f)})()}
function renderScore(){const L=[...S.players].sort((a,b)=>b.score-a.score),m=["🥇","🥈","🥉"];
 $("#score").innerHTML=L.map((p,i)=>`<div class="p ${S.status=="playing"&&S.turn&&S.turn.pid==p.id?"on":""}"><span>${S.status=="ended"&&m[i]||i+1+"."} ${esc(p.name)}</span><b>${p.score}</b></div>`).join("")}
