*{
    margin:0;
    padding:0;
    box-sizing:border-box;
    font-family:'Poppins',sans-serif;
}

body{
    background:#020617;
    overflow-x:hidden;
    color:white;
}

/* NAVBAR */

nav{
    width:100%;
    display:flex;
    justify-content:space-between;
    align-items:center;
    padding:28px 8%;
    position:fixed;
    top:0;
    z-index:1000;
    background:rgba(0,0,0,0.2);
    backdrop-filter:blur(10px);
    border-bottom:1px solid rgba(255,255,255,0.1);
}

nav h1{
    color:#4db5ff;
    font-size:40px;
    font-weight:700;
}

nav ul{
    display:flex;
    gap:40px;
    list-style:none;
}

nav ul li a{
    text-decoration:none;
    color:white;
    font-size:20px;
    transition:0.3s;
}

nav ul li a:hover{
    color:#4db5ff;
}

/* HERO */

.hero{
    min-height:100vh;
    display:flex;
    justify-content:space-between;
    align-items:center;
    padding:0 8%;
    position:relative;
    overflow:hidden;
}

/* BACKGROUND GLOW */

.hero::before{
    content:'';
    position:absolute;
    width:700px;
    height:700px;
    background:radial-gradient(circle,#2563eb55,transparent 70%);
    top:-100px;
    left:-150px;
    z-index:-1;
}

.hero::after{
    content:'';
    position:absolute;
    width:600px;
    height:600px;
    background:radial-gradient(circle,#7c3aed44,transparent 70%);
    bottom:-200px;
    right:-100px;
    z-index:-1;
}

/* LEFT */

.left{
    width:55%;
}

.tag{
    display:inline-block;
    background:rgba(255,255,255,0.08);
    padding:12px 20px;
    border-radius:14px;
    margin-bottom:25px;
    font-size:18px;
    backdrop-filter:blur(10px);
}

.left h2{
    font-size:95px;
    line-height:1.1;
    margin-bottom:25px;
    font-weight:800;
}

.left h2 span{
    color:#38bdf8;
}

.left h3{
    font-size:34px;
    color:#d1d5db;
    margin-bottom:30px;
    font-weight:400;
}

.left p{
    font-size:22px;
    color:#94a3b8;
    line-height:1.8;
    max-width:750px;
    margin-bottom:45px;
}

/* BUTTONS */

.buttons{
    display:flex;
    gap:25px;
    margin-bottom:60px;
}

.btn1,
.btn2{
    text-decoration:none;
    padding:18px 40px;
    border-radius:16px;
    font-size:20px;
    transition:0.3s;
    font-weight:600;
}

.btn1{
    background:linear-gradient(to right,#0ea5e9,#2563eb);
    color:white;
    box-shadow:0 0 30px rgba(14,165,233,0.4);
}

.btn2{
    border:2px solid #38bdf8;
    color:#38bdf8;
}

.btn1:hover,
.btn2:hover{
    transform:translateY(-5px);
}

/* SOCIALS */

.socials{
    display:flex;
    gap:25px;
}

.socials i{
    width:55px;
    height:55px;
    display:flex;
    justify-content:center;
    align-items:center;
    border-radius:50%;
    background:rgba(255,255,255,0.08);
    font-size:22px;
    transition:0.3s;
    cursor:pointer;
}

.socials i:hover{
    background:#0ea5e9;
    transform:scale(1.1);
}

/* RIGHT */

.right{
    width:40%;
    display:flex;
    justify-content:center;
}

.circle{
    width:450px;
    height:450px;
    border-radius:50%;
    background:linear-gradient(135deg,#38bdf8,#6366f1);
    display:flex;
    justify-content:center;
    align-items:center;
    font-size:140px;
    font-weight:700;
    color:white;
    box-shadow:
    0 0 60px rgba(56,189,248,0.5),
    0 0 120px rgba(99,102,241,0.3);
}

/* RESPONSIVE */

@media(max-width:1200px){

    .left h2{
        font-size:70px;
    }

    .circle{
        width:350px;
        height:350px;
        font-size:100px;
    }
}

@media(max-width:900px){

    nav ul{
        display:none;
    }

    .hero{
        flex-direction:column;
        justify-content:center;
        text-align:center;
        padding-top:120px;
    }

    .left{
        width:100%;
    }

    .right{
        width:100%;
        margin-top:60px;
    }

    .buttons{
        justify-content:center;
    }

    .socials{
        justify-content:center;
    }

    .left h2{
        font-size:55px;
    }

    .left h3{
        font-size:26px;
    }

    .left p{
        font-size:18px;
    }
}

@media(max-width:600px){

    nav h1{
        font-size:28px;
    }

    .left h2{
        font-size:42px;
    }

    .circle{
        width:260px;
        height:260px;
        font-size:80px;
    }

    .btn1,
    .btn2{
        padding:14px 24px;
        font-size:16px;
    }
}
