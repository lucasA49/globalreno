import React, { useState } from "react";
import {
  Home,
  Building,
  Key,
  User,
  Factory,
  Layers,
  Thermometer,
} from "lucide-react";
import emailjs from 'emailjs-com';

export default function FormulaireTravaux() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    propertyType: "",
    surface: "",
    workTypes: [],
    propertyStatus: "",
    contactTitle: "",
    firstName: "",
    lastName: "",
    email: "",
    num: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState(null);

  const handlePropertyTypeSelect = (type) => {
    setFormData((prev) => ({ ...prev, propertyType: type }));
    setStep(2);
  };

  const handleSurfaceInput = (e) => {
    setFormData((prev) => ({ ...prev, surface: e.target.value }));
  };

  const handleWorkTypeSelect = (workType) => {
    setFormData((prev) => ({
      ...prev,
      workTypes: prev.workTypes.includes(workType)
        ? prev.workTypes.filter((type) => type !== workType)
        : [...prev.workTypes, workType],
    }));
  };

  const handlePropertyStatusSelect = (status) => {
    setFormData((prev) => ({ ...prev, propertyStatus: status }));
    setStep(4);
  };

  const handleContactInfoChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleTitleSelect = (title) => {
    setFormData((prev) => ({ ...prev, contactTitle: title }));
  };

  const workTypes = [
    { id: "roof", label: "Toiture", icon: Factory },
    { id: "facade", label: "Façade", icon: Layers },
    { id: "isolation", label: "Isolation", icon: Thermometer },
  ];

  const handleSubmit = () => {
    // Vérifier si tous les champs nécessaires sont remplis
    if (!formData.firstName || !formData.lastName || !formData.num) {
      setError("Veuillez remplir tous les champs obligatoires");
      return;
    }

    setIsSubmitting(true);
    setError(null);

    // Préparer les données pour EmailJS avec les noms de variables exacts du template
    const templateParams = {
      to_email: "lucas.ak49@hotmail.com",
      contactTitle: formData.contactTitle, // Contrat: {{contactTitle}}
      firstName: formData.firstName, // Prénom du client: {{firstName}}
      lastName: formData.lastName, // Nom de Famille du client: {{lastName}}
      email: formData.email || "non fourni", // email du client: {{email}}
      num: formData.num, // Numéro de telephone du client: {{num}}
      propertyStatus: formData.propertyStatus, // Propriétaire ou Locataire: {{PropertyStatus}}
      propertyType: formData.propertyType, // Maison ou Appartement: {{propertyType}}
      surface: formData.surface, // Surface du logement: {{surface}}
      workTypes: formData.workTypes.join(", "), // Type de travaux: {{workTypes}}
      subject: "Nouvelle demande de Contact sur Global Reno"
    };

    // Utilisez les mêmes identifiants EmailJS que dans le premier formulaire
    const serviceId = 'service_ytmnquu';
    const templateId = 'template_m2mhtnm'; // Vous pourriez avoir besoin de créer un nouveau template adapté à ce formulaire
    const userId = 'Qefwz8LeMgFGv424_';

    emailjs
      .send(serviceId, templateId, templateParams, userId)
      .then(() => {
        console.log('Succès - email envoyé');
        setSubmitted(true);
        setIsSubmitting(false);
      })
      .catch((error) => {
        console.error('Erreur lors de l\'envoi:', error);
        setError("Une erreur est survenue lors de l'envoi du formulaire. Veuillez réessayer.");
        setIsSubmitting(false);
      });
  };

  const canContinue = () => {
    switch (step) {
      case 1:
        return !!formData.propertyType;
      case 2:
        return !!formData.surface;
      case 3:
        return formData.workTypes.length > 0;
      case 4:
        return !!formData.propertyStatus;
      case 5:
        return !!formData.contactTitle && !!formData.firstName && !!formData.lastName && !!formData.num;
      default:
        return false;
    }
  };

  const handleContinue = () => {
    if (canContinue()) {
      setStep((prev) => prev + 1);
    }
  };

  return (
    <div className="">
      <div className="w-full max-w-md bg-gray-100 rounded-xl shadow-lg p-10">
        <h1 className="text-2xl font-bold text-center mb-6 text-gray-800">
          Demandez un devis pour vos travaux de rénovation
        </h1>

        {/* Step 1: Property Type */}
        {step === 1 && (
          <div className="space-y-4">
            <h2 className="text-lg font-semibold text-center text-gray-700">
              Vos travaux concernent-ils une maison ou un appartement ?
            </h2>
            <div className="grid grid-cols-2 gap-4">
              {[
                { type: "maison", icon: Home, label: "Maison" },
                { type: "appartement", icon: Building, label: "Appartement" },
              ].map(({ type, icon: Icon, label }) => (
                <button
                  key={type}
                  onClick={() => handlePropertyTypeSelect(type)}
                  className={`flex flex-col items-center p-6 border-2 rounded-lg transition-all duration-300 ${
                    formData.propertyType === type
                      ? "border-gray-500 bg-green-50 text-orange-600"
                      : "border-gray-500 hover:border-green-300 text-gray-600"
                  }`}
                >
                  <Icon size={48} className="mb-2" />
                  <span className="font-medium">{label}</span>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Step 2: Surface Area */}
        {step === 2 && (
          <div className="space-y-4">
            <h2 className="text-lg font-semibold text-center text-gray-700">
              Quelle est la superficie de votre logement ?
            </h2>
            <input
              type="number"
              inputMode="decimal"
              placeholder="Surface en m²"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
              value={formData.surface}
              onChange={handleSurfaceInput}
              min="2"
              step="0.1"
            />
            {formData.surface && (
              <button
                onClick={handleContinue}
                className="w-full bg-green-500 text-white p-3 rounded-lg hover:bg-green-600 transition-colors mt-4"
              >
                Continuer
              </button>
            )}
          </div>
        )}

        {/* Step 3: Work Types (Multiple Selection) */}
        {step === 3 && (
          <div className="space-y-4">
            <h2 className="text-lg font-semibold text-center text-gray-700">
              Quels travaux souhaitez-vous réaliser ?
            </h2>
            <div className="grid grid-cols-3 gap-4">
              {workTypes.map(({ id, label, icon: Icon }) => (
                <button
                  key={id}
                  onClick={() => handleWorkTypeSelect(id)}
                  className={`flex flex-col items-center p-4 border-2 rounded-lg transition-all duration-300 ${
                    formData.workTypes.includes(id)
                      ? "border-orange-500 bg-orange-100 text-orange-400"
                      : "border-gray-200 hover:border-gray-300 text-gray-600"
                  }`}
                >
                  <Icon size={48} className="mb-2" />
                  <span className="text-sm text-center">{label}</span>
                </button>
              ))}
            </div>
            {formData.workTypes.length > 0 && (
              <button
                onClick={handleContinue}
                className="w-full bg-green-500 text-white p-3 rounded-lg hover:bg-green-600 transition-colors mt-4"
              >
                Continuer
              </button>
            )}
          </div>
        )}

        {/* Step 4: Property Status */}
        {step === 4 && (
          <div className="space-y-4">
            <h2 className="text-lg font-semibold text-center text-gray-700">
              Êtes-vous propriétaire ou locataire ?
            </h2>
            <div className="grid grid-cols-2 gap-4">
              {[
                { status: "locataire", icon: Key, label: "Locataire" },
                { status: "proprietaire", icon: User, label: "Propriétaire" },
              ].map(({ status, icon: Icon, label }) => (
                <button
                  key={status}
                  onClick={() => handlePropertyStatusSelect(status)}
                  className={`flex flex-col items-center p-4 border-2 rounded-lg transition-all duration-300 ${
                    formData.propertyStatus === status
                      ? "border-orange-500 bg-orange-50 text-orange-600"
                      : "border-gray-200 hover:border-gray-300 text-gray-600"
                  }`}
                >
                  <Icon size={48} className="mb-2" />
                  <span className="font-medium">{label}</span>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Step 5: Contact Information */}
        {step === 5 && !submitted && (
          <div className="space-y-4">
            <h2 className="text-lg font-semibold text-center text-gray-700">
              Comment vous appelez-vous ?
            </h2>
            <div className="grid grid-cols-2 gap-4 mb-4">
              {["Madame", "Monsieur"].map((title) => (
                <button
                  key={title}
                  onClick={() => handleTitleSelect(title)}
                  className={`p-2 border-2 rounded-lg transition-all duration-300 ${
                    formData.contactTitle === title
                      ? "border-orange-500 bg-orange-50 text-orange-600"
                      : "border-gray-200 hover:border-gray-300 text-gray-600"
                  }`}
                >
                  {title}
                </button>
              ))}
            </div>
            <input
              type="text"
              name="firstName"
              placeholder="Prénom"
              className="w-full p-3 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-orange-500"
              value={formData.firstName}
              onChange={handleContactInfoChange}
            />
            <input
              type="text"
              name="lastName"
              placeholder="Nom"
              className="w-full p-3 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-orange-500"
              value={formData.lastName}
              onChange={handleContactInfoChange}
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="w-full p-3 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-orange-500"
              value={formData.email || ""}
              onChange={handleContactInfoChange}
            />
            <input
              type="tel"
              name="num"
              placeholder="Votre numéro"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
              value={formData.num}
              onChange={handleContactInfoChange}
            />

            {error && (
              <div className="text-red-500 text-sm mt-2">{error}</div>
            )}
          </div>
        )}

        {/* Navigation Buttons */}
        <div className="flex justify-between mt-6">
          {step > 1 && !submitted && (
            <button
              onClick={() => setStep((prev) => prev - 1)}
              className="text-orange-500 hover:bg-orange-50 p-2 rounded transition-colors"
              disabled={isSubmitting}
            >
              ← Retour
            </button>
          )}
          {step < 5 && step !== 2 && step !== 3 && canContinue() && (
            <button
              onClick={handleContinue}
              className="ml-auto bg-green-500 text-white p-2 rounded hover:bg-blue-900 transition-colors"
            >
              Continuer
            </button>
          )}
        </div>

        {/* Final Submit Button */}
        {step === 5 && !submitted && (
          <div className="mt-6">
            <button
              onClick={handleSubmit}
              className="w-full bg-green-500 text-white p-3 rounded-lg hover:bg-green-600 transition-colors"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Envoi en cours..." : "Soumettre"}
            </button>
          </div>
        )}

        {/* Confirmation Message */}
        {submitted && (
          <div className="mt-6 text-center text-green-600 font-semibold">
            <p>Merci pour votre demande ! Nous vous contacterons bientôt.</p>
            <button
              onClick={() => {
                setFormData({
                  propertyType: "",
                  surface: "",
                  workTypes: [],
                  propertyStatus: "",
                  contactTitle: "",
                  firstName: "",
                  lastName: "",
                  email: "",
                  num: "",
                });
                setSubmitted(false);
                setStep(1);
              }}
              className="mt-4 bg-gray-200 text-gray-800 p-2 rounded hover:bg-gray-300 transition-colors"
            >
              Nouvelle demande
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
