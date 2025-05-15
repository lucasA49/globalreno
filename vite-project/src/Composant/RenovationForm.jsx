import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import emailjs from "emailjs-com";
function RenovationForm () {
  const [logement, setLogement] = useState(null);
  const [superficie, setSuperficie] = useState("");
  const [travaux, setTravaux] = useState([]);
  const [proprietaire, setProprietaire] = useState(null);
  const [nom, setNom] = useState("");
  const [prenom, setPrenom] = useState("");

  console.log("coucou je suis RenovationForm ")

  const handleTravauxChange = (event) => {
    const value = event.target.value;
    if (travaux.includes(value)) {
      setTravaux(travaux.filter((item) => item !== value));
    } else {
      setTravaux([...travaux, value]);
    }
  };

  const ContactForm = () => {
    const {
      register,
      formState: { },
      handleSubmit,
      reset,
    } = useForm({
      resolver: yupResolver(schema),
    });

    const onSubmit = (data) => {
      alert("😀 Merci pour votre message, il sera traité au plus vite 😀");
      const templateId = "template_m2mhtnm";
      const serviceId = "service_ytmnquu";

      sendFeedback(serviceId, templateId, {
        to_email: "lucas.ak49@hotmail.com",
        logement: data.logement,
        superficie: data.superficie,
        travaux: data.travaux,
        proprietaire: data.proprietaire,
        nom: data.nom,
        prenom: data.prenom,
      });

      reset();
    };

    const sendFeedback = (serviceId, templateId, variables) => {
      emailjs
        .send(serviceId, templateId, variables, "Qefwz8LeMgFGv424_")
        .then(() => {
          console.log("Succès");
        })
        .catch(() => {
          console.error("Il y a une erreur");
        });
    };

    console.log(" logement :", logement);
    return (
      <div className="flex space-x-10 p-8">
        <div className="w-1/3 bg-gray-100 p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-bold mb-4 ">
            Demandez un devis pour vos travaux de rénovation
          </h3>

          {/* Type de logement */}
          <form  onSubmit={handleSubmit(onSubmit)} className="mb-6">
            <h4 className="text-lg font-semibold">Type de logement</h4>
            <div>
              <input
                type="radio"
                id="maison"
                name="logement"
                value="Maison"
                onChange={(e) => setLogement(e.target.value)}
                className="mr-2"
              />
              <label htmlFor="maison">Maison</label>
            </div>
            <div>
              <input
                type="radio"
                id="appartement"
                name="logement"
                value="Appartement"
                onChange={(e) => setLogement(e.target.value)}
                className="mr-2"
                {...register("logement")}

              />
              <label htmlFor="appartement">Appartement</label>
            </div>
          </form>

          {/* Superficie */}
          {logement && (
            <div className="mb-6">
              <h4 className="text-lg font-semibold">
                Quelle est la superficie de votre logement ?
              </h4>
              <input
                type="number"
                value={superficie}
                onChange={(e) => setSuperficie(e.target.value)}
                placeholder="m²"
                className="p-2 w-full border rounded-md"
              />
            </div>
          )}

          {/* Travaux */}
          {superficie && (
            <div className="mb-6">
              <h4 className="text-lg font-semibold">
                Quels travaux souhaitez-vous réaliser ?
              </h4>
              <div>
                <input
                  type="checkbox"
                  id="toiture"
                  value="Toiture"
                  onChange={handleTravauxChange}
                  className="mr-2"
                  {...register("toiture")}

                />
                <label htmlFor="toiture">Toiture</label>
              </div>
              <div>
                <input
                  type="checkbox"
                  id="facade"
                  value="Facade"
                  onChange={handleTravauxChange}
                  className="mr-2"
                  {...register("facade")}

                />
                <label htmlFor="facade">Façade</label>
              </div>
              <div>
                <input
                  type="checkbox"
                  id="isolation"
                  value="Isolation"
                  onChange={handleTravauxChange}
                  className="mr-2"
                  {...register("isolation")}

                />
                <label htmlFor="isolation">Isolation</label>
              </div>
              <div>
                <input
                  type="checkbox"
                  id="peinture"
                  value="Peinture"
                  onChange={handleTravauxChange}
                  className="mr-2"
                  {...register("peinture")}
                />
                <label htmlFor="peinture">Peinture</label>
              </div>
            </div>
          )}

          {/* Propriétaire ou locataire */}
          {travaux.length > 0 && (
            <div className="mb-6">
              <h4 className="text-lg font-semibold">
                Êtes-vous propriétaire ou locataire ?
              </h4>
              <div>
                <input
                  type="radio"
                  id="locataire"
                  name="locataire"
                  value="Locataire"
                  onChange={(e) => setProprietaire(e.target.value)}
                  className="mr-2"
                  {...register("locataire")}
                />
                <label htmlFor="locataire">Locataire</label>
              </div>
              <div>
                <input
                  type="radio"
                  id="proprietaire"
                  name="proprietaire"
                  value="Propriétaire"
                  onChange={(e) => setProprietaire(e.target.value)}
                  className="mr-2"
                  {...register("proprietaire")}
                />
                <label htmlFor="proprietaire">Propriétaire</label>
              </div>
            </div>
          )}

          {/* Nom et prénom */}
          {proprietaire && (
            <div className="mb-6">
              <h4 className="text-lg font-semibold">
                Comment vous appelez-vous ?
              </h4>
              <input
                type="text"
                placeholder="Prénom"
                value={prenom}
                onChange={(e) => setPrenom(e.target.value)}
                className="p-2 w-full border rounded-md mb-4"
                {...register("prenom")}

              />
              <input
                type="text"
                placeholder="Nom"
                value={nom}
                onChange={(e) => setNom(e.target.value)}
                className="p-2 w-full border rounded-md"
                {...register("prenom")}

              />
            </div>
          )}

          <button className="w-full bg-orange-500 text-white p-3 rounded-md hover:bg-orange-600">
            Continuer
          </button>
        </div>

        {/* Récapitulatif */}
        <div className="w-2/3 bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-bold mb-4">
            Récapitulatif de votre demande
          </h3>
          <p>Logement: {data.logement}</p>
          <p>Superficie: {data.superficie} m²</p>
          <p>Travaux: {data.travaux.join(", ")}</p>
          <p>Statut: {data.proprietaire}</p>
          <p>
            Nom: {data.prenom} {data.nom}
          </p>
        </div>
      </div>
    );
  };
}
export default RenovationForm;
