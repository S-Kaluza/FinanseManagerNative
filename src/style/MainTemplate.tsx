import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import { StyledTemplateWrapper, ChildWrapper, StyledNavButton, StyledMenu } from './MainTemplate.styles';

import mainNavigation from '../navigation/config';

function MainTemplate() {
	return (
		<StyledTemplateWrapper>
			<StyledMenu>
				{mainNavigation.map(({ path, title }) => (
					<Link to={path} key={path}>
						<StyledNavButton>{title}</StyledNavButton>
					</Link>
				))}
			</StyledMenu>
			<ChildWrapper>
				<Outlet />
			</ChildWrapper>
		</StyledTemplateWrapper>
	);
}

export default MainTemplate;
