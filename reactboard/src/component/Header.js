import {Link} from "react-router-dom";
import "./Header.css";
const Header = () => {
    const style = {backgroundColor:'white', width:'100%', position:'fixed', left:0, top:0, zIndex:10};
    return(
        <div style={style}>
            <ul className="nav-items">
                <li className="nav-item">
                    <Link to={"/"} id="logo"><i><b>kosta.com</b></i></Link>
                </li>
                <li className="nav-item">
                    <Link to={"/boardList"}>게시판 글 목록</Link>
                </li>
                <li className="nav-item">
                    <Link to={"/boardDetail"}>게시판 글 상세</Link>
                </li>
                <li className="nav-item">
                    <Link to={"/register"}>게시판 글 등록</Link>
                </li>
            </ul>
        </div>
    )
}

export default Header;