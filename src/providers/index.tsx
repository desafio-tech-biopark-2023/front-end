import MainProvider from "../contexts/mainContext";
import RegisterProvider from "../contexts/registerContext";
import SessionProvider from "../contexts/sessionContext";
import { IAuthProvider } from "../interfaces/person";

const Providers = ({ children }: IAuthProvider) => {
  return (
    <MainProvider>
      <SessionProvider>
        <RegisterProvider>{children}</RegisterProvider>
      </SessionProvider>
    </MainProvider>
  );
};
export { Providers };
