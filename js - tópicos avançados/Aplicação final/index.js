let Operacoes = []

const balanceElement = document.getElementById('AccountValue')

const select = document.getElementById('Operation')
let flag = 1
let flagEdit = 0


//verifica a questão da transferencia no select
select.addEventListener("click", (ev) =>{
    ev.preventDefault()
    if (document.querySelector('option:checked').textContent == 'Transferência'){
        flag += 1
        const espaçoPessoa = document.getElementById('ContainerTransfer')
            if(document.getElementById(`TransferTo`) == null && flag % 2 == 0){
            const label = document.createElement('label')
            label.textContent = 'Destinatário(a):'
            label.htmlFor = `TransferTo`
            label.id = `labelTransferTo`
    
            const input = document.createElement('input')
            input.type = 'text'
            input.id = `TransferTo`
    
            espaçoPessoa.append(label, input)
            }else{
                espaçoPessoa.removeChild(document.getElementById('TransferTo'))
                espaçoPessoa.removeChild(document.getElementById('labelTransferTo'))
            }
    }
})

const btnEnviar = document.querySelector('#BtnSubmit');
btnEnviar.addEventListener('click', (ev) => {
    ev.preventDefault();
    if(Operacoes.length > 8){
        alert('Muitas operações, apague algumas para realizar mais!')
    }else{
    const balance = parseFloat(balanceElement.textContent);
    let NewValue = parseFloat(document.getElementById('Value').value);
    if(isNaN(NewValue)){
        alert('Preencha os campos!')
        return
    }
    if (document.querySelector('option:checked').textContent === 'Depósito') {
        balanceElement.textContent = balance + NewValue;
        const OperationData = {
            TypeOperation: document.querySelector('option:checked').textContent, 
            CustomerName: document.querySelector('#CustomerName').value,
            Value: parseFloat(document.querySelector('#Value').value)
        }
        PostOperation(OperationData)
    } else if (document.querySelector('option:checked').textContent === 'Saque') {
            NewValue = NewValue * -1
            balanceElement.textContent = balance + NewValue;
            const OperationData = {
                TypeOperation: document.querySelector('option:checked').textContent, 
                CustomerName:  document.querySelector('#CustomerName').value,
                Value: parseFloat(document.querySelector('#Value').value * -1)
            }
            PostOperation(OperationData)
    } else if (document.querySelector('option:checked').textContent === 'Transferência') {
            NewValue = NewValue * -1
            balanceElement.textContent = balance + NewValue;
            const OperationData = {
                TypeOperation: document.querySelector('option:checked').textContent, 
                CustomerName:  document.querySelector('#CustomerName').value,
                NameTo: document.querySelector('#TransferTo').value,
                Value: parseFloat(document.querySelector('#Value').value * -1)
            }
            PostOperation(OperationData)
            document.querySelector('#TransferTo').value = ''
            if(!(document.getElementById('TransferTo') == null) && flag % 2 == 0){
                flag += 1
                const espaçoPessoa = document.getElementById('ContainerTransfer')
                espaçoPessoa.removeChild(document.getElementById('TransferTo'))
                espaçoPessoa.removeChild(document.getElementById('labelTransferTo'))
             }
       } 
    }
    document.querySelector('#id').value = ''
    document.querySelector('#CustomerName').value = ''
    document.querySelector('#Operation').value = 'Depósito'
    document.querySelector('#Value').value = ''
    document.getElementById('inputEdit').value = ''
  }
);
    
async function PostOperation(OperationData){
    const id = parseFloat(document.querySelector('#id').value)
    if (flagEdit == 1){
        const response = await fetch(`http://localhost:3000/Operacoes/${id}`, {
            method: 'PUT',
            body: JSON.stringify(OperationData),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const editOperaion = await response.json()
        const indexToRemove = Operacoes.findIndex((Operacao) => Operacao.id === id)
        Operacoes.splice(indexToRemove, 1, editOperaion)
        document.querySelector(`#Operation-${id}`).remove()
        renderOperation(editOperaion)
        flagEdit = 0
    }else{
        if(Operacoes.length > 7){
            alert('Muitas operações, apague algumas para realizar mais!')
        }else{
            const response = await fetch('http://localhost:3000/Operacoes', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(OperationData)
            })
            const savedOperaion = await response.json()
            renderOperation(savedOperaion)
            Operacoes.push(savedOperaion)
        }
    }
    UpdateBalance()
}

function renderOperation(Operation){
    if(Operacoes.length > 8){
        alert('Muitas operações, apague algumas para realizar mais!')
    }else{
        const Area = document.getElementById('OperationArea')

        const OperationSec = document.createElement('section')
        OperationSec.classList.add('OperetionSec')
        OperationSec.id = `Operation-${Operation.id}`
    
        const TypeOperation = document.createElement('h3')
        TypeOperation.classList.add('TypeOperation')
        TypeOperation.textContent = `${Operation.id}° ${Operation.TypeOperation}`
    
        const CustomerName = document.createElement('h4')
        CustomerName.classList.add('NameUser')
        CustomerName.textContent = `Nome: ${Operation.CustomerName}`
    
        const formater = Intl.NumberFormat('pt-BR', {
            compactDisplay: 'long',
            currency: 'BRL',
            style: 'currency'
        })
        const Value = document.createElement('h4')
        Value.classList.add('ValueOp')
        Value.textContent = `Valor: ${formater.format(Operation.Value)}`
    
        if(Operation.TypeOperation == 'Transferência'){
            const TransferTo = document.createElement('h4')
            TransferTo.classList.add('NameTo')
            TransferTo.textContent = `Para: ${Operation.NameTo}`
            OperationSec.append(TypeOperation, CustomerName, TransferTo, Value )
            Area.append(OperationSec)
            return
        }
        OperationSec.append(TypeOperation, CustomerName, Value)
        Area.append(OperationSec)
    }
}

async function fetchOperations(){
    const operations = await fetch('http://localhost:3000/Operacoes').then(res => res.json())
    Operacoes.push(...operations)
    Operacoes.forEach(renderOperation);
    UpdateBalance()
}

function UpdateBalance(){
    const ActuallyBalance = Operacoes.reduce((sum, Operacao)=> sum + parseFloat(Operacao.Value), 0)
    const formater = Intl.NumberFormat('pt-BR', {
        compactDisplay: 'long',
        currency:'BRL',
        style: 'currency'
    })
    balanceElement.textContent = formater.format(ActuallyBalance)
}

document.addEventListener('DOMContentLoaded', fetchOperations())

const editButton = document.getElementById('editIcon')
editButton.addEventListener('click', ()=>{ 
    const verifica = document.getElementById('inputEdit')
    const editArea = document.getElementById('EditField')
    if(verifica == null){
        const labelEdit = document.createElement('label')
        labelEdit.htmlFor = 'inputEdit'
        labelEdit.id = 'labelEdit'
        labelEdit.textContent = 'Id para editar:'
        const SpanField = document.createElement('span')
        SpanField.id = 'SpanField'
        const inputEdit = document.createElement('input')
        inputEdit.classList = 'inputEdit'
        inputEdit.id = 'inputEdit'
        const btnEdit = document.createElement('Button')
        btnEdit.id = 'BotãoEditar'
        btnEdit.textContent = 'Editar'
        const btnDelete = document.createElement('Button')
        btnDelete.id = 'botãoDeletar'
        btnDelete.textContent = 'Excluir'
        btnEdit.addEventListener('click',()=>{
            const IdEdit = document.getElementById('inputEdit').value
            if (IdEdit == '' || isNaN(IdEdit)){
                alert('Preencha o campo com o id!')
                document.getElementById('inputEdit').value = ''
            }else{
                if (IdEdit > Operacoes.length || IdEdit < 1){
                    alert('Id inválido!')
                    document.getElementById('inputEdit').value = ''
                }else{
                    Operacoes.forEach((Operacao)=>{
                        if(Operacao.id == IdEdit){
                            if(Operacao.TypeOperation == 'Transferência'){
                                document.querySelector('#id').value = Operacao.id
                                document.querySelector('#CustomerName').value = Operacao.CustomerName
                                document.querySelector('#Operation').value = Operacao.TypeOperation
                                document.querySelector('#Value').value = Operacao.Value * -1
                                flag += 1
                                const espaçoPessoa = document.getElementById('ContainerTransfer')
                                    if(document.getElementById(`TransferTo`) == null && flag % 2 == 0){
                                    const label = document.createElement('label')
                                    label.textContent = 'Destinatário(a):'
                                    label.htmlFor = `TransferTo`
                                    label.id = `labelTransferTo`
                            
                                    const input = document.createElement('input')
                                    input.type = 'text'
                                    input.id = `TransferTo`
                            
                                    espaçoPessoa.append(label, input)
                                document.querySelector('#TransferTo').value = Operacao.NameTo
                                flagEdit = 1
                                }
                            }else{
                                document.querySelector('#id').value = Operacao.id
                                document.querySelector('#CustomerName').value = Operacao.CustomerName
                                document.querySelector('#Operation').value = Operacao.TypeOperation
                                if(Operacao.Value < 0){
                                    document.querySelector('#Value').value = Operacao.Value * -1
                                }else{
                                    document.querySelector('#Value').value = Operacao.Value 
                                }
                                if(!(document.getElementById('TransferTo') == null) && flag % 2 == 0){
                                    flag += 1
                                    const espaçoPessoa = document.getElementById('ContainerTransfer')
                                    espaçoPessoa.removeChild(document.getElementById('TransferTo'))
                                    espaçoPessoa.removeChild(document.getElementById('labelTransferTo'))
                                 }
                                flagEdit = 1
                            }
                           
                        } 
                   }
                 )
                }
            }


        })
        btnDelete.addEventListener('click', async () => {
            const IdDelete = document.getElementById('inputEdit').value
            if (IdDelete == '' || isNaN(IdDelete)){
                alert('Preencha o campo com o id!')
                document.getElementById('inputEdit').value = ''
            }else{
                if (parseFloat(document.getElementById('inputEdit').value <= 0)){
                    alert('Preencha o id para exclusão!')
                }else{
                    document.querySelector('#id').value = parseFloat(document.getElementById('inputEdit').value);
                    const id = parseFloat(document.querySelector('#id').value);
                
                    await fetch(`http://localhost:3000/Operacoes/${id}`, { method: 'DELETE' });
                
                    const indexToRemove = Operacoes.findIndex((t) => t.id === id);
                    Operacoes.splice(indexToRemove, 1);
                    document.querySelector(`#Operation-${id}`).remove();
                    UpdateBalance();
                
                    Operacoes.forEach((Operacao)=>{
                        document.querySelector(`#Operation-${Operacao.id}`).remove()
                        async function DeletandoOperacoes(){
                            await fetch(`http://localhost:3000/Operacoes/${Operacao.id}`, { method: 'DELETE' });
                        }
                        DeletandoOperacoes()
                    })
                
                    Operacoes.forEach(async (Operacao)=>{
                        if(Operacao.id > parseFloat(document.getElementById('inputEdit').value)){
                            Operacao.id = Operacao.id - 1
                        }
                        async function PostandoOperacoes(){
                            await fetch('http://localhost:3000/Operacoes', {
                                method: 'POST',
                                headers: {
                                    'Content-Type': 'application/json'
                                },
                                body: JSON.stringify(Operacao)
                            })
                        }
                        PostandoOperacoes()
                })
                    Operacoes.forEach((Operacao)=>{
                        renderOperation(Operacao)
                    })
                    document.getElementById('inputEdit').value = ''
                }}
            });
        SpanField.append(inputEdit, btnEdit, btnDelete)
        editArea.append(labelEdit, SpanField)
    }else{
        editArea.removeChild(document.getElementById('SpanField'))
        editArea.removeChild(document.getElementById('labelEdit'))
    }
})