import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import {RootState} from '../../store'
import {isOpen} from "@blueprintjs/core/lib/esnext/components/context-menu/contextMenu";

// Define a type for the slice state
interface NavBarState {
  isDrawerOpen: boolean
  isMenuOpen: boolean
  isMobileMenuOpen: boolean
}

// Define the initial state using that type
const initialState: NavBarState = {
  isDrawerOpen: false,
  isMobileMenuOpen: false,
  isMenuOpen: false
}


export const navBarSlice = createSlice({
  name: 'NavBar',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    drawerToggle: state => {
      state.isDrawerOpen= !state.isDrawerOpen
    },
    menuToggle: state => {
      state.isMenuOpen = !state.isMenuOpen
    },
    mobileMenuToggle: state => {
      state.isMobileMenuOpen= !state.isMobileMenuOpen
    }
  }
})

export const {drawerToggle,menuToggle,mobileMenuToggle} = navBarSlice.actions

// Other code such as selectors can use the imported `RootState` type
// export const selectCount = (state: RootState) => state.counter.value

export default navBarSlice.reducer
