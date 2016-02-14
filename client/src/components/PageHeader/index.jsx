import React, { Component } from 'react';
import NavBar from '../NavBar';
import NavLink from '../NavLink';
import SubHeader from '../SubHeader';

export default class PageHeader extends Component {
  render() {
    return (
      <div>
        <NavBar>
          <NavLink title="Customize" text="Try 'em!" href="/" active />
          <NavLink title="Buy stickers @ stickermule.com" text="Buy 'em!" href="https://www.stickermule.com/marketplace" />
          <NavLink title="Create your own custom stickers @stickermule.com" text="Create your own" href="https://www.stickermule.com/custom-stickers" />
        </NavBar>
        <SubHeader image="/img/general/subheader.jpg"/>
      </div>
    );
  }
}
