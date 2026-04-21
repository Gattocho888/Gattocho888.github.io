---
title: 'Arquitectura y Extracción de Datos Relacionales (Oracle SQL)'
description: 'Implementación de consultas complejas, enmascaramiento de seguridad y gestión de datos corporativos utilizando SQL.'
publishDate: 2026-03-10
isFeatured: true
---

**Proyecto de Desarrollo y Gestión de Bases de Datos**

Este proyecto documenta la evolución desde la validación de entornos hasta la creación de consultas relacionales de alta complejidad y la manipulación segura de datos corporativos.

## 📌 Fundamentos y Estructuras Base

### 1. Saludo al Entorno PL/SQL
Primer bloque anónimo en Oracle para validar la conexión y salida de consola con DBMS_OUTPUT.

```sql
BEGIN
  DBMS_OUTPUT.PUT_LINE('Hola Mundo PL/SQL');
END;

2. Análisis de Rotación de Personal
Consulta SQL avanzada para identificar talentos que han ocupado más de un cargo histórico en la empresa.


SELECT employee_id, COUNT(*) AS total_roles
FROM job_history
GROUP BY employee_id
HAVING COUNT(*) > 1;

3. Lógica Base: Declaración de Variables
Uso de la sección DECLARE para gestionar tipos de datos escalares y su impresión dinámica.


DECLARE
  v_test VARCHAR2(20) := 'nicolas dev';
BEGIN
  DBMS_OUTPUT.PUT_LINE('Valor: ' || v_test);
END;

4. Geolocalización Salarial
Consulta relacional multitabla (JOINs) para filtrar empleados por región geográfica y rango de ingresos.

SELECT e.first_name, e.salary, r.region_name
FROM employees e
JOIN departments d ON e.department_id = d.department_id
JOIN locations l ON d.location_id = l.location_id
JOIN countries c ON l.country_id = c.country_id
JOIN regions r ON c.region_id = r.region_id
WHERE r.region_name = 'Europe' AND e.salary BETWEEN 5000 AND 10000;

🚀 Manejo de Datos y Atributos
5. Extracción Directa: Perfiles
Implementación de SELECT INTO para recuperar e inyectar datos en variables locales.


DECLARE
  v_fname employees.first_name%TYPE;
  v_lname employees.last_name%TYPE;
BEGIN
  SELECT first_name, last_name INTO v_fname, v_lname 
  FROM employees WHERE employee_id = 100;
  DBMS_OUTPUT.PUT_LINE(v_fname || ' ' || v_lname);
END;

6. Estructura Organizacional y Enmascaramiento
Generación de reporte jerárquico con enmascaramiento selectivo de correos electrónicos.

SELECT LPAD(' ', 2*(LEVEL-1)) || first_name AS empleado,
       RPAD(SUBSTR(email, 1, 2), LENGTH(email), '*') AS email_hidden
FROM employees
START WITH manager_id IS NULL
CONNECT BY PRIOR employee_id = manager_id;

7. Automatización de Tipado y Entidades (%TYPE / %ROWTYPE)
Uso de anclaje de tipos para garantizar consistencia y optimización de memoria en variables.

-- Uso de %TYPE para consistencia de datos
DECLARE
  v_sal employees.salary%TYPE;
BEGIN
  SELECT salary INTO v_sal FROM employees WHERE employee_id = 120;
END;

-- Uso de %ROWTYPE para captura de filas completas
DECLARE
  v_emp_rec employees%ROWTYPE;
BEGIN
  SELECT * INTO v_emp_rec FROM employees WHERE employee_id = 105;
  DBMS_OUTPUT.PUT_LINE(v_emp_rec.email);
END;

8. Gestión de Respaldos (CTAS)
Creación rápida de tablas físicas basadas en consultas filtradas para copias de seguridad.

CREATE TABLE emp_backup AS 
SELECT * FROM employees WHERE department_id = 80;