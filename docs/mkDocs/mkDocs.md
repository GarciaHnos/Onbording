Sintaxis básica de Markdown
Aprende a usar la sintaxis básica de Markdown

La sintaxis básica de Markdown es aquella que fue definida originalmente por John Gruber, el creador de Markdown. La gran mayoría de la aplicaciones que soportan Markdown son compatibles con todos los elementos de esta sintaxis. Aún así, puede que existan pequeñas variaciones según el procesador de texto que utilices, pero serán minoritarias.

A continuación vamos a detallar cuáles son los diferente selementos de la sintaxis básica de Markdown, de modo que puedas comenzar a crear documentos con este formato.

Párrafos
Para crear un nuevo párrafo en Markdown basta con que dejes una línea en blanco entre una o más líneas de texto, tal y como ves en este ejemplo:

Este es un párrafo.

Y esto es otro párrafo.
Cuando se procese el documento Markdown y exista una línea en blanco entre dos bloque de texto, se agregarán las etiquetas <p> y </p> al principio y al final de cada uno de los bloques de texto.

A continuación puedes ver el código Markdown que crea un nuevo párrafo, su equivalencia en HTML y su representación final:

Markdown	HTML	Resultado
Esto es un párrafo
 
Y esto es otro párrafo
<p>Esto es un párrafo</p>
 
<p>Y esto es otro párrafo</p>
Esto es un párrafo

Y esto es otro párrafo

Debes tener en cuenta una única recomendaicón, y es que no debes agregar sangrías o espacios a los párrafos al inicio de los mismos salvo que los párrafos estén en una lista:

✅ Recomendado	❌ No recomendado
Este párrafo no contiene ni espacios ni sangrías.
 
De este modo se alineará a la izquierda.
    Agregar espacios el inicio del párrafo
 
  Provocará problemas de formato.
Encabezados
Los encabezados se crean usando el carácter sostenido # delante de la oración que quieras que se formatee como un encabezado. Los encabezados pueden ser de diferentes niveles, organizándose jerárquicamente. Para crear encabezados de diferentes niveles debes agregar tantos símbolos # seguidos como el nivel del encabezado.

Por ejemplo, los encabezados de primer nivel se corresponden con la etiqueta <h1> de HTML y solamente necesitarán un símbolo de sostenido #:

# Esto es un encabezado <h1> de primer nivel
Los encabezados de segundo nivel se corresponden con la etiqueta <h2> de HTML y necesitarán dos símbolos de sostenido ##:

## Esto es un encabezado <h2> de segundo nivel
Y los encabezados de tercer nivel se corresponden con la etiqueta <h3> de HTML y necesitarán tres símbolos de sostenido ###:

### Esto es un encabezado <h3> de tercer nivel
Y así sucesivamente. A continuación puedes ver el código Markdown de cada nivel de encabezado, su versión equivalente en HTML y su representación final:

Markdown	HTML	Resultado
# Encabezado nivel 1
<h1>Encabezado nivel 1</h1>
Encabezado nivel 1
## Encabezado nivel 2
<h2>Encabezado nivel 2</h2>
Encabezado nivel 2
### Encabezado nivel 3
<h3>Encabezado nivel 3</h3>
Encabezado nivel 3
#### Encabezado nivel 4
<h4>Encabezado nivel 4</h4>
Encabezado nivel 4
##### Encabezado nivel 5
<h5>Encabezado nivel 5</h5>
Encabezado nivel 5
###### Encabezado nivel 6
<h6>Encabezado nivel 6</h6>
Encabezado nivel 6
También existe una sintaxis alternativa para los encabezados que consiste en agregar un número de caracteres = equivalente al número de caracteres del encabezado de la línea superior. Agregando caracteres = crearás encabezados de nivel 1. Para crear encabezados de nivel 2 tendrás que agregar caracteres - en su lugar:

Markdown	HTML	Resultado
Encabezado nivel 1
==================
<h1>Encabezado nivel 1</h1>
Encabezado nivel 1
Encabezado nivel 2
------------------
<h2>Encabezado nivel 2</h2>
Encabezado nivel 2
Según la aplicación de Markdown que utilices, puede ser necesario agregar un espacio después del conjunto de símbolos # para que el encabezado se marque correctamente. Por compatibilidad, siempre es recomendable agregar un espacio entre los símbolos # y el texto del encabezado:

✅ Recomendado	❌ No recomendado
# Encabezado
#Encabezado
Saltos de línea
Lo más habitual es agegar párrafos en lugar de saltos de línea, de modo que el texto se adapte al contenedor en el que está. Sin embargo, en ocasiones es preferible romper el estilo de escritura por defecto y comenzar una nueva línea.

Para agregar un salto de línea con markdown basta con que dejes dos o más espacios en blanco al final de la línea y luego pulses INTRO:

Esta es una línea.  
Y esta es otra línea.
La sintaxis equivalente al salto de línea en HTML es la etiqueta <br>. A continuación puedes ver el código Markdown que crea una nueva línea, su equivalencia en HTML y su representación final:

Markdown	HTML	Resultado
Esta es una línea.  
Y esta es ota línea.
<p>Esta es una línea.<br>
Y esta es otra línea.</p>
Esta es una línea.
Y esta es otra línea.

La sintaxis de los dos o más espacios al final de cada línea para crear un salto de línea funcionará con casi cualquier procesador de texto Markdown. Sin embargo, a la hora de editar el texto resulta complicado percibir los espacios en la mayoría de los editores. De hecho, es fácil agregarlos sin querer al final de las oraciones.

Afortunadamente existen alternativas a los dos espacios, ya que también podrás usar la etiqueta HTML <br> para agregar un salto de línea. Esta téncica también tiene una gran compatibilidad con la mayor parte de los editores Markdown:

Markdown	HTML	Resultado
Esta es una línea.<br>
Y esta es ota línea.
<p>Esta es una línea.<br>
Y esta es otra línea.</p>
Esta es una línea.
Y esta es otra línea.

Además, la mayor parte de los editores Markdown también te permitirán crear una nueva línea pulsando INTRO, sin la necesidad de agregar espacios en blanco, aunque esta técnica no está soportada oficialmente,

Todavía exiten otros métodos mediante los cuales también podrás agregar saltos de línea. Por ejemplo, puedes usar el carácter \ al final de una línea para saltar a la línea siguiente, aunque solamente funcionará con lenguajes como CommonMark u otras variantes de Markdown, por lo que no todas las aplicaciones Markdown soportan este método.

Siempre es preferible usar la sintaxis que tenga mayor compatibilidad:

✅ Recomendado	❌ No recomendado
Línea con dos espacios al final.  
Esta es una nueva línea.
Línea con una barra invertida an final.\
Esta es una nueva línea.
Línea con la etiqueta HTML.<br>  
Esta es una nueva línea.
Línea pulsando INTRO al final.
Esta es una nueva línea.
Líneas horizontales
Con Markdown también podrás agregar líneas horizontales, que resultan útiles para separar el contenido o las secciones de un documento.

Para crear una línea horizontal basta con que agregues tres o más asteriscos seguidos, tres o más guiones seguidos o tres o más guiones bajos seguidos:

***
---
___
Para que la línea horizontal se represente, los símbolos deben estar solos en la línea, sin otros caracteres ni espacios a la izquierda o a la derecha de los mismos.

En la siguiente tabla puedes ver el código Markdown de cada una de las tres técnicas, su equivalencia en HTML y su representación final:

Markdown	HTML	Resultado
***
<hr>
---
<hr>
___
<hr>
Como recomendación, por temas de compatibiliad, es recomenadable que dejes una línea en blanco tanto antes como después de la línea horizontal:

✅ Recomendado	❌ No recomendado
Una línea cualquiera.
 
***
 
Otra línea cualquiera.
Una línea cualquiera.
***
Otra línea cualquiera.
Una línea cualquiera.
 
---
 
Otra línea cualquiera.
Una línea cualquiera.
---
Otra línea cualquiera.
Una línea cualquiera.
 
___
 
Otra línea cualquiera.
Una línea cualquiera.
___
Otra línea cualquiera.
Formato de texto
A continuación vamos a ver como formatear el texto en negrita, en cursiva o aplicando ambos formatos a la vez.

Negrita
Para agregar texto resaltado en negrita tendrás que usar dos asteriscos ** o dos guiones bajos __ al principio y al final de lo oración que quieres resaltar. En caso de que quieras resaltar un texto que está en medio de una palabra, tedrás que agregar dos asteriscos ** o dos guiones bajos __, sin espacios, antes y después de las letras deseadas:

Esto es un **texto en negrita**.
Esto es un texto parcialmente en ne**gri**ta.

Esto es un __texto en negrita__.
Esto es un texto parcialmente en ne__gri__ta.
A continuación puedes ver el código Markdown de las diferentes opciones que te permitirán resaltar un texto en negrita, su equivalencia en HTML y su representación final:

Markdown	HTML	Resultado
Texto en **negrita**.
Texto en <strong>negrita</strong>.
Texto en negrita.
Texto en __negrita__.
Texto en <strong>negrita</strong>.
Texto en negrita.
Texto en **neg**rita.
Texto en <strong>neg</strong>rita.
Texto en negrita.
Texto en __neg__rita.
Texto en <strong>neg</strong>rita.
Texto en negrita.
A pesar de que, como ya hemos visto, también es posible usar guiones bajos en medio de una palabra para resaltar un texto, no existe un estándar claro que defina esta sintaxis, por lo que en este caso, siempre será preferible usar dos asteriscos:

✅ Recomendado	❌ No recomendado
Texto en ne**gri**ta.
Texto en ne__gri__ta.
Cursiva
Para agregar texto en cursiva debes usar un solo asterisco * o un solo guión bajo _ tanto al inicio como al final de lo oración que quieres marcar como cursiva. Si quieres poner en cursiva ciertas letras que estén en la mitad de una palabra, deberás agregar un asterisco * o un guión bajo _, sin espacios, al comienzo y al final de las letras deseadas:

Esto es un *texto en cursiva*.
Esto es un texto parcialmente en cu*rsi*va.

Esto es un _texto en cursiva_.
Esto es un texto parcialmente en cu_rsi_va.
En la tabla que ves a continuación puedes ver las diferentes opciones mediante las cuales puedes marcar un texto en cursiva, su equivalencia en HTML y su representación final:

Markdown	HTML	Resultado
Texto en *cursiva*.
Texto en <em>cursiva</em>.
Texto en cursiva.
Texto en _cursiva_.
Texto en <em>cursiva</em>.
Texto en cursiva.
Texto en *cur*siva.
Texto en <em>cur</em>siva.
Texto en cursiva.
Texto en _cur_siva.
Texto en <em>cur</em>siva.
Texto en cursiva.
Sin embargo, has de saber que el uso de guiones bajos puede ser problemático cuando resaltas ciertos caracteres en medio de una palabra, ya que no existen un estándar claro sobre este tema, siendo incompatible con varias herramientas. Por ello, siempre será preferible usar un asterisco:

✅ Recomendado	❌ No recomendado
Texto en cu**rsi**va.
Texto en cu__rsi__va.
Negrita cursiva
Para que en texto esté resaltado tanto en negrita como en cursiva al mismo tiempo debes agregar tres asteriscos *** o tres guiones bajos ___ antes y después de una palabra o de una frase. En caso de que el texto que quieres que esté en negrita y en cursiva esté en mitad de una palabra, deberás agregar también tres asteriscos *** o tres guiones bajos ___ sin espacios a ambos lados:

Esto es un ***texto en negrita y cursiva***.
Esto es un ___texto en negrita y cursiva___.
Esto es un texto parcialmente en ne***grita y cursi***va.
Esto es un texto parcialmente en ne___grita y cursi___va.
Además, también es posible combinar dos guiones bajos y un asterisco __* de apertura junto con un asterisco y dos guiones bajos *__ de cierre. Del mismo modo, también puedes usar dos asteriscos y un guión bajo **_ como apertura junto con un aguión bajo y dos asteriscos de ciere _**:

Esto es un __*texto en negrita y cursiva*__.
Esto es un **_texto en negrita y cursiva_**.
Esto es un texto parcialmente en ne__*grita y cursi*__va.
Esto es un texto parcialmente en ne**_grita y cursi_**va.
A continuación puedes ver ejemplos con todas la combinaciones anteriores, su equivalencia en HTML y su representación final:

Markdown	HTML	Resultado
Texto en
***negrita y cursiva***
Texto en
<strong><em>negrita y cursiva</em></strong>
Texto en negrita y cursiva
Texto en
___negrita y cursiva___
Texto en
<strong><em>negrita y cursiva</em></strong>
Texto en negrita y cursiva
Texto en
__*negrita y cursiva*__
Texto en
<strong><em>negrita y cursiva</em></strong>
Texto en negrita y cursiva
Texto en
*__negrita y cursiva__*
Texto en
<strong><em>negrita y cursiva</em></strong>
Texto en negrita y cursiva
A modo de recomendación, has de saber que no existe un estándar acerca de cómo se deben gestionar los tres guiones bajos cuando se agregan en medio de una palabra. Por ello, con el objetivo de crear documentos compatibles con el máximo número posible de editores o procesadores Markdown, será pregerible usar asteriscos en este caso:

✅ Recomendado	❌ No recomendado
Texto parcialmente en ne***grita y cursi***va.
Texto parcialmente en ne___grita y cursi___va.
Código
En markdown también puedes definir bloques de código, tanto en línea como en forma de bloque.

Código en línea
Para agregar código en línea en Markdown tendrás que usar comillas invertidas alrededor del texto que quieres que tengo formato de código:

Cambia de directorio con el comando `cd`
En caso de que el texto que quieres denotar como código ya incluya comillas invertidas, debes usar comillas invertidas dobles para escapar las comillas internas y que el código se muestre sin errores de formato:

``let str = `texto de la cadena`;``
Si el código comienza o finaliza con una comilla invertida, tendrás que dejar un espacio entre la comilla perteneciente al código y las que uses para abrir o cerrar el código en línea:

``let str = `texto de la cadena` ``
A continuación puedes ver el código Markdown de algunos ejemplos de código en línea con Markdown, junto con su equivalencia en HTML y su representación final:

Markdown	HTML	Resultado
Usa el comando `cd`
Usa el comando <code>cd</code>
Usa el comando cd
``let str = `texto`;``
<code>let str = `texto`;</code>
let str = `texto`;
Bloques de código
Si el código que quieres agregar consta de más de una línea, puedes agregar un bloque de código. para ello basta con que uses al menos cuatro espacios o una tabulación al inicio de la línea:

    let num = 5;
    num++;
La versión equivalente en HTML del bloque anterior será la siguiente:

<pre>
    <code>
        let num = 5;
        num++;
    </code>
</pre>
Y se renderizará como:

let num = 5; num++;
Sin embargo, los bloques de código han sido mejorados con la sintaxis extendida gracias, pudiendo agregar bloques de código sin usar espacios o tabulaciones. Además, mediante la sintaxis extendida también es posible aplicar resaltado de sintaxis al código según el lenguaje que se especifique.

Enlaces
Para crear un enlace en Markdown debes situar entre corchetes el texto que quieres enlazar, también conocido como anchor. Seguidamente, debes usar paréntesis para definir la URL a la que debe enlazar en texto del enlace:

Me gusta el editor [Editor Markdown](https://editormarkdown.com)
Es importante que no existan espacios entre el corchete de cierre ] del texto del enlace y el paréntesis de apertura ( del enlace.

Al igual que en HTML, también podrás enlazar a puntos ancla de la página actual o de otras páginas postponiendo el carácter sostenido # y el id de la sección a enlazar:

Enlace a la sección [Encabezados](#encabezados)
Además, también puedes crear enlaces rápidamente a una URL usando únicamente un enlace, sin necesidad de definir un texto de enlace o anchor. Para ello deberás escribir un símbolo mayor > seguido del enlace y un símbolo menor <:

<https://editormarkdown.com>
Del mismo modo, también podrás crear enlaces mailto a direcciones de email mediante la misma sintaxis que los enlaces a URLs:

<email@edulazaro.com>
En la siguiente tabla puedes ver el código Markdown de varios enlaces, su equivalencia en HTML y su representación final:

Markdown	HTML	Resultado
[Enlace](https://linux.com)	<a href="https://linux.com">Enlace</a>	Enlace
[Encabezados](#encabezados)	<a href="#encabezados">Encabezados</a>	Encabezados
<https://linux.com>	<a href="https://linux.com">https://linux.com</a>	https://linux.com
<me@email.com>	<a href="mailto:me@email.com">me@email.com</a>	me@email.com
No existe un estándar claro acerca de cómo se deben tratar los espacios en las URLs, por lo que, para garantizar la compatibilidad con el máximo número posible de aplicaciones Markdown, es recomendable codificar los espacios de los enlaces como %20:

✅ Recomendado	❌ No recomendado
[Enlace](https://dom.tld/una%20pagina)
[Enlace](https://dom.tld/una pagina)
Título del enlace
También puedes agregar un título al enlace, que aparecerá cuando pases el cursor por encima del mismo. Para agregar un título a un enlace debes añadirlo entre comillas dobles, justo después del enlace:

Me gusta el editor [Editor Markdown](https://editormarkdown.com "Mejor editor Markdown")
El código HTML equivalente a la sintaxis Markdown anterior será este:

Me gusta el editor <a href="https://editormarkdown.com" title="Mejor editor Markdown">Editor Markdown</a>
Y se renderizará como.

Me gusta el editor Editor Markdown
Formato del enlace
También puedes agregar formato al texto del enlace, pudiendo ponerlo en negrita, cursiva o negrita y cursiva. Para ello basta con que uses asteriscos * o guiones bajos _, según corresponda, alredor del enlace:

Enlace al **[Editor en negrita](https://editormarkdown.com)**.
Enlace al *[Editor en cursiva](https://editormarkdown.com)*.
Enlace al ***[Editor en negrita y cursiva](https://editormarkdown.com)***.
Además, también podrás marcar el enlace como si fuese código en línea agregando comillas invertidas al anchor del mismo:

Enlace al [`código`](https://neoguias.com).
A continuación puedes ver el código Markdown de varios enlaces a los que se les ha agregado algún formato, su equivalencia en HTML y su representación final:

Markdown	HTML	Resultado
**[Negrita](https://neoguias.com)**	<strong><a href="https://neoguias.com">Negrita</a></strong>	Negrita
**[Cursiva](https://neoguias.com)**	<em><a href="https://neoguias.com">Cursiva</a></em>	Cursiva
[`código`](https://neoguias.com)	<code><a href="https://neoguias.com">código</a></code>	código
Enlaces a Referencias
Los enlaces a referencias son un tipo especial de enlaces de Markdown que permiten mejorar la legibilidad de las URLs. Los enlaces a referencias constan de dos partes; un enlace a la referencia y la referencia en sí misma, localizada en cualquier parte del documento.

El enlace a la referencia consta a su vez de dos elementos que van entre corchetes, separados o no por un espacio. El primer elemento debe contener el texo que se mostrará como enlace o anchor, mientras que el segundo contendrá el identificador a la referencia que se debe enlazar:

Aprende a [programar con PHP][1]
Aprende a [programar con JavaScript][2]
Aprende a [programar con Python][2]
Tal y como ves, los enlaces a referencias no contienen un enlace en sí mismo, ya que enlazarán al enlace que definamos para las referencias 1 o 2 en cualquier parte del documento.

Para definir las referencias debemos escribir primero el identificador de la referencia entre corchetes, seguido de dos puntos : y del enlace al que apunta la referencia, que opcionalmente podrá estar rodeado de los símbolos < y >.

Opcionalmente, también puedes agregar el título de la referencia definido entre comillas simples, comillas dobles o paréntesis, que se corresponderá con el atributo title de HTML:

[1]: https://neoguias.com/php "Programa con PHP"
[2]: https://neoguias.com/javascript 'Programa con JavaScript'
[3]: <https://neoguias.com/python> (Programa con Python)
Las referencias podrán estar situadas en cualquier parte del documento. Lo más habiutal es colocarlas al final de la sección actual o al pie del documento.

A continuación puedes ver el código Markdown de varios enlaces a referencias, su equivalencia en HTML y su representación final:

Markdown	HTML	Resultado
Enlace a una [referencia][1]
...
[1]: https://dom.tld	Enlace a una
...
<a href="https://dom.tld">referencia</a>	Enlace a una
referencia
Enlace a una [referencia][1]
...
[1]: <https://dom.tld> 'Título'	Enlace a una
...
<a title="Título" href="https://dom.tld">referencia</a>	Enlace a una
referencia
Enlace a una [referencia][1]
...
[1]: (https://dom.tld) "Título"	Enlace a una
...
<a title="Título" href="https://dom.tld">referencia</a>	Enlace a una
referencia
Imágenes
Para agregar imágenes con Markdown debes agregar un signo de exclamación ! seguido del texto alternativo o alt de la imagen entre corchetes y de la URL de la imagen entre paréntesis:

![Imagen de unas nubes](/img/tutorial/imagen-markdown.webp)
La reprensentación HTML de la imagen será esta:

<img src="/img/tutorial/imagen-markdown.webp" alt="Imagen de unas nubes">
La imagen se renderizará así:

Imagen de unas nubes

Título de la imagen
Es posible agregar un título a la imagen, que se correpsonderá con el atributo HTML title. Para ello, basta con que agregues el título del enlace entre comillas después del enlace, en el interior de los paréntesis:

![Imagen de unas nubes](/img/tutorial/imagen-markdown.webp "Título del enlace")
La reprensentación HTML de la imagen será esta:

<img src="/img/tutorial/imagen-markdown.webp" alt="Imagen de unas nubes"  title="Título del enlace">
La imagen se renderizará así, con el título mostrándose cuando el cursor del ratón pase por encima:

Imagen de unas nubes

Imagen con enlace
Para agrear un enlace a una imagen, rodea todo el código Markdown de la imagen con corchetes y tras ellos, agrega el enlace entre paréntesis:

[![Imagen de unas nubes](/img/tutorial/imagen-markdown.webp)](/img/tutorial/imagen-markdown.webp)
La reprensentación HTML de la imagen es la siguiente:

<a href="/img/tutorial/imagen-markdown.webp">
    <img src="/img/tutorial/imagen-markdown.webp" alt="Imagen de unas nubes">
</a>
La imagen se renderizará así, pudiendo acceder al enlace haciendo clic sobre ella:

Imagen de unas nubes

Citas
Para agregar citas en Markdown debes agregar el signo mayor > justo delante de una línea o de un párrafo:

> Siento dejar este mundo sin probar pipas Facundo
El código HTML correspondiente a la cita es el siguiente:

<blockquote>
  <p>Siento dejar este mundo sin probar pipas Facundo</p>
</blockquote>
La cita se renderizará así una vez procesada:

Siento dejar este mundo sin probar pipas Facundo

También es posible agregar citas que ocupen varios párrafos. Para ello basta con agregar otra cita a contuación, separada por una líneaa en blanco que únicamente contenga el signo > al principio:

> Me encanta este tutorial de Markdown,
>
> sin duda es el más completo (Paulo Coelho)
El código HTML correspondiente a la cita de varios párrafos es el siguiente:

<blockquote>
  <p>Me encanta este tutorial de Markdown,</p>
  <p>sin duda es el más completo (Paulo Coelho)</p>
</blockquote>
La cita se renderizará así una vez procesada:

Me encanta este tutorial de Markdown,

sin duda es el más completo (Paulo Coelho)

Citas anidadas
Puedes anidar citas para incluir citas dentro de otras citas agregando más de un signo mayor > al inicio de la línea. El número de signos > que agregues definirá la profundidad de la cita:

> Ayer comí hijos
>
>> Y antes de ayer manzanas
El código HTML para las citas anidadas del ejemplo anterior es el siguiente:

<blockquote>
  <p>Ayer comí hijos</p>

  <blockquote>
    <p>Y antes de ayer manzanas</p>
  </blockquote>
</blockquote>
El grupo de citas anidadas se renderizará así una vez procesado:

Ayer comí hijos

Y antes de ayer manzanas

Citas compuestas
Las citas también pueden contener otros elementos Markdown, como encabezados, listas, enlaces o cualquier formato de texto:

> #### Esta es una cita de ejemplo!
>
> - Me he comprado la PS5
> - Y otro ordenador
>
>  *Estaré* forever **alone** pero `feliz`
El código HTML que se correspondería con la cita del ejemplo es el siguiente:

<blockquote>
  <h4>Esta es una cita de ejemplo!</h4>

  <ul>
    <li>Me he comprado la PS5</li>
    <li>Y otro ordenador</li>
  </ul>

  <p><em>Estaré</em> forever <strong>alone</strong> pero <code>feliz</code></p>
</blockquote>
Y la representación final sería esta:

Esta es una cita de ejemplo!
Me he comprado la PS5
Y otro ordenador
Estaré forever alone pero feliz

Listas
En Markdown puedes agregar tanto listas ordenadas como no ordenadas. Las listas no ordenadas contienen enlaces que siguen un orden secuencial, mientras que las no ordenadas contienen elementos ordenados arbitrariamente.

Listas ordenadas
Para agregar listas ordenadas en Markdown debes agregar un número seguido de un punto, un espacio y el elemento de la lista. La lista no debe estar ordenada numéricamente, pero debe comenzar por el número 1:

1. Primer elemento
2. Segundo elemento
3. Tercer elemento
Aunque agregues los índices en un orden diferente al secuencial, cuando se represente la lista, los índices comenzarán por el número 1 y crecerán en una unidad por cada elemento de la lista.

En la seguiente tabla puedes ver varios ejemplos válidos de listas ordenadas, su equivalencia en HTML y su representación final:

Markdown	HTML	Resultado
1. Primer elemento
2. Segundo elemento
3. Tercer elemento
<ol>
  <li>Primer elemento</li>
  <li>Segundo elemento</li>
  <li>Tercer elemento</li>
</ol>
Primer elemento
Segundo elemento
Tercer elemento
1. Primer elemento
8. Segundo elemento
1. Tercer elemento
<ol>
  <li>Primer elemento</li>
  <li>Segundo elemento</li>
  <li>Tercer elemento</li>
</ol>
Primer elemento
Segundo elemento
Tercer elemento
Según algunas de las especificaciones de Markdown como CommonMark, también es posible usar paréntesis ( como delimitadores del índice de las listas en lugar de usar un punto .. Sin embargo, no es algo recomendable, ya que no es una sintaxis compatible con todos los editores y aplicaciones Markdown, siendo preferible el uso de puntos:

✅ Recomendado	❌ No recomendado
1. Primer elemento
2. Segundo elemento
3. Tercer elemento
1) Primer elemento
2) Segundo elemento
3) Tercer elemento
Listas no ordenadas
Para agregar listas no ordenadas en Markdown debes agregar un guion -, un signo más + o un asterisco * delante de los elementos de la lista:

* Primer elemento
* Segundo elemento
* Tercer elemento
En la seguiente tabla puedes ver varios ejemplos válidos de listas no ordenadas, su equivalencia en HTML y su representación final:

Markdown	HTML	Resultado
* Primer elemento
* Segundo elemento
<ul>
  <li>Primer elemento</li>
  <li>Segundo elemento</li>
</ul>
Primer elemento
Segundo elemento
+ Primer elemento
+ Segundo elemento
<ul>
  <li>Primer elemento</li>
  <li>Segundo elemento</li>
</ul>
Primer elemento
Segundo elemento
- Primer elemento
- Segundo elemento
<ul>
  <li>Primer elemento</li>
  <li>Segundo elemento</li>
</ul>
Primer elemento
Segundo elemento
Es también posible mezclar los delimitadres que se anteponen a cada elemento de la lista. Sin embargo, no todas las aplicaciones son compatibles con estos patrones, por lo que siempre será mejor una el mismo delimitador en una misma lista:

✅ Recomendado	❌ No recomendado
* Primer elemento
* Segundo elemento
* Tercer elemento
* Primer elemento
+ Segundo elemento
- Tercer elemento
Anidación de listas
Puedes anidar las listas de diferentes tipos, incluyendo listas dentro de otras listas, ya sean odenadas o no ordenadas. Para ello, los elementos de la lista anidada tendrán que tener una sangría de al menos cuatro espacios o una tabulación:

1. Primer elemento
2. Segundo elemento
    * Segundo elemento
    * Segundo elemento
3. Tercer elemento
En tabla que ves a continuación puedes ver varios ejemplos válidos de listas anidadas:

Markdown	HTML	Resultado
1. Primer elemento
2. Segundo elemento
   1. Elemento 2 1
   2. Elemento 2 2
3. Tercer elemento
<ol>
  <li>Primer elemento</li>
  <li>Segundo elemento
    <ol>
      <li>Elemento 2 1</li>
      <li>Elemento 2 2</li>
    </ol>
  </li>
  <li>Tercer elemento</li>
</ol>
Primer elemento
Segundo elemento
Elemento 2 1
Elemento 2 2
Tercer elemento
1. Primer elemento
2. Segundo elemento
   * Elemento 2 a
   * Elemento 2 b
3. Tercer elemento
<ol>
  <li>Primer elemento</li>
  <li>Segundo elemento
    <ul>
      <li>Elemento 2 a</li>
      <li>Elemento 2 b</li>
    </ul>
  </li>
  <li>Tercer elemento</li>
</ol>
Primer elemento
Segundo elemento
Elemento 2 a
Elemento 2 b
Tercer elemento
1. Primer elemento
2. Segundo elemento
   * Elemento 2 a
   * Elemento 2 b
3. Tercer elemento
<ul>
  <li>Primer elemento</li>
  <li>Segundo elemento
    <ol>
      <li>Elemento 2 a</li>
      <li>Elemento 2 b</li>
    </ol>
  </li>
  <li>Tercer elemento</li>
</ul>
Primer elemento
Segundo elemento
Elemento 2 a
Elemento 2 b
Tercer elemento
Elementos en listas
Además de poder agregar listas dentro de otras listas, también es posible anidar otros elementos, como párrafos, citas, bloques de código o imágenes. Para ello debes agregar una línea en blanco y luego cuatro espacios o una tabulación antes del elemento.

Párrafos anidados
Para incluir un párrafo en el interior de un elemento de una lista:

* Primer elemento
* Segundo elemento

    Un párrafo
    
* Tercer elemento
La representación HTML del código Markdown sería esta:

<ul>
  <li>Primer elemento</li>
  <li>
    <p>Segundo elemento</p>
    <p>Un párrafo</p>
  </li>
  <li>Tercer elemento</li>
</ul>
Y este sería el resultado una vez renderizado:

Primer elemento
Segundo elemento

Un párrafo

Tercer elemento
Imágenes anidadas
También puedes incluir una imagen en un elemento de una lista. Para ello basta con que dejes una línea en blanco y añadas cuatro espacios o una tabulación antes del código Markdown de la imagen:

* Primer elemento
* Segundo elemento

    ![Imagen de unas nubes](/img/tutorial/imagen-markdown.webp)
    
* Tercer elemento
El código HTML equivalente al código Markdown anterior es este:

<ul>
  <li>Primer elemento</li>
  <li>
    <p>Segundo elemento</p>
    <p>
        <img src="/img/tutorial/imagen-markdown-miniatura.webp" alt="Imagen de unas nube">
    </p>
  </li>
  <li>Tercer elemento</li>
</ul>
Y la reprensentación final sería esta:

Primer elemento
Segundo elemento

Imagen de unas nube

Tercer elemento
Citas anidadas
Para incluir iua cita en el interior de un elememnto de una lista, basta con que dejes un espacio en blanco y que luego dejes cuatro espacios en blanco o una tabulación antes de la cita:

* Primer elemento
* Segundo elemento

    > Cita
    
* Tercer elemento
El código HTML equivalente al código Markdown anterior es este:

<ul>
    <li>Primer elemento</li>
    <li>
        <p>Segundo elemento</p>
        <blockquote>
            <p>Cita</p>
        </blockquote>
    </li>
    <li>
        Tercer elemento
    </li>
</ul>
Y la reprensentación final sería esta:

Primer elemento
Segundo elemento

Cita

Tercer elemento
Bloques de código anidados
Para agregar un bloque de código a un elemento de una lista debes dejar un espacio en blanco y luego debes agregar 8 espacios o dos tabulaciones antes del mismo:

* Primer elemento
* Segundo elemento

        let num = 5;  
        num++;
    
* Tercer elemento
El código HTML equivalente al código Markdown anterior es este:

<ul>
    <li>Primer elemento</li>
    <li>
        <p>Segundo elemento</p>
        <pre>
            <code>
                let num = 5;  
                num++;
            </code>
        </pre>
    </li>
    <li>
        Tercer elemento
    </li>
</ul>
Y la reprensentación final sería esta:

Primer elemento
Segundo elemento

let num = 5;
num++;
Tercer elemento
En caso de no querer agregar tantos espacios al principio, tendrías que usar los bloques de código de la sintaxis extendida.

Código HTML
Podrás añadir directamente código HTML a los documentos Markdown, ya que la mayor parte de los editores y procesadores Markdown soportan código HTML.

Sin embargo, siempre es recomendable consultar la referencia o el manual de las aplicaciones que utilices para comprobar si soportan o no código HTML. En algunos casos se soportarán ciertas etiquetas, pero no todas ellas.

Resulta muy habitual usar HTML para cambiar el color del texto o modificar los parámetros de una imagen.

En este ejemplo resaltamos un texto usando tanto Markdown como HTML:

Puedes resaltar un texto con **markdown** o con <strong>HTML</strong>
La versión HTML del código anterior será en todo caso la siguiente:

Puedes resaltar un texto con <strong>markdown<strong> o con <strong>HTML</strong>
El texto se representará tal que así:

Puedes resaltar un texto con **markdown** o con HTML
También puedes usar código HTML para crear tablas o muchos otros elementos siempre que estén soportados por la aplicación que utilices.

Cuando agregues código HTML organizado en varias líneas, debes dejar siempre una línea en blanco tanto antes como después del bloque de código HTML. Además, no debes dejar espacios ni sangrías al comiezo de las etiquetas, ya que podría dar lugar a errores de representación.

Además, no es posible usar la sintaxis Markdown en el interior de las etiquetas HTML:

✅ Correcto	❌ Incorrecto
**<em>markdown<em>**
<em>**HTML**</em>
Caracteres especiales
Los caracteres que usamos para dar formato a los documentos Markdown se consideran caracteres especiales, ya que cuando los textos son procesados, no se mostrarán por pantalla.

En caso de que quieras mostrar dichos caracteres por pantalla, tendrás que anteponer una barra invertida \ a los mismos:

* 2 \* 2 es igual a 4
* 3 \* 3 es igual a 9
La representación HTML de este código Markdown anterior sería la siguiente:

<ul>
    <li>2 * 2 es igual a 4</li>
    <li>3 * 3 es igual a 9</li>
</ul>
Cuando el bloque anterior se renderice, se mostrará lo siguiente por pantalla:

2 * 2 es igual a 4
3 * 3 es igual a 9
A continuación puedes encontrar la lista completa de caracteres espaciales de Markdown:

Carácter	Nombre
\	Barra invertida
#	Sostenido
*	Asterisco
_	Guión bajo
`	Comilla invertida
( )	Paréntesis
{ }	Llaves
[ ]	Corchetes
< >	Ángulos
+	Más
-	Menos
.	Punto
!	Exclamación
|	Tubería
Existen ciertas consideraciones especiales que debes tener en cuenta.

En caso de que quieras escapar la comilla invertida ` dentro de una línea de código, tendrás que usar dos comillas invertidas consecutivas tanto para abrir como para cerrar el bloque de código:

``let str = `texto de la cadena`;``
Si creas una tabla usando la sintaxis extendida de Markdown, podrás escapar el carácter tubería | usando la representación HTML del carácter, que es el código &#124;.