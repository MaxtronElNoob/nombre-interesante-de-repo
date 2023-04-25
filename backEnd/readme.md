# Para instalar las librerias, correr:
**pip3 install -r requirements.txt**

# IMPORTANTE: Se requiere tener instalador postgresql y conocer su usuario y contraseña
## Metodo a usar en este curso (esto muy probablemente lo vieron en BD)
Tendrás que modificar los conections string en el codigo del backend `postgresql://postgres:1234@localhost:5432/postgres` por el que corresponda a tu instalación.

## Opcional (docker no se verá en este curso y no abrá soporte de esto, pero es una buena opcion a considerar en caso de que quieras aprender docker por tu cuenta):
Si tienes docker puedes instalarlo e iniciarlo facilmente con: `docker run --rm -P -p 127.0.0.1:5432:5432 -e POSTGRES_PASSWORD="1234" --name pg postgres:alpine` y no será necesario modificar nada en el código para que funcione :D



# Para correr el proyecto, correr:
**uvicorn main:app --host "0.0.0.0" --port "4000" --reload**

## OPCIONAL (nuevamente, esto usa docker, asi que es opcional):
En caso de querer administrar la bd y sus tablas, puedes hacerlo a traves de pgadmin

```
docker run --name pgadmin4_container -e PGADMIN_DEFAULT_EMAIL=admin@admin.com -e PGADMIN_DEFAULT_PASSWORD=root -p 5050:80 dpage/pgadmin4
```

y luego visitar `http://localhost:5050`

La ip del contenedor se puede obtener con el siguiente comando `docker ps`
```
CONTAINER ID   IMAGE             COMMAND                  CREATED         STATUS         PORTS                           NAMES
34fc275d6f36   dpage/pgadmin4    "/entrypoint.sh"         3 minutes ago   Up 3 minutes   443/tcp, 0.0.0.0:5050->80/tcp   pgadmin4_container
34b5434a80ea   postgres:alpine   "docker-entrypoint.s…"   3 minutes ago   Up 3 minutes   127.0.0.1:5432->5432/tcp        pg
```
`docker inspect 34b5434a80ea | grep IPAddress`   (cambiar el codigo por el contenedor que aparece al hacer docker ps)
```
 "SecondaryIPAddresses": null,
            "IPAddress": "172.17.0.2",
                    "IPAddress": "172.17.0.2",
```