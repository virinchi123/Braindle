const convert = (props)=>{
    const letter= props[0];
    switch(letter){
        case 'a':
            return [1,0,0,0,0,0];
        case 'b':
            return [1,0,1,0,0,0];
        case 'c':
            return [1,1,0,0,0,0];
        case 'd':
            return [1,1,0,1,0,0];
        case 'e':
            return [1,0,0,1,0,0];
        case 'f':
            return [1,1,1,0,0,0];
        case 'g':
            return [1,1,1,1,0,0];
        case 'h':
            return [1,0,1,1,0,0];
        case 'i':
            return [0,1,1,0,0,0];
        case 'j':
            return [0,1,1,1,0,0];
        case 'k':
            return [1,0,0,0,1,0];
        case 'l':
            return [1,0,1,0,1,0];
        case 'm':
            return [1,1,0,0,1,0];
        case 'n':
            return [1,1,0,1,1,0];
        case 'o':
            return [1,0,0,1,1,0];
        case 'p':
            return [1,1,1,0,1,0];
        case 'q':
            return [1,1,1,1,1,0];
        case 'r':
            return [1,0,1,1,1,0];
        case 's':
            return [0,1,1,0,1,0];
        case 't':
            return [0,1,1,1,1,0];
        case 'u':
            return [1,0,0,0,1,1];
        case 'v':
            return [1,0,1,0,1,1];
        case 'w':
            return [0,1,1,1,0,1];
        case 'x':
            return [1,1,0,0,1,1];
        case 'y':
            return [1,1,0,1,1,1];
        case 'z':
            return [1,0,0,1,1,1];

        //numbers:
        case '#':
            return [0,1,0,1,1,1];
        case '1':
            return [1,0,0,0,0,0];
        case '2':
            return [1,0,1,0,0,0];
        case '3':
            return [1,1,0,0,0,0];
        case '4':
            return [1,1,0,1,0,0];
        case '5':
            return [1,0,0,1,0,0];
        case '6':
            return [1,1,1,0,0,0];
        case '7':
            return [1,1,1,1,0,0];
        case '8':
            return [1,0,1,1,0,0];
        case '9':
            return [0,1,1,0,0,0];
        case '0':
            return [0,1,1,1,0,0];

        case ' ':
            return [0,0,0,0,0,0];

        default:
            return false;
    }
}

export default convert;