import React from 'react'

class Brandbar extends React.Component {
  render() {
    return (
      <div id="brand-bar" className="navbar navbar-default navbar-fixed-top" role="navigation">
        <div className="container brandbar-header">
            <div className="row align-items-center">
                <div className="pl-3 mb-2">
                    <span className="fas fa-home"></span>
                </div>
                <div className="ml-2 mb-2">
                    <a className="navbar-brand" href="//www.un.org//">Welcome to the United Nations</a>
                </div>
            </div>
            <div className="mr-2 mb-2 d-none d-sm-block">
                <a className="navbar-brand mr-0" href="//www.un.org/development/desa/en/">Department for Economic and Social Affairs</a> | <a className="navbar-brand mr-0" href="//www.un.org/development/desa/en/" target="_blank">DESA</a>
            </div>
        </div>
    </div>
    )
  }
}

export default Brandbar
