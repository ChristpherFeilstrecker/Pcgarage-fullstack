import sobrenos from "../../../../../images/sobrenos.jpg"

export default function SubSection1About2() {


    return (
        <div className="left-container-about-section-2">
            <div data-aos="fade-left" className="title-left-about-section-2">SOBRE NÓS</div>
            <div data-aos="fade" className="text-left-about-section-2">Me chamo Paulo Cesar Langaro, mais conhecido como PC. Sou gaúcho, jornalista aposentado e
apaixonado por carros antigos. E essa paixão foi o ponto de partida para a criação de produtos
que levam marcas de carros históricos. Desde 2019, quando surgiu a PC Garage, sempre atendi
de forma personalizada os amigos e amigas (clientes). Todos contatos são feitos diretamente
comigo, sem intermediários e sem os famosos robôs da Internet. E, acredito, que isso seja o
diferencial do atendimento.</div>
            <img data-aos="fade" className="image-section-2" src={sobrenos} alt="hands" />
        </div>
    )
}