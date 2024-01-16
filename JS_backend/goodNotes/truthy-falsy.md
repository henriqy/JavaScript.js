* Além dos valores true e false, que sempre são escritas com letra minuscula no **JavaScript**, existem outros valores que não são estritamente booleanos, mas podem se comportar como se fossem, como truthy ou falsy.

>No **JavaScript** o zero e o um fazem o papel de false e true respectivamente.

## Comparando 

### Zero - 0
* Queremos que o JavaScript compare o 0 e o false. Para isso, passamos `console.log(0 == false)`. Usamos dois sinais de igual, pois queremos comparar somente o valor.
    * Retorna = true

* Outro tipo de dado que o JavaScript considera como se fosse falso são as strings vazias. Então, na linha abaixo escrevemos `console.log("" == false)`.

    * Retorna = true

### Um - 1

* Se o número zero é considerado false, podemos considerar que o número um é tipo true. Para isso, escrevemos `console.log(1 == true)`. Ao rodarmos o código temos a confirmação true. Então o JavaScript considera o 1 como um valor tipo verdadeiro. 

    * Retorna = true

## null X undefined

* O `null` é um tipo de dado que representa vazio. Geralmente, quando inicializamos uma variável com `let minhaVar` e não atribuímos nenhum valor, ela é automaticamente atribuída pelo **JavaScript** o valor de `undefined`, ou seja, ela não foi definida, mas pode ser utilizada.

* Também podemos atribuir o `null`, passando let varNull = `null`, ou seja, vazio. Tanto o null quanto o `undefined` são similares e podem ser usados alternadamente sem problema nenhum.

~~~javascript
let minhaVar;
let varNull = null;

console.log(minhaVar) 
console.log(varNull)
~~~

* Repare que o primeiro resultado é `undefined`, onde `minhaVar`, a variável que inicializamos, não foi atribuído nenhum valor. O espaço para `minhaVar` está alocado na memória, mas não lhe foi atribuído qualquer valor, ou seja, é um valor `undefined`. Já na linha 19, a `let varNull`, atribuímos `null`, um tipo de dado, então o retorno foi `null`



