/* eslint no-eval: 0 */
// Importacion
import React, {useState, FC} from 'react';
import words from 'lodash.words'
import Functions from './components/Functions'
import Numbers from './components/Numbers'
import MathOperations from './components/MathOperations' //importo el componente
import Result from './components/Result' //importo el componente
import './App.css' // Agregar estilo


// Generacion de la funcion del componente. Funcion fecha
const App: FC = () => {
    //OPCION 1
    /*const arrayTextoFunctionModificaTexto = useState("")
    // arrayTextoFuncionModificaTexto => ["", function]
    
    // 1er posicion: valor (que inicialmente es el valor por defecto)
    const texto = arrayTextoFunctionModificaTexto[0]

    // 2da posicion: funcion que me va a permitir modificar el valor
    const funcionModificaTexto = arrayTextoFunctionModificaTexto[1]*/

    //OPCION 2
    // Array Destructuring
    const [stack, setStack] = useState("")

    const items = words(stack, /[^-^+^*^/]+/g) //REGERX //devuelve un array
    const value = items.length > 0 ? items[items.length-1] : "0";
    console.log("Renderizacion de la app", value)

    /* POR QUE NO FUNCONA
                <Result 
                value={() => {
                    items[items.length-1]
                    console.log("Renderizacion de la app", items)
                }
            }
            />
    */

    console.log("items.length", items.length)
    console.log("items.length-1", items.length-1)
    
    return (
        <main className='react-calculator'>
            
            <Result 
                value = { value }
            />

            <Numbers onClickNumber={number => {
                console.log("Click en number", number)
                setStack(`${stack}${number}`)
                }} 
            />

            <Functions // A los parametros le paso un evento
                onContentClear={() => {
                    console.log("Content Clear")
                    setStack('')
                }}
                
                onDelete={() => {
                    if(stack.length > 0) {
                        const newStack = stack.substring(0, stack.length - 1)
                        console.log("OnDelete", newStack)
                        setStack(newStack)
                    }
                }}
            />

            <MathOperations 
                onClickOperation={operation => {
                    console.log("Operation:", operation)
                    setStack(`${stack}${operation}`)
                }}
                onClickEqual={equal => {//var equal tiene el text
                    console.log("Equal:", equal)
                    setStack(eval(stack).toString())
                }}
            />
        </main>
    )
}

// Exportacion
export default App