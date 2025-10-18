import { useEffect, useRef, useState, useCallback } from 'react';
import PropTypes from 'prop-types';

const SITE_KEY = '6LcAL-srAAAAAG8d3GcjxJGtD2jYDLUKaj7umuBo';

/**
 * ReCAPTCHA v3 component that provides invisible protection
 * @param {Object} props - Component props
 * @param {Function} props.onVerify - Callback function when reCAPTCHA is verified
 * @param {string} [props.action='submit'] - Action name for reCAPTCHA
 * @param {Function} [props.onError] - Error handler callback
 * @param {boolean} [props.autoExecute=true] - Whether to execute reCAPTCHA on mount
 * @returns {null} No visible UI for reCAPTCHA v3
 */
const ReCAPTCHA = ({
  onVerify,
  action = 'submit',
  onError = (error) => console.error('reCAPTCHA Error:', error),
  autoExecute = true,
}) => {
  const [isReady, setIsReady] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const recaptchaRef = useRef(null);

  // Initialize reCAPTCHA
  useEffect(() => {
    // Skip if already loaded
    if (window.grecaptcha) {
      handleRecaptchaLoad();
      return;
    }

    // Load reCAPTCHA script
    const script = document.createElement('script');
    script.src = `https://www.google.com/recaptcha/api.js?render=${SITE_KEY}`;
    script.async = true;
    script.defer = true;
    script.onload = handleRecaptchaLoad;
    script.onerror = handleScriptError;

    document.body.appendChild(script);

    return () => {
      // Cleanup
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
      setIsReady(false);
      recaptchaRef.current = null;
    };
  }, []);

  const handleRecaptchaLoad = useCallback(() => {
    try {
      window.grecaptcha.ready(() => {
        recaptchaRef.current = window.grecaptcha;
        setIsReady(true);
        setIsLoading(false);
        
        // Auto-execute if enabled
        if (autoExecute) {
          executeRecaptcha();
        }
      });
    } catch (err) {
      handleError('Failed to load reCAPTCHA', err);
    }
  }, [autoExecute]);

  const handleScriptError = useCallback(() => {
    const errorMsg = 'Failed to load reCAPTCHA script';
    handleError(errorMsg);
  }, []);

  const handleError = useCallback((message, error) => {
    const errorObj = error || new Error(message);
    setError(errorObj);
    onError(errorObj);
    setIsLoading(false);
  }, [onError]);

  /**
   * Executes the reCAPTCHA verification
   * @returns {Promise<string|null>} The reCAPTCHA token or null if failed
   */
  const executeRecaptcha = useCallback(async () => {
    if (!isReady || !recaptchaRef.current) {
      handleError('reCAPTCHA not ready');
      return null;
    }

    setIsLoading(true);
    setError(null);

    try {
      const token = await recaptchaRef.current.execute(SITE_KEY, { action });
      if (onVerify) {
        onVerify(token);
      }
      return token;
    } catch (err) {
      handleError('reCAPTCHA execution failed', err);
      return null;
    } finally {
      setIsLoading(false);
    }
  }, [isReady, action, onVerify, handleError]);

  // No visible UI for reCAPTCHA v3
  return null;
};

ReCAPTCHA.propTypes = {
  onVerify: PropTypes.func.isRequired,
  action: PropTypes.string,
  onError: PropTypes.func,
  autoExecute: PropTypes.bool,
};

export { ReCAPTCHA };
export default ReCAPTCHA;