import { useNavigate } from "react-router-dom"

export function Menu() {
  const navigate = useNavigate()
  function redirectPageTo(destionation: string){
    navigate(destionation);
  }
  return (
    <div className="p-4 h-16 flex items-center justify-end">
      <div className="flex items-center gap-5 text-red-700">
        <div>
          <button type="button" onClick={() => redirectPageTo("/")}>Perfil</button>
        </div>
        <div>
        <button type="button" onClick={() => redirectPageTo("/projects")}>Projetos</button>
        </div>
      </div>
    </div>
  )
}