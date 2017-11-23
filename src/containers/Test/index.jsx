import React from 'react';
import { Link } from 'react-router-dom';
import { getParamFromUrl } from 'helpers/common';
import FontAwesomeIcon from 'components/FontAwesomeIcon';
import ReduxForm from './ReduxForm';
import ReactForm from './ReactForm';

import { ContainerStyled } from './styled';

const list = {
  FontAwesomeIcon: {
    component: FontAwesomeIcon,
    props: {
      name: 'fa-address-book-o ',
    },
  },
  ReduxForm: {
    component: ReduxForm,
    props: {},
  },
  ReactForm: {
    component: ReactForm,
    props: {},
  },
};

export default () => {
  const { pathname } = document.location;
  const name = getParamFromUrl('component');

  if (name) {
    if (list[name]) {
      const SelectedComponent = list[name];
      return (
        <ContainerStyled>
          <SelectedComponent.component {...SelectedComponent.props} />
        </ContainerStyled>
      );
    }
    console.warn(`Unknown component ${name}`);
  }

  return (
    <ContainerStyled>
      {
        Object.keys(list).map((componentName, key) => (
          <div key={key}>
            <Link to={`${pathname}?component=${componentName}`}>{componentName}</Link>
          </div>
        ))
      }
    </ContainerStyled>
  );
};
