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
                    <footer className="page-footer">
                    <div className="container">
                        <div className="row">
                        <div className="col l6 s12">
                            <h5 className="white-text"></h5>
                            <p className="grey-text text-lighten-4"></p>
                        </div>
                        <div className="col l4 offset-l2 s12">
                            <h5 className="white-text"></h5>
                            <ul>
                            <li><a className="grey-text text-lighten-3" href="#!"></a></li>
                            <li><a className="grey-text text-lighten-3" href="#!"></a></li>
                            <li><a className="grey-text text-lighten-3" href="#!"></a></li>
                            <li><a className="grey-text text-lighten-3" href="#!"></a></li>
                            </ul>
                        </div>
                        </div>
                    </div>
                    <div className="footer-copyright">
                        <div className="container">
                        © 2021 Copyright {this.state.copyright}
                        <a className="grey-text text-lighten-4 right" href="#!">More Links</a>
                        </div>
                    </div>
                    </footer>
                </div>
        );
    }
}

export default Footer;