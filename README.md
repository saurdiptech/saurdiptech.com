<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
<title>Saurdip Technologies | Marine Navigation & Satellite Communications</title>
<meta name="description" content="Marine navigation, satellite communications, GMDSS radio surveys and 24/7 port technical support.">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600&family=Space+Grotesk:wght@500;600;700&display=swap" rel="stylesheet">
<style>
:root{--navy:#0B192C;--cyan:#00A8E8;--bg:#fff;--bg2:#F3F7FB;--text:#0B192C;--muted:#4A5B70;--line:#DCE4EE;--card:#fff;
box-sizing:border-box;padding-top:env(safe-area-inset-top,0px);padding-bottom:env(safe-area-inset-bottom,0px)}
@media (prefers-color-scheme:dark){:root:not([data-theme="light"]){--bg:#08121F;--bg2:#0B192C;--text:#F2F6FA;--muted:#9FB0C4;--line:#1D3350;--card:#10233B}}
:root[data-theme="dark"]{--bg:#08121F;--bg2:#0B192C;--text:#F2F6FA;--muted:#9FB0C4;--line:#1D3350;--card:#10233B}
*{box-sizing:border-box}html{scroll-behavior:smooth;scroll-padding-top:110px}
body{margin:0;background:var(--bg);color:var(--text);font-family:'Plus Jakarta Sans',system-ui,sans-serif;line-height:1.6}
h1,h2,h3{font-family:'Space Grotesk',system-ui,sans-serif;line-height:1.12;margin:0}
a{color:inherit;text-decoration:none}ul{list-style:none;padding:0;margin:0}
.wrap{max-width:1160px;margin:0 auto;padding:0 24px}
.top{background:#06111F;color:#9FB0C4;font-size:.82rem}
.top .wrap{display:flex;justify-content:space-between;gap:16px;padding-top:8px;padding-bottom:8px;flex-wrap:wrap}
.top a:hover{color:var(--cyan)}.top span+span{margin-left:22px}
header{position:sticky;top:env(safe-area-inset-top,0px);z-index:30;background:var(--navy);border-bottom:1px solid #1D3350}
.nav{display:flex;align-items:center;justify-content:space-between;height:68px}
.logo{display:flex;align-items:center;gap:10px;color:#fff;font:700 1.12rem 'Space Grotesk',sans-serif;letter-spacing:.02em}
.logo i{width:30px;height:30px;border:2px solid var(--cyan);border-radius:50%;display:grid;place-items:center;font-style:normal;color:var(--cyan);font-size:.9rem}
.menu{display:flex;gap:6px;align-items:center}
.menu>li{position:relative}
.menu>li>a{display:block;padding:24px 12px;color:#C9D6E5;font-size:.9rem;font-weight:500}
.menu>li:hover>a,.menu>li:focus-within>a{color:var(--cyan)}
.dd{position:absolute;left:0;top:100%;min-width:250px;background:var(--navy);border:1px solid #1D3350;border-top:2px solid var(--cyan);display:none;border-radius:0 0 8px 8px}
.menu li:hover .dd,.menu li:focus-within .dd{display:block}
.dd a{display:block;padding:10px 18px;color:#C9D6E5;font-size:.88rem}.dd a:hover{background:#10233B;color:var(--cyan)}
.burger{display:none;background:0;border:1px solid #3B5878;color:#fff;border-radius:6px;padding:8px 12px;font-size:1.1rem;cursor:pointer}
.btn{display:inline-block;background:var(--cyan);color:var(--navy);padding:14px 26px;border-radius:6px;border:0;cursor:pointer;font:600 1rem 'Plus Jakarta Sans',sans-serif;transition:.2s}
.btn:hover{background:#33BDF2;transform:translateY(-1px)}
.btn.ghost{background:transparent;color:#fff;border:1px solid #3B5878}.btn.ghost:hover{border-color:var(--cyan);color:var(--cyan)}
.hero{position:relative;background:var(--navy);color:#fff;overflow:hidden;min-height:540px}
.hero::before{content:"";position:absolute;inset:0;z-index:1;pointer-events:none;background:repeating-linear-gradient(0deg,transparent 0 59px,rgba(255,255,255,.04) 59px 60px),repeating-linear-gradient(90deg,transparent 0 59px,rgba(255,255,255,.04) 59px 60px)}
.slide{position:absolute;inset:0;opacity:0;transition:opacity 1s;display:flex;align-items:center}
.slide.on{opacity:1;z-index:2}
.s0{background:radial-gradient(circle at 80% 30%,rgba(0,168,232,.3),transparent 50%),var(--navy)}
.s1{background:radial-gradient(circle at 20% 70%,rgba(0,168,232,.25),transparent 50%),#0D2038}
.s2{background:radial-gradient(circle at 75% 75%,rgba(0,168,232,.28),transparent 50%),var(--navy)}
.s3{background:radial-gradient(circle at 15% 25%,rgba(0,168,232,.25),transparent 50%),#0D2038}
.s4{background:radial-gradient(circle at 60% 20%,rgba(0,168,232,.3),transparent 50%),var(--navy)}
.slide .wrap{width:100%}
.tag{display:inline-flex;align-items:center;gap:8px;color:var(--cyan);font-size:.8rem;letter-spacing:.14em;text-transform:uppercase;font-weight:600;margin-bottom:18px}
.dot{width:8px;height:8px;border-radius:50%;background:var(--cyan);animation:p 2s infinite}
@keyframes p{70%{box-shadow:0 0 0 10px rgba(0,168,232,0)}0%{box-shadow:0 0 0 0 rgba(0,168,232,.7)}}
.slide h1{font-size:clamp(2.1rem,5vw,3.8rem);max-width:760px;letter-spacing:-.02em}
.slide h1 span{color:var(--cyan)}
.slide p{color:#B5C4D6;font-size:1.1rem;max-width:560px;margin:18px 0 30px}
.dots{position:absolute;bottom:22px;left:0;right:0;z-index:3;display:flex;justify-content:center;gap:10px}
.dots button{width:34px;height:4px;border:0;background:#3B5878;cursor:pointer;padding:0}.dots button.on{background:var(--cyan)}
.ports{background:var(--bg2);border-bottom:1px solid var(--line);padding:18px 0;overflow:hidden}
.ports ul{display:flex;gap:12px;flex-wrap:wrap;justify-content:center}
.ports li{border:1px solid var(--line);background:var(--card);padding:8px 18px;border-radius:30px;font:600 .85rem 'Space Grotesk',sans-serif;color:var(--muted)}
.ports li::before{content:"● ";color:var(--cyan);font-size:.7rem}
section{padding:84px 0}.alt{background:var(--bg2)}
.eyebrow{color:var(--cyan);font-size:.8rem;letter-spacing:.14em;text-transform:uppercase;font-weight:600}
h2{font-size:clamp(1.7rem,3.3vw,2.5rem);margin:10px 0 14px;letter-spacing:-.01em}
.lead{color:var(--muted);max-width:640px;margin:0 0 40px}
.intro{display:grid;grid-template-columns:1.3fr .7fr;gap:48px;align-items:center}
.intro p{color:var(--muted)}
.partner{background:var(--navy);color:#fff;border-radius:14px;padding:30px;border-top:3px solid var(--cyan)}
.partner h3{color:var(--cyan);margin-bottom:8px}.partner p{color:#B5C4D6;margin:0 0 16px}
.partner a{color:var(--cyan);font-weight:600}
.grid{display:grid;grid-template-columns:repeat(3,1fr);gap:20px}
.card{background:var(--card);border:1px solid var(--line);border-radius:12px;padding:26px 24px;transition:.25s;position:relative;overflow:hidden}
.card::after{content:"";position:absolute;left:0;top:0;height:3px;width:0;background:var(--cyan);transition:.3s}
.card:hover{transform:translateY(-4px);box-shadow:0 14px 34px rgba(0,168,232,.15)}.card:hover::after{width:100%}
.ic{width:44px;height:44px;border-radius:10px;background:var(--navy);display:grid;place-items:center;margin-bottom:18px;color:var(--cyan);font-size:1.3rem}
.card h3{font-size:1.15rem;margin-bottom:8px}.card p{color:var(--muted);font-size:.93rem;margin:0 0 14px}
.card a{color:var(--cyan);font-weight:600;font-size:.9rem}
.tiles{display:grid;grid-template-columns:repeat(auto-fit,minmax(140px,1fr));gap:14px}
.tile{border:1px dashed var(--line);border-radius:10px;padding:22px 10px;text-align:center;font:600 .9rem 'Space Grotesk',sans-serif;color:var(--muted);background:var(--card)}
.tile small{display:block;font:500 .7rem 'Plus Jakarta Sans',sans-serif;color:var(--cyan);letter-spacing:.1em;text-transform:uppercase}
.stats{background:var(--navy);color:#fff;padding:56px 0}
.stats .wrap{display:grid;grid-template-columns:repeat(4,1fr);gap:20px;text-align:center}
.stats b{font:700 2.6rem 'Space Grotesk',sans-serif;color:var(--cyan)}.stats small{display:block;color:#9FB0C4;text-transform:uppercase;letter-spacing:.1em;font-size:.78rem}
.two{display:grid;grid-template-columns:1fr 1fr;gap:12px 48px}
.two li{padding:9px 0 9px 28px;position:relative;border-bottom:1px solid var(--line);color:var(--muted)}
.two li::before{content:"✓";position:absolute;left:0;color:var(--cyan);font-weight:700}
.formbox{display:grid;grid-template-columns:.8fr 1.2fr;gap:56px;align-items:start}
form.panel{background:var(--navy);color:#fff;border-radius:14px;padding:32px;display:grid;grid-template-columns:1fr 1fr;gap:18px;box-shadow:0 20px 50px rgba(11,25,44,.25)}
.f{display:flex;flex-direction:column;gap:6px}.f.full{grid-column:1/-1}
label{font-size:.82rem;font-weight:600;color:#C9D6E5}
input,select,textarea{width:100%;background:#10233B;border:1px solid #2A4565;color:#fff;border-radius:6px;padding:13px 14px;font:500 .95rem 'Plus Jakarta Sans',sans-serif}
input:focus,select:focus,textarea:focus{outline:2px solid var(--cyan);outline-offset:1px}
.err{color:#FF8A8A;font-size:.78rem;min-height:1em}.bad{border-color:#FF6B6B}
form.panel .btn{grid-column:1/-1}
.ok{display:none;grid-column:1/-1;text-align:center;padding:20px 0}.ok h3{color:var(--cyan);font-size:1.5rem;margin-bottom:8px}
.ok code{background:#10233B;padding:4px 10px;border-radius:4px;color:var(--cyan)}
.foot{background:#06111F;color:#9FB0C4;padding:64px 0 40px}
.fgrid{display:grid;grid-template-columns:1.2fr 1fr 1fr;gap:40px}
.foot h3{color:#fff;font-size:1.05rem;margin-bottom:16px}
.news{height:78px;overflow:hidden;position:relative}
.news li{position:absolute;inset:0;opacity:0;transition:opacity .6s;font-size:.92rem}.news li.on{opacity:1}
.news a{color:var(--cyan);font-weight:600}
.cb{display:grid;gap:10px}
.cb input{background:#0B192C}
.dl a{display:block;padding:6px 0}.dl a:hover{color:var(--cyan)}
.copy{background:#040C16;color:#6F8399;font-size:.82rem;padding:16px 0}
.copy .wrap{display:flex;justify-content:space-between;flex-wrap:wrap;gap:10px}
@media(max-width:960px){.burger{display:block}.menu{display:none;position:absolute;left:0;right:0;top:68px;background:var(--navy);flex-direction:column;align-items:stretch;padding:8px 24px 18px;max-height:75vh;overflow:auto;border-bottom:2px solid var(--cyan)}.menu.open{display:flex}
.menu>li>a{padding:12px 0}.dd{position:static;display:block;border:0;border-left:2px solid #1D3350;border-radius:0;margin-left:6px}
.intro,.formbox,.fgrid{grid-template-columns:1fr}.grid{grid-template-columns:1fr 1fr}.stats .wrap{grid-template-columns:1fr 1fr}.two{grid-template-columns:1fr}}
@media(max-width:560px){.grid{grid-template-columns:1fr}form.panel{grid-template-columns:1fr;padding:22px}section{padding:60px 0}.top .wrap{justify-content:center}}
@media(prefers-reduced-motion:reduce){*{animation:none!important;transition:none!important}}
</style>
</head>
<body>
<div class="top"><div class="wrap">
<div><span>✉ <a href="mailto:info@saurdip.example">info@saurdip.example</a></span><span>☎ <a href="tel:+000000000">+00 000 000 000</a></span></div>
<div>24/7 Service Desk: +00 000 000 000</div></div></div>
<header><div class="wrap nav">
<a class="logo" href="#top"><i>⚓</i>SAURDIP TECHNOLOGIES</a>
<button class="burger" id="bg" aria-label="Menu">☰</button>
<ul class="menu" id="mn">
<li><a href="#top">Home</a></li>
<li><a href="#about">Our Company ▾</a><ul class="dd"><li><a href="#about">About Us</a></li><li><a href="#brands">Partners</a></li><li><a href="#news">News &amp; Events</a></li></ul></li>
<li><a href="#solutions">Products &amp; Solutions ▾</a><ul class="dd"><li><a href="#solutions">Marine Navigation</a></li><li><a href="#solutions">Marine Communication</a></li><li><a href="#solutions">Land Communication</a></li><li><a href="#solutions">Automation</a></li><li><a href="#solutions">Airtime &amp; Connectivity</a></li><li><a href="#solutions">Charts &amp; Publications</a></li></ul></li>
<li><a href="#activities">Services ▾</a><ul class="dd"><li><a href="#activities">Onboard Service</a></li><li><a href="#activities">Installation &amp; Commissioning</a></li><li><a href="#activities">GMDSS Safety Radio Surveys</a></li><li><a href="#activities">VDR APT</a></li><li><a href="#activities">Annual Maintenance Contracts</a></li><li><a href="#activities">Calibration</a></li><li><a href="#activities">Spare Parts</a></li></ul></li>
<li><a href="#contact">Contact Us</a></li>
<li><a class="btn" href="#quote" style="padding:10px 18px;font-size:.85rem;color:var(--navy)">Request a Quote</a></li>
</ul></div></header>

<main id="top">
<div class="hero" id="hero">
<div class="slide s0 on"><div class="wrap"><div class="tag"><span class="dot"></span>Online · 24/7 Global Coverage</div><h1>Every vessel. Every ocean. <span>Always connected.</span></h1><p>Marine navigation, satellite communications and radio compliance, backed by engineers at the port when you call.</p><a class="btn" href="#quote">Request a Service Quote</a></div></div>
<div class="slide s1"><div class="wrap"><div class="tag">Bridge Navigation</div><h1>Navigation you can <span>trust</span> on the bridge.</h1><p>ECDIS, radar and chart services, installed and supported by approved engineers.</p><a class="btn" href="#solutions">Explore Solutions</a></div></div>
<div class="slide s2"><div class="wrap"><div class="tag">GMDSS Compliance</div><h1>Radio surveys, <span>on schedule</span>.</h1><p>Annual GMDSS surveys and certification-ready reports, timed to your port call.</p><a class="btn" href="#quote">Book a Survey</a></div></div>
<div class="slide s3"><div class="wrap"><div class="tag">Satellite Communications</div><h1>VSAT and Iridium, <span>without the downtime</span>.</h1><p>Reliable data and voice for operations, safety and crew welfare.</p><a class="btn" href="#solutions">See Connectivity</a></div></div>
<div class="slide s4"><div class="wrap"><div class="tag">One Partner</div><h1>From installation to <span>lifecycle support</span>.</h1><p>One accountable team for supply, service and spares.</p><a class="btn" href="#contact">Talk to Us</a></div></div>
<div class="dots" id="dots"></div>
</div>

<div class="ports"><div class="wrap"><ul><li>Port 01 · edit</li><li>Port 02 · edit</li><li>Port 03 · edit</li><li>Port 04 · edit</li><li>Port 05 · edit</li><li>Port 06 · edit</li></ul></div></div>

<section id="about"><div class="wrap intro">
<div><div class="eyebrow">Welcome to</div><h2>Saurdip Technologies</h2>
<p>Saurdip Technologies provides marine navigation, satellite communication and radio compliance services for commercial and offshore vessels, with a focus on dependable after-sales support at the port.</p>
<p>Our engineers supply, install, survey and maintain bridge and radio-room systems, so vessels stay compliant, connected and on schedule. <em>(Replace with your company story, founding year and locations.)</em></p>
<a class="btn" href="#contact" style="margin-top:10px">Read More</a></div>
<div class="partner"><h3>Connectivity &amp; Airtime Partner</h3><p>Managed VSAT and Iridium airtime plans with 24/7 network monitoring.</p><a href="#quote">Ask about airtime →</a></div>
</div></section>

<section id="solutions" class="alt"><div class="wrap">
<div class="eyebrow">Products &amp; Solutions</div><h2>Built for the bridge and the radio room</h2>
<p class="lead">Integrated systems, installation and lifecycle service from one accountable partner.</p>
<div class="grid">
<div class="card"><div class="ic">◎</div><h3>Bridge Navigation</h3><p>ECDIS and radar supply, installation, chart updates and performance checks.</p><a href="#quote" data-svc="Bridge Navigation (ECDIS/Radar)">Get a quote →</a></div>
<div class="card"><div class="ic">📡</div><h3>Satellite Comms</h3><p>VSAT and Iridium services for operations, redundancy and crew welfare.</p><a href="#quote" data-svc="Satellite Comms (VSAT/Iridium)">Get a quote →</a></div>
<div class="card"><div class="ic">((•))</div><h3>GMDSS Annual Radio Surveys</h3><p>Statutory inspection and testing with certification-ready reporting.</p><a href="#quote" data-svc="GMDSS Annual Radio Survey">Get a quote →</a></div>
<div class="card"><div class="ic">⚓</div><h3>24/7 Port Technical Support</h3><p>Engineers attend on arrival to diagnose and repair, so you sail on time.</p><a href="#quote" data-svc="24/7 Port Technical Support">Get a quote →</a></div>
<div class="card"><div class="ic">⚙</div><h3>Automation &amp; Instrumentation</h3><p>Monitoring, tank gauging and onboard instrumentation service and calibration.</p><a href="#quote" data-svc="Bridge Navigation (ECDIS/Radar)">Enquire →</a></div>
<div class="card"><div class="ic">▤</div><h3>Charts &amp; Publications</h3><p>Nautical charts, publications and updates delivered to the vessel.</p><a href="#quote" data-svc="Bridge Navigation (ECDIS/Radar)">Enquire →</a></div>
</div></div></section>

<section id="brands"><div class="wrap">
<div class="eyebrow">OEM Partners &amp; Certifications</div><h2>Authorised, approved, accountable</h2>
<p class="lead">Replace these placeholders with your partner logos and certificates.</p>
<div class="tiles">
<div class="tile"><small>OEM</small>Radar &amp; ECDIS</div><div class="tile"><small>OEM</small>VSAT Network</div><div class="tile"><small>OEM</small>Iridium Services</div><div class="tile"><small>OEM</small>GMDSS Radio</div><div class="tile"><small>Standard</small>ISO 9001</div><div class="tile"><small>Compliance</small>IMO · SOLAS</div><div class="tile"><small>Class</small>Approved Service Supplier</div>
</div></div></section>

<div class="stats"><div class="wrap">
<div><b><span class="n" data-t="50">0</span>+</b><small>Brands supported</small></div>
<div><b><span class="n" data-t="8">0</span>+</b><small>Port locations</small></div>
<div><b><span class="n" data-t="40">0</span>+</b><small>Team members</small></div>
<div><b>24/7</b><small>Service desk</small></div>
</div></div>

<section id="activities"><div class="wrap">
<div class="eyebrow">Core Activities</div><h2>What we do</h2><p class="lead">Placeholder figures above are examples; edit them to your real numbers.</p>
<div class="two"><ul>
<li>Marine electronics &amp; navigation</li><li>Internal and external ship communications</li><li>Automation and instrumentation</li><li>Charts, publications &amp; nautical instruments</li><li>Vessel tracking, LRIT &amp; SSAS</li><li>Land communications (VHF / TETRA)</li><li>New builds, consultancy and turnkey projects</li></ul>
<ul><li>Annual maintenance contracts</li><li>Annual GMDSS radio surveys and VDR APT</li><li>Certification of EPIRBs, SARTs, AIS and BNWAS</li><li>Calibration (magnetic compass, gas detection, tank gauging)</li><li>Onboard installation, repair and service</li><li>Workshop repairs and spare parts</li><li>24/7 support and service desk</li></ul></div>
</div></section>

<section id="quote" class="alt"><div class="wrap formbox">
<div><div class="eyebrow">Service Request</div><h2>Tell us where your vessel is headed</h2>
<p class="lead" style="margin-bottom:0">Send the details and our duty engineer will confirm availability and a quotation.</p>
<ul class="two" style="grid-template-columns:1fr;margin-top:20px"><li>Response within one business hour</li><li>Attendance at major ports</li><li>Clear scope and price before work starts</li></ul></div>
<form class="panel" id="f" novalidate>
<div class="f"><label for="vn">Vessel Name</label><input id="vn" placeholder="e.g. MV Horizon Star"><span class="err"></span></div>
<div class="f"><label for="imo">IMO Number</label><input id="imo" inputmode="numeric" maxlength="7" placeholder="7 digits, e.g. 9074729"><span class="err"></span></div>
<div class="f"><label for="port">Port of Call</label><input id="port" placeholder="e.g. Rotterdam"><span class="err"></span></div>
<div class="f"><label for="svc">Service Needed</label><select id="svc"><option value="">Select a service…</option><option>Bridge Navigation (ECDIS/Radar)</option><option>Satellite Comms (VSAT/Iridium)</option><option>GMDSS Annual Radio Survey</option><option>24/7 Port Technical Support</option></select><span class="err"></span></div>
<div class="f full"><label for="msg">Additional details (optional)</label><textarea id="msg" rows="3" placeholder="ETA, equipment make/model, fault description…"></textarea></div>
<button class="btn" type="submit">Submit Service Request</button>
<div class="ok" id="ok" role="status"><h3>Request received ✓</h3><p>Reference <code id="ref"></code><br>Our duty engineer will contact you shortly.</p><button type="button" class="btn ghost" id="again">Submit another</button></div>
</form></div></section>
</main>

<footer class="foot" id="contact"><div class="wrap fgrid">
<div id="news"><h3>News &amp; Events</h3><ul class="news" id="nw">
<li class="on">Sample news headline: add your latest event here. <a href="#">read more</a></li>
<li>Sample news headline: exhibition or conference participation. <a href="#">read more</a></li>
<li>Sample news headline: new OEM partnership announcement. <a href="#">read more</a></li></ul>
<div class="dl" style="margin-top:18px"><h3>Download</h3><a href="#">• Company Brochure</a><a href="#">• Terms &amp; Conditions</a></div></div>
<div><h3>Callback Request</h3>
<form class="cb" id="cb" novalidate><input id="ce" type="email" placeholder="Your email"><input id="cp" inputmode="numeric" placeholder="Contact number"><span class="err" id="cerr"></span><button class="btn" type="submit">Send Now</button></form></div>
<div><h3>Contact</h3><p>Saurdip Technologies<br>[City/Port]<br>info@saurdip.example<br>+00 000 000 000</p></div>
</div></footer>
<div class="copy"><div class="wrap"><span>© 2026 Saurdip Technologies. All rights reserved.</span><span>Terms &amp; Conditions | Privacy Policy</span></div></div>

<script>
const $=id=>document.getElementById(id);
$('bg').onclick=()=>$('mn').classList.toggle('open');
document.querySelectorAll('.menu a').forEach(a=>a.addEventListener('click',()=>$('mn').classList.remove('open')));
/* slider */
const sl=[...document.querySelectorAll('.slide')],dt=$('dots');let cur=0,tm;
sl.forEach((_,i)=>{const b=document.createElement('button');b.setAttribute('aria-label','Slide '+(i+1));b.onclick=()=>{go(i);auto()};dt.appendChild(b)});
function go(i){cur=i;sl.forEach((s,k)=>s.classList.toggle('on',k===i));[...dt.children].forEach((b,k)=>b.classList.toggle('on',k===i))}
function auto(){clearInterval(tm);tm=setInterval(()=>go((cur+1)%sl.length),6000)}go(0);auto();
/* news ticker */
const nl=[...document.querySelectorAll('#nw li')];let ni=0;setInterval(()=>{nl[ni].classList.remove('on');ni=(ni+1)%nl.length;nl[ni].classList.add('on')},4000);
/* counters */
const io=new IntersectionObserver(es=>es.forEach(e=>{if(!e.isIntersecting)return;io.unobserve(e.target);const t=+e.target.dataset.t;let c=0;const st=Math.max(1,Math.ceil(t/40));const iv=setInterval(()=>{c=Math.min(t,c+st);e.target.textContent=c;if(c>=t)clearInterval(iv)},30)}));
document.querySelectorAll('.n').forEach(n=>io.observe(n));
/* service form */
function imoOk(v){if(!/^\d{7}$/.test(v))return false;let s=0;for(let i=0;i<6;i++)s+=+v[i]*(7-i);return s%10===+v[6]}
function setErr(el,m){el.classList.toggle('bad',!!m);el.parentNode.querySelector('.err').textContent=m||''}
const f=$('f');
$('imo').addEventListener('input',e=>e.target.value=e.target.value.replace(/\D/g,''));
f.addEventListener('submit',e=>{e.preventDefault();let ok=true;
[['vn','Enter the vessel name'],['port','Enter the port of call'],['svc','Choose a service']].forEach(([i,m])=>{const bad=!$(i).value.trim();setErr($(i),bad?m:'');if(bad)ok=false});
const v=$('imo').value.trim(),m=!v?'Enter the IMO number':!/^\d{7}$/.test(v)?'IMO must be 7 digits':!imoOk(v)?'Check digit invalid. Please re-check the number':'';
setErr($('imo'),m);if(m)ok=false;if(!ok)return;
$('ref').textContent='SD-'+Date.now().toString(36).toUpperCase().slice(-6);
[...f.children].forEach(c=>c.style.display=c.id==='ok'?'block':'none')});
$('again').onclick=()=>{f.reset();[...f.children].forEach(c=>c.style.display='');$('ok').style.display='none'};
document.querySelectorAll('[data-svc]').forEach(a=>a.addEventListener('click',()=>{$('svc').value=a.dataset.svc;setErr($('svc'),'')}));
/* callback */
$('cb').addEventListener('submit',e=>{e.preventDefault();
const em=/^\S+@\S+\.\S+$/.test($('ce').value),ph=/^\d{10,13}$/.test($('cp').value);
$('cerr').textContent=!em?'Enter a valid email':!ph?'Enter 10 to 13 digits':'Thank you. We will call you back shortly.';
$('cerr').style.color=em&&ph?'#4ADE80':'#FF8A8A';if(em&&ph)e.target.reset()});
</script>
</body>
</html>
