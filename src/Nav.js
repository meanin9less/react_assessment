import { Link } from "react-router-dom";

export default function Nav(props){
    return(
        <>
            {props.menuList.map(m=><Link key={m.key} to={m.path} style={{marginRight: "5px"}}>{m.name}</Link>)}
        </>
    );
}