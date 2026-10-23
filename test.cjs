const fs=require('fs'),vm=require('vm'),assert=require('assert');
const els={},storage={};const ctx={document:{querySelector(s){return els[s]??={style:{},getContext(){return new Proxy({},{get:()=>()=>{}})}}},querySelectorAll(){return[]}},localStorage:{getItem:k=>storage[k],setItem:(k,v)=>storage[k]=v},addEventListener(){},requestAnimationFrame(){},Image:class {complete=false;naturalWidth=0},Math,console,assert};
vm.createContext(ctx);vm.runInContext(fs.readFileSync('dist/index.html','utf8').match(/<script>([\s\S]*)<\/script>/)[1],ctx);
vm.runInContext(`
begin(false);update(.016);assert.equal(p.form,0);transform(1);assert.equal(p.form,0);
p.x=240;p.y=500;p.ground=true;press(' ');for(let i=0;i<80;i++)update(1/120);assert.equal(p.y+p.h,455,'first platform reachable');
p.x=540;p.y=300;update(.016);assert(unlocked[1]);assert.equal(p.form,1);
loadRoom(1);p.x=580;p.y=500;p.dir=1;cool=0;press('j');assert(broken,'Akari cuts seal');
loadRoom(2);p.x=620;p.y=195;update(.016);assert(unlocked[2]);
loadRoom(0);p.x=140;p.y=500;p.ground=true;press(' ');for(let i=0;i<45;i++)update(1/120);press(' ');for(let i=0;i<45;i++)update(1/120);assert.equal(room,3,'double jump opens spire');
p.hp=2;p.x=90;p.y=500;update(.016);assert.equal(p.hp,8);assert.equal(saveRoom,3);
loadRoom(4);transform(1);for(let i=0;i<20;i++){p.x=boss.x-65;p.y=boss.y;p.dir=1;cool=0;press('j')}assert(won,'boss defeatable');
respawn();assert.equal(room,3);begin(true);assert(unlocked[2]);assert(won);console.log('PASS: platform reachability, page unlocks, seal, double jump route, checkpoint, boss, save/load');
`,ctx);
