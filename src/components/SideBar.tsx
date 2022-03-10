
import { Button } from "./Button"
import { GenreResponseProps } from "../App"


interface GenreProps {
  genrelist: GenreResponseProps[];
  genreid: number;
  handleclick: (id:number) => void
}


export function SideBar(props:GenreProps) {
  return (
    <nav className="sidebar">
      <span>Watch<p>Me</p></span>

      <div className="buttons-container">
        {props.genrelist.map(genre => (
          <Button
            key={String(genre.id)}
            title={genre.title}
            iconName={genre.name}
            onClick={() => props.handleclick(genre.id)}
            selected={props.genreid === genre.id}
          />
        ))}
      </div>

    </nav>

  )
}