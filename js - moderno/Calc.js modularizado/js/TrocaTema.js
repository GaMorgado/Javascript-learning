//pegando a tag main para controlar as cores da pagina
const main = document.getElementById('mainContent')
//pegando classe no css para muudar o tema para claro ou escuro
const root = document.querySelector(':root')
function TemaChange(){
  if(main.dataset.theme === 'dark'){
    //alterando as variaveis do css para mudar as cores padrões 
    root.style.setProperty('--bg-color' , "#F4998D")
    root.style.setProperty('--font-color', '#090809')
    root.style.setProperty('--primary-color', '#F40000')
    root.style.setProperty('--border-color', '#6B3FA0')
    //adicionando a classe 'light' no main para sinalizar a alteração 
    main.dataset.theme = 'light'
  }else{
    //alterando as variaveis do css para retornar ao tema padrão
    root.style.setProperty('--bg-color' , "#212529")
    root.style.setProperty('--font-color', '#f1f5f9')
    root.style.setProperty('--primary-color', '#4dff91')
    root.style.setProperty('--border-color', '#666')
    //adicionando a classe 'dark' no main para sinalizar a alteração
    main.dataset.theme = 'dark'
  }
}

export {TemaChange}