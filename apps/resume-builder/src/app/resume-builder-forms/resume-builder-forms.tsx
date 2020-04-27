import React, { useContext } from 'react';

// external
import {
  Box,
  Button,
  Divider,
  Heading,
  Input,
  Styled
} from 'theme-ui';
import { set, unset } from 'lodash';
import { produce } from 'immer';
import { string as isString, object as isObject, array as isArray } from 'is_js';

// libs
import { ResumeContext } from '../app.context';
import { empty } from '@eternal-resume-builder/data'

const capitalize = (str: string) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

const singularize = (str: string) => {
  return str[str.length - 1] === 's' ? str.slice(0, -1) : str;
}

/* eslint-disable-next-line */
export interface ResumeBuilderFormsProps {}

export const ResumeBuilderForms = (props: ResumeBuilderFormsProps) => {
  // const { state, update } = useResumeStore();

  // console.log("Resume Forms");
  const [state, setState] = useContext(ResumeContext);

  // console.log(state);

  const updateForm = ({ target: {name, type, value} }) => {
    const updatePath = name.split('.');

    // console.log(name, type, value);

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
          set(draft, name, value);
        });
      });
    }
  }

  const addProfiles = () => {
    setState(prevState => {
      return produce(prevState, draft => {
        draft.basics.profiles.push({
          network: '',
          url: '',
          username: ''
        })
      })
    });
  }

  const removeProfiles = (profileIndex) => {
    setState(prevState => {
      return produce(prevState, draft => {
        draft.basics.profiles.splice(profileIndex, 1);
      })
    });
  }

  const addSection = (section) => {
    setState(prevState => {
      return produce(prevState, draft => {
        draft[section].push(empty[section][0]);
      })
    })
  }

  const removeSection = (section, sectionIndex) => {
    setState(prevState => {
      return produce(prevState, draft => {
        draft[section].splice(sectionIndex, 1);
      })
    });
  }

  const addItem = (section, sectionIndex, item) => {
    setState(prevState => {
      return produce(prevState, draft => {
        draft[section][sectionIndex][item].push('');
      })
    })
  }

  const removeItem = (section, sectionIndex, item, itemIndex) => {
    setState(prevState => {
      return produce(prevState, draft => {
        draft[section][sectionIndex][item].splice(itemIndex, 1);
      })
    })
  }

  return (
    <Box bg={'gray.3'} p={'3'} sx={{ marginTop: '1rem', overflowY: 'scroll'}}>
      <Heading as="h3">Resume Builder</Heading>
      {
        Object.keys(state).map((topLevelKey, topLevelIndex) => {
          return (
            <div id={topLevelKey} key={topLevelIndex}>
              {/** state.baiscs */}
              <Heading as="h2" key={topLevelIndex} pt='4' pb='3'> {capitalize(topLevelKey)} </Heading>
              {
                Object.keys(state[topLevelKey]).map((level1Key, level1Index) => {
                  if (isString(state[topLevelKey][level1Key])) {
                    return (
                      <Input key={level1Index} placeholder={level1Key.toUpperCase()} name={`basics.${level1Key}`} value={state[topLevelKey][level1Key]}
                        onChange={updateForm}
                      ></Input>
                    )

                  } else if (!isArray(state[topLevelKey][level1Key]) && isObject(state[topLevelKey][level1Key])) {
                    return (
                      <Box id={`${topLevelKey}-${level1Index}`} key={level1Index}>
                        {
                          Object.keys(state[topLevelKey][level1Key]).map((level2Key, level2Index) => {
                            if (isString(state[topLevelKey][level1Key][level2Key])) {
                              return (
                                <Input key={level2Index} placeholder={level2Key.toUpperCase()} name={`${topLevelKey}.${level1Key}.${level2Key}`} value={state[topLevelKey][level1Key][level2Key]}
                                  onChange={updateForm}
                                ></Input>
                              )

                            } else if (isArray(state[topLevelKey][level1Key][level2Key])) {
                              return (
                                <Box key={level2Key}>
                                  <ul>
                                    {
                                      state[topLevelKey][level1Key][level2Key].map((level3Item, level3Index) => {
                                        return (
                                          <Styled.li key={level3Index}>
                                            <Input sx={{mr: 2}} placeholder={level2Key.toUpperCase()} name={`${topLevelKey}.${level1Key}.${level2Key}.${level3Index}`} value={state[topLevelKey][level1Key][level2Key][level3Index]} onChange={updateForm}></Input>
                                            <Button sx={{height:'max-content'}} variant="elevated" onClick={e => removeItem(topLevelKey, level1Index, level2Key, level3Item)}>x</Button>
                                          </Styled.li>
                                        )
                                      })
                                    }
                                    <Button variant="elevated" onClick={e => addItem(topLevelKey, level1Index, level2Key)}>+</Button>
                                  </ul>
                                </Box>
                              )
                            }
                          })
                        }

                      </Box>
                    )

                  } else if (isArray(state[topLevelKey][level1Key])) {
                    return (
                      <Box key={level1Index}>
                        <Heading as="h3" py='2'>{capitalize(level1Key)}</Heading>
                        {
                          state[topLevelKey][level1Key].map((level1ArrayItem, level1ArrayIndex) => {
                            // isString repeateable list
                            // isObject
                            if (!isArray(level1ArrayItem) && isObject(level1ArrayItem)) {
                              return (
                                <Box key={level1ArrayIndex}>
                                  {
                                    Object.keys(level1ArrayItem).map((level2ObjectKey, level2ObjectIndex) => {
                                      return <Input key={level2ObjectIndex} placeholder={level2ObjectKey.toUpperCase()} name={`basics.${level1Key}[${level1ArrayIndex}].${level2ObjectKey}`} value={state[topLevelKey][level1Key][level1ArrayIndex][level2ObjectKey]}
                                        onChange={updateForm}
                                      ></Input>
                                    })
                                  }
                                  <Button variant="elevated" onClick={e => removeProfiles(level1ArrayIndex)}>Remove {capitalize(singularize(level1Key))} </Button>
                                </Box>
                              )
                            }
                          })
                        }
                        <Button variant="elevated" onClick={addProfiles}>Add {capitalize(singularize(level1Key))} </Button>
                      </Box>
                    )
                  }

                })
              }

              {
                isArray(state[topLevelKey]) ?
                <Button variant="elevated" onClick={e => addSection(topLevelKey)}>Add {capitalize(singularize(topLevelKey))} </Button> : ''
              }
              <Divider bg='gray.4' mx='0'></Divider>
              {/**end state[topLevelKey] */}
            </div>
          )
        })
      }


    </Box>
  );
};

export default ResumeBuilderForms;
