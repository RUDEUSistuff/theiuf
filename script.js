let mode = "math";

const app = document.getElementById("app");
const startBtn = document.getElementById("startBtn");

const buttons = document.getElementById("buttons");
const inputs = document.getElementById("inputs");
const canvasBox = document.getElementById("canvasBox");

const result = document.getElementById("result");
const mainInput = document.getElementById("mainInput");

// START
startBtn.onclick = () => {
    document.getElementById("startScreen").style.display = "none";
    app.style.display = "block";
};

// TOP BUTTONS
document.getElementById("mathBtn").onclick = () => setMode("math");
document.getElementById("physicsBtn").onclick = () => setMode("physics");
document.getElementById("shapeBtn").onclick = () => setMode("shape");
document.getElementById("atomsBtn").onclick = () => setMode("atoms");
document.getElementById("puzzleBtn").onclick = () => setMode("puzzle");

function setMode(m){
    mode = m;
    buttons.innerHTML = "";
    inputs.innerHTML = "";
    canvasBox.innerHTML = "";
    result.innerText = "";
}

/* ================= MATH ================= */
document.getElementById("calcBtn").onclick = () => {
    if(mode !== "math") return;

    let val = mainInput.value
        .replace(/×/g,"*")
        .replace(/÷/g,"/");

    try{
        result.innerText = Function("return "+val)();
    }catch{
        result.innerText = "Error";
    }
};

/* ================= PHYSICS ================= */
function setModePhysics(){
    setMode("physics");

    ["Force","KE","Density"].forEach(name=>{
        let b = document.createElement("button");
        b.innerText = name;
        b.onclick = () => physics(name);
        buttons.appendChild(b);
    });
}

function physics(type){
    inputs.innerHTML = "";

    let m = createInput("m");
    let v = createInput("v");
    let a = createInput("a");

    let solve = document.createElement("button");
    solve.innerText = "Solve";

    solve.onclick = () => {
        let mv = parseFloat(m.value)||0;
        let vv = parseFloat(v.value)||0;
        let av = parseFloat(a.value)||0;

        if(type==="Force") result.innerText = mv*av;
        if(type==="KE") result.innerText = 0.5*mv*vv*vv;
        if(type==="Density") result.innerText = mv/vv;
    };

    inputs.appendChild(solve);
}

function createInput(id){
    let i = document.createElement("input");
    i.placeholder = id;
    inputs.appendChild(i);
    return i;
}

/* ================= 3D ================= */
function setModeShape(){
    setMode("shape");

    ["Cube","Sphere"].forEach(s=>{
        let b = document.createElement("button");
        b.innerText = s;
        b.onclick = () => drawShape(s);
        buttons.appendChild(b);
    });
}

function drawShape(type){
    canvasBox.innerHTML = "";

    let size = createInput("size");

    let btn = document.createElement("button");
    btn.innerText = "Create";
    canvasBox.appendChild(btn);

    btn.onclick = () => {
        let s = parseFloat(size.value)||1;

        let volume = s*s*s;
        let area = 6*s*s;

        result.innerText = "Volume: "+volume+" | Area: "+area;

        render3D(type,s);
    };
}

function render3D(type,size){
    let scene = new THREE.Scene();
    let camera = new THREE.PerspectiveCamera(75,1,0.1,1000);
    let renderer = new THREE.WebGLRenderer();

    renderer.setSize(300,200);
    canvasBox.appendChild(renderer.domElement);

    let geo = new THREE.BoxGeometry(size,size,size);

    if(type==="Sphere") geo = new THREE.SphereGeometry(size,32,32);

    let mesh = new THREE.Mesh(geo,new THREE.MeshNormalMaterial());
    scene.add(mesh);

    camera.position.z = 5;

    function animate(){
        requestAnimationFrame(animate);
        mesh.rotation.x += 0.01;
        mesh.rotation.y += 0.01;
        renderer.render(scene,camera);
    }
    animate();
}

/* ================= ATOMS ================= */
function setModeAtoms(){
    setMode("atoms");

    ["Solid","Liquid","Gas"].forEach(t=>{
        let b = document.createElement("button");
        b.innerText = t;
        b.onclick = () => atoms(t);
        buttons.appendChild(b);
    });
}

function atoms(type){
    canvasBox.innerHTML = "";

    let canvas = document.createElement("canvas");
    canvas.width = 300;
    canvas.height = 200;
    canvasBox.appendChild(canvas);

    let ctx = canvas.getContext("2d");

    let arr = [];
    for(let i=0;i<40;i++){
        arr.push({x:Math.random()*300,y:Math.random()*200});
    }

    function animate(){
        ctx.clearRect(0,0,300,200);

        arr.forEach(a=>{
            if(type==="Solid"){a.x+=0.2;a.y+=0.2;}
            if(type==="Liquid"){a.x+=Math.random()*2;a.y+=Math.random()*2;}
            if(type==="Gas"){a.x+=Math.random()*4;a.y+=Math.random()*4;}

            ctx.fillStyle="#00f0ff";
            ctx.fillRect(a.x,a.y,3,3);
        });

        requestAnimationFrame(animate);
    }
    animate();
}

/* ================= PUZZLE ================= */
function setModePuzzle(){
    setMode("puzzle");

    let a = Math.floor(Math.random()*10);
    let b = Math.floor(Math.random()*10);

    let ans = a + b;

    [ans, ans+1, ans-1, ans+2].forEach(o=>{
        let btn = document.createElement("button");
        btn.innerText = o;

        btn.onclick = ()=>{
            result.innerText = o===ans ? "Correct" : "Wrong";
        };

        buttons.appendChild(btn);
    });
}

/* FIX MODES */
document.getElementById("physicsBtn").onclick = setModePhysics;
document.getElementById("shapeBtn").onclick = setModeShape;
document.getElementById("atomsBtn").onclick = setModeAtoms;
document.getElementById("puzzleBtn").onclick = setModePuzzle;
