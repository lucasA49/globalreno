import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import emailjs from 'emailjs-com';
import "../Styles/formulaire.css";

const schema = yup.object({
  name: yup
    .string()
    .max(50)
    .required(" ⚠️Merci de rentrer votre nom et prénom ⚠️"),
  email: yup
    .string()
    .email(" ⚠️Merci de rentrer une adresse mail valide ⚠️")
    .max(255)
    .required(),
  phone: yup
    .number()
    .typeError(" ⚠️Merci de rentrer un numéro de téléphone valide ⚠️")
    .required(" ⚠️Merci de rentrer un numéro de téléphone ⚠️"),
  subject: yup
    .string()
    .required(" ⚠️Merci de sélectionner un sujet ⚠️"),
  message: yup
    .string()
    .required(" ⚠️Merci de rentrer un message ⚠️")
}).required();

const ContactForm = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm({
    resolver: yupResolver(schema)
  });

  const onSubmit = (data) => {
    alert('😀 Merci pour votre message, il sera traité au plus vite 😀');
    const templateId = 'template_8gcgdti';
    const serviceId = 'service_ytmnquu';

    sendFeedback(serviceId, templateId, {
      to_email: "lucas.ak49@hotmail.com",
      name: data.name,
      phone: data.phone,
      email: data.email,
      subject: data.subject,
      message: data.message,
    });

    reset();
  };

  const sendFeedback = (serviceId, templateId, variables) => {
    emailjs
      .send(serviceId, templateId, variables, 'Qefwz8LeMgFGv424_')
      .then(() => {
        console.log('Succès');
      })
      .catch(() => {
        console.error('Il y a une erreur');
      });
  };

  return (
<div class="image-bg"
>


    <div className="min-h-screen bg-transparen flex items-center justify-center p-4">
      <div className="bg-white shadow-lg rounded-md w-full max-w-4xl p-8 grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Bloc gauche */}
        <div className="flex flex-col justify-center">
          <h2 className="text-3xl font-bold  mb-20">Contact</h2>
          <p className="text-gray-600 ">
            Pour toute question, demande de renseignement ou collaboration,
            n'hésitez pas à me contacter via ce formulaire. Je vous répondrai
            dans les plus brefs délais !
          </p>
          <div className="space-y-2 text-sm text-gray-500">
            <p>📍 20 rue du champ blanc, France</p>
            <p>📧 contact@aysun.fr</p>
            <p>📞 +33 6 12 34 56 78</p>
          </div>
        </div>

        {/* Formulaire */}
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Nom *"
            className="w-full border rounded-md px-4 py-2"
            {...register("name")}
            />
          {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}

          <input
            type="tel"
            name="phone"
            placeholder="Numéro de téléphone *"
            className="w-full border rounded-md px-4 py-2"
            {...register("phone")}
            />
          {errors.phone && <p className="text-red-500 text-sm">{errors.phone.message}</p>}

          <input
            type="email"
            name="email"
            placeholder="Email"
            className="w-full border rounded-md px-4 py-2"
            {...register("email")}
            />
          {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}

          <select
            name="subject"
            className="w-full border rounded-md px-4 py-2 bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            {...register("subject")}
            >
            <option value="" disabled hidden>Sujet *</option>
            <option value="contact">Contact</option>
            <option value="devis">Demande de devis</option>
          </select>
          {errors.subject && <p className="text-red-500 text-sm">{errors.subject.message}</p>}

          <textarea
            name="message"
            placeholder="Message *"
            rows="4"
            className="w-full border rounded-md px-4 py-2"
            {...register("message")}
            />
          {errors.message && <p className="text-red-500 text-sm">{errors.message.message}</p>}

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700"
            >
            Envoyer
          </button>
        </form>
      </div>
    </div>
              </div>
  );
};

export default ContactForm;
