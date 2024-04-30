import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import Form   from '../../../components/Form';
import imcCalculator   from '../../../components/Form';
import { calculateImc } from '../../../service/imcService';
describe('Form component', () => {
  it('renders correctly', () => {
    const { getByText } = render(<Form />);
    expect(getByText('Altura')).toBeDefined();
    expect(getByText('Peso')).toBeDefined();
    expect(getByText('Calcular')).toBeDefined();
  });

  it('updates state correctly on input change', () => {
    const { getByPlaceholderText } = render(<Form />);
    const heightInput = getByPlaceholderText('1.75');
    fireEvent.changeText(heightInput, '1.80');
    
  });

  describe('Form component', () => {
    it('updates height state correctly on input change', () => {
      const { getByPlaceholderText, getByText } = render(<Form />);
      const heightInput = getByPlaceholderText('1.75');
      const weightInput = getByPlaceholderText('75.00');
      fireEvent.changeText(heightInput, '1.80');
      fireEvent.changeText(weightInput, '80.00');
      const buttonElement = getByText('Calcular');  
      fireEvent.press(buttonElement);
      const imcMessageElement = getByText('Seu imc é igual:');
      expect(imcMessageElement).toBeDefined();
    });
  });


  describe('IMC calculator function', () => {
    it('calculates the IMC correctly', () => {
      // Test case 1: height = 1.75, weight = 70
        const weight = 70.00;
        const height = 1.75;
        const imc = calculateImc(weight, height);


      expect(imc).toBeCloseTo(22.86, 2); 
  

    });
})
});