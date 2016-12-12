import { hasMark, getMark } from './FontSizeUtils'


const SelectionUpdateInputValue = (event, data, state, editor, initialFontSize) => {
  const { changeState } = editor.props

  // If do not have font-size mark in selection, update input with initial font size.
  if (!hasMark(state)) changeState({ fontSize: initialFontSize })

  // If it have font-size mark in selection, update input with mark data font size.
  if (hasMark(state)) changeState({ fontSize: getMark(state).data.get('fontSize') })
}

export default SelectionUpdateInputValue
