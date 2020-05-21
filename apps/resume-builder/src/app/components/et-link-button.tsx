import React from 'react';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const EtLinkButton = styled(Link)`
  margin-top: ${props => props.theme.space[2]};
  text-align: center;
  text-decoration: none;

  padding: ${props => `${props.theme.space[2]} ${props.theme.space[3]}`};
  cursor: pointer;
  font-size: 100%;
  line-height: inherit;

  background-color: white;
  border-width: 1px;
  border-style: solid;
  border-color: ${props => props.theme.colors.gray[4]};
  color: ${props => props.theme.colors.text};
  font-weight: 700;
  border-radius: ${props => props.theme.space[1]};
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);

  '&:hover': {
    background-color: ${props => props.theme.colors.gray[1]};
  },

`;
