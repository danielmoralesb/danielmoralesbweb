import { data } from '../data';
import HtmlReactParser from 'html-react-parser'; 

function HeroMain(selected) {
    return (
        <>
            {data.hero.map((hero, index) => (
                selected.page === hero.page && (
                    <div key={index}><div  className="hero__inner">
                        <div className="hero__text">
                            <h1><span className="block--xs">{hero.title1}</span> <span className="block--xs">{hero.title2}</span></h1>
                        </div>
                        <div className="hero__image">
                            <img src={hero.image} className="hero-daniel" alt={hero.imageAlt} title={hero.imageTitle} />
                        </div>
                    </div>
                    <p>{HtmlReactParser(hero.description)}</p>
                    </div>
                )
            ))}
        </>
    )
}

function HeroNav() {
    return (
        <nav className="hero__nav-wrapper">
            <ul className="hero__nav">
                {data.heroNav.map((heroNav, index) => (
                    <li key={index} className="hero__item">
                        {heroNav.name === "Resume" 
                            ? <a href={heroNav.url} className="btn btn--primary btn--icon btn--icon--resume" title={heroNav.name} target="_blank" rel="noreferrer">{heroNav.name}</a>
                            : <a href={heroNav.url} className={`hero__link ${heroNav.style}`} title={heroNav.name} target="_blank" rel="noreferrer">
                            <span className="sr-only">{heroNav.name}</span>
                        </a>}
                    </li>
                ))}
            </ul>
        </nav>
    )
}

function Hero(props) {
    return(
        <section className="hero">
            <HeroMain page={props.page}/>
            <HeroNav />
        </section>
    )
}

export default Hero;