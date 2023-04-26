
const select1 = document.getElementById('select1');
const select2 = document.getElementById('select2');

const btn = document.getElementById('btn');
btn.addEventListener('click', () => juntarPalavras());

const modal = document.getElementById('modal')

let lugarFrase = document.getElementById('frase');

function juntarPalavras() {
	const parte1 = select1.options[select1.selectedIndex].value;
	const parte2 = select2.options[select2.selectedIndex].value;
	const frase = parte1 + " " + parte2;
	modal.style.display = 'block';
	lugarFrase.innerHTML = `${frase}`;
}

const modalBtn = document.getElementById('modal-btn');
modalBtn.addEventListener('click', () => fecharModal())

function fecharModal() {
	modal.style.display = 'none';
}