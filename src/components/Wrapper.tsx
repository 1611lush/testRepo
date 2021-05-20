import * as React from 'react';

interface Props {
	children: React.ReactNode
}


const Wrapper = (props: Props) => (
  <div className="page">
    {props.children}
  </div>
)

export default Wrapper