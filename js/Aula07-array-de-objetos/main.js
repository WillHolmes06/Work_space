const aluno = {
    nome: 'Ana', idade: 17, nota: 8, Ano: '2°B',
    nome01: 'Bruno', idade01: 16, nota01: 6, Ano01: '2°C',
    nome02: 'Verônica', idade02: 16, nota02: 9, Ano02: '2°C',
    nome03: 'Marta', idade03: 15, nota03: 5, Ano03: '3°C',
    nome04: 'Brenno', idade04: 19, nota04: 6, Ano04: '3°C',
    nome05: 'Maria', idade05: 14, nota05: 4, Ano05: '1°F'}

console.log(aluno);

console.log(aluno.nome01, aluno.idade01 + " anos", aluno.nota01, aluno.Ano01);

console.log(aluno.nota05);

console.log(JSON.stringify(aluno));