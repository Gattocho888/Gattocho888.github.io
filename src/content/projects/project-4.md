---
title: 'Arquitectura y Extracción de Datos Relacionales (Oracle SQL)' description: Implementación de consultas complejas, enmascaramiento de seguridad y gestión de datos corporativos utilizando SQL. publishDate: 'Mar 10 2026' isFeatured: true seo: image: src: 'https://www.google.com/search?q=../../assets/images/project-4.jpg' alt: Desarrollo en Oracle SQL

Proyecto de Desarrollo y Gestión de Bases de Datos

Este proyecto documenta la creación de consultas relacionales y la manipulación segura de datos corporativos utilizando Oracle y programación estructurada. Incluye desde la validación de entornos hasta consultas multitabla de alta complejidad.

📌 Fundamentos y Estructuras Base

<details>
<summary><strong>1. Mi Primer Script PL/SQL: Saludo al Entorno</strong></summary>

BEGIN
  DBMS_OUTPUT.PUT_LINE('Hola Mundo PL/SQL');
END;


</details>

<details>
<summary><strong>2. Análisis de Rotación: Empleados con Múltiples Roles</strong></summary>

SELECT employee_id, COUNT(*) AS total_roles
FROM job_history
GROUP BY employee_id
HAVING COUNT(*) > 1;


</details>

<details>
<summary><strong>3. Lógica Base: Declaración de Variables</strong></summary>

DECLARE
  v_test VARCHAR2(20) := 'Nicolas Dev';
BEGIN
  DBMS_OUTPUT.PUT_LINE('Valor: ' || v_test);
END;


</details>

<details>
<summary><strong>4. Extracción Directa: Consulta de Perfiles</strong></summary>

DECLARE
  v_fname employees.first_name%TYPE;
  v_lname employees.last_name%TYPE;
BEGIN
  SELECT first_name, last_name INTO v_fname, v_lname 
  FROM employees WHERE employee_id = 100;
  DBMS_OUTPUT.PUT_LINE(v_fname || ' ' || v_lname);
END;


</details>

<details>
<summary><strong>5. Automatización de Tipado y Entidades (%TYPE / %ROWTYPE)</strong></summary>

-- Uso de %TYPE
DECLARE
  v_sal employees.salary%TYPE;
BEGIN
  SELECT salary INTO v_sal FROM employees WHERE employee_id = 120;
END;

-- Uso de %ROWTYPE
DECLARE
  v_emp_rec employees%ROWTYPE;
BEGIN
  SELECT * INTO v_emp_rec FROM employees WHERE employee_id = 105;
  DBMS_OUTPUT.PUT_LINE(v_emp_rec.email);
END;


</details>

<details>
<summary><strong>6. Modelado Relacional y Clonación de Estructuras</strong></summary>

-- Clonación rápida (CTAS)
CREATE TABLE emp_backup AS 
SELECT * FROM employees WHERE department_id = 80;

-- Creación desde cero
CREATE TABLE libros (
    isbn VARCHAR2(20) PRIMARY KEY,
    titulo VARCHAR2(100),
    autor VARCHAR2(50),
    precio NUMBER(8,2)
);

-- Auditoría de metadatos
SELECT table_name FROM all_tables WHERE owner = 'NESPINOSAE';


</details>

🚀 Consultas Avanzadas y Enmascaramiento

<details>
<summary><strong>7. Query 01: Rotación de Cargos en la Compañía</strong></summary>

Consulta avanzada para identificar cuántos empleados han pasado por más de un cargo históricamente.

/* AUTOR: Nicolas Espinosa Estrada */
SELECT E.FIRST_NAME, H.EMPLOYEE_ID, COUNT(*) AS job_count
FROM HR.JOB_HISTORY H JOIN HR.EMPLOYEES E
ON H.EMPLOYEE_ID = E.EMPLOYEE_ID
GROUP BY E.FIRST_NAME, H.EMPLOYEE_ID
HAVING COUNT (*) > 1;


</details>

<details>
<summary><strong>8. Query 02: Filtro de Nómina en Europa (Geolocalización)</strong></summary>

Identificación de empleados que trabajan en Europa con un salario entre 4000 y 6000 dólares mediante múltiples JOINs.

/* AUTOR: Nicolas Espinosa Estrada */
SELECT CONCAT (E.FIRST_NAME, ' ', E.LAST_NAME) AS NAME, C.COUNTRY_NAME AS COUNTRY, E.SALARY
FROM HR.EMPLOYEES E JOIN HR.DEPARTMENTS D
ON E.DEPARTMENT_ID = D.DEPARTMENT_ID
JOIN HR.LOCATIONS L ON L.LOCATION_ID = D.LOCATION_ID
JOIN HR.COUNTRIES C ON L.COUNTRY_ID = C.COUNTRY_ID
WHERE C.REGION_ID = 10 AND E.SALARY BETWEEN 4000 AND 6000;


</details>

<details>
<summary><strong>9. Query 03: Orden Jerárquico y Seguridad de Datos</strong></summary>

Proyección del orden jerárquico extrayendo correos y aplicando un relleno de seguridad (asteriscos).

/* AUTOR: Nicolas Espinosa Estrada */
SELECT 
    E.FIRST_NAME || ' ' || E.LAST_NAME AS EMPLEADO,
    LPAD(SUBSTR(E.EMAIL, 1, 3), 9, '*') AS EMAIL_EMPLEADO,
    M.FIRST_NAME || ' ' || M.LAST_NAME AS JEFE,
    LPAD(SUBSTR(M.EMAIL, 1, 3), 9, '*') AS EMAIL_JEFE
FROM HR.EMPLOYEES E
LEFT JOIN HR.EMPLOYEES M ON E.MANAGER_ID = M.EMPLOYEE_ID
ORDER BY E.LAST_NAME;


</details>