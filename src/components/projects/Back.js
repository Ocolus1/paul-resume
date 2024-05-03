import React from 'react'
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import TextTransition, { presets } from 'react-text-transition';

export default function Back() {

  return (
		<div>
			<p>
				<KeyboardBackspaceIcon className="p-3 text-[#b2b0b2] bg-[#201e22]" />
                <span>Back</span>
			</p>
		</div>
  );
}
