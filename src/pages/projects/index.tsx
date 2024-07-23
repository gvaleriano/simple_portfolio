import { useEffect, useState } from "react";
import { Menu } from "../../components/menu";
import { DetailProjectsModal } from "./detail-projects-modal";
//import { vercelApi } from "../../lib/axios";

interface Project {
    uid: string
    name: string
    url: string
    description: string
    thumbnail: string
    skills: {
      framework: string
    }[]
}

export function MainProjectsPage() {
  const [listProjects, setListProjects] = useState<Project[]>([])
  const [isProjectModalOpen, setIsProjectModalOpen] = useState(false)
  const [selectedProject, setSelectedProject] = useState<Project>()
  /*
  useEffect(() => {
    const token = ""
    const config = {  headers: { Authorization: `Bearer ${token}` }} 
    vercelApi.get(`/v6/deployments`, config)
    .then(response => setListProjects(response.data.deployments))
  }, [])
  console.log(listProjects)
  //Simulando uma lista de projetos apenas para visualizar os em deploy no vercel de maneira estatica*/


  useEffect(() => {
    const projects = [{
      uid: "dpl_3h24RTT32iszoR7usXLj8mqNdwUQ",
      name: "Plann.er",
      url: "https://planner-jade-six.vercel.app/",
      description: "Projeto realizado na trilha de ReactJs da RocketSeat, implementadas algumas validações e funcionalidades a mais. Plann.er é um projecto para organizar eventos ou viagens e convidar as pessoas para participar.",
      skills: [{framework: "vite"}, {framework: "react"}, {framework: "html"}, {framework: "tailwind"}, {framework: "js"}],
      thumbnail: 'planner_thumb.png'
    },
    {
      uid: 'dpl_H5E8x9EHcXQC9PERpPz74rtMFQEQ',
      name: 'Cardápio Hashtaurante',
      url: 'https://cardapio-react-seven.vercel.app/',
      description: "Hashtaurante é um cardápio interativo para exibir os produtos do estabelecimento, dividido em categorias. (Ainda sem responsvidade).",
      skills: [{framework: "vite"}, {framework: "react"}, {framework: "html"}, {framework: "css"}, {framework: "js"}],
      thumbnail: 'cardapio_thumb.png'
    },
    {
      uid: "dpl_5ZFFzmKMPQJHXwfGwn69FwBoeCod",
      name: "Lista de produtos",
      url: "https://product-list-five-sigma.vercel.app/",
      description: "Uma lista de produtos com funções de ordenação de preço (ASC, DESC), busca filtrada por nome, filtro por categoria, Styled Components e responsividade.",
      skills: [{framework: "react"}, {framework: "html"},{framework: "css"}, {framework: "js"}, {framework: "styled_components"}],
      thumbnail: 'product_list.png'
    },
    {
      uid: "dpl_5tbddu8Tv3TXU7pjpBJF1x28oFPo",
      name: "AudioBooks",
      url: "https://audiobooks-brown.vercel.app/",
      description: "Projeto de biblioteca online, onde você pode tanto ouvir o livro transcrito quanto ler seus capítulos pela plataforma. Integrado a um backend e rotas independentes.",
      skills: [{framework: "vite"}, {framework: "react"}, {framework: "html"},{framework: "sass"}, {framework: "js"}],
      thumbnail: 'audiobooks.png'
    },
    {
      uid: "dpl_3LdpfS9jiTxBJdCLu1UDtoCebnxX",
      name: "BuzzFeed",
      url: "https://buzzfeed-project.vercel.app/",
      description: "Projeto baseado no Buzzfeed, feito em angular utilizando todos os conceitos de componentização e modularização, além de simular uma integração com backend.",
      skills: [{framework: "angular"}, {framework: "html"},{framework: "css"}, {framework: "js"}],
      thumbnail: 'buzzfeed.png'
    }]

    
    setListProjects(projects)
  }, [])

  function openProjectModal() {
    setIsProjectModalOpen(true)
  }

  function closeProjectModal() {
    setIsProjectModalOpen(false)
  }

  function selectProject(projectId:string){
    const projectSelected = listProjects.find(project => project.uid === projectId)
    setSelectedProject(projectSelected)
    openProjectModal()
  }
  return (
    <>
      <Menu />
      <div className="w-full flex justify-center items-center flex-col">
        <div className="p-2">
          <h1 className="text-red-700 text-lg font-semibold">Projetos</h1>
        </div>
      <div className="w-[768px] flex flex-wrap items-center justify-center">
        {listProjects.map( project => {
          return(
            <div key={project.uid} className="p-1 w-56 h-56 shadow-shape flex flex-col items-center rounded-sm  mx-1 my-1 text-center">
              <button type="button" onClick={() => selectProject(project.uid)}>
                <span className="text-red-700">{project.name}</span>
                <div className=" flex-1 w-full bg-zinc-900 my-2">
                  <img src={project.thumbnail} alt="" />
                </div>
              </button>
            </div>
          )
        })}
      </div>
      </div>
      {isProjectModalOpen && (
        <DetailProjectsModal
          closeProjectModal={closeProjectModal}
          selectedProject={selectedProject}
        />
      )}
    </>
  )
}
