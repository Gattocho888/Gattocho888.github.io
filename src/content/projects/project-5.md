---
title: 'Lógica Algorítmica y Control de Flujo con PL/SQL' description: Desarrollo de algoritmos matemáticos y procesamiento lógico en base de datos mediante estructuras de control avanzado en Oracle. publishDate: 'Mar 25 2026' seo: image: src: 'https://www.google.com/search?q=../../assets/images/project-5.jpg' alt: Lógica Algorítmica PL/SQL

Proyecto de Lógica Computacional en Base de Datos

Este proyecto demuestra la capacidad de trasladar lógica de programación compleja directamente al motor de la base de datos mediante PL/SQL, reduciendo la latencia y optimizando cálculos matemáticos.

🛠️ Control de Flujo Básico

<details>
<summary><strong>1. Validación de Cómputo: Días Primos y Saltos (GOTO)</strong></summary>

-- Algoritmo Días Primos
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

-- Salto Lógico GOTO
DECLARE
  v_dia NUMBER := TO_NUMBER(TO_CHAR(SYSDATE, 'DD'));
BEGIN
  IF v_dia < 2 THEN GOTO no_primo; END IF;
  <<es_primo>> DBMS_OUTPUT.PUT_LINE(v_dia || ' es primo'); RETURN;
  <<no_primo>> DBMS_OUTPUT.PUT_LINE(v_dia || ' no es primo');
END;


</details>

🧠 Algoritmos Matemáticos Avanzados

<details>
<summary><strong>2. Serie Fibonacci hasta 100</strong></summary>

Bloque anónimo en PL/SQL para generar la serie de Fibonacci de manera iterativa hasta un límite determinado.

/* AUTOR: Nicolas Espinosa Estrada
FECHA: 18/02/2026
DESCRIPCIÓN: Bloque anónimo en PL/SQL para generar la serie de Fibonacci hasta el límite de 100.
*/
DECLARE
    vn_a NUMBER := 0;
    vn_b NUMBER := 1;
BEGIN
    WHILE vn_a <= 100 LOOP
        dbms_output.put_line(vn_a);
        vn_b := vn_a + vn_b;  
        vn_a := vn_b - vn_a; 
    END LOOP;
END;
/


</details>

<details>
<summary><strong>3. Mínimo Común Múltiplo (MCM) Iterativo</strong></summary>

Cálculo del menor múltiplo común mediante un proceso iterativo con PL/SQL, utilizando el operador MOD y la función GREATEST.

/* AUTOR: Nicolas Espinosa Estrada
FECHA: 18/02/2026
DESCRIPCIÓN: Bloque PL/SQL para encontrar el Mínimo Común Múltiplo (MCM) de forma iterativa.
*/
DECLARE 
    vn_num1   NUMBER := 12;
    vn_num2   NUMBER := 18;
    vn_mcm    NUMBER := GREATEST(vn_num1, vn_num2); 
    vb_x      BOOLEAN := TRUE;
BEGIN 
    WHILE vb_x LOOP
        IF (MOD(vn_mcm, vn_num1) = 0) AND (MOD(vn_mcm, vn_num2) = 0) THEN
            dbms_output.put_line('El MCM de ' || vn_num1 || ' y ' || vn_num2 || ' es: ' || vn_mcm);
            vb_x := FALSE; 
        ELSE
            vn_mcm := vn_mcm + 1;
        END IF;
    END LOOP; 
END;
/


</details>

<details>
<summary><strong>4. Raíz Cuadrada Entera por Búsqueda Exhaustiva</strong></summary>

Búsqueda exhaustiva mediante un ciclo FOR para identificar la raíz entera exacta de un número.

/* AUTOR: Nicolas Espinosa Estrada
FECHA: 18/02/2026 
DESCRIPCIÓN: Bloque PL/SQL que utiliza un ciclo FOR para encontrar la raíz cuadrada entera.
*/
DECLARE 
    vn_x NUMBER := 64;
BEGIN 
    FOR i IN 1..vn_x LOOP
        IF i * i = vn_x THEN
            dbms_output.put_line(i);
            RETURN; 
        END IF;
    END LOOP;
    dbms_output.put_line('No hay raíz entera');
END;
/


</details>