---
title: 'Lógica Algorítmica y Control de Flujo con PL/SQL'
description: 'Desarrollo de algoritmos matemáticos y procesamiento lógico mediante estructuras de control avanzado en Oracle.'
publishDate: 2026-03-25
isFeatured: true
---

**Proyecto de Lógica Computacional en Base de Datos**

Este proyecto demuestra la capacidad de procesar lógica compleja directamente en el motor de base de datos mediante estructuras condicionales, bucles y algoritmos matemáticos.

## 🛠️ Estructuras de Control y Metadatos

### 1. Modelado Relacional: Sistema Bibliotecario
Diseño y creación de tablas desde cero para la gestión de activos.

```sql
CREATE TABLE libros (
    isbn VARCHAR2(20) PRIMARY KEY,
    titulo VARCHAR2(100),
    autor VARCHAR2(50),
    precio NUMBER(8,2)
);

2. Auditoría de Esquemas
Consulta de metadatos del diccionario de datos de Oracle para listar objetos del usuario.


SELECT table_name FROM all_tables WHERE owner = 'NESPINOSAE';
3. Algoritmo de Días Primos (IF)
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
4. Flujo Lógico con Etiquetas (GOTO)
Demostración técnica de redireccionamiento de flujo mediante etiquetas identificadoras.


DECLARE
  v_dia NUMBER := TO_NUMBER(TO_CHAR(SYSDATE, 'DD'));
BEGIN
  IF v_dia < 2 THEN GOTO no_primo; END IF;
  <<es_primo>> DBMS_OUTPUT.PUT_LINE(v_dia || ' es primo'); RETURN;
  <<no_primo>> DBMS_OUTPUT.PUT_LINE(v_dia || ' no es primo');
END;
🧠 Algoritmos Matemáticos
5. Generador Fibonacci (LOOP)
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
6. Cálculo de MCM (WHILE)
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
7. Proyección de Raíz Entera (FOR)
Evaluación sistémica para encontrar si un número posee raíz cuadrada exacta en el conjunto de enteros.


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