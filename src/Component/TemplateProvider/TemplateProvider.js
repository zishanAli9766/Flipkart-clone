import { CssBaseline } from "@material-ui/core";
import { createMuiTheme,ThemeProvider } from "@material-ui/core/styles"
import { createContext } from "react";


const TemplateContext = createContext(null)

const TemplateProvider = ({children})=>{
    const theme = createMuiTheme({
        overrides:{
            MuiDialog:{
                paperWidthSm:{
                    maxWidth:"unset"
                }
            },
            MuiDialogContent: {
                root: {
                    padding: 0,
                    '&:first-child': {
                        paddingTop: 0
                    }
                }
            },
            MuiTableCell: {
                root: {
                    borderBottom: 0
                }
            }
        }
    })
    return(
        <TemplateContext.Provider>
            <ThemeProvider theme={theme}>
                <CssBaseline>
                    {children}
                </CssBaseline>
            </ThemeProvider>
        </TemplateContext.Provider>
    )
}

export default TemplateProvider;