-----
### 2\. Archivo: `project-5.md`

---
title: 'Lógica Algorítmica y Control de Flujo con PL/SQL'
description: 'Desarrollo de algoritmos matemáticos y procesamiento lógico mediante estructuras de control avanzado en Oracle.'
publishDate: 'Mar 25 2026'
isFeatured: true
---

**Proyecto de Lógica Computacional en Base de Datos**

Este proyecto demuestra la capacidad de procesar lógica compleja directamente en el motor de base de datos mediante estructuras condicionales, bucles y algoritmos matemáticos.

## 🛠️ Estructuras de Control y Metadatos

<details>
  <summary><strong>1. Modelado Relacional: Sistema Bibliotecario</strong></summary>

  ```sql
  CREATE TABLE libros (
      isbn VARCHAR2(20) PRIMARY KEY,
      titulo VARCHAR2(100),
      autor VARCHAR2(50),
      precio NUMBER(8,2)
  );

  </details>

<details>
<summary><strong>2. Auditoría de Esquemas</strong></summary>

Consulta de metadatos del diccionario de datos de Oracle para listar objetos del usuario.
SELECT table_name FROM all_tables WHERE owner = 'NESPINOSAE';

</details>

<details>
<summary><strong>3. Algoritmo de Días Primos (IF)</strong></summary>

Uso de estructuras condicionales anidadas para determinar propiedades matemáticas del calendario.

SELECT table_name FROM all_tables WHERE owner = 'NESPINOSAE';

</details>

<details>
<summary><strong>3. Algoritmo de Días Primos (IF)</strong></summary>

Uso de estructuras condicionales anidadas para determinar propiedades matemáticas del calendario.

DECLARE
  v_dia NUMBER := TO_NUMBER(TO_CHAR(SYSDATE, 'DD'));
  v_primo BOOLEAN := TRUE;
BEGIN
  IF v_dia < 2 THEN v_primo := FALSE;
  ELSE
    FOR i IN 2..TRUNC(v_dia/2) LOOP
      IF MOD(v_dia, i) = 0 THEN v_primo := FALSE;
      EXIT; END IF;
    END LOOP;
  END IF;
  IF v_primo THEN DBMS_OUTPUT.PUT_LINE(v_dia || ' es primo');
  ELSE DBMS_OUTPUT.PUT_LINE(v_dia || ' no es primo'); END IF;
END;

</details>

<details>
<summary><strong>4. Flujo Lógico con Etiquetas (GOTO)</strong></summary>

DECLARE
  v_dia NUMBER := TO_NUMBER(TO_CHAR(SYSDATE, 'DD'));
BEGIN
  IF v_dia < 2 THEN GOTO no_primo; END IF;
  <<es_primo>> DBMS_OUTPUT.PUT_LINE(v_dia || ' es primo'); RETURN;
  <<no_primo>> DBMS_OUTPUT.PUT_LINE(v_dia || ' no es primo');
END;

</details>

🧠 Algoritmos Matemáticos
<details>
<summary><strong>5. Generador Fibonacci (LOOP)</strong></summary>

Algoritmo iterativo para proyectar la sucesión de Fibonacci hasta un límite determinado.
DECLARE
  a NUMBER := 0; b NUMBER := 1; t NUMBER;
BEGIN
  LOOP
    EXIT WHEN a > 1000;
    DBMS_OUTPUT.PUT_LINE(a);
    t := a + b; a := b;
    b := t;
  END LOOP;
END;

</details>

<details>
<summary><strong>6. Cálculo de MCM (WHILE)</strong></summary>

Implementación del algoritmo de Euclides para el cálculo del Mínimo Común Múltiplo.

DECLARE
  v_num1 NUMBER := 12; v_num2 NUMBER := 18;
  v_a NUMBER := v_num1; v_b NUMBER := v_num2;
BEGIN
  WHILE v_b != 0 LOOP
    v_a := MOD(v_a, v_b);
    SELECT v_a, v_b INTO v_b, v_a FROM dual;
  END LOOP;
  DBMS_OUTPUT.PUT_LINE('MCM: ' || (v_num1 * v_num2) / v_a);
END;

</details>

<details>
<summary><strong>7. Proyección de Raíz Entera (FOR)</strong></summary>

Evaluación sistémica para encontrar si un número posee raíz cuadrada exacta.

DECLARE
  v_x NUMBER := 25;
BEGIN
  FOR i IN 1..v_x LOOP
    IF i * i = v_x THEN
      DBMS_OUTPUT.PUT_LINE('Raíz entera: ' || i);
      EXIT;
    END IF;
  END LOOP;
END;

</details>
