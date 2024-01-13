import { Component } from "./component.js"

export class Label extends Component{
  constructor(text, parent, option){
    super('label', parent, Object.assign({}, option, {textContent: text}))
  }
}
