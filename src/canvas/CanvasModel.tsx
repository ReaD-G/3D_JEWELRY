'use client'

import { Canvas } from '@react-three/fiber'

import { Center, Environment } from '@react-three/drei'
import CameraRig from './CameraRig'
import Shirt from './Shirt'
// import Backdrop from './Backdrop'

const CanvasModel = () => {
	return (
		<Canvas
			shadows
			camera={{ position: [3, 3, 3], fov: 75 }}
			// gl={{ preserveDrawingBuffer: true }}
			className="w-full max-w-full h-full transition-all ease-in"
		>
			<ambientLight intensity={0.5} />
			<Environment preset="city" />
			<boxGeometry />
			<meshStandardMaterial />
			<CameraRig>
				{/* <Backdrop /> */}
				<Center>
					<Shirt />
				</Center>
			</CameraRig>
		</Canvas>
	)
}

export default CanvasModel
