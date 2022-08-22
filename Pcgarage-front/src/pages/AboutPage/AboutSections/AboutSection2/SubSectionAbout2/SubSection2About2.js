import produtoseservicos from "../../../../../images/produtoseservicos.jpg"

export default function SubSection2About2() {
    return (
        <div className="left-container-about-section-2">
            <div data-aos="fade-left" className="title-left-about-section-2">PRODUTOS E SERVIÇOS</div>
            <div data-aos="fade" className="text-left-about-section-2">Os produtos da PC Garage têm um detalhe fundamental: a prioridade com qualidade em cada
item. Todos eles feitos de forma artesanal. Não produzimos em série, assim fica facilitada a
revisão de cada um deles. O resultado é gratificante quando vemos comentários positivos de
amigos e amigas ao receberem as encomendas em todo o Brasil.</div>
            <img data-aos="fade" className="image-section-2" src={produtoseservicos} alt="hands" />
        </div>
    )
}