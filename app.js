const C = {
  length: {
    icon:"📏", title:"길이", desc:"규빗 · 뼘 · 리를 현대 길이로 환산합니다.", out:"m", modernLabel:"현대 길이(m)", def:[300,"cubit"],
    units:[
      ["cubit","규빗",0.45,"1규빗 ≈ 45cm"],
      ["span","뼘",0.225,"1뼘 ≈ 22.5cm"],
      ["hand","손바닥",0.075,"1손바닥 ≈ 7.5cm"],
      ["reed","장대",3.15,"1장대 ≈ 3.15m"],
      ["ri","리",1480,"성경의 ‘리’는 로마식 1마일 체감으로 약 1.48km"]
    ],
    feel:v=>[
      v>=1000?`🚶 성인 걸음으로 약 ${Math.round(v/70)}분 정도 거리`:`🚍 버스 약 ${(v/11).toFixed(1)}대 길이`,
      v>=100?`⚽ 축구장 길이 약 ${(v/105).toFixed(1)}개`:v>=30?`🏢 약 ${Math.round(v/3)}층 건물 높이와 비슷`:`🧍 사람 키와 비교 가능한 길이`,
      v>=1000?`🛣️ 동네 한 구간을 걸어가는 거리감`:`📏 눈으로 가늠 가능한 거리`
    ],
    bible:["노아의 방주: 길이 300규빗","성막 뜰: 길이 100규빗, 너비 50규빗","예수님의 말씀: 오 리를 가게 하거든 십 리를 동행하라"]
  },
  weight: {
    icon:"⚖️", title:"무게", desc:"게라 · 세겔 · 달란트를 현대 무게로 환산합니다.", out:"kg", modernLabel:"현대 무게(kg)", def:[600,"shekel"],
    units:[
      ["gerah","게라",0.00057,"1게라 ≈ 0.57g, 1세겔의 1/20"],
      ["shekel","세겔",0.0114,"1세겔 ≈ 11.4g"],
      ["mina","므나",0.57,"1므나 ≈ 0.57kg"],
      ["talent","달란트",34.2,"1달란트 ≈ 34.2kg"]
    ],
    feel:v=>[
      v<0.01?"🧂 소금 한 꼬집 같은 아주 작은 무게":v>=6?"🎳 볼링공 1개와 비슷하거나 더 무거움":"🍎 사과 몇 개보다 가벼운 무게",
      v>=1?`🎒 가방 ${(v/3).toFixed(1)}개 정도`:"손끝으로 느껴지는 작은 무게",
      v>=30?"🏋️ 성인도 들기 부담스러운 무게":"손으로 들 수 있는 무게"
    ],
    bible:["게라: 성소의 세겔을 설명할 때 등장하는 작은 무게 단위","골리앗의 창날: 철 600세겔","달란트: 금·은 같은 큰 무게 단위"]
  },
  volume: {
    icon:"🫙", title:"부피", desc:"에바 · 고르 · 호멜을 현대 부피로 환산합니다.", out:"L", modernLabel:"현대 부피(L)", def:[1,"ephah"],
    units:[
      ["hin","힌",3.7,"1힌 ≈ 3.7L"],
      ["bath","밧",22,"1밧 ≈ 22L"],
      ["ephah","에바",22,"1에바 ≈ 22L"],
      ["kor","고르",220,"1고르 ≈ 220L, 호멜과 비슷한 큰 부피 단위"],
      ["homer","호멜",220,"1호멜 ≈ 220L"]
    ],
    feel:v=>[`💧 2L 생수병 약 ${(v/2).toFixed(1)}개`,v>=20?"🪣 큰 물통 하나 이상 분량":"작은 물통 분량",v>=100?"🛁 욕조 하나에 가까운 큰 분량":"가정에서 체감 가능한 양"],
    bible:["에바: 곡식의 양","밧: 액체의 양","고르: 많은 곡식이나 기름을 잴 때 쓰는 큰 단위","호멜: 큰 곡식 단위"]
  },
  money: {
    icon:"💰", title:"화폐", desc:"드라크마 · 데나리온 · 달란트를 원화 감각으로 환산합니다.", out:"원", modernLabel:"현대 화폐(원)", def:[1,"denarius"],
    units:[
      ["lepton","렙돈",500,"2렙돈은 매우 작은 돈"],
      ["drachma","드라크마",100000,"체감용: 1드라크마 ≈ 하루 품삯에 가까운 은화"],
      ["denarius","데나리온",100000,"1데나리온 ≈ 노동자 하루 품삯"],
      ["silver","은 세겔",120000,"체감용: 은 1세겔 ≈ 10만 원대"],
      ["talent","달란트",700000000,"체감용: 1달란트 ≈ 수억 원대"]
    ],
    feel:v=>[
      v>=100000?`👷 노동자 하루 품삯 기준 약 ${Math.round(v/100000)}일치`:"🪙 아주 작은 돈",
      v>=1000000?"💳 큰 가전제품이나 등록금 일부 수준":"일상 소비 수준",
      v>=100000000?"🏠 집값·전세금 단위의 거액":"생활비로 체감 가능"
    ],
    bible:["드라크마: 잃은 드라크마 비유","1데나리온: 포도원 품꾼 하루 품삯","2데나리온: 선한 사마리아인의 여관비","2렙돈: 가난한 과부의 헌금","달란트: 갚기 어려운 큰 빚"]
  },
  time: {
    icon:"⏰", title:"시간", desc:"제3시 · 제6시 · 제9시를 오늘 시간으로 환산합니다.", out:"시", modernLabel:"현대 시간", def:[6,"jewish"],
    units:[["jewish","유대식 낮 시간",1,"해뜰 때부터 세는 시간"]],
    feel:v=>v==3?["🌅 오전 9시 무렵","📖 성령 강림과 연결"]:v==6?["☀️ 정오 12시 무렵","📖 십자가 사건 흐름에서 중요"]:v==9?["🌇 오후 3시 무렵","📖 기도 시간과 연결"]:[`🕰️ 대략 오전 ${6+Number(v)}시 무렵`],
    bible:["제3시: 오전 9시 무렵","제6시: 정오 무렵","제9시: 오후 3시 무렵"],
    customBibleToModern:a=>`제${a}시 ≈ ${6+Number(a)>12?"오후":"오전"} ${6+Number(a)>12?6+Number(a)-12:6+Number(a)}시 무렵`,
    customModernToBible:a=>`${a}시 ≈ 제${Math.max(0, Number(a)-6)}시 무렵`
  }
};

let cur = "length";
let direction = "toModern";
let insightMode = "feel";
let currentFeel = [];
let currentBible = [];

const $ = id => document.getElementById(id);
const tabs = $("measureTabs"), sel = $("unitSelect"), amt = $("amountInput");
const toModernBtn = $("toModernBtn"), toBibleBtn = $("toBibleBtn");
const feelTab = $("feelTab"), bibleTab = $("bibleTab");

function n(x){
  if(cur==="money") return Math.round(x).toLocaleString("ko-KR");
  if(Math.abs(x) >= 1000) return Number(x.toFixed(1)).toLocaleString("ko-KR");
  if(Math.abs(x) >= 100) return Number(x.toFixed(1)).toLocaleString("ko-KR");
  if(Math.abs(x) >= 10) return Number(x.toFixed(2)).toLocaleString("ko-KR");
  return Number(x.toFixed(3)).toLocaleString("ko-KR");
}
function list(el, arr){ el.innerHTML = arr.map(x=>`<li>${x}</li>`).join(""); }

function renderInsight(){
  feelTab.classList.toggle("active", insightMode === "feel");
  bibleTab.classList.toggle("active", insightMode === "bible");
  $("insightTitle").textContent = insightMode === "feel" ? "💡 오늘날 체감" : "📖 성경 속 예시";
  list($("insightList"), insightMode === "feel" ? currentFeel : currentBible);
}

function tabsRender(){
  tabs.innerHTML = Object.entries(C).map(([k,c])=>`<button class="tab-btn ${k===cur?"active":""}" data-k="${k}"><span class="emoji">${c.icon}</span><span class="label">${c.title}</span></button>`).join("");
  tabs.querySelectorAll("button").forEach(b=>b.onclick=()=>{cur=b.dataset.k; render();});
}

function setDirection(next){
  direction = next;
  toModernBtn.classList.toggle("active", direction === "toModern");
  toBibleBtn.classList.toggle("active", direction === "toBible");
  updateDirectionLabels();
  convert();
}

function updateDirectionLabels(){
  const c = C[cur];
  if(direction === "toModern"){
    $("amountLabel").textContent = "성경 단위 숫자";
    $("unitLabel").textContent = "성경 단위";
  } else {
    $("amountLabel").textContent = c.modernLabel || "현대 단위 숫자";
    $("unitLabel").textContent = "바꿀 성경 단위";
  }
}

function render(){
  const c=C[cur];
  $("categoryIcon").textContent=c.icon;
  $("categoryTitle").textContent=c.title;
  $("categoryDesc").textContent=c.desc;
  sel.innerHTML=c.units.map(u=>`<option value="${u[0]}">${u[1]}</option>`).join("");
  amt.value=c.def[0];
  sel.value=c.def[1];
  tabsRender();
  updateDirectionLabels();
  convert();
}

function convert(){
  const c=C[cur], a=Number(amt.value||0), u=c.units.find(x=>x[0]===sel.value)||c.units[0];

  if(cur === "time"){
    if(direction === "toModern"){
      $("resultMain").textContent = c.customBibleToModern(a);
      $("resultSub").textContent = u[3];
      currentFeel = c.feel(a);
    } else {
      $("resultMain").textContent = c.customModernToBible(a);
      $("resultSub").textContent = "현대 시간을 유대식 낮 시간으로 대략 환산합니다.";
      currentFeel = [`🕰️ 해뜰 때를 기준으로 대략 제${Math.max(0, a-6)}시`];
    }
    currentBible = c.bible;
    renderInsight();
    return;
  }

  if(direction === "toModern"){
    const v = a * u[2];
    $("resultMain").textContent = `${n(a)} ${u[1]} ≈ ${n(v)} ${c.out}`;
    $("resultSub").textContent = u[3]+" · 체감용 대략 환산입니다.";
    currentFeel = c.feel(v);
  } else {
    const bibleValue = u[2] ? a / u[2] : 0;
    $("resultMain").textContent = `${n(a)} ${c.out} ≈ ${n(bibleValue)} ${u[1]}`;
    $("resultSub").textContent = `현대 단위를 ${u[1]}로 거꾸로 환산했습니다. · ${u[3]}`;
    currentFeel = c.feel(a);
  }
  currentBible = c.bible;
  renderInsight();
}

amt.oninput=convert;
sel.onchange=convert;
toModernBtn.onclick=()=>setDirection("toModern");
toBibleBtn.onclick=()=>setDirection("toBible");
feelTab.onclick=()=>{insightMode="feel"; renderInsight();};
bibleTab.onclick=()=>{insightMode="bible"; renderInsight();};
render();

if("serviceWorker" in navigator){
  window.addEventListener("load",()=>navigator.serviceWorker.register("./service-worker.js").catch(()=>{}));
}
