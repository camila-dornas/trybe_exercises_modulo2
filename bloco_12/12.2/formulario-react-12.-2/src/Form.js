import React from 'react';

class Form extends React.Component{
    constructor() {
        super()
        this.handleChange = this.handleChange.bind(this);
        this.state = {
            nomeFuncionario: '',
        }
    }

    handleChange = (event) => {
        this.setState ({
            nomeFuncionario: event.target.value,
        })
    }

    render(){
        return(
           <div>
               <h1 className='Title'>Formulário de busca de funcionários</h1>
               <form className='Form'>
                   <label>
                       Nome do funcionário:
                       <input type='text' name='nomeFuncionario' value={this.state.nomeFuncionario} onChange={this.handleChange} />
                   </label>
                   <br />
                   <br />
                   <label>
                       CPF:
                       <input type='number' name='cpf' />
                   </label>
                   <br />
                   <br />
                   <label>
                       Faixa Salarial:
                       <select name='faixaSalarial'>
                           <option>menos que R$1.000,00</option>
                           <option>entre R$1.000,01 e R$2.000,00</option>
                           <option>entre R$2.000,01 e R$3.000,00</option>
                           <option>mais que R$3.000,00</option>
                       </select>
                   </label>
                   <br />
                   <br />
                   <label>
                       Status do funcionário:
                       <textarea name='status'/>
                   </label>
               </form>
           </div>
        )
    }
}


export default Form;