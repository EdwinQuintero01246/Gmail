var recibidos = [];
var enviados = [];
var papelera = [];
$(document).ready(function(){
    let contadors = 1;
    for (let i=0;i<25;i++){
        let recibido = {
            emisor: 'Juan Perez',
            correoEmisor: 'jperez@gmail.com',
            asunto: 'Tarea primer parcial',
            mensaje: 'Lorem ipsum dolor sit amet, consectetur adipisicing.',
            hora: [Math.floor(Math.random() * (4 - 2)+10)]+':'+[Math.floor(Math.random() * (60 - 10))]+'am',
            leido: contadors%2==0?true:false,
            destacado: contadors%3==0?true:false,
            spam: contadors%5==0?true:false
        };
        recibidos.push(recibido);
        contadors++;
        let enviado = {
            receptor: 'Pedro Martinez',
            emailReceptor: 'pmartinez@gmail.com',
            asunto: 'Saludos desde Intibucá',
            mensaje: 'Lorem ipsum dolor sit amet, consectetur adipisicing.',
            hora: [Math.floor(Math.random() * (4 - 2)+11)]+':'+[Math.floor(Math.random() * (60 - 10))]+'am'
           };
        enviados.push(enviado);
    };
    DisplayContCentral(1);
})

function RedactarMSG(){
    var x1 = document.getElementById('DivSquareMSG');
    if(x1.style.display != "none"){
        x1.style.display = "none";
        
    }else{
        x1.style.display = "block";
    };
} 
function DisplayContCentral(X){
    var styleButton;
    $("#StyleDivsContend").html($(``));
    localStorage.setItem("recibidos",JSON.stringify(recibidos));
    var RecibidosLocal = JSON.parse(localStorage.getItem("recibidos"));
    localStorage.setItem("enviados",JSON.stringify(enviados));
    var EnviadosLocal = JSON.parse(localStorage.getItem("enviados"));
    localStorage.setItem("papelera",JSON.stringify(papelera));
    var papeleraLocal = JSON.parse(localStorage.getItem("papelera"));
    var mensajeRecortado;
    colorLateral(X);
    if(X==1){
        //iDRecibidos
        
        for(var i=0;i<RecibidosLocal.length;i++){
        mensajeRecortado = RecibidosLocal[i].mensaje.substring(0,20);
        if(RecibidosLocal[i].spam == false){
            if(RecibidosLocal[i].destacado == false && RecibidosLocal[i].leido == false){
                $("#StyleDivsContend").append($(`
                    <div class="MSGsContent">
                        <div class="col-1" style="display: flex;">
                            <button type="button" onclick="ConvertirDestacado(${i})" class="btn Redactar_msg_s1 col-6"><i class="fa fa-star" aria-hidden="true"></i></button>
                            <button type="button" onclick="ConvertirSpam(${i})" class="btn Redactar_msg_s2 col-6"><i class="fa fa-exclamation-triangle" aria-hidden="true"></i></button>
                        </div>
                        <div class="col-2"><a href="" style="color: black;">${RecibidosLocal[i].emisor} ${i}</a></div>
                        <div class="col-3"><a href="" style="color: black;">${RecibidosLocal[i].asunto}</a></div>
                        <div class="col-4"> - ${mensajeRecortado}</div>
                        <div class="col-2">${RecibidosLocal[i].hora} <button type="button" onclick="ConvertirDelete(${i})" class="btn Redactar_msg_s3 col-1"><i class="fa fa-trash" aria-hidden="true"></i></button></div>
                    </div>
                `));
            };
            if(RecibidosLocal[i].destacado == true && RecibidosLocal[i].leido == false){
                $("#StyleDivsContend").append($(`
                    <div class="MSGsContent">
                        <div class="col-1" style="display: flex;">
                            <button type="button" onclick="ConvertirDestacado(${i})" class="btn Redactar_msg_s1 col-6" style="color: #FBBC05;"><i class="fa fa-star" aria-hidden="true"></i></button>
                            <button type="button" onclick="ConvertirSpam(${i})" class="btn Redactar_msg_s2 col-6"><i class="fa fa-exclamation-triangle" aria-hidden="true"></i></button>
                        </div>
                        <div class="col-2"><a href="" style="color: black;">${RecibidosLocal[i].emisor} ${i}</a></div>
                        <div class="col-3"><a href="" style="color: black;">${RecibidosLocal[i].asunto}</a></div>
                        <div class="col-4"> - ${mensajeRecortado}</div>
                        <div class="col-2">${RecibidosLocal[i].hora} <button type="button" onclick="ConvertirDelete(${i})" class="btn Redactar_msg_s3 col-1"><i class="fa fa-trash" aria-hidden="true"></i></button></div>
                    </div>
                `));
            };
            if(RecibidosLocal[i].destacado == false && RecibidosLocal[i].leido == true){
                $("#StyleDivsContend").append($(`
                    <div class="MSGsContent">
                        <div class="col-1" style="display: flex;">
                            <button type="button" onclick="ConvertirDestacado(${i})" class="btn Redactar_msg_s1 col-6"><i class="fa fa-star" aria-hidden="true"></i></button>
                            <button type="button" onclick="ConvertirSpam(${i})" class="btn Redactar_msg_s2 col-6"><i class="fa fa-exclamation-triangle" aria-hidden="true"></i></button>
                        </div>
                        <div class="col-2"><a href="" style="color: black; font-weight: 700;">${RecibidosLocal[i].emisor} ${i}</a></div>
                        <div class="col-3"><a href="" style="color: black; font-weight: 700;">${RecibidosLocal[i].asunto}</a></div>
                        <div class="col-4"> - ${mensajeRecortado}</div>
                        <div class="col-2">${RecibidosLocal[i].hora} <button type="button" onclick="ConvertirDelete(${i})" class="btn Redactar_msg_s3 col-1"><i class="fa fa-trash" aria-hidden="true"></i></button></div>
                    </div>
                `));
            };
            if(RecibidosLocal[i].destacado == true && RecibidosLocal[i].leido == true){
                $("#StyleDivsContend").append($(`
                    <div class="MSGsContent">
                        <div class="col-1" style="display: flex;">
                            <button type="button" onclick="ConvertirDestacado(${i})" class="btn Redactar_msg_s1 col-6" style="color: #FBBC05;"><i class="fa fa-star" aria-hidden="true"></i></button>
                            <button type="button" onclick="ConvertirSpam(${i})" class="btn Redactar_msg_s2 col-6"><i class="fa fa-exclamation-triangle" aria-hidden="true"></i></button>
                        </div>
                        <div class="col-2"><a href="" style="color: black; font-weight: 700;">${RecibidosLocal[i].emisor} ${i}</a></div>
                        <div class="col-3"><a href="" style="color: black; font-weight: 700;">${RecibidosLocal[i].asunto}</a></div>
                        <div class="col-4"> - ${mensajeRecortado}</div>
                        <div class="col-2">${RecibidosLocal[i].hora} <button type="button" onclick="ConvertirDelete(${i})" class="btn Redactar_msg_s3 col-1"><i class="fa fa-trash" aria-hidden="true"></i></button></div>
                    </div>
                `));
            };
        };
        };
    };
    if(X==2){
        for(var i=0;i<EnviadosLocal.length;i++){
            mensajeRecortado = EnviadosLocal[i].mensaje.substring(0,20);
            $("#StyleDivsContend").append($(`
                <div class="MSGsContent">
                    <div class="col-2"><a href="" style="color: black;">${EnviadosLocal[i].receptor}</a></div>
                    <div class="col-2"><a href="" style="color: black;">${EnviadosLocal[i].emailReceptor}</a></div>
                    <div class="col-3"><a href="" style="color: black;">${EnviadosLocal[i].asunto}</a></div>
                    <div class="col-3"> - ${mensajeRecortado}</div>
                    <div class="col-2">${EnviadosLocal[i].hora} <button type="button" onclick="ConvertirDeleteEnviados(${i})" class="btn Redactar_msg_s3 col-1"><i class="fa fa-trash" aria-hidden="true"></i></button></div>
                </div>
            `));
        };
    };
    if(X==3){
        for(var i=0;i<RecibidosLocal.length;i++){
        mensajeRecortado = RecibidosLocal[i].mensaje.substring(0,20);
        if(RecibidosLocal[i].destacado == true){
            if(RecibidosLocal[i].spam == false && RecibidosLocal[i].leido == false){
                $("#StyleDivsContend").append($(`
                    <div class="MSGsContent">
                        <div class="col-1" style="display: flex;">
                            <button type="button" onclick="ConvertirDestacado(${i})" class="btn Redactar_msg_s1 col-6" style="color: #FBBC05;"><i class="fa fa-star" aria-hidden="true"></i></button>
                            <button type="button" onclick="ConvertirSpam(${i})" class="btn Redactar_msg_s2 col-6"><i class="fa fa-exclamation-triangle" aria-hidden="true"></i></button>
                        </div>
                        <div class="col-2"><a href="" style="color: black;">${RecibidosLocal[i].emisor} ${i}</a></div>
                        <div class="col-3"><a href="" style="color: black;">${RecibidosLocal[i].asunto}</a></div>
                        <div class="col-4"> - ${mensajeRecortado}</div>
                        <div class="col-2">${RecibidosLocal[i].hora} <button type="button" onclick="ConvertirDelete(${i})" class="btn Redactar_msg_s3 col-1"><i class="fa fa-trash" aria-hidden="true"></i></button></div>
                    </div>
                `));
            };
            if(RecibidosLocal[i].spam == true && RecibidosLocal[i].leido == false){
                $("#StyleDivsContend").append($(`
                    <div class="MSGsContent">
                        <div class="col-1" style="display: flex;">
                            <button type="button" onclick="ConvertirDestacado(${i})" class="btn Redactar_msg_s1 col-6" style="color: #FBBC05;"><i class="fa fa-star" aria-hidden="true"></i></button>
                            <button type="button" onclick="ConvertirSpam(${i})" class="btn Redactar_msg_s2 col-6"><i class="fa fa-exclamation-triangle" aria-hidden="true"></i></button>
                        </div>
                        <div class="col-2"><a href="" style="color: black;">${RecibidosLocal[i].emisor} ${i}</a></div>
                        <div class="col-3"><a href="" style="color: black;">${RecibidosLocal[i].asunto}</a></div>
                        <div class="col-4"> - ${mensajeRecortado}</div>
                        <div class="col-2">${RecibidosLocal[i].hora} <button type="button" onclick="ConvertirDelete(${i})" class="btn Redactar_msg_s3 col-1"><i class="fa fa-trash" aria-hidden="true"></i></button></div>
                    </div>
                `));
            };
            if(RecibidosLocal[i].spam == false && RecibidosLocal[i].leido == true){
                $("#StyleDivsContend").append($(`
                    <div class="MSGsContent">
                        <div class="col-1" style="display: flex;">
                            <button type="button" onclick="ConvertirDestacado(${i})" class="btn Redactar_msg_s1 col-6" style="color: #FBBC05;"><i class="fa fa-star" aria-hidden="true"></i></button>
                            <button type="button" onclick="ConvertirSpam(${i})" class="btn Redactar_msg_s2 col-6" style="color: #060ae7"><i class="fa fa-exclamation-triangle" aria-hidden="true"></i></button>
                        </div>
                        <div class="col-2"><a href="" style="color: black; font-weight: 700;">${RecibidosLocal[i].emisor} ${i}</a></div>
                        <div class="col-3"><a href="" style="color: black; font-weight: 700;">${RecibidosLocal[i].asunto}</a></div>
                        <div class="col-4"> - ${mensajeRecortado}</div>
                        <div class="col-2">${RecibidosLocal[i].hora} <button type="button" onclick="ConvertirDelete(${i})" class="btn Redactar_msg_s3 col-1"><i class="fa fa-trash" aria-hidden="true"></i></button></div>
                    </div>
                `));
            };
            if(RecibidosLocal[i].spam == true && RecibidosLocal[i].leido == true){
                $("#StyleDivsContend").append($(`
                    <div class="MSGsContent">
                        <div class="col-1" style="display: flex;">
                            <button type="button" onclick="ConvertirDestacado(${i})" class="btn Redactar_msg_s1 col-6" style="color: #FBBC05;"><i class="fa fa-star" aria-hidden="true"></i></button>
                            <button type="button" onclick="ConvertirSpam(${i})" class="btn Redactar_msg_s2 col-6" style="color: #060ae7"><i class="fa fa-exclamation-triangle" aria-hidden="true"></i></button>
                        </div>
                        <div class="col-2"><a href="" style="color: black; font-weight: 700;">${RecibidosLocal[i].emisor} ${i}</a></div>
                        <div class="col-3"><a href="" style="color: black; font-weight: 700;">${RecibidosLocal[i].asunto}</a></div>
                        <div class="col-4"> - ${mensajeRecortado}</div>
                        <div class="col-2">${RecibidosLocal[i].hora} <button type="button" onclick="ConvertirDelete(${i})" class="btn Redactar_msg_s3 col-1"><i class="fa fa-trash" aria-hidden="true"></i></button></div>
                    </div>
                `));
            };
        };
        };
    };
    if(X==4){
        for(var i=0;i<RecibidosLocal.length;i++){
        mensajeRecortado = RecibidosLocal[i].mensaje.substring(0,20);
        if(RecibidosLocal[i].spam == true){
            if(RecibidosLocal[i].destacado == false && RecibidosLocal[i].leido == false){
                $("#StyleDivsContend").append($(`
                    <div class="MSGsContent">
                        <div class="col-1" style="display: flex;">
                            <button type="button" onclick="ConvertirDestacado(${i})" class="btn Redactar_msg_s1 col-6"><i class="fa fa-star" aria-hidden="true"></i></button>
                            <button type="button" onclick="ConvertirSpam(${i})" class="btn Redactar_msg_s2 col-6" style="color: #060ae7"><i class="fa fa-exclamation-triangle" aria-hidden="true"></i></button>
                        </div>
                        <div class="col-2"><a href="" style="color: black;">${RecibidosLocal[i].emisor} ${i}</a></div>
                        <div class="col-3"><a href="" style="color: black;">${RecibidosLocal[i].asunto}</a></div>
                        <div class="col-4"> - ${mensajeRecortado}</div>
                        <div class="col-2">${RecibidosLocal[i].hora} <button type="button" onclick="ConvertirDelete(${i})" class="btn Redactar_msg_s3 col-1"><i class="fa fa-trash" aria-hidden="true"></i></button></div>
                    </div>
                `));
            };
            if(RecibidosLocal[i].destacado == true && RecibidosLocal[i].leido == false){
                $("#StyleDivsContend").append($(`
                    <div class="MSGsContent">
                        <div class="col-1" style="display: flex;">
                            <button type="button" onclick="ConvertirDestacado(${i})" class="btn Redactar_msg_s1 col-6" style="color: #FBBC05;"><i class="fa fa-star" aria-hidden="true"></i></button>
                            <button type="button" onclick="ConvertirSpam(${i})" class="btn Redactar_msg_s2 col-6" style="color: #060ae7"><i class="fa fa-exclamation-triangle" aria-hidden="true"></i></button>
                        </div>
                        <div class="col-2"><a href="" style="color: black;">${RecibidosLocal[i].emisor} ${i}</a></div>
                        <div class="col-3"><a href="" style="color: black;">${RecibidosLocal[i].asunto}</a></div>
                        <div class="col-4"> - ${mensajeRecortado}</div>
                        <div class="col-2">${RecibidosLocal[i].hora} <button type="button" onclick="ConvertirDelete(${i})" class="btn Redactar_msg_s3 col-1"><i class="fa fa-trash" aria-hidden="true"></i></button></div>
                    </div>
                `));
            };
            if(RecibidosLocal[i].destacado == false && RecibidosLocal[i].leido == true){
                $("#StyleDivsContend").append($(`
                    <div class="MSGsContent">
                        <div class="col-1" style="display: flex;">
                            <button type="button" onclick="ConvertirDestacado(${i})" class="btn Redactar_msg_s1 col-6"><i class="fa fa-star" aria-hidden="true"></i></button>
                            <button type="button" onclick="ConvertirSpam(${i})" class="btn Redactar_msg_s2 col-6" style="color: #060ae7"><i class="fa fa-exclamation-triangle" aria-hidden="true"></i></button>
                        </div>
                        <div class="col-2"><a href="" style="color: black; font-weight: 700;">${RecibidosLocal[i].emisor} ${i}</a></div>
                        <div class="col-3"><a href="" style="color: black; font-weight: 700;">${RecibidosLocal[i].asunto}</a></div>
                        <div class="col-4"> - ${mensajeRecortado}</div>
                        <div class="col-2">${RecibidosLocal[i].hora} <button type="button" onclick="ConvertirDelete(${i})" class="btn Redactar_msg_s3 col-1"><i class="fa fa-trash" aria-hidden="true"></i></button></div>
                    </div>
                `));
            };
            if(RecibidosLocal[i].destacado == true && RecibidosLocal[i].leido == true){
                $("#StyleDivsContend").append($(`
                    <div class="MSGsContent">
                        <div class="col-1" style="display: flex;">
                            <button type="button" onclick="ConvertirDestacado(${i})" class="btn Redactar_msg_s1 col-6" style="color: #FBBC05;"><i class="fa fa-star" aria-hidden="true"></i></button>
                            <button type="button" onclick="ConvertirSpam(${i})" class="btn Redactar_msg_s2 col-6" style="color: #060ae7"><i class="fa fa-exclamation-triangle" aria-hidden="true"></i></button>
                        </div>
                        <div class="col-2"><a href="" style="color: black; font-weight: 700;">${RecibidosLocal[i].emisor} ${i}</a></div>
                        <div class="col-3"><a href="" style="color: black; font-weight: 700;">${RecibidosLocal[i].asunto}</a></div>
                        <div class="col-4"> - ${mensajeRecortado}</div>
                        <div class="col-2">${RecibidosLocal[i].hora} <button type="button" onclick="ConvertirDelete(${i})" class="btn Redactar_msg_s3 col-1"><i class="fa fa-trash" aria-hidden="true"></i></button></div>
                    </div>
                `));
            };
        };
        };
    };
    if(X==5){
        for(var i=0;i<papeleraLocal.length;i++){
        mensajeRecortado = papeleraLocal[i].mensaje.substring(0,20);
        $("#StyleDivsContend").append($(`
                    <div class="MSGsContent">
                        <div class="col-2"><a href="" style="color: black;">${papeleraLocal[i].emisor} ${i}</a></div>
                        <div class="col-3"><a href="" style="color: black;">${papeleraLocal[i].asunto}</a></div>
                        <div class="col-4"> - ${mensajeRecortado}</div>
                        <div class="col-2">${papeleraLocal[i].hora}</div>
                    </div>
                `));
        };
    };
}

function ConvertirDestacado(X){

}
function ConvertirSpam(X){
    var RecibidosLocal = JSON.parse(localStorage.getItem("recibidos"));
    let recibido ={};
    recibidos =[];
    for(var i=0;i<RecibidosLocal.length;i++){
        if(i==X){
            console.log("entro");
            recibido = {
                emisor:RecibidosLocal[i].emisor,
                correoEmisor:RecibidosLocal[i].correoEmisor,
                asunto:RecibidosLocal[i].asunto,
                mensaje:RecibidosLocal[i].mensaje,
                hora:RecibidosLocal[i].hora,
                leido:RecibidosLocal[i].leido,
                destacado:RecibidosLocal[i].destacado,
                spam:true
            };
        recibidos.push(recibido);
        }else{
            recibido = {
                emisor:RecibidosLocal[i].emisor,
                correoEmisor:RecibidosLocal[i].correoEmisor,
                asunto:RecibidosLocal[i].asunto,
                mensaje:RecibidosLocal[i].mensaje,
                hora:RecibidosLocal[i].hora,
                leido:RecibidosLocal[i].leido,
                destacado:RecibidosLocal[i].destacado,
                spam:RecibidosLocal[i].spam
            };
            recibidos.push(recibido);
        };
    }
    localStorage.setItem("recibidos",JSON.stringify(recibidos));
    DisplayContCentral(1);
}
function ConvertirDelete(X){
    var RecibidosLocal = JSON.parse(localStorage.getItem("recibidos"));
    let papeleras = {
        emisor: RecibidosLocal[X].emisor,
        correoEmisor: RecibidosLocal[X].correoEmisor,
        asunto: RecibidosLocal[X].asunto,
        mensaje: RecibidosLocal[X].mensaje,
        hora: RecibidosLocal[X].hora,
        leido: RecibidosLocal[X].leido,
        destacado: RecibidosLocal[X].destacado,
        spam: RecibidosLocal[X].spam
    };
    papelera.push(papeleras);
    localStorage.setItem("papelera",JSON.stringify(papelera));
    recibidos =[];
    var RecibidosLocal = JSON.parse(localStorage.getItem("recibidos"));
    for(var i=0;i<RecibidosLocal.length;i++){
        if(i!=X){
            let recibido = {
                emisor:RecibidosLocal[i].emisor,
                correoEmisor:RecibidosLocal[i].correoEmisor,
                asunto:RecibidosLocal[i].asunto,
                mensaje:RecibidosLocal[i].mensaje,
                hora:RecibidosLocal[i].hora,
                leido:RecibidosLocal[i].leido,
                destacado:RecibidosLocal[i].destacado,
                spam:RecibidosLocal[i].spam
            };
        recibidos.push(recibido);
        };
    }
    localStorage.setItem("recibidos",JSON.stringify(recibidos));
    DisplayContCentral(1);
}
function ConvertirDeleteEnviados(X){
    console.log("elimino la instancia enviados",X);
    enviados = [];
    var EnviadosLocal = JSON.parse(localStorage.getItem("enviados"));
    for(var i=0;i<EnviadosLocal.length;i++){
        if(i!=X){
            let enviado = {
                receptor: EnviadosLocal[i].receptor,
                emailReceptor: EnviadosLocal[i].emailReceptor,
                asunto: EnviadosLocal[i].asunto,
                mensaje: EnviadosLocal[i].mensaje,
                hora: EnviadosLocal[i].hora
               };
            enviados.push(enviado);
        };
    }
    localStorage.setItem("enviados",JSON.stringify(enviados));
    DisplayContCentral(2);
}
//
function colorLateral(X){
    for(var i=1;i<7;i++){
        if(i==X){
            styleButton = document.getElementById('IDButtonLateral'+i);
            styleButton.style.color = "#E3645C";
            styleButton.style.backgroundColor = "#fce8e6";
        }else{
            styleButton = document.getElementById('IDButtonLateral'+i);
            styleButton.style.color = "#000000";
            styleButton.style.backgroundColor = "#FFFFFF";
        }

    };

}