import React, { Component } from 'react';

class MenuDrop extends Component {
    constructor() {
        super();

        this.state = {
            showMenu: false,
        }

        this.showMenu = this.showMenu.bind(this);
        this.closeMenu = this.closeMenu.bind(this);
    }

    showMenu(e){
        e.preventDefault();

        this.setState({ showMenu: true}, () => {
            document.addEventListener('click', this.closeMenu);
        });
    }

    closeMenu(e){
        if (!this.dropdownMenu.contains(e.target)) {
            this.setState({ showMenu: false}, () => {
                document.removeEventListener('click', this.closeMenu);
            });
        }
    }

    render() {
        return (
            <div className="dropdown">
                <button onClick={this.showMenu}>Select Ability</button>
                {
                    this.state.showMenu
                    ? (
                    <div className="abilityList" ref={(element) => {
                        this.dropdownMenu = element;
                    }}
                    >
                        <button>Athletics</button>
                        <button>Craft</button>
                        <button>Ride</button>
                        <button>Sail</button>
                    </div>
                    )
                    : (
                        null
                    )
                }
            </div>
        );
    }
}

export default MenuDrop;