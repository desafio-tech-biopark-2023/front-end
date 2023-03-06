import RegisterProvider from "../contexts/registerContext";
import SessionProvider from "../contexts/sessionContext";
import { IAuthProvider } from "../interfaces/person";

const Providers = ({ children }: IAuthProvider) => {
  return (
    <SessionProvider>
      <RegisterProvider>{children}</RegisterProvider>
    </SessionProvider>
  );
};
export { Providers };
