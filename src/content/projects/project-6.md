---
title: 'Automatización y Objetos Programables: Procedimientos y Cursores' description: Creación de objetos persistentes en base de datos para la actualización masiva de información y procesamiento iterativo de registros. publishDate: 'Apr 10 2026' isFeatured: true seo: image: src: 'https://www.google.com/search?q=../../assets/images/project-6.jpg' alt: Objetos Programables Oracle

Proyecto de Automatización y Rendimiento

El objetivo de este proyecto es construir herramientas automatizadas invocables mediante la creación de "Objetos de Base de Datos" persistentes para el procesamiento seguro y dinámico de grandes volúmenes de datos.

📦 Procedimientos Básicos y Uso de Cursores

<details>
<summary><strong>1. Lógica Reutilizable: Gestión Salarial</strong></summary>

CREATE OR REPLACE PROCEDURE upd_salary(p_id IN NUMBER, p_percent IN NUMBER) IS
BEGIN
  UPDATE employees SET salary = salary * (1 + p_percent/100) WHERE employee_id = p_id;
  COMMIT;
END;


</details>

<details>
<summary><strong>2. Procesamiento Iterativo con Cursores Base</strong></summary>

DECLARE
  CURSOR c_dept(p_id NUMBER) IS SELECT first_name FROM employees WHERE department_id = p_id;
BEGIN
  FOR r_emp IN c_dept(50) LOOP
    DBMS_OUTPUT.PUT_LINE('Nombre: ' || r_emp.first_name);
  END LOOP;
END;


</details>

⚙️ Implementaciones Avanzadas

<details>
<summary><strong>3. Stored Procedure Dinámico: Lógica de Fechas</strong></summary>

Procedimiento almacenado que gestiona parámetros opcionales y realiza cálculos temporales avanzados usando NEXT_DAY y LAST_DAY.

/* AUTOR: Nicolas Espinosa Estrada
FECHA: 23/02/2026
DESCRIPCIÓN: Procedimiento almacenado que gestiona parámetros IN y realiza cálculos temporales.
*/
CREATE OR REPLACE PROCEDURE sp_saludar (
    param_nombre IN VARCHAR2 DEFAULT 'Millos',
    param_fecha  IN DATE     DEFAULT SYSDATE
)
IS
    vv_textoConcatenado VARCHAR2(100);
    vd_ultimoViernes    DATE;
BEGIN
    vv_textoConcatenado := 'Hola, ' || param_nombre || ' tu papá ';
    dbms_output.put_line(vv_textoConcatenado);
     
    vd_ultimoViernes := NEXT_DAY(LAST_DAY(param_fecha) - 7, 'VIERNES');
    dbms_output.put_line('El ultimo viernes es ' || vd_ultimoViernes);
END sp_saludar;
/

-- Llamada al procedimiento
BEGIN
    sp_saludar();
END;
/


</details>

<details>
<summary><strong>4. Cursor Dinámico: Filtrado de Empleados por Consola</strong></summary>

Uso de un cursor explícito y variables de sustitución (&) para filtrar empleados de un departamento específico ingresado por consola.

/* AUTOR: Nicolas Espinosa Estrada
FECHA: 02/03/2026
DESCRIPCIÓN: Cursor dinámico que filtra empleados por ID de departamento usando variables de sustitución.
*/
DECLARE
    v_target_dept NUMBER := &DIGITE_ID_DEPARTAMENTO;

    CURSOR c_empleados IS
      SELECT employee_id, first_name, last_name, department_id
      FROM EMPLOYEES
      WHERE department_id = v_target_dept;
      
    v_emp c_empleados%ROWTYPE;
    v_contador NUMBER := 0;
BEGIN
    dbms_output.put_line('--- LISTADO PARA EL DEPARTAMENTO: ' || v_target_dept || ' ---');
    OPEN c_empleados;
    LOOP
        FETCH c_empleados INTO v_emp;
        EXIT WHEN c_empleados%NOTFOUND;
        
        v_contador := v_contador + 1;
        dbms_output.put_line(
            v_emp.employee_id || ' - ' ||
            v_emp.first_name || ' ' ||
            v_emp.last_name ||
            ' (Depto: ' || v_emp.department_id || ')'
        );
    END LOOP;
    
    IF v_contador = 0 THEN
        dbms_output.put_line('No se encontró a nadie en el ID: ' || v_target_dept);
    ELSE
        dbms_output.put_line('Total de empleados: ' || v_contador);
    END IF;

    CLOSE c_empleados;
END;
/

</details>
---