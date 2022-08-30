import nossahistoria from "../../../../../images/nossahistoria.jpg"

export default function SubSection3About2() {

    return (
        <div className="left-container-about-sec-2">
            <div data-aos="fade-left" className="title-left-about-sec-2">NOSSA HISTÓRIA</div>
            <div data-aos="fade" className="text-left-about-sec-2">Depois de três anos, conseguimos colocar em prática a ideia de reunir todos nossos itens em
um só lugar. Acreditamos que o site www.lojapcgarage.com.br irá facilitar a busca dos
também apaixonados e apaixonadas por produtos com as marcas de carros antigos. Estamos
em Novo Hamburgo, no Rio Grande do Sul, aguardando os contatos de vocês.</div>
            <img data-aos="fade" className="image-sec-2" src={nossahistoria} alt="hands" />
        </div>
    )
}