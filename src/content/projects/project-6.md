-----

### 3\. Archivo: `project-6.md`

````markdown
---
title: 'Automatización y Objetos Programables: Procedimientos y Cursores'
description: 'Creación de objetos persistentes en base de datos para la actualización masiva de información.'
publishDate: 'Apr 10 2026'
isFeatured: true
---

**Proyecto de Automatización y Rendimiento**

El enfoque de este proyecto es la construcción de herramientas persistentes en la base de datos que encapsulan reglas de negocio y optimizan el procesamiento de registros.

## 📦 Procedimientos y Cursores Base

<details>
  <summary><strong>1. Lógica Reutilizable: Gestión Salarial</strong></summary>

  Desarrollo de objetos persistentes para la actualización masiva y segura de datos sensibles.

  ```sql
  CREATE OR REPLACE PROCEDURE upd_salary(p_id IN NUMBER, p_percent IN NUMBER) IS
  BEGIN
    UPDATE employees SET salary = salary * (1 + p_percent/100) WHERE employee_id = p_id;
    COMMIT;
  END;

  </details>

<details>
<summary><strong>2. Procesamiento de Conjuntos: Cursores Parametrizados</strong></summary>

Iteración profesional sobre juegos de datos mediante cursores explícitos con paso de parámetros.
DECLARE
  CURSOR c_dept(p_id NUMBER) IS SELECT first_name FROM employees WHERE department_id = p_id;
BEGIN
  FOR r_emp IN c_dept(50) LOOP
    DBMS_OUTPUT.PUT_LINE('Nombre: ' || r_emp.first_name);
  END LOOP;
END;

</details>