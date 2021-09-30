import React, { Component } from "react";


class Footer extends Component{

    constructor(props){
        super(props);
        this.state = {
            copyright: "Quark Desenvolvimento de Software"
        }
    }

    render(){
        return(
                <div>
                    <footer class="page-footer">
                    <div class="container">
                        <div class="row">
                        <div class="col l6 s12">
                            <h5 class="white-text"></h5>
                            <p class="grey-text text-lighten-4"></p>
                        </div>
                        <div class="col l4 offset-l2 s12">
                            <h5 class="white-text"></h5>
                            <ul>
                            <li><a class="grey-text text-lighten-3" href="#!"></a></li>
                            <li><a class="grey-text text-lighten-3" href="#!"></a></li>
                            <li><a class="grey-text text-lighten-3" href="#!"></a></li>
                            <li><a class="grey-text text-lighten-3" href="#!"></a></li>
                            </ul>
                        </div>
                        </div>
                    </div>
                    <div class="footer-copyright">
                        <div class="container">
                        © 2021 Copyright {this.state.copyright}
                        <a class="grey-text text-lighten-4 right" href="#!">More Links</a>
                        </div>
                    </div>
                    </footer>
                </div>
        );
    }
}

export default Footer;