import { useForm } from 'react-hook-form';
import { useRef } from 'react';

const Form = () => {
  const formRef = useRef(null);
  const { register, handleSubmit } = useForm();
  <form
    onSubmit={handleSubmit((data) => console.log(data))}
    style={{ display: 'flex', flexDirection: 'column', width: '500px' }}
  >
    <label htmlFor='firstName'>First name</label>
    <input name='firstName' id='firstName' {...register('firstName')} />

    <label htmlFor='lastName'>Last name</label>
    <input name='lastName' id='lastName' {...register('lastName')} />

    <label htmlFor='age'>Age</label>
    <input type='number' name='age' id='age' {...register('age')} />

    <label htmlFor='gender'></label>
    <select name='gender' id='gender' {...register('gender')}>
      <option value=''>Select...</option>
      <option value='male'>Male</option>
      <option value='female'>Female</option>
    </select>
    <label htmlFor='developer'>Are you a developer?</label>
    <input name='developer' value='yes' type='checkbox' />

    <input type='submit' />
  </form>;
};

export default Form;
