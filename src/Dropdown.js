import React, { Component } from 'react';

class Dropdown extends Component {
  constructor() {
    super();

    this.state = {
      showMenu: false,
    };
  }

  showMenu = (event) => {
    event.preventDefault();

    this.setState({ showMenu: true }, () => {
      document.addEventListener('click', this.closeMenu);
    });
  };

  closeMenu = (event) => {
    if (!this.dropdownMenu.contains(event.target)) {
      this.setState({ showMenu: false }, () => {
        document.removeEventListener('click', this.closeMenu);
      });
    }
  };

  render() {
    return (
      <div>
        <p onClick={this.showMenu}>Menu Item</p>

        {this.state.showMenu ? (
          <div
            className="menu"
            ref={(element) => {
              this.dropdownMenu = element;
            }}
          >
            <button> Menu item 1 </button>
            <button> Menu item 2 </button>
            <button> Menu item 3 </button>
          </div>
        ) : null}
      </div>
    );
  }
}

export default Dropdown;
