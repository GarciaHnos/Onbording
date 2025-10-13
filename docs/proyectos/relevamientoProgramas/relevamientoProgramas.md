!!! note "Introducción"
    🔹Esta tabla contiene un listado de los programas utilizados en planta, 
    indicando la tecnología, propósito y repositorio asociado.  
    🔹Sirve como guía rápida para conocer qué hace cada aplicación y dónde encontrar su código.


| Nombre     | Tecnología | Proposito | RepoGitHub |
| ---------- | ---------- | --------- | ---------- |
| Horas Sueldos  | Java  | Lee marcaciones de relojes biometricos en red y llama a webservice para grabación en Integra (horas sueldos) |       |
| Final de línea UAT  | Java  | Lee pallets de .csv y llama a ws para grabación en Integra |     |
| Final de línea Yogurt | Python | Lee pallets de DB SQLServer y llama a ws para grabación en Integra | gh-ind-yogurt-finalLinea |
| Final de línea Quesos | Integra | Lee cajas de base de datos SQLServer y las graba en Integra |     |
| Marcaciones de relojes biometricos | Python | Lee marcaciones de relojes biometricos y las graba en Integra (accesos) | gh-ind-controlHora |
| Tinas | Python | Lee datos de equipo de tinas y llama a ws para grabación en Integra |        |
| Mozzarella | Python | Graba datos en un PLC cada determinado tiempo según datos de Integra |       |
| Conteo de hormas Blandos | Python | Lee datos de un PLC que cuenta hormas de la línea y lo graba en Integra via ws |      |
| Slideshow indicadores | Java | Muestra indicadores de Qlik, shologix e Integra en formato slideshow automatico en diferentes sectores productivos | gh-ind-slideshow |
| Precios Web | Java | WebScraping de precios de la competencia y propios en paginas web de supermercados | gh-com-preciosweb |
| Etiquetas Bizerba | Python | Lee registros de una DB SQLServer y graba en Integra | gh-ind-quesos-lecturaHormas |
| Balanza termoformados | Java | Lee datos a traves de protocolo RS232 y graba datos en Integra via ws |      |
| Stock Volumn Silos  | Python | Lee datos de PLC de stock de silos de la Planta | gh-ind-stockVolumenSilos-plc | 
