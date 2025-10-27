Para crear una GitHub Action que desencadene un despliegue en Jenkins dentro de tu VPN, sigue estos pasos:

1️⃣ Agrega los secretos en GitHub
Debes agregar la configuración de VPN y la API de Jenkins en los secrets de GitHub:

Ve a tu repositorio en GitHub.
Dirígete a Settings > Secrets and variables > Actions > New Repository Secret.
Agrega los siguientes secretos:
VPN_CONFIG: Contenido de tu archivo .ovpn de OpenVPN.
JENKINS_URL: URL de tu Jenkins dentro de la VPN (por ejemplo, http://jenkins.local:8080).
JENKINS_USER: Usuario de Jenkins.
JENKINS_API_TOKEN: Token de API de Jenkins.
2️⃣ Crea el archivo de workflow
En tu repositorio, crea la carpeta .github/workflows si no existe, y dentro crea el archivo deploy.yml:

📄 .github/workflows/deploy.yml

yaml
Copiar
Editar
name: Deploy to Jenkins via VPN

on:
  push:
    branches:
      - main  # O la rama en la que quieres activar el despliegue

jobs:
  deploy:
    runs-on: ubuntu-latest

    steps:
      - name: Checkout code
        uses: actions/checkout@v3

      - name: Install OpenVPN
        run: sudo apt-get install -y openvpn

      - name: Connect to VPN
        run: |
          echo "${{ secrets.VPN_CONFIG }}" > vpn-config.ovpn
          sudo openvpn --config vpn-config.ovpn --daemon

      - name: Wait for VPN to connect
        run: sleep 10  # Esperar para asegurar la conexión

      - name: Trigger Jenkins Build
        run: |
          curl -X POST "${{ secrets.JENKINS_URL }}/job/tu-job/buildWithParameters" \
          --user "${{ secrets.JENKINS_USER }}:${{ secrets.JENKINS_API_TOKEN }}" \
          --data token=deploy_token
3️⃣ Explicación del workflow
Se descarga el código con actions/checkout@v3.
Instala OpenVPN en el runner de GitHub Actions.
Crea el archivo de configuración vpn-config.ovpn con los datos del secreto VPN_CONFIG.
Conecta el runner de GitHub Actions a la VPN con OpenVPN.
Espera 10 segundos para asegurar que la conexión se establezca.
Envía un webhook a Jenkins para iniciar el despliegue.
4️⃣ Configurar Jenkins para recibir el Webhook
🔹 Crear el Token de API de Jenkins
Para autenticarse con Jenkins, debes generar un API Token:

En Jenkins, ve a Manage Jenkins > Manage Users.
Selecciona tu usuario y ve a Configure.
En la sección de API Token, genera un nuevo token y cópialo.
Guárdalo como JENKINS_API_TOKEN en los secretos de GitHub.
🔹 Configurar el Job en Jenkins
Ve a Jenkins > New Item.
Selecciona Freestyle Project y ponle un nombre (por ejemplo, deploy-app).
En Build Triggers, activa "Trigger builds remotely (e.g., from scripts)".
En el campo Token, ingresa deploy_token.
En la sección Build, agrega un Shell Script con el comando para desplegar en Docker Compose.
📌 Ejemplo de script de despliegue en Jenkins:

sh
Copiar
Editar
#!/bin/bash
cd /ruta/de/tu/app
git pull origin main
docker-compose down
docker-compose up -d --build
Guarda la configuración y ejecuta una prueba manualmente.
5️⃣ Prueba la GitHub Action
Haz un commit y push en la rama main para que se active la GitHub Action. Luego, revisa la ejecución en:

📍 GitHub > Actions > Deploy to Jenkins via VPN

🔹 Preguntas Frecuentes
✅ ¿Qué pasa si el VPN no se conecta?

Verifica que puedes conectarte manualmente con openvpn --config vpn-config.ovpn.
✅ ¿Puedo usar WireGuard en vez de OpenVPN?

Sí, pero necesitarías instalar y configurar WireGuard en GitHub Actions.
✅ ¿Cómo veo logs de Jenkins?

En JENKINS_URL/job/tu-job/lastBuild/console.
Con esta configuración, cada vez que hagas un push a main, Jenkins hará el despliegue automáticamente en Docker Compose. 🚀







Dijiste:
siempre voy a tener que instalar el OpenVPN en el runner de GitHub Actions?
ChatGPT dijo:
ChatGPT
Sí, siempre que el runner de GitHub Actions se ejecute en una nueva instancia (lo que ocurre en cada ejecución de un workflow), tendrás que instalar OpenVPN. Sin embargo, hay formas de optimizar o evitar este paso:

🔹 Opciones para evitar instalar OpenVPN en cada ejecución
Opción 1: Usar un runner autoservido dentro de la VPN (Recomendada 🚀)
En lugar de usar los runners de GitHub Actions (ubuntu-latest), puedes configurar un self-hosted runner dentro de tu infraestructura, conectado permanentemente a la VPN.

📌 Ventajas:

No necesitas instalar OpenVPN en cada ejecución.
Conexión rápida y estable con Jenkins.
Control total sobre el entorno.
📌 Pasos:

Crea un self-hosted runner en GitHub (Guía oficial).

Instálalo en un servidor dentro de la VPN.

Configura el workflow para usar tu runner:

yaml
Copiar
Editar
jobs:
  deploy:
    runs-on: [self-hosted, vpn]
Opción 2: Crear una Imagen de Docker con OpenVPN preinstalado
En lugar de instalar OpenVPN en cada ejecución, puedes usar una imagen Docker con OpenVPN ya instalado.

📌 Pasos:

Crea un Dockerfile con OpenVPN preinstalado:
dockerfile
Copiar
Editar
FROM ubuntu:latest
RUN apt-get update && apt-get install -y openvpn curl
Publica la imagen en Docker Hub.
Usa la imagen en GitHub Actions:
yaml
Copiar
Editar
jobs:
  deploy:
    runs-on: ubuntu-latest
    container: tu-usuario/imagen-con-openvpn
📌 Ventajas:

Ahorra tiempo en la instalación de OpenVPN.
📌 Desventajas:

Necesitas mantener la imagen actualizada.
Opción 3: Configurar la VPN a nivel de red
Si tienes control sobre la infraestructura, podrías configurar una VPN Site-to-Site entre GitHub Actions y tu red privada (por ejemplo, con Tailscale o WireGuard). Así, las acciones podrían acceder a Jenkins sin necesidad de instalar OpenVPN en cada ejecución.

📌 Ventajas:

Transparente para GitHub Actions.
No requiere instalación en cada ejecución.
📌 Desventajas:

Requiere configuración avanzada.
Conclusión
Para evitar instalar OpenVPN en cada ejecución, la mejor opción es un self-hosted runner dentro de la VPN.
Si no puedes usar un self-hosted runner, puedes usar Docker con OpenVPN preinstalado.
Si manejas la infraestructura, una VPN Site-to-Site es la solución más robusta.
💡 Si solo necesitas acceso a Jenkins, evalúa exponer Jenkins de forma segura con un túnel SSH o un proxy en lugar de conectar toda la VPN.