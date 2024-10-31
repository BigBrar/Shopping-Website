export default function Navbar({styles, logoImg}){
    return (
        <div className={styles.navbar}>
      <div className={styles.logoDiv}>
        <img className={styles.logoImg} src={logoImg} alt='logo image'/>
      </div>
      <div className={styles.navItems}>
    <p className={styles.navText}>Home</p>
    <div className={styles.navText}>
        Categories &#9662; {/* Unicode down arrow */}
        <div className={styles.dropdownMenu}>
            <p>Category 1</p>
            <p>Category 2</p>
            <p>Category 3</p>
        </div>
    </div>
    <p className={styles.navText}>Contact</p>
    <p className={styles.navText}>About Us</p>
</div>
    </div>

    )
}