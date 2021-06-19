## Pasos para desplegar el proyecto cliente del test para IQPixels

## Antes de comenzar con este proyecto, asegúrese de que [Project Server](https://github.com/Eriickson/iqpixels-server) esté en funcionamiento

1. Crear un archivo `.env` en el root del proyeco
2. Agregar una variable de entorno llamada `NEXT_PUBLIC_API_SERVER_URL` que contendrá la url del [proyecto servidor de test](https://github.com/Eriickson/iqpixels-server) para IQPixels
3. Correr `yarn install` o `npm install` para instalar las dependencias
4. Correr `yarn run dev` o `npm run dev` para iniciar el proyecto
