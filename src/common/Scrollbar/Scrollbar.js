import Scrollbars from 'react-custom-scrollbars'

export const Scrollbar = ({ style, children, ...rest }) => {
  const thumbStyle = {
    backgroundColor: '#BCBCBC',
    width: '5px',
    borderRadius: '4px',
    right: 0,
  }
  return (
    <Scrollbars
      style={style}
      hideTracksWhenNotNeeded
      {...rest}
      renderThumbVertical={({ style, ...props }) => (
        <div
          {...props}
          style={{
            ...style,
            ...thumbStyle,
          }}
        />
      )}
    >
      {children}
    </Scrollbars>
  )
}
