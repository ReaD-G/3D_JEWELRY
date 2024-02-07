import state from '@/store'
import { useFrame } from '@react-three/fiber'
import { easing } from 'maath'
import { useRef } from 'react'
import { useSnapshot } from 'valtio'

const CameraRig = ({ children }: any) => {
	const group = useRef<any>()
	const snap = useSnapshot(state)

	// useFrame((state, delta) => {
	// 	const isBreakpoint = window.innerWidth <= 1260
	// 	const isMobile = window.innerWidth <= 600

	// 	// set the initial position of the model
	// 	let targetPosition = { x: 0.4, y: 0, z: 5 }
	// 	if (snap.intro) {
	// 		if (isBreakpoint) targetPosition = { x: 0, y: 0, z: 2 }
	// 		if (isMobile) targetPosition = { x: 0, y: 0.2, z: 2.5 }
	// 	} else {
	// 		if (isMobile) targetPosition = { x: 0, y: 0.2, z: 2.5 }
	// 		else targetPosition = { x: 0, y: 0, z: 2 }
	// 	}

	//  set the model rotation smoothly

	//
	// })

	useFrame((state, delta) => {
		const isBreakpoint = window.innerWidth <= 1260
		const isMobile = window.innerWidth <= 600
		let targetPosition = { x: 3, y: 3, z: 5 }
		if (snap.intro) {
			if (isBreakpoint) targetPosition = { x: 3, y: 3, z: 3 }
			if (isMobile) targetPosition = { x: 0, y: 0.2, z: 2.5 }
		} else {
			if (isMobile) targetPosition = { x: 0, y: 0.2, z: 2.5 }
			else targetPosition = { x: 3, y: 3, z: 3 }
		}

		// set model camera position
		easing.damp3(
			state.camera.position,
			[targetPosition.x, targetPosition.y, targetPosition.z],
			0.25,
			delta
		)

		easing.dampE(
			group.current.rotation,
			[state.pointer.y , state.pointer.x, 0],
			0.2,
			delta
		)
	})

	return <group ref={group}>{children}</group>
}

export default CameraRig
