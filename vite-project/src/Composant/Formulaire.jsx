import React, { useState } from "react";

const ContactForm = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;

    fetch(form.action, {
      method: "POST",
      body: new FormData(form),
    }).then(() => {
      setIsSubmitted(true);
      form.reset();
    });
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="bg-white shadow-lg rounded-md w-full max-w-4xl p-8 grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Bloc gauche */}
        <div className="flex flex-col justify-center">
          <h2 className="text-3xl font-bold mb-4">Contact</h2>
          <p className="text-gray-600 mb-4">
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
        <form
          action="https://fabform.io/f/xxxxx"
          method="post"
          onSubmit={handleSubmit}
          className="space-y-4"
        >
          <input
            type="text"
            name="name"
            placeholder="Nom *"
            required
            className="w-full border rounded-md px-4 py-2"
          />
          <div className="form-group">
            <input type="tel" id="phone" name="phone" required
            placeholder="Numéro de téléphone *"
               className="w-full border rounded-md px-4 py-2" />
          </div>
          <input
            type="email"
            name="email"
            placeholder="Email "
            className="w-full border rounded-md px-4 py-2"
          />
      <select
  name="subject"
  required
  className="w-full border rounded-md px-4 py-2 bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
>
  <option value="" disabled selected hidden>
    Sujet *
  </option>
  <option value="contact">Contact</option>
  <option value="devis">Demande de devis</option>
</select>
          <textarea
            name="message"
            placeholder="Message *"
            required
            rows="4"
            className="w-full border rounded-md px-4 py-2"
          ></textarea>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700"
          >
            Envoyer
          </button>

          {/* Message de confirmation */}
          {isSubmitted && (
            <p className="text-green-600 font-medium pt-2">
              Message envoyé avec succès !
            </p>
          )}
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
