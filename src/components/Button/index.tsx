//importar React
import React, {FC} from 'react'
//import PropTypes from 'prop-types'
import './Button.css'

export type ButtonClickHandler = (text: string) => void


type Props = {
    type?: string, //? indica que puede venir undefinned
    text: string,
    clickHandler: ButtonClickHandler
}

// Componente funcional. Componente Button
const Button: FC<Props> = ( {type, text, clickHandler} ) => ( 
    //implicitamente tiene un RETURN
    <button className={type} onClick={() => clickHandler(text) }>
        <span> {text} </span>
    </button>
)

/*Button.propTypes = {
    type: PropTypes.string, //de tipo string, opcional
    text: PropTypes.string.isRequired, //de tipo string, y es requerido
    clickHandler: PropTypes.func.isRequired //funcion, de tipo Func y es requerido
}*/

// exportacion. Para que el componente pueda ser consumido desde otro punto
export default Button