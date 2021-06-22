//importar React
import React, {FC} from 'react'
//import PropTypes from 'prop-types'

import Button, {ButtonClickHandler} from './Button'

type Props = {
    onContentClear: ButtonClickHandler,
    onDelete: ButtonClickHandler
}

//Entre parentesis, los parametros
const Functions: FC<Props> = ({onContentClear, onDelete}) => (
    <section className="functions">
        <Button type="button-long-text" text="clear" clickHandler={onContentClear} />
        <Button text="&larr;" clickHandler={onDelete} />
    </section>
)

/*Functions.propTypes = {
    onContentClear: PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired
}*/


// exportacion. Para que el componente pueda ser consumido desde otro punto
export default Functions