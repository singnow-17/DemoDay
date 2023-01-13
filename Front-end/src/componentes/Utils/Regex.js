export const validEmail = new RegExp (
    "^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$"
) ;

export const validPassword = new RegExp (
    "^(?=.*?[A-Za-z])(?=.*?[0-9]).{6,}$"
)

export const validNameResp = new RegExp (
    "^[A-Z][a-z]+([ ][A-Z][a-z]+)*$"
)

export const validPhone = new RegExp (
    "^([0-9]{2})+([0-9]{9})$"
)

export const validNumber = new RegExp (
    "^[0-9]{4}$"
)

export const validCPF = new RegExp (
    "^([0-9]{2}[\.]?[0-9]{3}[\.]?[0-9]{3}[\/]?[0-9]{4}[-]?[0-9]{2})|([0-9]{3}[\.]?[0-9]{3}[\.]?[0-9]{3}[-]?[0-9]{2})"
) ;