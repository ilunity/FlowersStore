import {BrowserRouter} from "react-router-dom";
import './scss/app.scss';
import {RouterComponent} from "./components/routerComponent";
import {useEffect} from "react";
import {useDispatch} from "react-redux";
import {getAuthStatus} from "./store/asyncActions";
import Header from "./components/common/header/Header";
import {Modals} from "./components/modals/Modals";

function App() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAuthStatus());
    }, []);

    return (
        <div className="wrapper">
            <Header/>
            <main>
                <Modals/>
                <BrowserRouter>
                    <RouterComponent/>
                </BrowserRouter>
                <div className="">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi asperiores excepturi illo labore
                    libero quas sit vitae. Adipisci autem culpa, dignissimos doloribus eligendi error fugit incidunt
                    nisi non omnis quaerat quasi sequi sit totam, velit. Ad aliquam consequuntur cum debitis deserunt
                    dignissimos distinctio dolore eos, esse eum exercitationem facere facilis harum hic ipsa ipsum iste
                    iure laudantium nam neque nobis nostrum nulla numquam omnis optio pariatur praesentium quaerat quas
                    quibusdam quidem quo quod tempora voluptas! Aut corporis ex iste perspiciatis rerum tenetur
                    voluptatum. Alias asperiores beatae deserunt dicta distinctio doloribus eius, fugit illo iste modi
                    porro quasi quo rerum saepe sed sint ut voluptate voluptatum. Aliquam aliquid assumenda, at beatae
                    blanditiis corporis debitis dolorem dolores doloribus ea eos esse et eveniet exercitationem, impedit
                    ipsa iure laudantium nostrum officia porro quos reiciendis reprehenderit repudiandae sint suscipit
                    velit, veritatis vero. Amet architecto consequuntur delectus dolore doloremque doloribus dolorum
                    earum enim eos error facilis fuga id impedit iure labore laboriosam magni molestiae neque nobis
                    nulla optio possimus provident quaerat quas quasi quia quibusdam, ratione repellendus temporibus
                    totam unde vel voluptas voluptatibus? Commodi delectus ea enim eveniet impedit molestias sequi vero.
                    Architecto, aspernatur corporis culpa dolore error et exercitationem illo itaque laborum molestias
                    nesciunt nihil nisi nulla praesentium quas quia quis recusandae vel vitae voluptatem? In nihil
                    officiis pariatur quae temporibus. Aliquam aliquid debitis delectus eligendi et ipsam iure
                    laudantium officiis tenetur voluptatum? Cumque distinctio ea laudantium, minus nihil optio soluta.
                    Consequatur distinctio eaque enim libero minus odio quo? Accusantium, aliquam autem consequatur
                    consequuntur culpa debitis delectus dolore dolores eaque esse et eveniet fugiat harum impedit ipsam
                    labore libero modi molestiae molestias neque nobis nostrum pariatur perspiciatis provident quae qui
                    quidem quisquam quod rem reprehenderit saepe sequi sunt suscipit tempora temporibus voluptas
                    voluptate! Dicta dignissimos, eos et explicabo illo, incidunt nihil nulla omnis possimus provident
                    quo vel voluptate voluptatibus! Aliquid, corporis dolores eum, illum ipsam nihil nisi obcaecati
                    officia omnis recusandae, sunt tempora vel? Consectetur incidunt odio qui! A ad animi aperiam
                    architecto at atque cum deserunt distinctio doloribus excepturi explicabo hic impedit incidunt ipsum
                    iusto maiores minima molestiae nemo neque nostrum nulla obcaecati pariatur porro quam quo quod
                    repellendus, sed sit soluta tenetur velit voluptate voluptatem voluptatum. Aperiam architecto dolor
                    eligendi harum inventore laudantium molestiae quibusdam similique tenetur. Aliquid consequatur
                    cumque dignissimos doloremque minus. Amet, assumenda at autem blanditiis commodi consequatur culpa
                    dolorem dolorum ducimus earum expedita facere harum inventore ipsa ipsum laudantium minima nemo
                    nostrum obcaecati omnis quae, quaerat quasi quod ratione recusandae repellendus voluptatibus. A
                    accusamus aliquam aliquid amet architecto autem beatae, culpa dignissimos dolorem ex exercitationem
                    facilis inventore, ipsa itaque iusto laborum, nisi obcaecati officiis provident repellendus sapiente
                    similique sint ullam ut vel velit veritatis voluptatibus! A adipisci alias aperiam deleniti deserunt
                    doloremque ducimus ea eaque earum eligendi eum ex fugiat itaque molestiae natus nobis non, officia
                    provident quam quas quod reprehenderit rerum similique totam velit vero vitae? Deserunt neque
                    pariatur tempore. Commodi culpa cum deleniti, doloremque facere harum in ipsam magni, maiores minima
                    obcaecati, officiis porro quod similique velit voluptates voluptatibus? Deleniti earum expedita illo
                    impedit iure labore, natus nesciunt nisi nostrum omnis quae qui quia quis rem repellendus sint
                    soluta totam veniam voluptas voluptatem. Ad amet aspernatur at aut beatae culpa delectus deserunt
                    dignissimos distinctio dolor dolorum enim, ex fuga hic id illum impedit ipsa laudantium molestiae
                    molestias mollitia nam nemo nobis nulla optio perspiciatis praesentium quam qui quidem quisquam
                    ratione repellat reprehenderit saepe sit soluta sunt veritatis. A accusamus accusantium ad aliquam
                    aliquid at beatae blanditiis culpa delectus deleniti distinctio, eaque et excepturi facilis fugiat
                    harum itaque maiores minima minus modi necessitatibus obcaecati quaerat quas quo ratione reiciendis
                    repellat repudiandae sunt ut vel! Ab animi aut autem corporis dignissimos dolorem doloremque ea enim
                    esse excepturi facere ipsam iure natus, porro quae qui quod ratione rerum soluta temporibus tenetur
                    vitae voluptas? A aliquam autem consequatur deleniti dolorem dolores ea earum, incidunt ipsam labore
                    laudantium minima modi nam nisi nulla obcaecati officia optio praesentium qui quos repellendus sequi
                    totam voluptate. Accusamus aliquid amet architecto autem beatae cum delectus dicta distinctio
                    dolorem enim est harum illo ipsum iure laborum laudantium libero minima minus, molestiae numquam
                    obcaecati optio provident quam quisquam quod repellat saepe sapiente similique soluta tenetur ut
                    vitae voluptatem voluptates. Accusantium alias, commodi cumque distinctio ex, itaque laboriosam
                    mollitia non nostrum, porro quas repellat sequi similique sint totam vel voluptates. Ab architecto,
                    assumenda atque cumque distinctio dolores, enim exercitationem fuga ipsa iure laudantium modi,
                    recusandae repudiandae rerum veritatis. Accusamus adipisci culpa doloribus eaque eligendi labore
                    possimus quis vero, vitae? Accusamus alias amet animi aperiam corporis dolore doloremque,
                    exercitationem illum inventore itaque magni maiores molestias mollitia, neque nihil nisi nostrum
                    odit porro quas quo recusandae repellat rerum sint sunt suscipit tempore vel veritatis? A aperiam
                    distinctio est eum iusto magnam minima officiis optio perspiciatis reiciendis. Amet cum, delectus
                    deserunt eius error fugiat laboriosam libero magnam natus neque nobis odit officia omnis rem tempore
                    velit, veniam voluptatum. Alias consequuntur distinctio, eligendi error et inventore numquam
                    obcaecati tenetur? A at atque cumque fugit illo ipsa modi obcaecati quam repellat sed soluta,
                    tempore voluptas! Ex excepturi in itaque nobis pariatur, sapiente. Accusantium ad aperiam cumque
                    deleniti facilis illum, impedit in itaque laborum magni molestias mollitia nobis officia officiis
                    quam quisquam quod reiciendis, repellendus reprehenderit tenetur vel velit voluptatibus? Accusamus,
                    accusantium architecto culpa cum cumque cupiditate deserunt dignissimos eligendi est iste minus,
                    nostrum nulla perspiciatis porro quia quidem quis, quos repellat? Accusantium ad adipisci assumenda
                    aut autem blanditiis consequatur corporis, culpa cum doloribus eos fugit illo impedit in ipsam
                    laudantium molestias non nostrum numquam obcaecati, officia quae reiciendis similique sunt,
                    temporibus velit vitae voluptatum. A ab accusamus aliquam aliquid architecto asperiores blanditiis
                    consequatur corporis culpa cumque dolorum error et fuga hic id impedit inventore ipsum laudantium
                    magnam minima modi molestiae molestias officiis omnis perspiciatis quae qui quos reprehenderit sint
                    sunt tempora tenetur ullam veniam vero voluptatem, voluptates voluptatum! A, culpa delectus dolor
                    doloremque eius eos et facilis ipsam ipsum laudantium, nulla pariatur quibusdam? Architecto
                    aspernatur iusto minima minus provident quasi. Atque quidem repellat saepe?
                </div>
            </main>
        </div>
    );
}

export default App;