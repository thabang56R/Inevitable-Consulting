import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import PrivacyPolicyModal from "./PrivacyPolicyModal";
import "../styles.css";

export default function CookieConsent() {
  // Always show on page load (no localStorage)
  const [visible, setVisible] = useState(true);
  const [policyOpen, setPolicyOpen] = useState(false);

  return (
    <>
      {/* COOKIE CONSENT BANNER */}
      <AnimatePresence>
        {visible && (
          <motion.div
            className="cookie-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="cookie-banner"
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 100, opacity: 0 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              <p>
                We use cookies to enhance your experience and analyze site
                traffic. By continuing, you agree to our{" "}
                <button
                  className="policy-link"
                  onClick={() => setPolicyOpen(true)}
                >
                  Privacy Policy
                </button>.
              </p>

              <button
                className="accept-btn"
                onClick={() => setVisible(false)}
              >
                Accept
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* PRIVACY POLICY MODAL */}
      <PrivacyPolicyModal
        open={policyOpen}
        onClose={() => setPolicyOpen(false)}
      />
    </>
  );
}