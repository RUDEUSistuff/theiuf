let mode='math';
let canvasBox=document.getElementById('canvasBox');

function startApp(){
    document.getElementById('startScreen').style.display='none';
    document.getElementById('app').style.display='block';
}

function setMode(m){
    mode=m;
    document.getElementById('buttons').innerHTML='';
    document.getElementById('inputs').innerHTML='';
    canvasBox.innerHTML='';
}

/* ================== MATH ================== */
function calculate(){
    let input=document.getElementById('input').value;

    input=input.replace(/×/g,'*').replace(/÷/g,'/');

    try{
        let result=Function("return "+input)();
        document.getElementById('result').innerText=result;
    }catch{
        document.getElementById('result').innerText="Error";
    }
}

/* ================== PHYSICS ================== */
function physics(type){
    let inputs=document.getElementById('inputs');
    inputs.innerHTML='';

    function add(id){
        let i=document.createElement('input');
        i.id=id;
        i.placeholder=id;
        inputs.appendChild(i);
    }

    if(type==='F'){add('m');add('a');}
    if(type==='KE'){add('m');add('v');}

    let btn=document.createElement('button');
    btn.innerText='Solve';
    btn.onclick=()=>{
        let m=val('m'),a=val('a'),v=val('v');
        if(type==='F') show(m*a);
        if(type==='KE') show(0.5*m*v*v);
    };
    inputs.appendChild(btn);
}

function val(id){
    let e=document.getElementById(id);
    return e?parseFloat(e.value):0;
}

function show(x){
    document.getElementById('result').innerText=x;
}

/* ================== 3D ================== */
function draw3D(shape){
    canvasBox.innerHTML='';

    let size=document.createElement('input');
    size.placeholder="size";
    canvasBox.appendChild(size);

    let btn=document.createElement('button');
    btn.innerText="Create";
    canvasBox.appendChild(btn);

    let info=document.createElement('p');
    canvasBox.appendChild(info);

    btn.onclick=()=>{
        let s=parseFloat(size.value);

        let volume,area;

        if(shape==='cube'){
            volume=s*s*s;
            area=6*s*s;
        }

        if(shape==='sphere'){
            volume=(4/3)*Math.PI*s*s*s;
            area=4*Math.PI*s*s;
        }

        info.innerText=`Volume: ${volume} | Area: ${area}`;

        renderShape(shape,s);
    };
}

function renderShape(shape,size){
    let scene=new THREE.Scene();
    let camera=new THREE.PerspectiveCamera(75,1,0.1,1000);
    let renderer=new THREE.WebGLRenderer();
    renderer.setSize(300,200);
    canvasBox.appendChild(renderer.domElement);

    let geo;
    if(shape==='cube') geo=new THREE.BoxGeometry(size,size,size);
    if(shape==='sphere') geo=new THREE.SphereGeometry(size,32,32);

    let mesh=new THREE.Mesh(geo,new THREE.MeshNormalMaterial());
    scene.add(mesh);

    camera.position.z=5;

    function animate(){
        requestAnimationFrame(animate);
        mesh.rotation.x+=0.01;
        mesh.rotation.y+=0.01;
        renderer.render(scene,camera);
    }
    animate();
}

/* ================== ATOMS ================== */
function atoms(type){
    canvasBox.innerHTML='';

    let canvas=document.createElement('canvas');
    canvas.width=300;
    canvas.height=200;
    canvasBox.appendChild(canvas);

    let ctx=canvas.getContext('2d');

    let atoms=[];
    for(let i=0;i<40;i++){
        atoms.push({x:Math.random()*300,y:Math.random()*200,vx:1,vy:1});
    }

    function animate(){
        ctx.clearRect(0,0,300,200);

        atoms.forEach(a=>{
            if(type==='solid'){a.vx=0.2;a.vy=0.2;}
            if(type==='liquid'){a.vx=Math.random()*2;a.vy=Math.random()*2;}
            if(type==='gas'){a.vx=Math.random()*4;a.vy=Math.random()*4;}

            a.x+=a.vx;
            a.y+=a.vy;

            ctx.fillStyle="#00f0ff";
            ctx.fillRect(a.x,a.y,3,3);
        });

        requestAnimationFrame(animate);
    }
    animate();
}

/* ================== PUZZLE ================== */
function puzzle(){
    let a=Math.floor(Math.random()*10);
    let b=Math.floor(Math.random()*10);

    let ans=a+b;
    let opts=[ans,ans+1,ans-1,ans+2];

    opts.sort(()=>Math.random()-0.5);

    let inputs=document.getElementById('inputs');
    inputs.innerHTML=`${a} + ${b} = ?`;

    opts.forEach(o=>{
        let btn=document.createElement('button');
        btn.innerText=o;
        btn.onclick=()=>alert(o===ans?"Correct":"Wrong");
        inputs.appendChild(btn);
    });
}
