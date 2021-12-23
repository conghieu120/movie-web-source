import {useContext} from 'react'
import {MovieContext} from './index'

export default function useStore () {
    return useContext(MovieContext)
}