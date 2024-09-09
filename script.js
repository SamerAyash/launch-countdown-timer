let t=8,e=23,s=55,o=40;
const n={seconds:o,minutes:s,hours:e,days:t};
let a=o+60*s+3600*e+86400*t;
const r=()=>{
    n.days!=t&&d(days),
    setTimeout((()=>{days.textContent=t.toString().padStart(2,"0")}),250),
    n.hours!=e&&d(hours),
    setTimeout((()=>{hours.textContent=e.toString().padStart(2,"0")}),400),
    n.minutes!=s&&d(minutes),
    setTimeout((()=>{minutes.textContent=s.toString().padStart(2,"0")}),400),
    n.seconds!=o&&d(seconds),
    setTimeout((()=>{seconds.textContent=o.toString().padStart(2,"0")}),400)},
    d=t=>{
        const e=t.previousElementSibling;e.classList.add("pulled"),
        setTimeout((()=>{e.classList.remove("pulled")}),800)};
        window.onload=r;
        const i=setInterval((()=>{
            a--,
            n.days=t,
            n.hours=e,
            n.minutes=s,
            n.seconds=o,
            o=a%60,
            s=Math.floor(a/60)%60,
            e=Math.floor(a/3600)%24,
            t=Math.floor(a/86400),
            r(),
            0===a&&clearInterval(i)}),
            1e3
        );
//# sourceMappingURL=index.844b3df1.js.map