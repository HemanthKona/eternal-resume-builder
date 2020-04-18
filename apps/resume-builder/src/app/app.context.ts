import React, { createContext, useContext, useReducer, useState } from 'react';

const ResumeContext = createContext<any>({});

function resumeReducer(state, action) {
  switch (action.type) {
    case 'UPDATE':
      return {
        count: state.count++
      }

    default: {
      throw new Error(`Unsupported action type: ${action.type}`)
    }
  }
}


// function ResumeProvider(props) {
//   const [state, dispatch] = useReducer<any>(resumeReducer, {})
//   const value = React.useMemo(() => [state, dispatch], [state])
//   return <ResumeContext.Provider value={value} {...props} />
// }

// const updateForm = React.useCallback(({ target: { value, name, type } }) => {
//   const updatePath = name.split(".");

//   // if the input is a checkbox then use callback function to update
//   // the toggle state based on previous state
//   if (type === 'checkbox') {
//     updateState((prevState) => ({
//       [name]: !prevState[name]
//     }))

//     return
//   }

//   // if we have to update the root level nodes in the form
//   if (updatePath.length === 1) {
//     const [key] = updatePath;

//     updateState({
//       [key]: value
//     });
//   }

//   // if we have to update nested nodes in the form object
//   // use _path and _value to update them.
//   if (updatePath.length === 2) {
//     updateState({
//       _path: updatePath,
//       _value: value
//     });
//   }
// }, []);


function useResume() {
  // const context = useContext<any>(ResumeContext)

  // if (!context) {
  //   throw new Error(`useResume must be used within a ResumeProvider`)
  // }

  const [state, setState] = useState<any>({count: 0});

  const update = () => {
    setState(prevState => {
      return {
        count: state.count++
      }
    });
  }

  return {
    state,
    update
  }
}

export {
  useResume
}
