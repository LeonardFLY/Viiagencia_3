import { useForm } from 'react-hook-form';

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();
  
  const onSubmit = async (data) => {
    const { name, email, subject, message } = data;
    
    console.log('Nome: ', name);
    console.log('Email: ', email);
    console.log('Assunto: ', subject);
    console.log('Mensagem: ', message);
  };

  return (
    <div className='ContactForm mt-5 mb-3'>
      <div className='container'>
        <div className='row'>
          <div className='col-12 text-center'>
            <div className='contactForm'>
              <form id='contact-form' onSubmit={handleSubmit(onSubmit)} noValidate>

                {/* form name e email*/}
                <div className='row formRow'>
                  <div className='col-6'>
                    <input
                      type='text'
                      name='name'
                      {...register('name', {
                        required: { value: true, message: 'Por favor, insira o seu nome' },
                        maxLength: {
                          value: 30,
                          message: 'Por favor, utilize 30 caracteres ou mais'
                        }
                      })}
                      className='form-control formInput'
                      placeholder='Nome'
                    ></input>
                    {errors.name && <span className='errorMessage'>{errors.name.message}</span>}
                  </div>
                  <div className='col-6'>
                    <input
                      type='email'
                      name='email'
                      {...register('email', {
                        required: true,
                        pattern: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
                      })}
                      className='form-control formInput'
                      placeholder='Email'
                    ></input>
                    {errors.email && (
                      <span className='errorMessage'>Por favoz, insira um endereço de e-mail válido</span>
                    )}
                  </div>
                </div>

                {/* form assunto */}
                <div className='row formRow'>
                  <div className='col'>
                    <input
                      type='text'
                      name='subject'
                      {...register('subject', {
                        required: { value: true, message: 'Insira o assunto desejado' },
                        maxLength: {
                          value: 70,
                          message: 'Por favor, insira um assunto de até 70 caracteres'
                        }
                      })}
                      className='form-control formInput'
                      placeholder='Assunto'
                    ></input>
                    {errors.subject && (
                      <span className='errorMessage'>{errors.subject.message}</span>
                    )}
                  </div>
                </div>

                {/* form message */}
                <div className='row formRow mb-2'>
                  <div className='col'>
                    <textarea
                      rows={3}
                      name='message'
                      {...register('message', {
                      })}
                      className='form-control formInput'
                      placeholder='Mensagem'
                    ></textarea>
                    {errors.message && <span className='errorMessage'>Insira a sua mensagem</span>}
                  </div>
                </div>
                <button className='submit-btn' type='submit'>
                  Enviar
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;