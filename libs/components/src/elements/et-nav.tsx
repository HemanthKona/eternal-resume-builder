import React from 'react';
import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const EtNav = styled(NavLink)`
  background: ${(props) => (props.theme as any).colors.red[4]};
  margin-top: ${(props) => (props.theme as any).space[2]};
  text-align: center;
  padding: ${(props) => (props.theme as any).space[3]};
  color: white;
  box-shadow: 0 0 5px 1px #7d4f4f;
  border-radius: 50%;
  cursor: pointer;

  &:hover {
    background: ${(props) => (props.theme as any).colors.red[6]};
  }
`;
