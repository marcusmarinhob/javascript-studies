var d = new Date();

dias = ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"]
meses = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"]

console.log(d);
console.log(dias[d.getDay()]);
console.log(d.getDate() + " de " + meses[d.getMonth()] + " de " + d.getFullYear() )