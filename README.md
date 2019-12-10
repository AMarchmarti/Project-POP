# Poyecto Pulpo
## Toni March Martí & Carlos Alhama Gil

<a name="top"></a>

# Index
+ [Introduccion](#Introduccion)
+ [Iniciacion del proyecto](#init).
+ [Arquitectura y Tecnologías del proyecto](#ayt)
+ [Despliegue del proyecto](#desp)
+ [Devolución del diario](#serv)
+ [Funcionamiento del proyecto](#func)
+ [Diseño de la interfaz](#diss)
+ [Metodología de trabajo](#met)
+ [Conclusiones](#conc)



# Introducción
Vamos a realizar un poyecto web para observar el comportamiento de Mariano. Para eso, hemos anotado en un diario los eventos 
que ha ido haciendo durante su día a día y si se convertía en pulpo. Pero antes de empezar a explicar las características del 
os introduciremos un poco más en la história de este pobre hombre.

## Historia
De vez en cuando, usualmente entre las **8 y las 10 de la noche**, Mariano se transforma en un escurridizo pulpo de gran tamaño 
con una larga barba blanca, lo que en Galicia llamamos un pulpo de raza loba.

Por un lado, Mariano se siente afortunado por no sufrir la típica licantropía de los gallegos. En vez de preocuparse por 
comerse accidentalmente a los paisanos de la aldea, está muy afligido pensando que *terminará en la pota los martes en los que*
*hay feria del pulpo en el pueblo*. Tras varias ocasiones en las que se ha despertado aturdido y desnudo entre las rocas de la 
playa, ha decidido cerrar las puertas de su casa con llave y llenar la bañera con mejillones de la Ría para estar entretenido cuando se transforma.

Pero Mariano lo está pasando mal y quiere solucionar su problema. Sospecha que hay algo que dispara la transformación, ya que 
no sucede todos los días. Como es un poco nerd, decide enfrentarse al problema de manera científica, registrando en un ``diario`` 
lo que hace cada día y anotando ``si se transformó o no`` con unos de sus seis brazos y 2 patas.

Vamos a ayudarle a construir un programa mediante el cual pueda recoger la información que necesita en una estructura de datos, y 
luego aplicar un algoritmo para averiguar cuál o cuáles de las cosas que hace (caminar, ver la vuelta ciclista, beber vino, etc.) 
produce que se transforme en pulpo.

Bueno una vez nos hemos familiarizado con el problema del pobre Mariano empezamos a construir nuestro proyecto. Para facilitar la 
visualización, hemos contruido una página web dónde podremos ver el **calendario de Mariano**, una **tabla dónde estarán anotados**
**los eventos y su correlación** para la transformación y el **cálculo mediante la función phi** (ahora explicaremos), y finalmente una **gráfica** para que 
Mariano pueda comprobar de manera más visual que és el causante de su transformación

## Función phi
Pero cómo sabemos que estamos calculando, existe una función denominada **correlación phi** que es una medida de la dependencia entre 
variables (*sentido estadístico*). 
Se expresa como un coeficiente cuyo valor cae en el ``rango de −1 a 1``. Correlación 0 significa que las variables no están relacionadas, 
mientras que correlación 1 significa que las variables están perfectamente relacionadas: si conoces una, conoces el valor de la otra. 
Correlación con valores negativos, significa que las variables están relacionadas pero que son opuestas: cuando una es cierta, la otra es falsa.

Para variables binarias como el caso de las nuestras (pulpo es verdadero o falso, “descansar” es verdadero o falso), el ``coeficiente phi (φ)`` 
provee una buena medida de la correlación. Para calcularlo, hemos de crear una tabla que contenga el número de veces que se han observado las 
distintas combinaciones de las variables. Por ejemplo, la tabla para el evento “comer pizza” sería así: 
```
 |no octopus, no pizza| no octopus, pizza|
 |--------------------|------------------|
 |        76          |         9        |
 |--------------------|------------------|
 |Octopus, no pizza   | Octopus, pizza   |
 |        4           |        1         |
``` 

Si representas esta tabla en una matriz, obtienes los siguientes índices (posiciones en la matriz):
```
            Pizza
            False true
Octopus False 00 01
        True  10 11
```

**phi φ** se calcula con la siguiente fórmula, donde n se refiere a los valores que encontramos en cada posición de la matriz (76, 9, 4, 1) 
y los subíndices son las posiciones de la matriz:
``` 
![alt text](https://github.com/dfleta/pulpo-raza-loba/blob/master/phi.png)

```

Así, la notación ``n01`` indica el número de medidas donde la primera variable medida -se ha convertido en pulpo o no- es falsa (0) 
y la segunda medida -ha comido pizza- es verdadero (1). En este ejemplo, ``n01 es 9``. De igual modo,`` n10 es 4, n00 es 76 y n11 es 1.``

El valor ``n1`` se refiere a la suma de todas las medidas donde la primera variable (pizza) es true, lo que corresponde a 5 en la tabla ejemplo. 
``n0`` se refiere a la suma de las medidas donde la variable pulpo es false, 85.

Por tanto, para la tabla pizza, la parte superior de la división (el dividendo) sería:
```
1 × 76 - 4x9 = 40
```
y la parte inferior de la división (el divisor) sería la raíz cuadrada de
```
5 × 85 × 10 × 80 = 340000
```
Esto significa que phi vale ``φ ≈ 0.069``, un valor muy pequeño comparado con 1, lo que significa que comer pizza no parece tener mucha 
influencia en que se produzca la transformación a pulpo.

Bien ya sabemos todo lo necesario para empezar a explicar el proyecto.


[Volver al index](#top)

<a name="init"></a>

# Iniciación del proyecto
Antes de explicar la estructura o el funcionamiento de nuestro proyecto explicaremos como inicializarlo y que contiene nuestro gitignore.
Para inicializar de manera local nuestro proyecto deberemos tener instalado la extensión del visual studio code:
~~~
Live Sass Compiler
~~~
Esta extensión hace de transpilador de código, eso se refiere que nos leerá el archivo sass que tengamos por general, nuestro caso se llama
``style.scss``. Cuando lea el contenido de este archivo, transpilará el código a **.css** adquiriendo asi un nuevo archivo principal llamado
``style.css`` asi el html podrá leer ese archivo. (Documentación sobre nuestro sass [vease aquí](#Estilos))

Una vez hemos instalado nuestra extensión deberemos descargar las dependencias que tenga nuestro proyecto, esto se hace con el comando:
~~~
npm install
~~~
Asegurese que esta en la carpeta raíz del proyecto.

Finalmente deberemos poner en marcha el transpilador, asegurarse que se ha creado el fichero de estilos y a continuación deberemos poner el 
siguiente comando:
~~~
npm run parcel
~~~
La dependencía instalada que efectuá el lanzamiento de nuestra aplicación en local se llama parcel, este leerá el fichero html y todas sus conexiones.
Si todo ha ido bienobtendrá un mensaje como este:
~~~
Server running at http://localhost:1234
√  Built in 872ms.
~~~
Entonces haremos **ctrl + click** en el enlace y nos llevará a la versión del proyecto desplegado en local. (Si el programa esta en marcha clicka [aquí](http://localhost:1234))

Bien ya tenemos desplegado el proyecto en local, ahora si nos fijamos en la carpeta de nuestro proyecto habrán aparecido dos carpetas más, estas 
carpetas formán parte para el el despliegue en el servidor, por tanto no queremos que aparezcan en nuestro github, además de la carpeta de ``node_modules``,
ya que es una carpeta inecesaria que conseguimos haciendo el comando explicado anteriormente, por tanto nuestro gitignore constará:
~~~
node_modules
.cache
dist
src/app/styles/style.css
src/app/styles/style.css.map
~~~

Una anotación importante, es que esta aplicación está provisto de casos test sobre la obtención de datos, para poner en marcha estos test se requiere del comando:
~~~
npm test
~~~

[Volver al index](#top)

<a name="ayt"></a>

# Arquitectura y Tecnologías del proyecto

## Tecnologías
Este proyecto se basaba en utilizar *javascript vanilla*, por tanto no hemos usado ninguna librería ni framework para construirlo. En cuestión de javascript, nos
hemos decantado para usar la versión más actualizada, es decir hemos usado la sintaxis **EC6**, sin embargo no hemos usado la sintaxis de ``class``, que es una
de las nuevas incorporaciones de EC6.

Seguidamente para poder administrar nuestro proyecto, además de obtener un ***entorno de ejecucción de javascript*** hemos utilizado [Node](https://nodejs.org/es/). 
Hemos utilizado la version más recomendada, que esta en pleno funcionamiento, para evitar posibles problemas con los navegadores. 

Para el despliegue hemos usado dos servidores, uno administra el backend, que sería el acceso a datos, sería [AWS](https://aws.amazon.com/es/) y para el despliegue
del frontend hemos usado [Heroku](https://www.heroku.com/)

La tecnología usada en el backend, registro del diario y lectura, hemos usado [PHP v7.3.0](https://www.php.net/releases/7_3_0.php)

Como hemos explicado antes hemos usado [SASS](https://sass-lang.com/), para poder modular y estructurar nuestros estilos, y por tanto tener más fácil el acceso a 
las propiedades que queremos modificar o sea más fácil su lectura.

Para poder hacer un entrono local y de pruebas hemos elegido usar [PARCEL](https://parceljs.org/), este es un empaquetador para poder desplegar nuestro proyecto en local,
además de crearnos una carpeta ``/dist`` que sirve para poder desplegarlo en ``heroku``. 

Para poder trabajar en conjunto hemos usado la tecnología más popular de integración contínua, [GIT](https://git-scm.com/).

Finalmente hemos elegido usar [JEST](https://jestjs.io/docs/en/expect#methods) para poder aplicar casos test a nuestro proyecto, y poder tener seguridad, que estamos
obteninendo un código seguro y con posible refactorización

## Arquitectura
Primeramente hablaremos de la estructura general del proyecto. Hemos querido dividir el proyecto en dos partes, que además está dividido en dos repositorios.
Por una parte esta el backend (AQUI VA TU EXPLICACION CARLOS)

Por otra parte tenemos el frontend, el cuál hemos seguido una estructura modular dentro de la que sería nuestra carpeta source, pero primero empezaremos explicando
los archivos y carpetas de nuestra carpeta raiz.

- **Procfile:** Documento para poder desplegar el frontend. En este documento especifica los comandos para  ejecutar la aplicación al inicio.
- **package.json y package-lock.json:** un manifiesto de nuestro proyecto. Manejo de las dependencia de nuestro proyecto. Garantizar la integridad del proyecto. 
    Es decir, podemos asegurar que quienes tengan una copia del mismo, podrán acceder a las mismas propiedades y sincronizar entre múltiples partes cada vez que 
    decidan hacer un cambio.
- **heroku.js**: Script que nos permite inicializar un entorno de pruebas de heroku de nuestro proyecto en el puesrto 8080, además de efectuar el despliegue.
- **src**: Carpeta ``source`` de nuestro proyecto, aqui se encuentra el código y la visualización de nuestro proyecto, más adelante lo explicaremos con detenimiento
- **__test__**: Carpeta dónde encontraremos los test de nuestro código para manipular los datos del diario.

### SRC
Cómo hemos indicado esta es la carpeta ``source`` de nuestro proyecto, al introducirnos en ella encontraremos dos subcarpetas más:
+ **back**: aquí no encontraremos el back de nuestra aplicación, dónde accedemos a la base de datos, está carpeta es la manipulación de los datos recibidos mediante una
llamada **AJAX** a nuestro backend. Encontraremos 4 scripts, esto es debido, como hemos dicho antes, por la estructura modular de nuestro proyecto, por tanto cada uno tiene 
su própia función
+ **app**: Carpeta dónde se efectua la parte de vista de nuestro proyecto, ya sea por introducir nuevas páginas al proyecto o para agregar nuevos css o bien para la 
manipulación del ``DOM``. Esta dividida en 4 subcarpetas: 
    - *assets*: carpeta que tenemos para las utilidades del proyecto, ya sean iconos, fuentes o imágenes
    - *components*: carpeta dónde encontraremos los scripts para la manipulación del ``DOM``. Hemos intentado hacer una estructura por componentes para poder reutilizar el código 
    lo máximo posible. La idea principal era poder hacer una arquitectura **basada en átomos, moléculas, composiciones y páginas**, ya que podríamos tener un código facil de leer 
    y mantener, ya que el mismo átomo hubiera servido por muchas moléculas, y así succesivamente.
    - *pages*: aquí encontraremos nuestros archivos ``.html``, referenciados a las páginas de nuestro proyecto, es decir nuestro index principal no estará en esta carpeta
    - *styles*: Encontraremos nuestros archivos ``.scss`` y ``.css``, es decir en está carpeta encontraremos nuestros estilos.


[Volver al index](#top)

<a name="desp"></a>

# Despliegue del proyecto

Para el despliegue del proyecto hemos decidido utilizar dos máquinas para ello. Para el back decidimos usar una máquina EC2 de Amazon Web Services y para el front decidimos usar la plataforma heroku debida a su simplicidad y ayuda a la hora de desplegar una aplicación web.

#### Amazon web services
Amazon web services nos ofrece una máquina virtual totalmente gratuita con ciertos límites, esos límites son imposibles de superar debido a la simplicidad del proyecto. En ella configuramos una máquina EC2 con Ubuntu Server 18.04, sin tocar sus opciones debido a que por todo lo que no es predeterminado parece que hay que pagar.

A continuación debemos conectarnos a ella, para ello nos conectamos a ella con el par de llaves que ha creado amazon para esta máquina y entonces al conectarnos habilitamos la conexión mediante ssh y así será solo conectarse mediante usuario del sistema ubuntu.

Al estar conectados, procedemos a instalar apache2:

~~~
sudo apt install apache2
~~~

Después comprobamos que el servidor esté funcionando correctamente:

~~~
sudo systemctl status apache2
~~~

Ahora para testear que funciona el servidor apache nos encontramos con un problema, amazon bloquea las peticiones HTTP por defecto. Tranquilo, es muy simple arreglarlo. Simplemente en la consola de administración de EC2 hay que ir a Network & Security, Security Groups, seleccionas el grupo con el group name launch-wizard-1 o similar y abajo en la pestaña inbound le das a Edit y añades una rule con el protocolo HTTP. Si quieres asegurarte reinicia la instancia de la máquina virtual.

Para ver si funciona apache copia el nombre dns de la máquina y ponlo en el navegador, debería aparecer la página por defecto de apache.

Por fuerzas mayores el back lo haremos con php, conectado a mysql. Intentamos conectarlo a mongodb (porque simplificaría mucho trabajo en la inserción del json), pero por falta de conocimientos y documentación en internet nos fue imposible.

Para instalar todo lo necesario de mysql se ejecuta el comando:

~~~
sudo apt install mysql-server
~~~

Como antes, verificamos que el servidor esté funcionando:

~~~
sudo systemctl status mysql
~~~

A continuación procedemos a configuar la instalación de msyql:

~~~
sudo mysql_secure_installation
~~~

En esta pantalla se configura el usuario root y se especifica si se quiere tener conexión remota y usuarios anónimos, optamos por denergar el acceso a ambas por seguridad.

Para instalar php:

~~~
sudo apt install php libapache2-mod-php php-mysql
~~~

En ese comando instalamos de una php, librerias para funcionar en apache y el conector a mysql
Simplemente tocamos el archivo ``/etc/apache2/mods-enabled/dir.conf`` y movimos el index.php al principio de la directiva DirectoryIndex

Ahora simplemente reiniciamos el apache2 y teniamos el apache con php

~~~
sudo systemctl restart apache2
~~~

Para agilizar las tareas de administración de la base de datos decidí instalar el phpmyadmin. Para ello ejecutamos:

~~~
sudo apt install phpmyadmin php-mbstring php-gettext
~~~

Saldrá una ventana y seleccionamos apache2
Luego le damos a yes para configuar la base de datos de phpmyadmin y introducimos la contraseña del usuario root de mysql.

A continuación habilitamos una extensión de php llamada mbstring:

~~~
sudo phpenmod mbstring
~~~

Y reiniciamos el servicio de apache como antes. A continuación decidí crear un usuario para phpmyadmin y intenté acceder a phpmyadmin. Pero, no funcionó, decía que no encontraba esa ruta. Busqué por internet y lo que tenía que hacer era añadir una línea en el archivo ``/etc/apache2/apache2.conf`` la cual era:

~~~
Include /etc/phpmyadmin/apache.conf
~~~

Al reiniciar apache todo funcionó correctamente.

### Heroku
Para desplegar el front a heroku fue muy simple gracias a la ayuda de unos compañeros. Lo primero después de tener cuenta de heroku es instalar el cli en tu máquina. Luego en la consola pones ``herpoku login`` y pones tus credenciales.

Luego te diriges al directorio donde tengas tu repositorio git y ejecutas el siguiente comando.

~~~
heroku git:remote -a (nombre del proyecto)
~~~

A continuación hay que crear un archivo .js específico para heroku que no pondré aqui y se modifica el package.json acorde con el .js recién creado. También hay que crear un archivo llamado Procfile en el que se especifíca el archivo .js creado.

Al tener esto listo se puede subir el front con el comando:

~~~
git push heroku (rama):master
~~~

Y ya tendríamos el front desplegado.


[Volver al index](#top)

<a name="serv"></a>

# Devolución del diario

Para devolver el diario de la base de datos a el front hemos tenido que utilizar php. Es un back muy simple donde simplemente se inserta el json en la base de datos y se recoge de ella.

Al principio se intentó usar mongodb, pero, como dije antes, por falta de conocimientos y falta de documentación en internet no fue posible recoger el diario.

También se intentó insertar el diario con tablas de manera relacional. Pero tampoco fue posible sin pegarse un tiro, también por falta de conocimientos.

Al final simplemente se lee el archivo json y se inserta en la base de datos como una única fila en la tabla.
Luego se creó un archivo para recoger el diario y devolverlo con una petición GET. Un simple echo $diario. La conexión a base de datos fue realizada con PDO.

[Volver al index](#top)

<a name="func"></a>

# Funcionamiento del proyecto

Para facilitar la explicación del funcionamiento, expondremos el nombre del archivo y su funcionamiento particular, así como la arquitectura, la explicación también será modular

#### Manipulación de datos
+ ``db.js`` -> Este script efectúa una llamada al servidor, dónde tenemos el back, y obtendrémos los resultados de la ``BBDD``. Una vez hemos obtenido la respuesta, la convertimos
en un código de tipo ``JSON`` y leemos el contenido, sumministrando en un array los resultados que obtenemos. Por tanto el resultado que obtenemos es un array de ojetos ``JSON``.

+ ``phi.js`` -> Como hemos explicado en la introducción depebemos calcular la correlación phi, por tanto creamos dicha función. Esta función, dado por parámetro una 
matriz (*matriz de correlación*), este lee el contenido y efectúa el proceso para la obtención del resultado. Devuelve, entonces, un ``Number`` que va del -1 a 1

+ ``info.js`` -> En este script manipularemos la información del diario. Se crea un objeto llamado info que tendrá como propiedades los eventos del *diario, número de verdaderos,*
*número de falsos, el diario que lo llamamos del fichero anterior, items() y matrixItem()*. Estas dos últimas propiedades son funciones, **items()** es la obtención de los eventos 
sin repeticiones, por tanto de resultado obtendremos un array de 26 items, computo de eventos generales. La función **matrixItem(item)** es la obtención de la matriz de correlación
del evento que pasemos por parámetro.

+ ``index.js`` -> Este es el núcleo central entre la comunicación de los componentes y la manipulación de los datos. La explicación más explicíta esta dentro del documento, pero explicaremos el funcionamiento general del script. Primeramente crearemos un objeto que apunte al prototipado el ``Object`` de javascript, este objeto le añadiremos las propiedades que necesitemos, después añadimos las funciones para mostrar los resultados:
    - *calculatedMatrix*: mostrar la matrix del item seleccionado, eso es debido a que hacemos referencia a la propiedad que tiene para calcular la matrix, ya que una de sus propiedades es el objeto info
    - *calculatedPhi*: cálculo de phi
    - *row*: nos devolvera como resultado un objeto con las propiedades `item`( nombre del evento que pasamos por parametro), `matrix` y  `phi`
    - *columns*: nos devuelve un array con las claves de los objetos de `row`
    - *results*: nos devolverá los resultados de cada item en un array de objetos. Estos objetos son creados mediante la función `row`
    - *sortTable*: es un método para ordenar nuestros resultado de menor a mayor, según la propiedad phi de cada objeto, teniendo en cuenta números negativos. Está funcionalidad surgió debido a que el método `sort()` de javascript no interpreta los números negativos, por tanto surgió la necesidad de implementar un método de ordenación con estas caractrísticas.

#### Modificación del DOM
+ ``calendar.js``:Creación del componente calendario, dividido en tres funciones, la creacion de la estructura del calendario ``createCalendar()``, creación y funcionamiento del botón de cada día, que tiene como funcionalidad abrir el modal con el mismo índice ``buttonModal()`` y finalmente la construcción del modal, es decir la función es la composición de las otras dos funciones.

+ ``graph.js``: El funcionamiento de este componente es sencillo, es crear la gráfica tanto el tamaño de sus barras como su color de fondo, asi creamos una gráfica dinámica. Tenemos un botón llamado mostrar u ocultar gráfica, su funcionalidad es capturar el evento del click y dependiendo de su estado es mostrar o bien ocultar la gráfica

+ ``modal.js``: El script es la creación completa de un modal, pero la hemos dividido en diferentes funciones, haciendo así que cada función sirva para una tarea:
    - *searchImage()*: es la única función que no forma parte del prototipado, ya que no nos perece que forme parte de la construcción del componente, sino una función de utilidad. Esta función busca una imagen en la carpeta que le decimos con el nombre que le pasamos cómo parámetro. Si consigue encontrarla nos devuelve la url de la imagen en format ``string`` sino nos devuelve un ``string`` vacío.
    - *constructorModal()*: Es la construcción del modal en su totalidad, es la función que junta las piezas del modal
    - *createDivModal()*: función que crea la caja dónde pintaremos el modal
    - *closeModal()*: Es el cierre del modal, creación del item de cierre y funcionalidad de cerrar el modal
    - *titleModal()*: Creación del titulo del modal
    - *bodyModal()*: Creación del contenido del modal, pinta el contenido del modal.

+ ``table.js``: Creación de la tabla de correlaciones, mediante el evento click en el botón que veremos, mostramos en la pantalla el cálculo de la correlación

Tanto en la gráfica como en la tabla tenemos los elementos ordenados con el método explicado con anterioridad.


**Hemos dividido en partes lo máximo posible la creación de los elementos para intentar seguir lo máximo posible el diseño de átomos, para obtener un código más mantenible y legible, además de reutilizable**


[Volver al index](#top)

<a name="diss"></a>

# Diseño de la interfaz

Para el diseño de la web lo mejor es optar por la guía de diseño Material Design, nunca defrauda. Me habría gustado seguir la nueva guía de diseño que utiliza ahora las aplicaciones de google pero habría sido mucho más trabajo, la primera guía se lleva usando durante años y ya estamos acostumbrados.

Como en una buena aplicación material, se optan por 1 color primario y 1 color acento, esos colores conllevan unos complementarios para ofrecer sombras y dinamismo. En esta aplicación optamos por el color primario purple 700 y el color acento pink A200. Se ha utilizado este color primario ya que creemos que el lila representa de algún modo a un pulpo, ya que siempre se representa con esos colores. Luego para el color acento probamos diferentes combinaciones, miramos alguna aplicación material que usa el lila como primario pero al final nos decantamos por el pink ya que quedaba bien y resaltaba lo suficiente.

El contenido iba a ir sobre un fondo blanco, pero tras varias pruebas vimos que era mejor darle algo de profundidad, asi que decidimos poner el background blue-gray 100.

Para las fuentes no nos complicamos la vida, usamos la recién estrenada Google Sans utilizada en los teléfonos Pixel de Google y en la mayoría de aplicaciones de Google.

¿Cómo conseguimos que la web fuera adaptativa? Simplemente con la fuente en 1em y los contenedores con @media query's en diferentes puntos donde se veia que era necesario. Por ejemplo cuando el max-width era de 500px el width del contenedor pasa a 95.5% utilizando todo el viewport, así queda bien en móvil.

Se ha usado Flexbox en casi todos los elementos de la web, facilitando la colocación de los elementos sin querer tirarse por la ventana. También se ha usado grid en los calendarios y en la gráfica de correlaciones.

Como podrás fijarte, casi no hay html, eso es porque se inserta mediante js indicando las clases pertinentes de css.

El proyecto usa scss, permitiendo una estructuración por componentes, simplificando su lectura. Cada uno toca el estilo de un componente y se juntan en un style.scss donde se importan. Se ha intentado usar siempre la encapsulación y se han usado variables y se ha creado una paleta de colores.

La gráfica se le aplican los colores mediante js, ya que así fue posible realizarlo sin quebraderos de cabeza y rápido.

[Volver al index](#top)

<a name="met"></a>

# Metodología de trabajo
Cómo ya hemos mencionado con anterioridad hemos usado la metodología de integración contínua usando ``GIT``. Esta metodología nos permitía trabajar tanto jusntos como cada uno en su zona de confort. 

La mécanica era simple, había un director del repositorio y dos modificadores, efectivamente había uno que ejercía tanto de modificador como director. El director se encargaba de revisar los **pull request** y las integraciones en la rama master. Los modificadores seguían el flujo por ramas, es decir las ramas provienen siempre de master, lo más actualizado posible y al querrer integrar el código en la rama master se pasaba un`` pull request`` dónde ambos miraban el código, si no había problemas el ``pull request`` se efectuaba completamente y se unían los commits en uno sólo.

Esta mécanica nos permitía tener un control de master (*rama de producción*), con las ramas de desarrollo, manteniendo así un flujo fácil y mantenible, sin errores en el código de producción.

La creación de ramas era a voluntad del modificador, siendo asi posible que una rama de estilos fuera mayor a una rama provista de código js. Por norma general cada componente del código se separó para poder visualizar el código mejor, mientras que la rama de estilos se fue integrando cada cierto tiempo.

Los commits de las *ramas a producción se hacían en inglés* y explicando lo que iba insertarse, por tanto era un tiempo futuro.

Las ramas las cuáles se estaban trabajando en ellas tenian un prefijo ``WIP``, work in progress, para no despisatr al director, por tanto cuando se quitaba ese prefijo, quería decir que la rama estaba lista para mergear, por tanto se efectuaba la inspección y posteriormente a la integración.

Dejando al lado el tema de ``GIT``, las veces que pudimos trabajar "codo con codo", utilizamos la metodología de ``Pair programming``, dónde uno ejercia de conductor, siempre alternandonos, y el otro de copiloto. Esta técnica nos facilito el aprendizaje dual, además de tener un código bien estructurado, sin errores. Cabe decir, que gracias a esto ambos podíamos tocar cualquier parte del código, sabiendo lo que estabamaos efectuando.

[Volver al index](#top)

<a name="conc"></a>

# Conclusiones

## Posibles mejoras
+ Refactorización del código para no efectuar tanta repetición, quizás crear un objeto prototypado para poder coger las diferentes funcionalidades del proyecto y poder acceder a esos código de forma global

+ Restructuración del proyecto, grácias a la refactorización que hemos dicho anteriormente sería posible construir elementes más sólidos que podríamos ir usando a lo largo de la aplicación

## Principales dificultades encontradas
+ Fallo en la obtención de los datos, no entendemos muy bien que ocurre dentro de la promesa ejercida
+ Insercción por tablas del diario en la BBDD
+ Funcionamiento del prototype (Resuelto)
<<<<<<< HEAD

=======
>>>>>>> 7927a785dc4e3fc0afab57de6b38f8aaeb569774
