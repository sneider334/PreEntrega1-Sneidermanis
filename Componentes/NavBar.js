import CartWidget from "./CartWidget";


const Header = ()=>{
    return (
    <>
    <header>
        <h1 class="text-muted"> Garrafas coderhouse</h1>
        <nav className="nav">
            <a href="#">Link 1</a>
            <a href="#">Link 2</a>
            <a href="#">Link 3</a>
            <a href="#">Link 4</a>
        </nav>
    </header>
    <CartWidget/>
    </>)
}


export default Header


