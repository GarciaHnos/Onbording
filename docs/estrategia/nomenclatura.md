
Elemento	Convención	Ejemplo
Archivos	Snake Case	logging_config.py
Clases	Pascal Case	ErrorHandler
Métodos	Snake Case	send_report
Atributos	Snake Case	product_id
Métodos Privados	Snake Case con _ al inicio	_parse_products
Atributos Privados	Snake Case con __ al inicio	__database_connection
Constantes	Mayúsculas con _	MAX_RETRIES
Módulos y Paquetes	Snake Case	product_repository.py
Variables Locales	Snake Case	total_price
Funciones	Snake Case	calculate_total
Excepciones	Pascal Case	ScrapingError
Métodos Mágicos	Doble guion bajo (__) al inicio y final	__init__


1. Nombres de Archivos
Snake Case: Usa minúsculas y separa las palabras con guiones bajos (_).

Descriptivos: El nombre del archivo debe describir su contenido.

Ejemplos:

logging_config.py

product_repository.py

scraping_orchestrator.py

2. Nombres de Clases
Pascal Case: La primera letra de cada palabra en mayúscula, sin separadores.

Sustantivos: Los nombres de las clases deben ser sustantivos que describan la entidad o el concepto que representan.

Ejemplos:

ProductRepository

ScrapingOrchestrator

ErrorHandler

3. Nombres de Métodos
Snake Case: Usa minúsculas y separa las palabras con guiones bajos (_).

Verbos: Los nombres de los métodos deben ser verbos que describan la acción que realizan.

Ejemplos:

save_product

find_by_id

send_report

4. Nombres de Atributos
Snake Case: Usa minúsculas y separa las palabras con guiones bajos (_).

Descriptivos: Los nombres de los atributos deben describir su propósito.

Ejemplos:

product_id

base_url

error_handler

5. Métodos Privados
Snake Case con un guion bajo al inicio: Usa un guion bajo (_) al inicio para indicar que el método es privado.

Descriptivos: Aunque son privados, sus nombres deben ser claros.

Ejemplos:

_parse_products

_clean_price

_setup_driver

6. Atributos Privados
Snake Case con dos guiones bajos al inicio: Usa dos guiones bajos (__) al inicio para indicar que el atributo es privado.

Descriptivos: Aunque son privados, sus nombres deben ser claros.

Ejemplos:

__database_connection

__api_key

__logger

7. Constantes
Mayúsculas con guiones bajos: Usa mayúsculas y separa las palabras con guiones bajos (_).

Descriptivas: Los nombres de las constantes deben ser claros y descriptivos.

Ejemplos:

MAX_RETRIES

DEFAULT_TIMEOUT

DATABASE_URL

8. Módulos y Paquetes
Snake Case: Usa minúsculas y separa las palabras con guiones bajos (_).

Descriptivos: Los nombres de los módulos y paquetes deben describir su contenido.

Ejemplos:

logging_config.py

product_repository.py

scraping/ (directorio de paquete)

9. Variables Locales
Snake Case: Usa minúsculas y separa las palabras con guiones bajos (_).

Descriptivas: Los nombres de las variables deben ser claros y descriptivos.

Ejemplos:

product_name

total_price

response_data

10. Funciones
Snake Case: Usa minúsculas y separa las palabras con guiones bajos (_).

Verbos: Los nombres de las funciones deben ser verbos que describan la acción que realizan.

Ejemplos:

calculate_total

validate_input

send_notification

11. Excepciones
Pascal Case: La primera letra de cada palabra en mayúscula, sin separadores.

Descriptivas: Los nombres de las excepciones deben describir el error que representan.

Ejemplos:

ScrapingError

InvalidInputError

DatabaseConnectionError

12. Métodos Mágicos (Dunder Methods)
Doble guion bajo al inicio y al final: Usa doble guion bajo (__) al inicio y al final.

Nombres predefinidos: Estos métodos tienen nombres predefinidos en Python.

Ejemplos:

__init__

__str__

__eq__