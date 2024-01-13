export class Component{
  #referencia = null
  constructor(tag, parent, options){
    this.tag = tag
    this.parent = parent
    this.options = options
    this.build()
  }
  WhatElement(){
    return this.#referencia
  }
  build(){
    this.#referencia = document.createElement(this.tag)
    Object.assign(this.#referencia, this.options)
    return this
  }
  render(){
    if (this.parent instanceof Component){
      this.parent.WhatElement().append(this.#referencia)
    }else{
      document.querySelector(this.parent).append(this.#referencia)
    }
  }
}