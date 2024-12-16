import { useState } from "react";
import "./App.css";
import { motion } from "motion/react";
import { z } from "zod";

function App() {
  const [text, setText] = useState(""); // État pour le texte de l'entrée
  const [result, setResult] = useState<string | null>(null); // Résultat de l'analyse
  const [loading, setLoading] = useState(false); // État de chargement

  const schema = z.string();

  const getContenu = async () => {
    try {
      // Validation du texte avant envoi
      schema.parse(text);

      setLoading(true);
      setResult(null);

      // Requête vers le backend
      const response = await fetch(`http://localhost:3000/classify?text=${encodeURIComponent(text)}`);
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const json = await response.json();
      setResult(json.result); // Assurez-vous que la réponse a un champ "result"
    } catch (error) {
      console.error("Erreur lors de la requête :", error);
      setResult("Une erreur est survenue.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="p-5 min-w-[250px] h-auto text-center">
      <div>
        <h1 className="text-xl font-bold">Start Demat IA!</h1>
        <motion.img
          initial={{ scale: 1 }}
          animate={{ scale: 1.2 }}
          transition={{ repeatType: "reverse", duration: 0.5, repeat: Infinity }}
          src="/icon.png"
          className="logo react"
          width={"auto"}
          height={"auto"}
          alt="Demat IA logo"
          onClick={() => {
            if (text.trim() === "") {
              alert("Veuillez entrer un texte à analyser.");
            } else {
              getContenu();
            }
          }}
        />
      </div>
      <div className="card">
        <form
          onSubmit={(e) => {
            e.preventDefault(); // Empêche le rechargement de la page
            getContenu();
          }}
        >
          <input
            id="prompt"
            type="text"
            className="w-full max-w-xs p-2 rounded-lg mb-4"
            placeholder="Enter text here"
            value={text}
            onChange={(e) => setText(e.target.value)} // Liaison avec l'état
          />
          <button
            type="submit"
            className="p-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700"
          >
            Analyser
          </button>
        </form>
        {loading ? (
          <p>Analyse en cours...</p>
        ) : (
          result && <p className="mt-4">{result}</p>
        )}
      </div>
      <p className="read-the-docs">
        Cliquez sur le logo Demat IA pour lancer une analyse
      </p>
    </main>
  );
}

export default App;
