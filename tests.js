const fs=require('fs');const h=fs.readFileSync(__dirname+'/index.html','utf8');
const code=h.split('//SIM-START')[1].split('//SIM-END')[0];
eval(code+';global.simulate=simulate;global.checks=checks;');
const W={A:[[0,8],[1,4],[2,2],[4,1]],B:[[2,3],[2,1],[8,2],[9,1]],C:[[1,2],[6,3]],D:[[0,3],[0,3],[0,1]],E:[[0,7],[2,2],[3,1]]};
const names={D:["P3","P1","P2"]};
for(const [k,w] of Object.entries(W)){
 const P=w.map((x,i)=>({id:(names[k]||[])[i]||"P"+(i+1),arrival:x[0],burst:x[1]}));
 for(const [a,q] of [["FCFS"],["SJF"],["SRTF"],["RR",1],["RR",2],["RR",4]]){
  const r=simulate(P,a,q),av=f=>(r.rows.reduce((s,x)=>s+x[f],0)/r.rows.length).toFixed(2);
  console.log(k,a+(q?q:""),r.segs.map(s=>(s.id||"idle")+"["+s.s+","+s.e+")").join(" "),"TAT",av("tat"),"WT",av("wt"),"RT",av("rt"),checks(P,r).every(c=>c[1])?"OK":"CHECK FAIL");
 }}
