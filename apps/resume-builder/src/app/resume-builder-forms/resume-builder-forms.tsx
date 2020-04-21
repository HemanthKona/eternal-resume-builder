import React from 'react';

// external
import {
  Box,
  Button,
  Heading,
  Input
} from 'theme-ui';
import { set } from 'lodash';
import { produce } from 'immer';
import { string as isString, object as isObject, array as isArray } from 'is_js';

// libs
import { ResumeContext } from '../app.context';
import { stat } from 'fs';
import { is } from 'immer/dist/internal';

/* eslint-disable-next-line */
export interface ResumeBuilderFormsProps {}

export const ResumeBuilderForms = (props: ResumeBuilderFormsProps) => {
  // const { state, update } = useResumeStore();

  console.log("Resume Forms");
  const [state, setState] = React.useContext(ResumeContext);

  console.log(state);

  const updateForm = ({ target: {name, type, value} }) => {
    const updatePath = name.split('.');

    console.log(name, type, value);

    if (updatePath.length === 1) {
      setState(prevState => {
        return {
          ...prevState,
          [name]: value
        }
      });

    } else {
      setState(prevState => {
        return produce(prevState, draft => {
          set(draft, updatePath, value);
        });
      });
    }
  }

  return (
    <Box bg={'pink'} p={'3'} sx={{marginTop: '1rem', overflowY: 'scroll'}}>
      <Heading as="h3">Welcome to resume-builder-forms component!</Heading>
      {/* state.baiscs */}
      <Heading as="h2">Profile Basics</Heading>
      {
        Object.keys(state.basics).map((level1Key, level1Index) => {
          if (isString(state.basics[level1Key])) {
            return (
              <Input key={level1Index} placeholder={level1Key.toUpperCase()} name={`basics.${level1Key}`} value={state.basics[level1Key]}
                onChange={updateForm}
              ></Input>
            )

          } else if (!isArray(state.basics[level1Key]) && isObject(state.basics[level1Key])) {
            return Object.keys(state.basics[level1Key]).map((level2Key, level2Index) => {
              return (
                <Input key={level2Index} placeholder={level2Key.toUpperCase()} name={`basics.${level1Key}.${level2Key}`} value={state.basics[level1Key][level2Key]}
                  onChange={updateForm}
                ></Input>
              )
            })

          } else if (isArray(state.basics[level1Key])) {
            return state.basics[level1Key].map((level1ArrayItem, level1ArrayIndex) => {
              // isString repeateable list
              // isObject

              if (!isArray(level1ArrayItem) && isObject(level1ArrayItem)) {
                return Object.keys(level1ArrayItem).map((level2ObjectKey, level2ObjectIndex) => {
                  return <span key={level2ObjectIndex}>{level2ObjectKey}</span>
                })
              }
            })
          }

        })
      }


      {/*end state.basics */}

    </Box>
  );
};

export default ResumeBuilderForms;
