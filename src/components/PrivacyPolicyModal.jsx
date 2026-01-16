import { motion, AnimatePresence } from "framer-motion";
import "../styles.css";

export default function PrivacyPolicyModal({ open, onClose }) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="privacy-backdrop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="privacy-modal"
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 40, opacity: 0 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
          >
            <button className="close-btn" onClick={onClose}>
              ✕
            </button>

            <h2>Privacy Policy</h2>

            <div className="privacy-content">
              <p>
                Inevitable Accounting and Advisory is committed to protecting
                your personal information in accordance with the Protection of
                Personal Information Act (POPIA) and applicable data protection
                laws.
              </p>

              <h4>Information We Collect</h4>
              <p>
                We may collect personal information including your name, email
                address, contact number, and business-related information when
                you interact with our website or services.
              </p>

              <h4>Use of Information</h4>
              <p>
                Personal information is used strictly for professional service
                delivery, communication, compliance obligations, and service
                improvement.
              </p>

              <h4>Cookies</h4>
              <p>
                This website uses cookies to enhance user experience and analyze
                site traffic. Cookies do not collect personally identifiable
                information unless explicitly provided.
              </p>

              <h4>Data Security</h4>
              <p>
                We implement appropriate technical and organizational measures
                to safeguard personal data against unauthorized access,
                disclosure, or misuse.
              </p>

              <h4>Contact</h4>
              <p>
                For privacy-related queries, contact:
                <br />
                <b>info@inevitableconsulting.co.za</b>
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
