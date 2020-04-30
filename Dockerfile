# version de node
FROM node:12

# directorio de la app
WORKDIR /app

# copiar los (.json) ej: package.json
COPY package*.json ./

# para que instale (todo con npm)
RUN npm install

# copir todos los archivos del proyecto
COPY . .

#puerto por default
EXPOSE 4000

#npm
CMD [ "npm", "start" ]

#EJECUTAR...
#docker build -t <NOMBRE_PROYECTO>:<VERSION>.

#docker run -d -p <PUERTO_DESTNO>:<PUERTO_ORIGEN> <NOMBRE_PROYECTO>

#SUBIR IMAGEN

#docker login
##crear un tag
#docker tag <REPOSITORIO> <USUARIO>/<REPOSITORIO>:<VERSION>
#docker push <USUARIO>/<REPOSITORIO>:<VERSION>

#BAJAR
#docker pull <USUARIO>/<REPOSITORIO>:<VERSION>

#PROBAR
##docker start <PRIMERAS_3_LETRAS_IMAGEN>
##docker attach <PRIMERAS_3_LETRAS_IMAGEN>

#PARAR
#docker stop <PRIMERAS_3_LETRAS_IMAGEN>

##borrar contenedor
#docker docker rm -f <IMAGEN>
##borrar imagen
#docker rmi -f <IMAGEN>