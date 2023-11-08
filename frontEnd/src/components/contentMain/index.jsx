import { Container } from "./style"
import imgDesktop from "../../../../assets/images/imgDesktop.svg"


export function ContentMain(){
    return (
        <Container>
             <div>
                <div>
                    <h1>Stay updated!</h1>
                    <span>  Join 60,000+ product managers receiving monthly updates on:</span>

                    <ul>
                        <li>Product discovery and building what matters</li>
                        <li>Measuring to ensure updates are a success</li>
                        <li>And much more!</li>
                    </ul>
                    
                    <label htmlFor="input-email"></label>
                    <input id="input-email" type="text" placeholder="email@company.com"/>

                    <button>Subscribe to monthly newsletter</button>

                </div>

                <div className="div-image">
                    <img src={imgDesktop} alt="" />
                </div>
            </div>
        </Container>
    )
}