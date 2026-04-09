import cssClasses from "./Header.module.css";

export default function Header() {
    return (
        <header className={cssClasses.headerWrapper}>
            <div className={cssClasses.headerContainer}>
                <p>Charter Assignment</p>
            </div>
        </header>
    )
}