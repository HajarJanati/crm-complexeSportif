import React from 'react';
import { Form } from 'react-bootstrap';

const Input = ({ Icon, label, name, register, placeholder }) => {
    return (
        <Form.Group>
            <Form.Label>{label}</Form.Label>
            <Form.Control name={name} ref={register} placeholder={placeholder} />
        </Form.Group>
    );
};

export default Input;
