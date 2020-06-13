import re
const convert = (props)=>{
   // const letter= props[0];
    //for line in props:
    //for word in line.split():
    switch(props){
        case '/^the$/':
            return [];
    }
    const letter= props[0];
    switch(letter){

    	//small
        case 'a':
            return [1,0,0,0,0,0,0,0];
        case 'b':
            return [1,0,1,0,0,0,0,0];
        case 'c':
            return [1,1,0,0,0,0,0,0];
        case 'd':
            return [1,1,0,1,0,0,0,0];
        case 'e':
            return [1,0,0,1,0,0,0,0];
        case 'f':
            return [1,1,1,0,0,0,0,0];
        case 'g':
            return [1,1,1,1,0,0,0,0];
        case 'h':
            return [1,0,1,1,0,0,0,0];
        case 'i':
            return [0,1,1,0,0,0,0,0];
        case 'j':
            return [0,1,1,1,0,0,0,0];
        case 'k':
            return [1,0,0,0,1,0,0,0];
        case 'l':
            return [1,0,1,0,1,0,0,0];
        case 'm':
            return [1,1,0,0,1,0,0,0];
        case 'n':
            return [1,1,0,1,1,0,0,0];
        case 'o':
            return [1,0,0,1,1,0,0,0];
        case 'p':
            return [1,1,1,0,1,0,0,0];
        case 'q':
            return [1,1,1,1,1,0,0,0];
        case 'r':
            return [1,0,1,1,1,0,0,0];
        case 's':
            return [0,1,1,0,1,0,0,0];
        case 't':
            return [0,1,1,1,1,0,0,0];
        case 'u':
            return [1,0,0,0,1,1,0,0];
        case 'v':
            return [1,0,1,0,1,1,0,0];
        case 'w':
            return [0,1,1,1,0,1,0,0];
        case 'x':
            return [1,1,0,0,1,1,0,0];
        case 'y':
            return [1,1,0,1,1,1,0,0];
        case 'z':
            return [1,0,0,1,1,1,0,0];

        //capital
        case 'A':
            return [1,0,0,0,0,0,1,0];
        case 'B':
            return [1,0,1,0,0,0,1,0];
        case 'C':
            return [1,1,0,0,0,0,1,0];
        case 'D':
            return [1,1,0,1,0,0,1,0];
        case 'E':
            return [1,0,0,1,0,0,1,0];
        case 'F':
            return [1,1,1,0,0,0,1,0];
        case 'G':
            return [1,1,1,1,0,0,1,0];
        case 'H':
            return [1,0,1,1,0,0,1,0];
        case 'I':
            return [0,1,1,0,0,0,1,0];
        case 'J':
            return [0,1,1,1,0,0,1,0];
        case 'K':
            return [1,0,0,0,1,0,1,0];
        case 'L':
            return [1,0,1,0,1,0,1,0];
        case 'M':
            return [1,1,0,0,1,0,1,0];
        case 'N':
            return [1,1,0,1,1,0,1,0];
        case 'O':
            return [1,0,0,1,1,0,1,0];
        case 'P':
            return [1,1,1,0,1,0,1,0];
        case 'Q':
            return [1,1,1,1,1,0,1,0];
        case 'R':
            return [1,0,1,1,1,0,1,0];
        case 'S':
            return [0,1,1,0,1,0,1,0];
        case 'T':
            return [0,1,1,1,1,0,1,0];
        case 'U':
            return [1,0,0,0,1,1,1,0];
        case 'V':
            return [1,0,1,0,1,1,1,0];
        case 'W':
            return [0,1,1,1,0,1,1,0];
        case 'X':
            return [1,1,0,0,1,1,1,0];
        case 'Y':
            return [1,1,0,1,1,1,1,0];
        case 'Z':
            return [1,0,0,1,1,1,1,0];

        //numbers:
        case '1':
            return [0,0,1,0,0,0,1,0];
        case '2':
            return [0,0,1,0,1,0,1,0];
        case '3':
            return [0,0,1,1,0,0,1,0];
        case '4':
            return [0,0,1,1,0,1,1,0];
        case '5':
            return [0,0,1,0,0,1,1,0];
        case '6':
            return [0,0,1,1,1,0,1,0];
        case '7':
            return [0,0,1,1,1,1,1,0];
        case '8':
            return [0,0,1,0,1,1,1,0];
        case '9':
            return [0,0,0,1,1,0,1,0];
        case '0':
            return [0,0,0,1,1,1,1,0];
        

        //punctuations
        case ',':
            return [0,0,1,0,0,0,0,0];
        case ';':
            return [0,0,1,0,1,0,0,0];
        case ':':
            return [0,0,1,1,0,0,0,0];
        case '.':
            return [0,0,1,1,0,1,0,0];
        case '!':
            return [0,0,1,1,1,0,0,0];
        case '?':
            return [0,0,1,0,1,1,0,0];
        case '′': 						//prime symbol
            return [0,0,1,1,1,1,0,0];
        case '\'':
        	return [0,0,0,0,1,0,0,0];
        case '-':
            return [0,0,0,0,1,1,0,0];
        case ' ':
            return [0,0,0,0,0,0,0,0];
        case '&':
            return [1,1,1,0,1,1,1,0];
        case '(':
            return [0,0,0,1,1,0,1,1];
        case ')':
            return [0,0,1,0,0,1,1,1];
        case '\"':
            return [0,0,1,1,1,1,1,1];
        case '=':
            return [0,0,1,1,0,0,1,1];

        default:
            return false;
    }
}

export default convert;
