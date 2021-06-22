import React, {FC} from 'react'
//import PropTypes from 'prop-types'
import Button, {ButtonClickHandler} from './Button'

type Props = {
    onClickOperation: ButtonClickHandler
    onClickEqual: ButtonClickHandler
}

//onClickOperation, onClickEqual, Esas son dos funciones
const MathOperations: FC<Props> = ({onClickOperation, onClickEqual}) => (
    <section className="math-operations">
        <Button text="+" clickHandler = {onClickOperation} />
        <Button text="-" clickHandler = {onClickOperation} />
        <Button text="*" clickHandler = {onClickOperation} />
        <Button text="/" clickHandler = {onClickOperation} />
        <Button text="=" clickHandler = {onClickEqual} />
    </section>
)

/*MathOperations.propTypes = {
    onClickOperation: PropTypes.func.isRequired,
    onClickEqual: PropTypes.func.isRequired
}*/

export default MathOperations