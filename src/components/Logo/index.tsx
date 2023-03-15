import styles from './styles.module.scss'
import Image from "next/image";
import Link from "next/link";
import logoUrl from '../../assets/images/logo.webp'

const Logo = () => {
    return (
        <Link href="/">
            <span className={styles.container}>
                <Image src={logoUrl} width={40} height={40} alt="logo" />
                <h1>Timur Myrzaev</h1>
            </span>
        </Link>
    )
}

export default Logo;