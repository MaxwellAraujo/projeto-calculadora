import { render, fireEvent } from '@testing-library/react';
import Calculadora from './calculadora';
import '@testing-library/jest-dom/extend-expect';


describe('Calculadora', () => {

  it('deve renderizar o componente sem erros', () => {
    render(<Calculadora />);
    const div = document.createElement('div');  
  });

  it('deve limpar o campo de números', () => {
    const { getByTestId, getByText } = render(<Calculadora />);
    fireEvent.click(getByText('2'));
    fireEvent.click(getByText('C'));
    expect(getByTestId('txtNumeros')).toHaveValue('0');
  });

  it('deve somar 2 + 3 e obter 5', () => {
    const { getByTestId, getByText } = render(<Calculadora />)
    fireEvent.click(getByText('2'));
    fireEvent.click(getByText('+'));
    fireEvent.click(getByText('3'));
    fireEvent.click(getByText('='));
    expect(getByTestId('txtNumeros')).toHaveValue('5');
  })

  it('devo subtrair 5 - 3 e obter 2', () => {
    const { getByTestId, getByText } = render(<Calculadora />)
    fireEvent.click(getByText('5'));
    fireEvent.click(getByText('-'));
    fireEvent.click(getByText('3'));
    fireEvent.click(getByText('='));
    expect(getByTestId('txtNumeros')).toHaveValue('2');
  })

  it('devo dividir 6 / 3 e obter 2', () => {
    const { getByTestId, getByText } = render(<Calculadora />)
    fireEvent.click(getByText('6'));
    fireEvent.click(getByText('/'));
    fireEvent.click(getByText('3'));
    fireEvent.click(getByText('='));
    expect(getByTestId('txtNumeros')).toHaveValue('2');
  })

  it('devo multiplicar 2 * 3 e obter 6', () => {
    const { getByTestId, getByText } = render(<Calculadora />)
    fireEvent.click(getByText('2'));
    fireEvent.click(getByText('*'));
    fireEvent.click(getByText('3'));
    fireEvent.click(getByText('='));
    expect(getByTestId('txtNumeros')).toHaveValue('6');
  })

  it('deve somar 2.5 + 3 e obter 5.5', () => {
    const { getByTestId, getByText } = render(<Calculadora />)
    fireEvent.click(getByText('2'));
    fireEvent.click(getByText('.'));
    fireEvent.click(getByText('5'));
    fireEvent.click(getByText('+'));
    fireEvent.click(getByText('3'));
    fireEvent.click(getByText('='));
    expect(getByTestId('txtNumeros')).toHaveValue('5.5');
  })
});