---
title: 'Arquitectura y Extracción de Datos Relacionales (Oracle SQL)'
description: Implementación de consultas complejas, enmascaramiento de seguridad y gestión de datos corporativos utilizando SQL y bloques anónimos en PL/SQL.
publishDate: 'Mar 10 2026'
isFeatured: true
seo:
  image:
    src: '../../assets/images/project-4.jpg'
    alt: Desarrollo en Oracle SQL - Nicolás Espinosa
---

![Desarrollo en Oracle SQL](../../assets/images/project-4.jpg)

**Proyecto de Desarrollo y Gestión de Bases de Datos**

Este proyecto se centró en la creación de consultas relacionales avanzadas y la manipulación segura de datos corporativos (como información de Recursos Humanos) utilizando el motor de base de datos Oracle y programación PL/SQL.

## Objetivos del Proyecto

1. **Extracción Precisa:** Desarrollar consultas multitabla (JOINs) para la geolocalización de salarios y análisis de rotación de personal.
2. **Seguridad de la Información:** Implementar enmascaramiento de datos sensibles (correos electrónicos) en reportes jerárquicos.
3. **Optimización de Memoria:** Utilizar anclaje de tipos (`%TYPE` y `%ROWTYPE`) para garantizar la consistencia en la extracción de registros.

## Características Técnicas

1. **Consultas Multitabla y Análisis:**
   - Creación de scripts para filtrar nóminas por región geográfica cruzando múltiples entidades (`employees`, `departments`, `locations`, `countries`).
   - Identificación de talento interno mediante el conteo de roles históricos (`GROUP BY`, `HAVING`).

2. **Estructura Organizacional y Seguridad:**
   - Desarrollo de una consulta jerárquica (`START WITH`, `CONNECT BY PRIOR`) combinada con funciones de cadena para ocultar caracteres de correos corporativos.

3. **Gestión de Respaldos (CTAS):**
   - Automatización de respaldos físicos de tablas filtradas por departamentos para asegurar la disponibilidad ante fallos.

## Stack Tecnológico

- **Motor de Base de Datos:** Oracle Database.
- **Lenguajes:** SQL (DML, DDL), PL/SQL (Bloques anónimos).
- **Técnicas:** JOINs avanzados, funciones de agregación, variables ancladas (`%TYPE`, `%ROWTYPE`).

## Resultado

Se logró estandarizar un conjunto de scripts reutilizables que optimizan el tiempo de respuesta en la generación de reportes gerenciales. Además, la implementación del enmascaramiento de datos cumplió con las normativas de visualización segura de la información del personal.

---