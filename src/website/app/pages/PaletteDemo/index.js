/**
 * Copyright 2017 CA
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/* @flow */
import React, { Component } from 'react';
import { createStyledComponent, pxToEm } from '../../../../styles';
import { createTheme, mineralTheme, ThemeProvider } from '../../../../themes';
import _Intro from '../../Intro';
import ControlPanel from './ControlPanel';
import Demo from './Demo';
import content from './paletteDemo.md';

type Props = {};

type State = {
  activeColor: Colors,
  theme: { [string]: any }
};

type Colors =
  | 'blue'
  | 'dusk'
  | 'indigo'
  | 'lime'
  | 'purple'
  | 'sky'
  | 'slate'
  | 'teal';

const breakpoints = {
  bp_mobile: '@media(max-width: 45em)',
  bp_tablet: '@media(max-width: 70em)'
};
const availableThemes: { [Colors]: string } = {
  purple: mineralTheme.color_white,
  indigo: mineralTheme.color_white,
  blue: mineralTheme.color_white,
  sky: mineralTheme.color_black,
  teal: mineralTheme.color_black,
  lime: mineralTheme.color_black,
  slate: mineralTheme.color_black,
  dusk: mineralTheme.color_white
};

const styles = {
  intro: ({ theme }) => ({
    marginBottom: pxToEm(83), // to baseline

    [theme.bp_moreSpacious]: {
      marginBottom: pxToEm(101) // to baseline
    }
  }),
  leftColumn: ({ theme }) => ({
    marginRight: theme.baseline_3,

    [breakpoints.bp_tablet]: {
      marginRight: 0
    }
  }),
  mobileSticky: ({ theme }) => ({
    display: 'none',
    position: 'sticky',
    top: -1,
    zIndex: theme.zIndex_200,

    [breakpoints.bp_tablet]: {
      display: 'block',
      marginBottom: pxToEm(83) // to baseline
    }
  }),
  paragraph: ({ theme }) => ({
    margin: `${parseFloat(theme.fontSize_prose) * theme.lineHeight_prose}em 0`
  }),
  rightColumn: {
    minWidth: '20em',
    width: '20em',

    [breakpoints.bp_tablet]: {
      display: 'none'
    }
  },
  root: ({ theme }) => ({
    display: 'flex',
    position: 'relative',

    '& h1 + p': {
      marginBottom: parseFloat(theme.space_stack_sm) * 10 + 'em'
    }
  })
};

const Root = createStyledComponent('div', styles.root);
const Intro = createStyledComponent(_Intro, styles.intro);
const MobileSticky = createStyledComponent('div', styles.mobileSticky);
const LeftColumn = createStyledComponent('div', styles.leftColumn);
const RightColumn = createStyledComponent('div', styles.rightColumn);

const mineralColor = 'blue';
const defaultTheme = createTheme(mineralColor, {
  ...breakpoints,
  color_text_onprimary: availableThemes[mineralColor]
});

export default class PaletteDemo extends Component<Props, State> {
  state: State = {
    activeColor: mineralColor,
    theme: defaultTheme
  };

  render() {
    const { activeColor, theme } = this.state;
    const controlPanelProps = {
      activeColor,
      availableThemes,
      theme,
      changeTheme: this.handleThemeChange
    };

    return (
      <ThemeProvider theme={{ ...mineralTheme, ...breakpoints }}>
        <Root>
          <LeftColumn {...this.props}>
            <Intro>{content}</Intro>
            <MobileSticky>
              <ControlPanel {...controlPanelProps} />
            </MobileSticky>
            <Demo theme={theme} />
          </LeftColumn>
          <RightColumn>
            <ControlPanel {...controlPanelProps} />
          </RightColumn>
        </Root>
      </ThemeProvider>
    );
  }

  handleThemeChange = (color: Colors) => {
    const newTheme = createTheme(color, {
      color_text_onprimary: availableThemes[color]
    });
    this.setState({ activeColor: color, theme: newTheme });
  };
}
