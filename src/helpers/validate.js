/* eslint-disable-next-line max-len */
// ----------------------------------Journal Validation------------------------------

export const JournalValidation = (title, url, issn, rating, policyTitle, 
firstYear, lastYear, policyType, domain, date) =>{
    if(title.length<3 || url.length < 5 || issn.length<1 || rating.length<1 || 
     date.length<1 || policyTitle.length<1 || firstYear.length<1 || lastYear.length<1 ||
     policyType.length<1 || domain.length<1 || !date){

        return false

    }

    return true; 

}

// ----------------------------------Signup Validation------------------------------

export const SignupValidation = ({username,email,password}) => {
    if(username<1||email<1||password<1)
    {
        return false;
    }
    return true;
}

// ----------------------------------Login Validation------------------------------

export const LoginValidation = ({email,password}) => {
    if(email<1||password<1)
    {
        return false;
    }
    return true;
}