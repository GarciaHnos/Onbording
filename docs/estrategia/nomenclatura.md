# 📝 Nomeclatura Cammel

Guía para mantener un código **limpio, legible y consistente**.  
Aplicamos convenciones según el tipo de elemento en el proyecto.  
<br>    

| **Elemento**          | **Convención**                        | **Ejemplo**                  |
|------------------------|---------------------------------------|------------------------------|
| **Archivos**          | Snake Case                            | `logging_config.py`          |
| **Clases**            | Pascal Case                           | `ErrorHandler`               |
| **Métodos**           | Snake Case                            | `send_report`                |
| **Atributos**         | Snake Case                            | `product_id`                 |
| **Métodos Privados**  | Snake Case con `_` al inicio           | `_parse_products`            |
| **Atributos Privados**| Snake Case con `__` al inicio          | `__database_connection`      |
| **Constantes**        | MAYÚSCULAS con `_`                    | `MAX_RETRIES`                |
| **Módulos/Paquetes**  | Snake Case                            | `product_repository.py`      |
| **Variables Locales** | Snake Case                            | `total_price`                |
| **Funciones**         | Snake Case                            | `calculate_total`            |
| **Excepciones**       | Pascal Case                           | `ScrapingError`              |
| **Métodos Mágicos**   | Doble guion bajo `__` al inicio y final | `__init__`                  |

---

!!! warning ""
    <span class='material-icons'>folder</span><b>Nombres de Archivos</b>

    🔹 **Convención:** `snake_case` (minúsculas, separadas con `_`)  
    🔹 **Regla:** El nombre debe describir el contenido.  
    <br>✅ **Ejemplos:**  
    ● `logging_config.py`  
    ● `product_repository.py`  
    ● `scraping_orchestrator.py`  
    </span>

---

!!! info ""
    <span class='material-icons'>class</span><b>Nombres de Clases</b>   

    🔹 **Convención:** `PascalCase` (cada palabra empieza con mayúscula, sin `_`)  
    🔹 **Regla:** Deben ser **sustantivos** que representen la entidad o concepto.  
    <br>✅ **Ejemplos:**  
    ● `ProductRepository`  
    ● `ScrapingOrchestrator`  
    ● `ErrorHandler`  
    </span>

---

!!! tip ""
    <span class='material-icons'>build</span><b>Nombres de Métodos</b>   

    🔹 **Convención:** `snake_case`  
    🔹 **Regla:** Usar **verbos**, describen acciones.  
    <br>✅ **Ejemplos:**  
    ● `save_product`  
    ● `find_by_id`  
    ● `send_report`  
    </span>

---

!!! note ""
    <span class='material-icons'>tune</span><b>Nombres de Atributos</b>  

    🔹 **Convención:** `snake_case`  
    🔹 **Regla:** Claros y descriptivos.  
    <br>✅ **Ejemplos:**  
    ● `product_id`  
    ● `base_url`  
    ● `error_handler`  
    </span>

---

!!! danger ""
    <span class='material-icons'>lock</span><b>Métodos Privados</b>   

    🔹 **Convención:** `snake_case` con **`_` al inicio**  
    🔹 **Regla:** Claros aunque sean privados.  
    <br>✅ **Ejemplos:**  
    ● `_parse_products`  
    ● `_clean_price`  
    ● `_setup_driver`  
    </span>

---

!!! danger ""
    <span class='material-icons'>vpn_key</span><b>Atributos Privados</b>  

    🔹 **Convención:** `snake_case` con **`__` al inicio**  
    🔹 **Regla:** Claros aunque sean privados.  
    <br>✅ **Ejemplos:**  
    ● `__database_connection`  
    ● `__api_key`  
    ● `__logger`  
    </span>

---

!!! success ""
    <span class='material-icons'>bookmark</span><b>Constantes</b>  

    🔹 **Convención:** Mayúsculas con `_`  
    🔹 **Regla:** Nombres claros y descriptivos.  
    <br>✅ **Ejemplos:**  
    ● `MAX_RETRIES`  
    ● `DEFAULT_TIMEOUT`  
    ● `DATABASE_URL`  
    </span>

---

!!! example ""
    <span class='material-icons'>inventory</span><b>Módulos y Paquetes</b>  

    🔹 **Convención:** `snake_case`  
    🔹 **Regla:** Nombre que describa el contenido.  
    <br>✅ **Ejemplos:**  
    ● `logging_config.py`  
    ● `product_repository.py`  
    ● `scraping/` (directorio de paquete)  
    </span>

---

!!! note ""
    <span class='material-icons'>build_circle</span><b>Variables Locales</b>  

    🔹 **Convención:** `snake_case`  
    🔹 **Regla:** Claras y descriptivas.  
    <br>✅ **Ejemplos:**  
    ● `product_name`  
    ● `total_price`  
    ● `response_data`  
    </span>

---

!!! tip ""
    <span class='material-icons'>code</span><b>Funciones</b>  

    🔹 **Convención:** snake_case   
    🔹 **Regla:** Usar **verbos**, describen acciones.   
    <br>✅ **Ejemplos:**  
    ● calculate_total   
    ● validate_input   
    ● send_notification   
    </span>

---

!!! danger ""
    <span class='material-icons'>error</span><b>Excepciones</b>  

    🔹 **Convención:** `PascalCase`  
    🔹 **Regla:** Claras y descriptivas.  
    <br>✅ **Ejemplos:**  
    ● `ScrapingError`  
    ● `InvalidInputError`  
    ● `DatabaseConnectionError`  
    </span>

---

!!! info ""
    <span class='material-icons'>auto_awesome</span><b>Métodos Mágicos (Dunder Methods)</b>  
    
    🔹 **Convención:** `__nombre__` (doble guion bajo al inicio y al final)  
    🔹 **Regla:** Usar los nombres predefinidos de Python.  
    <br>✅ **Ejemplos:**  
    ● `__init__`  
    ● `__str__`  
    ● `__eq__`  
    </span>

<br>
