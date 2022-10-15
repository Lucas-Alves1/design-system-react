import { FormEvent, useState } from "react";
import axios from 'axios';
import { Checkbox } from "../components/Checkbox";
import { Envelope, Lock } from "phosphor-react";
import { Button } from "../components/Button";
import { Heading } from "../components/Heading";
import { Text } from "../components/Text";
import { TextInput } from "../components/TextInput";
import { Logo } from "../Logo";

export function SignIn() {
    const [usuarioLogado, setUsuarioLogado] = useState(true)

    async function handleSignIn(event: FormEvent) {
        event.preventDefault();

        await axios.post('/sessios', {
            email: 'lucas.lago.cont@gmail.com',
            password: '12345'
        })

        setUsuarioLogado(false)
    }

    return (
        <div className="w-screen h-screen flex flex-col items-center justify-center bg-gray-900 text-gray-100">
            <header className='flex flex-col items-center'>
                <Logo />

                <Heading size="lg" className='mt-4'>Ignite Lab</Heading>

                <Text size="lg" className='text-gray-400 mt-2'>Faça Login e comece a usar!</Text>
            </header>

            <form onSubmit={handleSignIn} className='flex flex-col items-stretch w-full max-w-sm mt-10 gap-4'>
                { usuarioLogado ? true : <Text className="text-center text-cyan-500">Login Realizado!</Text> }


                <label htmlFor="email" className='flex flex-col gap-3'>
                    <Text className='font-semibold'>Endereço de e-mail:</Text>
                    <TextInput.Root>
                        <TextInput.Icon>
                            <Envelope />
                        </TextInput.Icon>

                        <TextInput.Input id='email' type='email' placeholder='exemplo@email.com' />
                    </TextInput.Root>
                </label>

                <label htmlFor="password" className='flex flex-col gap-3'>
                    <Text className='font-semibold'>Sua Senha:</Text>
                    <TextInput.Root>
                        <TextInput.Icon>
                            <Lock />
                        </TextInput.Icon>

                        <TextInput.Input id='password' type='password' placeholder='*********' />
                    </TextInput.Root>
                </label>

                <label htmlFor='remember' className='flex items-center gap-2'>
                    <Checkbox id='remember' />
                    <Text size='sm' className='text-gray-200'>Lembrar de mim por 30 dias</Text>
                </label>

                <Button type='submit' className='mt-4'>Entrar na Plataforma</Button>

            </form>

            <footer className='flex flex-col items-center gap-4 mt-8'>
                <Text asChild size='sm'>
                    <a href="" className='text-gray-400 underline hover:text-gray-200'>Esqueceu sua senha?</a>
                </Text>

                <Text asChild size='sm'>
                    <a href="" className='text-gray-400 underline hover:text-gray-200'>Não possui conta? Crie uma agora!</a>
                </Text>
            </footer>
        </div>
    )
}