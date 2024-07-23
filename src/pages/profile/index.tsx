import { Menu } from "../../components/menu";
import { Biography } from "./biography-and-social";
import { SkillsAndHobbies } from "./skills-and-hobbies";

export function MainProfilePage(){
  return(
    <>
      <Menu/>
     
      <div className="w-[768px] h-screen flex items-center m-auto flex-col">
        <Biography/>
        <SkillsAndHobbies/>
      </div>
    </>
  )
}