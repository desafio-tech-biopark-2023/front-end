import SessionProvider from "../contexts/sessionContext";
import { IAuthProvider } from "../interfaces/person";

const Providers = ({ children }: IAuthProvider) => {
  return <SessionProvider>{children}</SessionProvider>;
};
export { Providers };
