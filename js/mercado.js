var nome="";
var senha="";
//tabela do E (AND) && - Tabela do OU (OR) ||
function logar(u,s){
    nome=u;
    senha=s; 
    if(nome=="teste" &&  senha=="123"){
        alert("Logado com Sucesso!");
        window.location.href = "mercado.html"; //Redirecionamento para a página home.html  
    }
    
    else if(nome=="teste" && senha!="123"){
        alert("Senha Incorreta");
    }

    else if(nome!="teste" && senha=="123"){
        alert("Usuário Incorreto");
    }

    else{
        alert("Login ou Senha incorretos");
    };
}

//Calculos dos produtos do mercado
var v1=0.0;
var q1=0.0;
var total1=0.0;
function subtotalP1(v,q) {
    v1=parseFloat(v);
    q1=parseFloat(q);
    
    total1=v1*q1; //metodo de subtotal do produto 1
    document.getElementById('subP1').value=total1.toFixed(2);

}
var v2=0.0;
var q2=0.0;
var total2=0.0;
function subtotalP2(v,q) {
    v2=parseFloat(v);
    q2=parseFloat(q);
    
    total2=v2*q2; //metodo de subtotal do produto 1
    document.getElementById('subP2').value=total2.toFixed(2);

}
var v3=0.0;
var q3=0.0;
var total3=0.0;
function subtotalP3(v,q) {
    v3=parseFloat(v);
    q3=parseFloat(q);
    
    total3=v3*q3; //metodo de subtotal do produto 1
    document.getElementById('subP3').value=total3.toFixed(2);

}
var v4=0.0;
var q4=0.0;
var total4=0.0;
function subtotalP4(v,q) {
    v4=parseFloat(v);
    q4=parseFloat(q);
    
    total4=v4*q4; //metodo de subtotal do produto 1
    document.getElementById('subP4').value=total4.toFixed(2);

}
var v5=0.0;
var q5=0.0;
var total5=0.0;
function subtotalP5(v,q) {
    v5=parseFloat(v);
    q5=parseFloat(q);
    
    total5=v5*q5; //metodo de subtotal do produto 1
    document.getElementById('subP5').value=total5.toFixed(2);

}
var v6=0.0;
var q6=0.0;
var total6=0.0;
function subtotalP6(v,q) {
    v6=parseFloat(v);
    q6=parseFloat(q);
    
    total6=v6*q6; //metodo de subtotal do produto 1
    document.getElementById('subP6').value=total6.toFixed(2);

}
var v7=0.0;
var q7=0.0;
var total7=0.0;
function subtotalP7(v,q) {
    v7=parseFloat(v);
    q7=parseFloat(q);
    
    total7=v7*q7; //metodo de subtotal do produto 1
    document.getElementById('subP7').value=total7.toFixed(2);

}
var v8=0.0;
var q8=0.0;
var total8=0.0;
function subtotalP8(v,q) {
    v8=parseFloat(v);
    q8=parseFloat(q);
    
    total8=v8*q8; //metodo de subtotal do produto 1
    document.getElementById('subP8').value=total8.toFixed(2);

}
var v9=0.0;
var q9=0.0;
var total9=0.0;
function subtotalP9(v,q) {
    v9=parseFloat(v);
    q9=parseFloat(q);
    
    total9=v9*q9; //metodo de subtotal do produto 1
    document.getElementById('subP9').value=total9.toFixed(2);

}
var v10=0.0;
var q10=0.0;
var total10=0.0;
function subtotalP10(v,q) {
    v10=parseFloat(v);
    q10=parseFloat(q);
    
    total10=v10*q10; //metodo de subtotal do produto 1
    document.getElementById('subP10').value=total10.toFixed(2);

}
var v11=0.0;
var q11=0.0;
var total11=0.0;
function subtotalP11(v,q) {
    v11=parseFloat(v);
    q11=parseFloat(q);
    
    total11=v11*q11; //metodo de subtotal do produto 1
    document.getElementById('subP11').value=total11.toFixed(2);

}
var v12=0.0;
var q12=0.0;
var total12=0.0;
function subtotalP12(v,q) {
    v12=parseFloat(v);
    q12=parseFloat(q);
    
    total12=v12*q12; //metodo de subtotal do produto 1
    document.getElementById('subP12').value=total12.toFixed(2);

}
var v13=0.0;
var q13=0.0;
var total13=0.0;
function subtotalP13(v,q) {
    v13=parseFloat(v);
    q13=parseFloat(q);
    
    total13=v13*q13; //metodo de subtotal do produto 1
    document.getElementById('subP13').value=total13.toFixed(2);

}
var v14=0.0;
var q14=0.0;
var total14=0.0;
function subtotalP14(v,q) {
    v14=parseFloat(v);
    q14=parseFloat(q);
    
    total14=v14*q14; //metodo de subtotal do produto 1
    document.getElementById('subP14').value=total14.toFixed(2);

}
var v15=0.0;
var q15=0.0;
var total15=0.0;
function subtotalP15(v,q) {
    v15=parseFloat(v);
    q15=parseFloat(q);
    
    total15=v15*q15; //metodo de subtotal do produto 1
    document.getElementById('subP15').value=total15.toFixed(2);

}
var v16=0.0;
var q16=0.0;
var total16=0.0;
function subtotalP16(v,q) {
    v16=parseFloat(v);
    q16=parseFloat(q);
    
    total16=v16*q16; //metodo de subtotal do produto 1
    document.getElementById('subP16').value=total16.toFixed(2);

}
var v17=0.0;
var q17=0.0;
var total17=0.0;
function subtotalP17(v,q) {
    v17=parseFloat(v);
    q17=parseFloat(q);
    
    total17=v17*q17; //metodo de subtotal do produto 1
    document.getElementById('subP17').value=total17.toFixed(2);

}
var v18=0.0;
var q18=0.0;
var total18=0.0;
function subtotalP18(v,q) {
    v18=parseFloat(v);
    q18=parseFloat(q);
    
    total18=v18*q18; //metodo de subtotal do produto 1
    document.getElementById('subP18').value=total18.toFixed(2);

}
var v19=0.0;
var q19=0.0;
var total19=0.0;
function subtotalP19(v,q) {
    v19=parseFloat(v);
    q19=parseFloat(q);
    
    total19=v19*q19; //metodo de subtotal do produto 1
    document.getElementById('subP19').value=total19.toFixed(2);

}
var v20=0.0;
var q20=0.0;
var total20=0.0;
function subtotalP20(v,q) {
    v20=parseFloat(v);
    q20=parseFloat(q);
    
    total20=v20*q20; //metodo de subtotal do produto 1
    document.getElementById('subP20').value=total20.toFixed(2);

}
var v21=0.0;
var q21=0.0;
var total21=0.0;
function subtotalP21(v,q) {
    v21=parseFloat(v);
    q21=parseFloat(q);
    
    total21=v21*q21; //metodo de subtotal do produto 1
    document.getElementById('subP21').value=total21.toFixed(2);

}
var v22=0.0;
var q22=0.0;
var total22=0.0;
function subtotalP22(v,q) {
    v22=parseFloat(v);
    q22=parseFloat(q);
    
    total22=v22*q22; //metodo de subtotal do produto 1
    document.getElementById('subP22').value=total22.toFixed(2);

}
var v23=0.0;
var q23=0.0;
var total23=0.0;
function subtotalP23(v,q) {
    v23=parseFloat(v);
    q23=parseFloat(q);
    
    total23=v23*q23; //metodo de subtotal do produto 1
    document.getElementById('subP23').value=total23.toFixed(2);

}
var v24=0.0;
var q24=0.0;
var total24=0.0;
function subtotalP24(v,q) {
    v24=parseFloat(v);
    q24=parseFloat(q);
    
    total24=v24*q24; //metodo de subtotal do produto 1
    document.getElementById('subP24').value=total24.toFixed(2);

}
var v25=0.0;
var q25=0.0;
var total25=0.0;
function subtotalP25(v,q) {
    v25=parseFloat(v);
    q25=parseFloat(q);
    
    total25=v25*q25; //metodo de subtotal do produto 1
    document.getElementById('subP25').value=total25.toFixed(2);

}
var v26=0.0;
var q26=0.0;
var total26=0.0;
function subtotalP26(v,q) {
    v26=parseFloat(v);
    q26=parseFloat(q);
    
    total26=v26*q26; //metodo de subtotal do produto 1
    document.getElementById('subP26').value=total26.toFixed(2);

}
function finalizarCompra(){
    var geral=total1+total2+total3+total4+total5+total6+total7+total8+total9+total10+total11+total12+total13+total14+total15+total16+total17+total18+total19+total20+total21+total22+total23+total24+total25+total26;
    document.getElementById('totalGeral').value=geral.toFixed(2);
}