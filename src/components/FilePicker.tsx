import { ChangeEvent } from 'react'
import CustomButton from './CustomButton'

interface FilePickerProps {
	file: string | File
	setFile: (target: string) => void
	readFile: (type: 'logo' | 'full') => void
}

const FilePicker = ({ file, setFile, readFile }: FilePickerProps) => {
	const handleSetFileName = (event: ChangeEvent<HTMLInputElement>) => {
		const files = event.target.files
		setFile(files?.item(0)?.name || '')
	}

	return (
		<div className="filepicker-container">
			<div className="flex-1 flex flex-col">
				<input
					id="file-upload"
					type="file"
					accept="image/*"
					onChange={(e) => handleSetFileName(e)}
				/>
				<label htmlFor="file-upload" className="filepicker-label">
					Upload File
				</label>

				<p className="mt-2 text-gray-500 text-xs truncate">
					{file === ''
						? 'No file selected'
						: typeof file === 'string'
						? file
						: file.name}
				</p>
			</div>

			<div className="mt-4 flex flex-wrap gap-3">
				<CustomButton
					type="outline"
					title="Logo"
					handleClick={() => readFile('logo')}
					customStyles="text-xs"
				/>
				<CustomButton
					type="filled"
					title="Full"
					handleClick={() => readFile('full')}
					customStyles="text-xs"
				/>
			</div>
		</div>
	)
}

export default FilePicker
