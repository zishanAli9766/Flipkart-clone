import React from 'react'
import {InputBase,makeStyles} from '@material-ui/core'
import { Search } from '@material-ui/icons'

const useStyle = makeStyles(theme => ({
    search: {
        borderRadius: 2,
        marginLeft: 10,
        marginBottom:10,
        width: '38%',
        backgroundColor: '#fff',
        display: 'flex'
      },
      searchIcon: {
        marginLeft: 'auto',
        padding: 5,
        display: 'flex',
        color: 'blue'
      },
      inputRoot: {
        fontSize: 'unset',
        width: '100%'
      },
      inputInput: {
        paddingLeft: 20,
        width: '100%',
    },
  }))

const SearchBar = () =>{
    const classes = useStyle();
    return(
        <div className={classes.search}>
           
            <InputBase
             placeholder="Search for products, brands and more"
             classes={{
               root: classes.inputRoot,
               input: classes.inputInput,
             }} />
              <div className={classes.searchIcon}>
                
             <Search/>
                </div>
        </div>
    )
}

export default SearchBar;