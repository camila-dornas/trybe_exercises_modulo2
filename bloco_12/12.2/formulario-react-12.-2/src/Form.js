import React from 'react';

class Form extends React.Component{
    constructor() {
        super()
        this.handleChange = this.handleChange.bind(this);
        this.state = {
            nomeFuncionario: '',
            cpf:0,
            faixaSalarial:'',
            status: '',
            funcionarioAtivo: 'false',
        }
    }

    handleChange = ({ target }) => {
        const { name } = target;
        const value = target.type === 'checkbox' ? target.checked : target.velue;

        this.setState ({
            [name]: value
        });
    }

    render(){
        const { nomeFuncionario, cpf, faixaSalarial, status, funcionarioAtivo } = this.state;
        
        return(
           <div>
               <h1 className='Title'>Formulário de busca de funcionários</h1>
               <form className='Form'>
                   <label>
                       Nome do funcionário:
                       <input type='text' name='nomeFuncionario' value={ nomeFuncionario } onChange={this.handleChange} />
                   </label>
                   <br />
                   <br />
                   <label>
                       CPF:
                       <input type='number' name='cpf' value={ cpf } onChange={this.handleChange}/>
                   </label>
                   <br />
                   <br />
                   <label>
                       Faixa Salarial:
                       <select name='faixaSalarial' value={ faixaSalarial } onChange={this.handleChange}>
                           <option>menos que R$1.000,00</option>
                           <option>entre R$1.000,01 e R$2.000,00</option>
                           <option>entre R$2.000,01 e R$3.000,00</option>
                           <option>mais que R$3.000,00</option>
                       </select>
                   </label>
                   <br />
                   <br />
                   <label>
                       Características do funcionário:
                       <textarea name='status' value={ status } onChange={this.handleChange}/>
                   </label>
                   <br />
                   <br />
                   <label>
                       Funcionário ativo:
                       <input type='checkbox' name='funcionarioAtivo'value={ funcionarioAtivo } onChange={this.handleChange}/>
                   </label>
               </form>
           </div>
        )
    }
}


export default Form;