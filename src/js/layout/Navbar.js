import React, { Component } from 'react'
import { Link } from "react-router-dom";

class Navbar extends Component {

    render() {
        const { links } = this.props;

        if (!links.length) {
            return (null);
        }

        let navItems =
            <React.Fragment>
                {
                    links.map(
                        link => (
                            <Link to={link.slug === 'home' ? '' : link.slug} key={link.key}>
                                {link.title.rendered}
                            </Link>
                        )
                    )
                }
            </React.Fragment>
        return (
            <nav>
                {navItems}
            </nav>
        )
    }
}

export default Navbar;