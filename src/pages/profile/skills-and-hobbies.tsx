import { Dribbble, Ghost, Headphones, TreePalm } from "lucide-react";

export function SkillsAndHobbies() {
  return (
    <>
      <div className="my-5">
        <h1 className="text-xl text-red-700 font-semibold">Habilidades</h1>
      </div>
      <div className="w-[768px] flex flex-wrap gap-2 rounded-xl py-5 px-6 justify-between">
        <div className="p-2 w-24 h-32 shadow-shape rounded-lg bg-zinc-900">
          <img className="my-2" src="/html.png" alt="html 5" />
        </div>
        <div className="p-2 w-24 h-32 shadow-shape rounded-lg bg-zinc-900">
          <img className="w-full h-full" src="/css.png" alt="css 3" />
        </div>
        <div className="p-2 w-24 h-32 shadow-shape rounded-lg bg-zinc-900">
          <img className="w-full h-full" src="/tailwind.png" alt="javascript" />
        </div>
        <div className="p-2 w-24 h-32 shadow-shape rounded-lg bg-zinc-900">
          <img className="w-full h-full" src="/react.png" alt="reactjs" />
        </div>
        <div className="p-2 w-24 h-32 shadow-shape rounded-lg bg-zinc-900">
          <img className="w-full h-full" src="/node.png" alt="nodejs" />
        </div>
        <div className="p-2 w-24 h-32 shadow-shape rounded-lg bg-zinc-900">
          <img className="w-full h-full" src="/postgres.png" alt="postgresql" />
        </div>
      </div>

      <div className="w-[768px] flex flex-wrap gap-2 rounded-xl py-5 px-6 justify-between">
        <div className="p-2 w-24 h-32 shadow-shape rounded-lg bg-zinc-900">
          <img className="my-2" src="/java.png" alt="java" />
        </div>
        <div className="p-2 w-24 h-32 shadow-shape rounded-lg bg-zinc-900">
          <img className="w-full h-full" src="/nosql.png" alt="nosql" />
        </div>
        <div className="p-2 w-24 h-32 shadow-shape rounded-lg bg-zinc-900">
          <img className="w-full h-full" src="/angular.png" alt="angular" />
        </div>
        <div className="p-2 w-24 h-32 shadow-shape rounded-lg bg-zinc-900">
          <img className="w-full h-full" src="/scrum.png" alt="scrum" />
        </div>
        <div className="p-2 w-24 h-32 shadow-shape rounded-lg bg-zinc-900">
          <img className="w-full h-full" src="/jest.png" alt="jest" />
        </div>
        <div className="p-2 w-24 h-32 shadow-shape rounded-lg bg-zinc-900">
          <img className="w-full h-full" src="/game3.png" alt="Game developer" />
        </div>
      </div>

      <div className="my-5">
        <h1 className="text-xl text-red-700 font-semibold">Hobbies e caraterísticas</h1>
      </div>
      <div className="w-[768px] flex gap-2 rounded-xl py-5 px-6 justify-between">
        <div className="flex w-80 h-full">
          <div className="flex flex-col">
            <p className="text-sm text-zinc-400">
              Sou uma pessoa comunicativa, que gosta muito de sair com os amigos, frequentar sociais e também de jogos, sejam digitais ou de tabuleiro.
              Assistir e jogar futebol, basquete e ouvir música.
              Ir a praia e ter tempos de qualidade com quem amo.</p>
            <div className="w-full bg-zinc-800 my-2" />
            <p className="text-sm text-zinc-400">
              Muito determinado e confiante, sempre a procura de se inovar e ser o melhor em tudo que me proponho a fazer,
              estudando as tendências e melhorando minhas habilidades a cada dia.
            </p>
          </div>
        </div>

        <div className="flex-1 h-full">
          <div className="flex flex-wrap h-full mx-5 justify-between">
            <div className="flex w-36 h-24 shadow-shape rounded-lg bg-zinc-900 justify-center items-center">
              <TreePalm className="size-9 text-red-700" />
            </div>
            <div className="flex w-36 h-24 shadow-shape rounded-lg bg-zinc-900 justify-center items-center">
              <Ghost className="size-9 text-red-700" />
            </div>
            <div className="flex w-36 h-24 shadow-shape rounded-lg bg-zinc-900 justify-center items-center">
              <Headphones className="size-9 text-red-700" />
            </div>
            <div className="flex w-36 h-24 shadow-shape rounded-lg bg-zinc-900 justify-center items-center">
              <Dribbble className="size-9 text-red-700" />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}