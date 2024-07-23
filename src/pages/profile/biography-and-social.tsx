import { GithubIcon, Linkedin } from "lucide-react";

export function Biography() {
  return (
    <>
      <div className="w-[768px] flex items-center justify-center m-auto">
        <div className="w-32 h-32 bg-black border border-zinc-400 border-dashed rounded-full my-5 overflow-hidden relative">
          <img className="absolute top-0 w-full" src="/perfil_novo2.jpg" alt="Foto de perfil Guilherme Valeriano" />
        </div>
      </div>
      <div className="text-center">
        <h1 className="text-zinc-300 font-semibold text-lg">Guilherme Henrique Valeriano</h1>
        <span className="text-red-700">Desenvolvedor Full Stack</span>
        <p className="text-sm text-zinc-400 p-2.5 text-left">
          Meu nome é Guilherme, e sou apaixonado por tecnologia, iniciei minha carreira na área há 11 anos atrás,
          onde frameworks e ferramentas automatizadas ainda não eram comuns. Comecei dentro do universo JAVA,
          aplicando conceitos de <span className="text-red-700">J2EE</span>, <span className="text-red-700">JPA</span>,
          <span className="text-red-700"> JSP</span>, <span className="text-red-700">JDBC</span>, para o frontend
          <span className="text-red-700"> JavaScript</span>,<span className="text-red-700"> jQuery </span>
          e banco de dados <span className="text-red-700">DB2</span>. <br />
          Rapidamente fui me destacando e ganhando conhecimento principalmente na parte WEB,
          imergindo no universo da responsividade com <span className="text-red-700">bootstrap</span> e me
          aventurando com novas tecnologias <span className="text-red-700">HTML5</span> e
          <span className="text-red-700"> CSS3</span> e seus pré-processadores <span className="text-red-700">SASS </span>, <span className="text-red-700">Styled-components</span>. Ingressei em grandes projetos utilizando
          <span className="text-red-700"> C#</span>, <span className="text-red-700">VB</span>,
          <span className="text-red-700"> ASP</span>, banco de dados <span className="text-red-700">PostgreSQL</span> e  <span className="text-red-700">MongoDB</span>.
          Com a paixão pelo desenvolvimento, pela tecnologia e principalmente pelo mundo do JavaScript investi meu tempo em certificações de formação em
          <span className="text-red-700"> AngularJS</span>, <span className="text-red-700">ReactJS</span> e <span className="text-red-700">NodeJS</span>.<br />
          Conhecimento em métodologias ágeis como <span className="text-red-700">SCRUM</span>, testes automatizados com <span className="text-red-700">JEST</span> e um pézinho em desenvolvimento de jogos.
        </p>
      </div>
      <div className="w-[768px] flex flex-wrap gap-2 items-center justify-center">
        <div className="flex flex-row gap-2 my-4">
          <a href="https://www.linkedin.com/in/guilherme-valeriano-189208155/" target="_blank"><Linkedin className="size-7" /></a>
          <a href="https://github.com/gvaleriano" target="_blank"><GithubIcon className="size-7" /></a>
        </div>
      </div>
    </>
  )
}