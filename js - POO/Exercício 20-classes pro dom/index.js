import { Component } from './component.js';
import { Form } from './Forms.js';
import { Input } from './input.js';
import { Label } from './label.js';

const title = new Component('h1', 'body', {textContent : 'Deu certo, poggers!'})

title.render()

const form = new Form('body', {id: 'formPog'})

const label = new Label('Label Nova, poggers!', form, {htmlFor: 'input1'})
const input = new Input('Label Nova, poggers!', form, {id: 'input1', name: 'name'})

form.render()
label.render()

form.addChildren(input)