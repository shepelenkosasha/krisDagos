import React, { Component } from 'react';
import { Form, Field } from 'react-final-form';
import Styles from './StyleForm';
// eslint-disable-next-line 
import animated, { fadeInRightBig } from 'animate.css';

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

const onSubmit = async values => {
	await sleep(300)
	window.alert(JSON.stringify(values, 0, 2))
};

const validateEmail = email => {
	let re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
};

const phoneNumber = number => {
	let regex = /^\+?([0-9]{2})\)?[-. ]?([0-9]{5})[-. ]?([0-9]{5})$/;
    return regex.test(number);
};

const Input = ({ input, meta, label, placeholder, type }) => (
    <div>
      <label>{ label }</label>
      <input { ...input } placeholder = { placeholder } type = { type } />
      { meta.touched && meta.error && <span className = 'span__error'>{ meta.error }</span>}
    </div>
);

const Textarea = ({ input, meta, label, placeholder, type }) => (
    <div>
      <label>{ label }</label>
      <textarea { ...input } placeholder = { placeholder } type = { type } />
      { meta.touched && meta.error && <span className = 'span__error'>{ meta.error }</span>}
    </div>
);

export default class MyForm extends Component{
	render(){
		return(
			<Styles className = "animated fadeInRightBig">
				<Form
					onSubmit = { onSubmit }
					validate = { values => {
						const errors = {}
						if (!values.Name) {
							errors.Name = 'Required';
						}
						if (!values.Email) {
							errors.Email = 'Required'
						} else if (!validateEmail(values.Email)) {
							errors.Email = 'Incorrect email';
						}
						if (!values.Phone) {
						  	errors.Phone = 'Required'
						} else if (!phoneNumber(values.Phone)) {
							errors.Phone = 'Enter the phone in the format +xx xxx xxx xx xx';
						}
						if (!values.Message) {
							errors.Message = 'Required';
						}
						return errors
					}}
					render = {({ handleSubmit, form, submitting, values }) => (
						<form onSubmit = { handleSubmit }>
							<div>
								<Field
								  name = "Name"
								  component = { Input }
								  label = "Name"
								  type = "text"
								  placeholder = "Name" />
							</div>
							<div>
								<Field
								  name = "Email"
								  component = { Input }
								  label = "Email"
								  type = "email"
								  placeholder = "Email" />
							</div>
							<div>
								<Field
								  name = "Phone"
								  component = { Input }
								  label = "Phone"
								  type = "phone"
								  placeholder = "Phone" />
							</div>
							<div>
								<Field
								  name = "Message"
								  component = { Textarea }
								  label = "Message"
								  type = "textarea"
								  placeholder = "Message" />
							</div>
							<div className = "buttons">
								<button className = "button__form" type = "submit" disabled = { submitting }>
								  Submit
								</button> 
							</div>
						</form>
					)}
				/>
			</Styles>
		)
	}
}