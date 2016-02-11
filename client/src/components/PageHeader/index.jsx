import React, { Component } from 'react';
import NavBar from '../NavBar';
import NavLink from '../NavLink';

export default class PageHeader extends Component {
  render() {
    return (
      <div>
        <NavBar>
          <NavLink title="Custom Stickers" text="Stickers" href="https://www.stickermule.com/custom-stickers" />
          <NavLink title="Marketplace" text="Marketplace" href="https://www.stickermule.com/marketplace" />
          <NavLink title="Customize" text="Customize" href="/" active={true} />
        </NavBar>
      </div>
    );
  }
}
