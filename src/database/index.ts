import { User } from "../interfaces/auth.interface";
import { mockUsers } from "./Users";

export function getUserByCredentials(matricula:string, senha: string): User | null {
    console.log('Verificando credenciais na lista de usuários mockados');

    const foundUser = mockUsers.find(
        (user) => user.matricula === matricula && user.senha === senha
    )

    if (foundUser){
        console.log(`Credenciais corretas. Usuário encontrado: ${foundUser.nome}`);
        return foundUser;
    }

    console.log('Credenciais incorretas ou usuário não encontrado.');
    return null
}