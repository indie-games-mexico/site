import React from 'react';

const defaultState = {
  mainMenuStyles: 'light',
  toggleMenuStyles: () => { }
};

export const ApplicationContext = React.createContext(defaultState);

export class ThemeProvider extends React.Component {

    constructor(props) {
      super(props);
      this.state = {
        mainMenuStyles: 'light'
      };
    }

    toggleMenuStyles(value) {
      this.setState({
        mainMenuStyles: value
      });
    }

    render() {
      const mainMenuStyles = this.state.mainMenuStyles;
      return (
        <ApplicationContext.Provider
            value={{
              mainMenuStyles,
              toggleMenuStyles: this.toggleMenuStyles.bind(this)
            }}>
            {this.props.children}
      </ApplicationContext.Provider>
    );
    }
}
