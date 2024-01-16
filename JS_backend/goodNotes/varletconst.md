## Var

* Não precisamos declarar a variável area, isso acontece pois o node acaba fazendo essa função.

* No entanto, faz parte das boas práticas sempre declarar as variáveis. Além disso, **o var tem uma função especial que permite usá-la antes de ser declarada.**
 
 * Quando o **JavaScript** começa a ser executado, ele lê todo o programa, encontra todas as variáveis do tipo var e as carrega primeiro. Portanto, podemos começar a usá-las antes mesmo de declará-las. Essa é uma das vantagens da `var`.

 * No entanto, isso pode causar alguns problemas, afinal, podemos, por exemplo, usar o mesmo nome de variável em duas partes diferentes do código e isso pode causar consequências no código.

 ## Let

 * Quando uma variavel muda com as condicoes sempre deveremos declarar o `let` , **pois permite que a variavel seja utilizada apos a sua declaracao**

 * Exemplo:
~~~javascript
let forma = 'retângulo'
let altura = 5;
let comprimento = 7;
let area

if (forma === 'retângulo') {
    area = altura * comprimento;
} else {
    area = (altura * comprimento) / 2;
}

console.log(area)
~~~
>Retorna: 35

* Não é interessante termos uma variável cujo valor possa ser alterado nos blocos. Como o `var` não tem muitas regras, podemos acabar também reutilizando o nome dessa variável. Sendo assim, por segurança, é melhor mantermos o `let`.

* Fizemos uso do `let` porque ele consegue acessar o bloco de código, sendo sempre delimitado em **JavaScript** por chaves `{}`. Esse código é fechado exatamente para limitar o acesso e garantir que o processamento ocorra internamente

## Const

* Sempre que inicializamos uma constante, ela já precisa ter um valor. Ao contrário de `let` ou `var`, não é possível apenas criar e deixar sem valor nenhum atribuído.

* Além disso, sabemos que alteraremos o valor adiante. Portanto, ela não pode ser uma constante. Se vamos modificar o valor, não pode ser algo fixo.

~~~javascript
const forma = 'quadrado';
const altura = 5;
const comprimento = 7;
let area;

if (forma === 'quadrado') {
    area = altura comprimento;
} else {
    area = (altura comprimento) / 2;
}

console.log(area)
~~~
> Retorna = 35