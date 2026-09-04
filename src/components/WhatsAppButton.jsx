import { companyData } from '../data';

const whatsappIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="w-8 h-8"
  >
    <path
      fillRule="evenodd"
      d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75 0 1.705.438 3.308 1.22 4.721L2.25 21.75l5.166-1.157A9.704 9.704 0 0012 21.75c5.385 0 9.75-4.365 9.75-9.75s-4.365-9.75-9.75-9.75zm0 1.5c4.556 0 8.25 3.694 8.25 8.25S16.556 20.25 12 20.25a8.204 8.204 0 01-4.041-1.05l-.289-.172-3.036.68.694-2.956-.188-.299A8.203 8.203 0 013.75 12c0-4.556 3.694-8.25 8.25-8.25zm-3.86 5.25c-.24-.002-.551.08-.82.35-.27.27-1.02 1-1.02 2.43 0 1.43 1.05 2.82 1.2 3.02.15.2 2.05 3.12 4.96 4.32 2.91 1.2 2.91.8 3.44.75.54-.05 1.74-.71 1.99-1.4.24-.69.24-1.28.16-1.4-.08-.12-.29-.2-.6-.35-.31-.15-1.84-.91-2.12-1.01-.28-.1-.49-.15-.7.15-.2.3-.8 1.01-1 1.21-.19.2-.39.23-.7.08-.31-.15-1.31-.48-2.5-1.54-.93-.82-1.55-1.83-1.74-2.13-.19-.3 0-.46.15-.61.13-.13.31-.35.46-.53.15-.17.21-.3.31-.49.1-.19.05-.37-.02-.52-.08-.15-.7-1.7-.96-2.33-.25-.6-.52-.52-.7-.53h-.6z"
      clipRule="evenodd"
    />
  </svg>
);

export const WhatsAppButton = () => {
  return (
    <a
      href={companyData.contacto.whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 grid place-items-center w-14 h-14 bg-green-500 rounded-full shadow-lg hover:bg-green-600 transition-colors duration-300 animate-bounce"
      aria-label="Contactar por WhatsApp"
    >
      {whatsappIcon}
    </a>
  );
};

export default WhatsAppButton;
