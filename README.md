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

