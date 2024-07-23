import { X } from "lucide-react";

interface ProjectProps {
  uid: string
  name: string
  url: string
  description: string
  thumbnail: string
  skills: {
    framework: string
  }[]
}

interface InviteGuestsModalProps {
  closeProjectModal: () => void
  selectedProject: ProjectProps | undefined
}



export function DetailProjectsModal({
  closeProjectModal,
  selectedProject
}: InviteGuestsModalProps) {
  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center">
      <div className="w-[640px] rounded-xl py-5 px-6 shadow-shape bg-zinc-900 space-y-5">
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold">{selectedProject?.name}</h2>
            <button type="button" onClick={closeProjectModal}>
              <X className="size-5 text-zinc-400" />
            </button>
          </div>
          <p className="text-sm text-zinc-400">
            {selectedProject?.description}
          </p>
        </div>
        <div className="flex flex-wrap gap-1">
          <div className="w-full">
            <img src={selectedProject?.thumbnail} alt={selectedProject?.name} />
          </div>
        </div>

        <div className="w-full h-px bg-zinc-800" />
        <div className="flex flex-wrap gap-1">
          <div className="w-full p-2">
          <button onClick={() => window.open(selectedProject?.url, '_blank')}
            className="rounded-lg px-5 font-medium flex items-center justify-center gap-2 bg-zinc-800 text-zinc-200 hover:bg-zinc-700 w-full h-11">
              Acessar
          </button>
          </div>

          <div className="w-full flex flex-row">
            {selectedProject?.skills.map(skill => {
              return (
                <div key={skill.framework} className="flex w-36 h-24 p-1">
                  <div className="flex flex-col w-full h-full shadow-shape rounded-lg justify-center items-center p-4">
                    <img className="w-fit h-full" src={"/".concat(skill.framework.concat(".png"))} alt={skill.framework} />
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}