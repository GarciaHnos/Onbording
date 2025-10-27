# ¿Cómo se integra un pipeline de CI/CD?
#### El pipeline está compuesto por varias etapas que se ejecutan de manera secuencial o paralela:

1. Detección de cambios:
El pipeline se activa automáticamente cuando hay un evento en el repositorio, como:
Un nuevo commit en una rama específica (por ejemplo, main o develop).
La creación de un Pull Request.
2. Construcción:
Construcción del contenedor Docker:
El pipeline toma el código fuente, el Dockerfile y otras configuraciones necesarias.
Genera una imagen de Docker que incluye la aplicación y sus dependencias.
Si hay errores en esta etapa (por ejemplo, problemas en el Dockerfile o dependencias faltantes), el pipeline se detiene.
3. Pruebas:
Se ejecutan pruebas automatizadas, como:
Unitarias: Para probar funciones específicas del código.
Integración: Para verificar que los módulos de la aplicación trabajen correctamente juntos.
End-to-End (E2E): Simulan el comportamiento del usuario en la aplicación completa.
Si alguna prueba falla, el pipeline se detiene y los desarrolladores reciben notificaciones.
4. Escaneo de calidad y seguridad:
Herramientas como SonarQube o Snyk pueden analizar:
Calidad del código.
Vulnerabilidades en el código o dependencias.
Esto garantiza que no se introduzcan problemas de seguridad.
5. Despliegue a entornos intermedios:
Si las pruebas son exitosas, el pipeline despliega la imagen de Docker a un entorno de staging o pre-producción para validaciones adicionales.
6. Despliegue en producción:
Dependiendo del tipo de CD:
Entrega Continua: Los cambios se despliegan manualmente después de una aprobación.
Despliegue Continuo: Los cambios se despliegan automáticamente si pasan todas las etapas previas.