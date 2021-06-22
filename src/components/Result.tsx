import React, {FC} from 'react';

//defino un tipo
type Prop =  {
    value: string
}

// componente Result
const Result: FC<Prop> = ({value}) => {
    
    return (
        <div className="result">
            {value}
        </div>
    )
}

//validacion prop-types
/*Result.propTypes = {
    value: PropTypes.string.isRequired
}*/

Result.defaultProps = {
    value: "0"
}

// para exportar el componente
export default Result