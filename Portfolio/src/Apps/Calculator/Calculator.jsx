import React, { useState } from "react";
import StyledCalculator, { Diplay, KeyPad, Key } from "./Calculator.style";

const Calculator = () => {
  const [displayValue, setDisplayValue] = useState("0"); // État pour l'affichage
  const [operator, setOperator] = useState(null); // État pour l'opérateur
  const [firstOperand, setFirstOperand] = useState(null); // Premier opérande
  const [waitingForSecondOperand, setWaitingForSecondOperand] = useState(false); // Indique si on attend le deuxième opérande

  const handleKeyPress = (key) => {
    if (!isNaN(key)) {
      // Si c'est un chiffre
      if (waitingForSecondOperand) {
        setDisplayValue(key);
        setWaitingForSecondOperand(false);
      } else {
        setDisplayValue(displayValue === "0" ? key : displayValue + key);
      }
    } else if (key === "C") {
      // Réinitialiser la calculatrice
      setDisplayValue("0");
      setOperator(null);
      setFirstOperand(null);
      setWaitingForSecondOperand(false);
    } else if (key === "=") {
      // Calculer le résultat
      if (operator && firstOperand !== null) {
        const secondOperand = parseFloat(displayValue);
        const result = calculate(firstOperand, secondOperand, operator);
        setDisplayValue(String(result));
        setFirstOperand(result);
        setOperator(null);
        setWaitingForSecondOperand(false);
      }
    } else {
      // Gérer les opérateurs (+, -, *, /)
      if (!waitingForSecondOperand) {
        setFirstOperand(parseFloat(displayValue));
        setOperator(key);
        setWaitingForSecondOperand(true);
      } else {
        setOperator(key); // Permet de changer d'opérateur avant d'entrer le deuxième opérande
      }
    }
  };

  const calculate = (firstOperand, secondOperand, operator) => {
    switch (operator) {
      case "+":
        return firstOperand + secondOperand;
      case "-":
        return firstOperand - secondOperand;
      case "×":
        return firstOperand * secondOperand;
      case "÷":
        return secondOperand !== 0 ? firstOperand / secondOperand : "Erreur";
      default:
        return secondOperand;
    }
  };

  return (
    <StyledCalculator>
      <Diplay>{displayValue}</Diplay>
      <KeyPad>
        <Key style={{ gridColumn: "span 3" }} onClick={() => handleKeyPress("C")}>
          C
        </Key>
        <Key onClick={() => handleKeyPress("÷")}>&#247;</Key>
        <Key onClick={() => handleKeyPress("7")}>7</Key>
        <Key onClick={() => handleKeyPress("8")}>8</Key>
        <Key onClick={() => handleKeyPress("9")}>9</Key>
        <Key onClick={() => handleKeyPress("×")}>&#215;</Key>
        <Key onClick={() => handleKeyPress("4")}>4</Key>
        <Key onClick={() => handleKeyPress("5")}>5</Key>
        <Key onClick={() => handleKeyPress("6")}>6</Key>
        <Key onClick={() => handleKeyPress("-")}>-</Key>
        <Key onClick={() => handleKeyPress("1")}>1</Key>
        <Key onClick={() => handleKeyPress("2")}>2</Key>
        <Key onClick={() => handleKeyPress("3")}>3</Key>
        <Key onClick={() => handleKeyPress("+")}>&#43;</Key>
        <Key style={{ gridColumn: "span 3" }} onClick={() => handleKeyPress("0")}>
          0
        </Key>
        <Key onClick={() => handleKeyPress("=")}>&#61;</Key>
      </KeyPad>
    </StyledCalculator>
  );
};

export default Calculator;