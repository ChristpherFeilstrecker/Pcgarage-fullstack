import hands from "../../../../../images/quemsomos.jpg"

export default function SubSection2About2() {
    return (
        <div className="left-container-about-section-2">
            <div data-aos="fade-left" className="title-left-about-section-2">PRODUTOS E SERVIÇOS</div>
            <div data-aos="fade" className="text-left-about-section-2">Enviar foto e descriçao sobre serviços e produtos.</div>
            <img data-aos="fade" className="image-section-2" src={hands} alt="hands" />
        </div>
    )
}