import { createContext, Dispatch, SetStateAction } from "react";

type Context = {
    name: string
    setName: Dispatch<SetStateAction<string>>
}

const UserContext = createContext<Context>({ } as Context);

export default UserContext;