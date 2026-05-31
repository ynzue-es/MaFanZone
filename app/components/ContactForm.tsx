"use client";

import { useState } from "react";

// Clé publique Web3Forms (utilisable côté client).
const WEB3FORMS_ACCESS_KEY = "4d5d9aef-e812-4d44-b102-fe204a97f71f";

type Status = "idle" | "sending" | "success" | "error";

const champ =
  "w-full rounded-md border border-slate-300 bg-white px-4 py-3 text-base text-slate-900 placeholder-slate-400 outline-none transition focus:border-marine focus:ring-2 focus:ring-marine/30";
const label = "mb-1.5 block text-sm font-semibold text-marine";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (status === "sending") return;

    const form = event.currentTarget;
    const formData = new FormData(form);

    // Validation minimale côté client
    const nom = String(formData.get("nom") || "").trim();
    const email = String(formData.get("email") || "").trim();
    if (!nom || !email) {
      setStatus("error");
      setErrorMsg("Merci d’indiquer au moins votre nom et votre email.");
      return;
    }

    // Champs Web3Forms
    formData.append("access_key", WEB3FORMS_ACCESS_KEY);
    formData.append("subject", "Nouvelle demande de devis — MaFanZone");
    formData.append("from_name", "Site MaFanZone");

    setStatus("sending");
    setErrorMsg("");

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { Accept: "application/json" },
        body: formData,
      });
      const data = await res.json();
      if (res.ok && data.success) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
        setErrorMsg(
          data.message ||
            "L’envoi a échoué. Réessayez ou écrivez-nous directement par email."
        );
      }
    } catch {
      setStatus("error");
      setErrorMsg(
        "Impossible d’envoyer le message. Vérifiez votre connexion et réessayez."
      );
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-2xl border-2 border-marine/15 bg-creme p-8 text-center">
        <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-marine text-white">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M20 6 9 17l-5-5" />
          </svg>
        </div>
        <h3 className="text-xl font-bold text-marine">Demande envoyée, merci&nbsp;!</h3>
        <p className="mx-auto mt-2 max-w-md text-slate-600">
          Nous revenons vers vous très vite avec un devis gratuit et sans
          engagement.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-6 text-sm font-semibold text-rouge underline underline-offset-4 hover:text-rouge-dark"
        >
          Envoyer une autre demande
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="grid gap-5">
      {/* Anti-spam (honeypot) — invisible pour les humains */}
      <input
        type="checkbox"
        name="botcheck"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="hidden"
        style={{ display: "none" }}
      />

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="nom" className={label}>
            Votre nom *
          </label>
          <input id="nom" name="nom" type="text" required className={champ} />
        </div>
        <div>
          <label htmlFor="club" className={label}>
            Club / association
          </label>
          <input id="club" name="club" type="text" className={champ} />
        </div>
        <div>
          <label htmlFor="email" className={label}>
            Email *
          </label>
          <input id="email" name="email" type="email" required className={champ} />
        </div>
        <div>
          <label htmlFor="telephone" className={label}>
            Téléphone
          </label>
          <input id="telephone" name="telephone" type="tel" className={champ} />
        </div>
        <div>
          <label htmlFor="match" className={label}>
            Date ou match visé
          </label>
          <input
            id="match"
            name="match"
            type="text"
            placeholder="Ex. Finale de la Coupe, 14 juillet…"
            className={champ}
          />
        </div>
        <div>
          <label htmlFor="lieu" className={label}>
            Lieu / ville
          </label>
          <input id="lieu" name="lieu" type="text" className={champ} />
        </div>
      </div>

      <div>
        <label htmlFor="message" className={label}>
          Votre message
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          placeholder="Parlez-nous de votre projet : nombre de personnes attendues, lieu, besoins particuliers…"
          className={`${champ} resize-y`}
        />
      </div>

      {status === "error" && (
        <p
          role="alert"
          className="rounded-md border border-rouge/30 bg-rouge/5 px-4 py-3 text-sm font-medium text-rouge-dark"
        >
          {errorMsg}
        </p>
      )}

      <button
        type="submit"
        disabled={status === "sending"}
        className="inline-flex items-center justify-center rounded-full bg-rouge px-7 py-3.5 text-base font-bold text-white shadow-sm transition hover:bg-rouge-dark disabled:cursor-not-allowed disabled:opacity-70"
      >
        {status === "sending" ? "Envoi en cours…" : "Demander mon devis gratuit"}
      </button>

      <p className="text-xs text-slate-500">
        Devis gratuit et sans engagement. Vos informations restent
        confidentielles et ne servent qu’à vous recontacter.
      </p>
    </form>
  );
}
