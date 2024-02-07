'use client'

import state from '@/store'
import { useGLTF, useTexture } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { easing } from 'maath'

import { useSnapshot } from 'valtio'

const Shirt = () => {
	const snap = useSnapshot(state)
	const { nodes, materials } = useGLTF('/wq.glb') as any

	console.log(nodes)
	console.log(materials)

	const logoTexture = useTexture(snap.logoDecal)
	const fullTexture = useTexture(snap.fullDecal)

	useFrame((state, delta) =>
		easing.dampC(materials.gem2.color, snap.color, 0.25, delta)
	)

	const stateString = JSON.stringify(snap)

	return (
		<group>
			<mesh
				castShadow
				geometry={nodes.Object_2.geometry}
				material={materials.gem2}
				material-roughness={1}
				dispose={null}
			/>
			<mesh
				castShadow
				geometry={nodes.Object_3.geometry}
				material={materials.gem2}
				material-roughness={1}
				dispose={null}
			/>
			<mesh
				castShadow
				geometry={nodes.Object_4.geometry}
				material={materials.gem2}
				material-roughness={1}
				dispose={null}
			/>
			<mesh
				castShadow
				geometry={nodes.Object_5.geometry}
				material={materials.gem2}
				material-roughness={1}
				dispose={null}
			/>
			<mesh
				castShadow
				geometry={nodes.Object_6.geometry}
				material={materials.gem2}
				material-roughness={1}
				dispose={null}
			/>
			<mesh
				castShadow
				geometry={nodes.Object_7.geometry}
				material={materials.gem2}
				material-roughness={1}
				dispose={null}
			/>
			<mesh
				castShadow
				geometry={nodes.Object_8.geometry}
				material={materials.gem2}
				material-roughness={1}
				dispose={null}
			/>
			<mesh
				castShadow
				geometry={nodes.Object_9.geometry}
				material={materials.gem2}
				material-roughness={1}
				dispose={null}
			/>
			{/* <mesh
				castShadow
				geometry={nodes.Curve009_1.geometry}
				material={materials.Material}
				material-roughness={1}
				dispose={null}
			/> */}
		</group>
	)
}

export default Shirt
