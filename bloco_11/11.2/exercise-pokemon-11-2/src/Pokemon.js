// esse componente representa um pokemon. Esse componente recebe como entrada um objeto que contém informações referentes a um pokemon específico. Esse componente precisa retornar as seguintes informações obrigatórias para serem mostradas para quem usar a aplicação, essas informações devem ser validadas utilizando PropTypes:
// nome do pokemon;
// tipo do pokemon;
// peso médio do pokemon, acompanhado da unidade de medida usada;
// imagem do pokemon.

import React from "react";
import PropTypes from 'prop-types';

class Pokemon extends React.Component {
    render() {
        const { pokemon: { name, type, averageWeight, image } } = this.props;
        return(
            <div className='Card'>
                <div className='Card-infos'>
                <p className='Name'>{ name }</p>
                <p className='Type'>{ type }</p>
                <p className='AvaregeWeight'>
                    { `${averageWeight.value} ${averageWeight.measurementUnit}` }
                </p>
                </div>
                <div className='Div-Image'>
                <img className='Image' src={image} alt={name} />
                </div>
            </div>
        )
    }
}

Pokemon.propTypes = {
    pokemon: PropTypes.shape({
        name: PropTypes.string,
    type: PropTypes.string,
    averageWeight: PropTypes.shape({
      measurementUnit: PropTypes.string,
      value: PropTypes.number,
    }),
    image: PropTypes.string,
  }).isRequired,
}

export default Pokemon;
