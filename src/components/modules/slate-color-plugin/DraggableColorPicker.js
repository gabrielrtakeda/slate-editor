import React, { PropTypes } from 'react'
import Draggable from 'react-draggable'
import { SketchPicker } from 'react-color'

import { colorMarkStrategy } from './ColorUtils'
import './DraggableColorPicker.css'


const DraggableColorPicker = ({
  state,
  changeState,
  outerState: {
    color: { rgba, showPicker },
  },
}) => (
  <Draggable
    handle=".slate-color-plugin--draggable-handle"
    defaultPosition={{ x: -410, y: 0 }}
    zIndex={100}
  >
    <div className="slate-color-plugin--draggable-handle-container">
      <div className="slate-color-plugin--draggable-handle" />
      <SketchPicker
        color={rgba}
        onChangeComplete={color => {
          const rgbaChange = color.rgb
          changeState({
            state: colorMarkStrategy({ state, rgba: rgbaChange }),
            color: { rgba: rgbaChange, showPicker },
          })
        }}
      />
    </div>
  </Draggable>
)

DraggableColorPicker.propTypes = {
  state: PropTypes.object.isRequired,
  changeState: PropTypes.func.isRequired,
  outerState: PropTypes.shape({
    color: PropTypes.shape({
      showPicker: PropTypes.bool.isRequired,
      rgba: PropTypes.shape({
        r: PropTypes.number.isRequired,
        g: PropTypes.number.isRequired,
        b: PropTypes.number.isRequired,
        a: PropTypes.number.isRequired,
      }).isRequired,
    }).isRequired
  }).isRequired,
}

export default DraggableColorPicker
