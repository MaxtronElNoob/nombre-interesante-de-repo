

## Git y sus ramas

Les recomendamos trabajar con ramas de la siguiente forma

* main: rama principal, solo se debe hacer merge de ramas de dev, nunca hacer commits directamente en esta rama.
* dev: rama de desarrollo, se debe hacer merge de las ramas de feature, nunca hacer commits directamente en esta rama. Cuando tengan una versión estable de su proyecto y lista para presentar en sus entregables, deben hacer un merge de dev a main.
* feature: Por cada feature que se vaya a implementar se debe crear una rama de feature, una vez que se termine la feature se debe hacer merge a la rama de dev.  

De esta forma, cuando revisemos sus tareas, unicamente revisaremos el merge mas reciente a la rama main.  

## Trabajando de forma simultanea

Muchas veces ocurrira que esten trabajando en varias features al mismo tiempo, esto provocara que se generen conflictos al momento de hacer merge a la rama dev. Para evitar esto, les recomendamos que trabajen de la siguiente forma:

* Cuando vayan a trabajar en una feature, deben hacer un pull de la rama dev, para tener los ultimos cambios.

* Cuando terminen de trabajar en una feature, deben hacer un push de la rama feature, para que sus compañeros puedan tener los ultimos cambios.

* Cuando terminen de trabajar en una feature, deben hacer un merge de la rama feature a la rama dev, para que sus compañeros puedan tener los ultimos cambios.

* Cuando terminen de trabajar en una feature, deben hacer un pull de la rama dev, para tener los ultimos cambios.

* Ahora en las otras ramas de feature, deben hacer un pull de la rama dev, para tener los ultimos cambios.

* Luego deben ejecutar un rebase de la rama feature, para que sus cambios se apliquen sobre los ultimos cambios de la rama dev, esto se hace con el siguiente comando: git rebase dev

* Se les recomienda encarecidamente que realicen los rebase desde vs code, para poder tener una GUI al momendo de resolver conflictos, vs code les mostrará todos los conflictos por cada archivo modificado y deberán elegir que cambios se mantienen y cuales se descartan.

* Luego hacer commit de los cambios y push de la rama feature.
