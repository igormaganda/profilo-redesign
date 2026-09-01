import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Cookie } from "lucide-react";

export const CookieBanner = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!localStorage.getItem("profilo-cookies")) setVisible(true);
  }, []);

  const answer = (value) => {
    localStorage.setItem("profilo-cookies", value);
    setVisible(false);
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 24 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="cookie-banner card-glow rounded-2xl border border-black/5 bg-white p-5"
          data-testid="cookie-banner"
          role="dialog"
          aria-label="Consentement cookies"
        >
          <div className="flex items-start gap-3">
            <Cookie className="mt-0.5 h-5 w-5 shrink-0 text-brand-violet" />
            <p className="text-xs leading-relaxed text-brand-mute">
              Nous utilisons des cookies pour améliorer votre expérience et analyser le trafic. En continuant, vous
              acceptez notre{" "}
              <Link to="/politique-confidentialite" className="text-brand-violet underline-offset-2 hover:underline">
                politique de confidentialité
              </Link>
              .
            </p>
          </div>
          <div className="mt-4 flex gap-2">
            <button
              onClick={() => answer("refused")}
              data-testid="cookie-refuse-button"
              className="flex-1 rounded-full border border-black/10 px-4 py-2 text-xs font-medium text-brand-ink transition-colors duration-200 hover:border-brand-violet/40"
            >
              Refuser
            </button>
            <button
              onClick={() => answer("accepted")}
              data-testid="cookie-accept-button"
              className="flex-1 rounded-full bg-brand-violet px-4 py-2 text-xs font-semibold text-white transition-colors duration-200 hover:bg-violet-500"
            >
              Accepter
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
