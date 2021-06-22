import React, {FC} from 'react'
//import PropTypes from 'prop-types'
import Button, {ButtonClickHandler} from './Button'

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]

const renderButtons = (onClickNumber: ButtonClickHandler) =>{
    //var number = 0
    //interar desde el boton 1 al 0
    //<Button text="{numbers.toString()}" clickHandler={onClickNumber} />

    //function
    const renderButton = (number: number) => (
        <Button key={number} text={number.toString()} clickHandler={onClickNumber} />
    )
    return numbers.map(renderButton)
}

type Props = {
    onClickNumber: ButtonClickHandler
}

//el componente Numbers va a tener como parametro
//  una funcion que llama onClickNumber
const Numbers: FC<Props> = ({onClickNumber}) => (
    <section className="numbers">
        {
            renderButtons(onClickNumber)
        }
    </section>
)

/*Numbers.propTypes = {
    onClickNumber: PropTypes.func.isRequired
}*/

export default Numbers;