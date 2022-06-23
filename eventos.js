/**
 Eventos são ações disparadas pela interação dos usuários na página.
 É o correto manejo desses eventos que tornam as páginas interativas
 edinâmicas.

 Existem muitos eventos. Veja os mais utilizados:

 onclick -> Disparado quando recebe um click.
 ondblclick -> Disparado quando recebe clique duplo.
 onmouseout -> Disparado quando o mouse é movimentado para fora do elemento.
 onmouseover -> Disparado quando o mouse está sobre.
 onmousemove -> Disparado quando o mouse é movido no elemento.
 onmousedown -> Disparado quando o clique do botão foi pressionado.
 onmouseseup -> Disparado quando o clique do botão é liberado.
 onfocus -> Disparado quando o elemento recebe o foco. Válido para input,
 onchange -> Disparado quando existe uma mudança no conteudo. "Ao mudar".
 onblur -> Disparado quando o elemento perde o foco.
 onkeydown -> Disparado quando uma tecla é pressionada.
 onkeypress -> Disparado quando uma tecla é pressionada e solta.
 onkeyup -> Disparado quando uma tecla é solta sobre um elemento.
 onload -> Disparado quando a página terminou de carregar. Body.
 onresize -> Disparado quando há um redimencionamento da janela.

 */

 function eventoDblClick() {
    alert('Evento de clique duplo');
 }

 function viraVermelho() {
    let div = document.getElementById("teste");
    div.style.backgroundColor = "red";
 }

 function viraAzul() {
    let div = document.getElementById("teste");
    div.style.backgroundColor = "blue";
 }

 function adicionarTexto() {
    let p = document.getElementById("texto");
    p.append('O mouse moveu<br>');
 }

 function mudou() {
   console.log('mudou');
 }