# Previsualización en vivo de la documentación

Para poder visualizar en tiempo real los cambios en la documentación con MkDocs, se deben seguir estos pasos:


!!! Success "1. Instalar Python"
MkDocs funciona sobre Python, por lo que primero es necesario descargarlo desde la página oficial:  
👉 [Página Oficial.](https://www.python.org/downloads/)

Durante la instalación, **activar la opción “Add Python to PATH”** para poder usarlo desde la terminal.

---
 
!!! Success "2. Abrir Git Bash"
Una vez instalado Python, abrir **Git Bash** (o cualquier terminal).  
Desde ahí se puede comprobar la instalación de Python ejecutando:

```bash
python --version
```
Te lanza la verción de python.

---

!!! Success "3. Instalar MkDocs"

Escribe el siguiente comando para instalar MkDocs:

```bash
py -m pip install mkdocs
```
Se empezara a instalarse Mkdocs.

---

!!! Success "4. Instalación de tema para MkDocs"

Para visualizar la página necesitas descargar el tema utilizado en tu codigo:

```bash
py -m pip install mkdocs-material
```

---

!!! Success "5. Previsualización en vivo"

Ejecuta el siguiente comando para iniciar la previsualización en vivo:

```bash
py -m mkdocs serve
```
Abre tu navegador en la dirección que te indique Git Bash (generalmente **`http://127.0.0.1:8000/`**).

---

![previsualización](./img/Previsualizacion-de-mkdocs.gif)



