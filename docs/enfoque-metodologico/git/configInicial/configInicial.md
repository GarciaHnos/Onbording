# Configuración Inicial de Git

Recomendamos utilizar Git Bash para manejar Git desde la consola. Para acceder a Git Bash:

1. Instala Git desde su [página oficial](https://git-scm.com/).
2. Una vez instalado, busca "Git Bash" en tu sistema operativo y ejecútalo.
3. Usa los comandos que se mencionaran a continuación directamente en la consola de Git Bash.
![Abrir Git Bash](./Gif/Grabación-de-pantalla-2025-08-06-104353.gif)

---
Una vez instalado Git, es importante configurarlo para trabajar correctamente.

## 1. Configurar el Nombre y el Correo Electrónico
Estos datos se asocian con los commits que realices:

```bash
git config --global user.name "Tu Nombre"
git config --global user.email "tuemail@example.com"
```

## 2. Establecer el Editor por Defecto
Configura tu editor de texto preferido (por ejemplo, VS Code o Vim):

- Para VS Code:
  ```bash
  git config --global core.editor "code --wait"
  ```
- Para Vim:
  ```bash
  git config --global core.editor "vim"
  ```

## 3. Verificar la Configuración
Revisa tu configuración actual con:

```bash
git config --list
```

## Consejo Adicional
- **Ignorar Archivos:** Usa un archivo `.gitignore` para excluir archivos o carpetas no deseadas:
  ```
  # Ejemplo de .gitignore
  node_modules/
  .env
  ```


---

##### video explicativo Git y Git Hub

<iframe width="560" height="315"
        src="https://www.youtube.com/embed/trjavYM5LTg"
        frameborder="0"
        allow="autoplay; encrypted-media; picture-in-picture"
        allowfullscreen>
</iframe>


