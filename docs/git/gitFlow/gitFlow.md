# Flujo de Trabajo Diario con Git y GitHub

## Introducción
Este flujo describe las buenas prácticas al trabajar con Git y GitHub, desde la creación de una rama `feature` para desarrollar una nueva funcionalidad, hasta la creación de un pull request para fusionar cambios en producción. Los ambientes definidos son:

- **`main`:** Representa el ambiente productivo. Los cambios aquí deben estar completamente probados y listos para desplegar.
- **`hotfix`:** Usada para resolver errores críticos detectados en producción.
- **`release`:** Rama utilizada para preparar una versión para su despliegue. Permite realizar pruebas finales antes de integrarla en `main`.
- **`develop`:** Contiene el código en desarrollo que aún no está listo para producción. Aquí se integran las ramas `feature`.
- **`feature/<id-jira>`:** Usada para desarrollar nuevas funcionalidades. El nombre de la rama debe incluir el ID del ticket de Jira para facilitar el seguimiento.

---

## Flujo de Trabajo

### 1. Crear una Rama `feature`
1. Asegúrate de estar en la rama `develop` (o la rama base según corresponda):
```bash
   git checkout develop
   git pull origin develop
```

2. Crea y cambia a una nueva rama `feature`:
```bash
   git checkout -b feature/<id-ticketJira>
```

3. Comienza a desarrollar la funcionalidad requerida.

### 2. Realizar Cambios y Commits
1. Verifica los cambios realizados:
```bash
   git status
```

2. Selecciona los archivos para agregar al área de staging:
```bash
   git add archivo1 archivo2
   # O de forma interactiva:
   git add -i
```

3. Realiza un commit con una descripción clara:
```bash
   git commit -m "[<id-ticketJira>] Implementación de nueva funcionalidad."
```

4. Repite este paso hasta completar la funcionalidad.

### 3. Actualizar la Rama `feature` con `develop`
1. Asegúrate de que la rama `develop` tenga los últimos cambios:

```bash
   git checkout develop
   git pull origin develop
 ```

2. Cambia a la rama `feature` y realiza un merge de `develop` para mantenerla actualizada:
```bash
   git checkout feature/<id-ticketJira>
   git merge develop
 ```

3. Resuelve conflictos si es necesario, luego realiza un commit:
```bash
   git add archivos_conflictivos
   git commit -m "Resueltos conflictos entre develop y feature/<id-ticketJira>."
```

### 4. Subir la Rama al Repositorio Remoto
Sube los cambios de tu rama `feature` al repositorio remoto:
```bash
git push origin feature/<id-ticketJira>
```

### 5. Crear un Pull Request en GitHub
1. Accede al repositorio en GitHub.
2. Crea un Pull Request (PR) desde la rama `feature/<id-ticketJira>` hacia la rama `develop`.
3. Asegúrate de incluir una descripción detallada del PR:
   - Qué funcionalidad añade.
   - Enlaces a tickets de Jira relacionados.
   - Consideraciones importantes (pruebas, dependencias, etc.).
4. Asigna revisores para validar el código.

### 6. Revisar y Fusionar el Pull Request
1. Los revisores deben validar los cambios y aprobar el PR.
2. Antes de fusionar, asegúrate de actualizar la rama `feature` con los últimos cambios de `develop`:
```bash
   git checkout feature/<id-ticketJira>
   git merge develop
```
3. Una vez actualizado, los revisores pueden proceder a fusionar el PR en `develop`.

### 7. Crear una Rama `release` (Cuando Proceda)
1. Si la funcionalidad está lista para pruebas finales, crea una rama `release` desde `develop`:
```bash
   git checkout develop
   git pull origin develop
   git checkout -b release/<version>
```

2. Realiza pruebas finales en esta rama y aplica ajustes menores si es necesario.
3. Una vez aprobada, fusiona la rama `release` en `main` y `develop`:
```bash
   git checkout main
   git merge release/<version>
   git push origin main

   git checkout develop
   git merge release/<version>
   git push origin develop
```

### 8. Integración Final en `main`
1. Cuando una versión esté lista para producción:
   - Fusiona `release` en `main`.

2. Elimina ramas temporales:
```bash
   git branch -d feature/<id-ticketJira>
   git push origin --delete feature/<id-ticketJira>
```

---

## Notas y Buenas Prácticas
- **Actualización constante:** Antes de trabajar en una rama, asegúrate de sincronizarla con su rama base para evitar conflictos.
- **Commits pequeños y descriptivos:** Facilita la revisión y depuración.
- **Uso de etiquetas Jira:** Incluye siempre el ID del ticket de Jira en el nombre de la rama y en los mensajes de commit.
- **Revisión de código:** Realiza revisiones exhaustivas para mantener la calidad del código.
- **Pruebas:** Antes de fusionar en `main`, asegúrate de que todas las pruebas estén completas y aprobadas.