# Instrucciones Docker
Comandos utiles para docker


# Códigos de Salida en procesos Linux
- 0: Éxito. El programa se ejecutó correctamente sin errores.
- 1: Error genérico. Este código se utiliza comúnmente para indicar un error no especificado.
- 2: Error grave. Indica un error más grave o un problema crítico.
- 127: Comando no encontrado. Este código se utiliza cuando el sistema no puede encontrar el comando que intentas ejecutar.
- 126: No se puede ejecutar. Indica que el archivo es ejecutable pero no se pudo ejecutar por alguna razón.


## Ver contenedores corriendo
```
docker ps
```
## Ver todos los contenedores
```
docker ps -a
```
## Inspecionar la config un contenedor
```
docker inspect <container_id or container_name>
```
## Crear un contenedor con un nombre personalizado
```
docker run --name <custom_name> <image_name>
```
## Renombrar un contenedor
```
docker rename --name <old_name> <new_name>
```
## Eliminar un contenedor
```
docker rm <container_id or container_name>
```
## Eliminar todos los contenedores APAGADOS
```
docker container prune
```
## Eliminar TODOS los contenedores de manera forzada (los detiene antes)
```
docker rm -f $(docker ps -aq)
```
## Correr modo interactivo (ejemplo con contenedor UBUNTU)
```
docker run -it ubuntu
```
## Correr un nuevo proceso de ubuntu con un comando especifico (comando que no hace nada pero que deja el contenedor encendido por dejar la terminar activa)
```
docker run --name <container_name> -d ubuntu tail -f /dev/null
```
El comando usado para levantar el contenedor con ubuntu se usa como un "agujero negro virtual". No hace absolutamente nada, solo muestra en consola una pantalla negra hasta que se salga de esta.
## Correr un nuevo comando en el contenedor que se está ejecutando
```
docker exec -it <container_name> bash
```
## Detener un contenedor en otros sistemas que no sea linux "para no usar Kill"
```
docker stop <container_id or container_name>
```
## Iniciar contenedor (proxy nginx) de manera detach(background) y usando el puerto 8080 para maquina host y puerto 80 en container
```
docker run --name proxy -d -p 8080:80 nginx
```
## Para ver logs
```
docker logs  --tail 10 -f proxy
```
## Ver volumenes de docker
```
docker volume ls
```
## Crear un contenedor usando un volumen
```
docker run -d --name db --mount src=dbdata,dst=/data/db mongo
```
El src=nombreVolumen,dst=rutaDelaDBContenedor
## Copiar un archivo dentro de un contenedor desde maquina Host
```
docker cp prueba.txt copytest:/testing/test.txt
```
<ruta_origen>:<ruta_destino/nombre_archivo.txt>
## Copiar un archivo/directorio desde un contenedor hasta maquina Host
```
docker cp copytest:/testing hostdirectory
```
Se copia desde contenedor hasta ruta local
## listar imagenes de docker
```
docker image ls
```
## Traer una imagen de un repositorio
```
docker pull ubuntu:20.04
```
## Contenido del Dockerfile
```
FROM ubuntu:latest 
RUN touch /ust/src/hola-platzi.txt
```
## Crear una imagen
```
docker build -t ubuntu:platzi .
```
-t = tag. El "punto" del final representa la ruta del contexto que deseamos para decirle a que ruta de archivos podrá acceder el contenedor. Cuando existe un Dockerfile en la ruta donde ejecutamos el build, tomará la configuración del dockerfile y ordenes e ¿n tiempo de build.

Una imagen en docker es un conjunto de capas, cada capa se genera con una instrucción ejecutada. Se podría decir que cada capa nueva es una diferencia con la capa anterior, similar a como funciona el arbol de git.
## Re taggear o renombrar imagen
```
docker tag ubuntu:platzi azanorivers/ubuntu:platzi
```
Esto cambia el nombre del "repository" que se ve haciendo ```docker image ls```. Esto hará que sea posible publicarlo en nuestro repositorio 
## Ver el history de una capa
```
docker history ubuntu:platzi
```
## Crear una RED en Docker
```
docker network create --attachable plazinet
```
## Conectar un contenedor a la red creada
```
docker network connect platzinet
```
## Listar redes
```
docker network ls
```
## Inspeccionar red
```
docker network inspect <network_name>
```
## Correr un contenedor creando una nueva variable de entorno
```
docker run --env DATABASE_URL="mi_conexion_a_bd" mi_imagen_docker
```


## Estructura de un Docker-compose
```
# Versión del compose file
version: "3.8"

# Servicios que componen nuestra aplicación.
## Un servicio puede estar compuesto por uno o más contenedores.
services:
# nombre del servicio.
  app:
  # Imagen a utilizar.
    image: platziapp
	# Declaración de variables de entorno.
    environment:
      MONGO_URL: "mongodb://db:27017/test"
	# Indica que este servicio depende de otro, en este caso DB.
	# El servicio app solo iniciara si el servicio debe inicia correctamente.
    depends_on:
      - db
	# Puerto del contenedor expuesto.
    ports:
      - "3000:3000"

  db:
    image: mongo
```
## Correr docker-compose
```
docker-compose up -d
```
## Detener y eliminar todos los servicios generados
```
docker-compose down
```


## Comandos avanzados para eliminar
```
sudo docker rm -vf $(sudo docker ps -a -q)
sudo docker rmi -f $(sudo docker images -a -q)
sudo docker system prune -f
sudo docker volume prune -f
```